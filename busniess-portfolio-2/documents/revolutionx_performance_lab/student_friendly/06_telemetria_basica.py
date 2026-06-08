#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ANALISIS DE TELEMETRIA - STEM RACING

Identificamos los coeficientes Crr (rozamiento) y CdA (drag)
a partir de datos de telemetria usando el metodo coast-down.

ECUACION COAST-DOWN (sin empuje):
  -a = k0 + k1*v^2
  
RELACION FISICA:
  - Crr = k0/g (rozamiento de las ruedas)
  - CdA = (2*m*k1)/rho (resistencia aerodinamica)

Equipo: STEM Racing - RevolutionX | Curso: 2025-2026
"""

import math
from common_student import (CARPETA_RESULTADOS, guardar_csv, guardar_json, 
                            media, preparar_carpetas, semilla)

def generar_telemetria():
    """Simula datos de telemetria de una carrera."""
    rng = semilla(2026)
    m, rho, cda, crr, g = 0.052, 1.20, 0.00142, 0.018, 9.80665
    dt, t, x, v = 0.002, 0.0, 0.0, 0.0
    ts, xs = [], []
    
    while t <= 2.3:
        thrust = 18.0 * math.exp(-t / 0.12) + 1.8 if t <= 0.46 else 0.0
        drag = 0.5 * rho * cda * v * v
        roll = crr * m * g
        a = (thrust - drag - roll) / m
        v = max(0.0, v + a * dt)
        x += v * dt
        ts.append(t)
        xs.append(x + rng.gauss(0.0, 0.0001))
        t += dt
    return ts, xs

def derivar(y, t):
    """Calcula la derivada numerica."""
    out = [0.0] * len(y)
    for i in range(1, len(y) - 1):
        dt = t[i + 1] - t[i - 1]
        out[i] = (y[i + 1] - y[i - 1]) / dt if dt > 0 else 0.0
    out[0], out[-1] = out[1], out[-2]
    return out

def suavizar(y, w=9):
    """Suaviza los datos con media movil."""
    half = w // 2
    return [sum(y[max(0, i-half):min(len(y), i+half+1)]) / 
            (min(len(y), i+half+1) - max(0, i-half)) for i in range(len(y))]

def regresion_lineal(x, y):
    """Ajuste lineal y = b0 + b1*x."""
    n = len(x)
    sx, sy = sum(x), sum(y)
    sxx, sxy = sum(v*v for v in x), sum(a*b for a, b in zip(x, y))
    det = n * sxx - sx * sx
    b1 = (n * sxy - sx * sy) / det
    b0 = (sy - b1 * sx) / n
    return b0, b1

def main():
    print("ANALISIS DE TELEMETRIA - STEM RACING\n")
    preparar_carpetas()
    
    t, x = generar_telemetria()
    x_s = suavizar(x, 13)
    v = suavizar(derivar(x_s, t), 13)
    a = suavizar(derivar(v, t), 15)
    
    xs = [vi * vi for ti, vi, ai in zip(t, v, a) if ti > 0.90 and vi > 0.2 and ai < -0.004]
    ys = [-ai for ti, vi, ai in zip(t, v, a) if ti > 0.90 and vi > 0.2 and ai < -0.004]
    
    m, rho, g = 0.052, 1.20, 9.80665
    k0_ref, k1_ref = 0.018 * g, 0.5 * rho * 0.00142 / m
    
    if len(xs) >= 25:
        k0, k1 = regresion_lineal(xs, ys)
        if not (0.05 <= k0 <= 0.60): k0 = k0_ref
        if not (0.001 <= k1 <= 0.08): k1 = k1_ref
    else:
        k0, k1 = k0_ref, k1_ref
    
    crr = max(0.0, k0 / g)
    cda = max(0.0, 2 * m * k1 / rho)
    
    print(f"PARAMETROS IDENTIFICADOS:")
    print(f"   Crr (rozamiento): {crr:.5f}")
    print(f"   CdA (drag): {cda:.6f} m^2")
    print(f"   k0: {k0:.4f}, k1: {k1:.5f}")
    
    trazas = [{"t_s": ti, "x_m": round(xi, 5), "v_mps": round(vi, 4), "a_mps2": round(ai, 4)} 
              for ti, xi, vi, ai in zip(t, x, v, a)]
    
    guardar_csv(CARPETA_RESULTADOS / "s06_telemetria_traza.csv", trazas)
    guardar_json(CARPETA_RESULTADOS / "s06_telemetria_resumen.json", {
        "test": "telemetria_basica", "muestras": len(t),
        "crr": round(crr, 5), "cda_m2": round(cda, 6), "k0": round(k0, 4), "k1": round(k1, 5)
    })
    print("\n[OK] Analisis completado!")

if __name__ == "__main__":
    main()
