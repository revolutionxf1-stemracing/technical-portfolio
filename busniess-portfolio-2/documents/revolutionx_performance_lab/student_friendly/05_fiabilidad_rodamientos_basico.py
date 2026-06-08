#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
FIABILIDAD DE RODAMIENTOS - Analisis Weibull - STEM RACING

Analizamos cuanto duran los rodamientos para predecir fallos.
Usamos la distribucion Weibull que es estandar en ingenieria.

MODELO WEIBULL:
  R(t) = exp(-(t/lambda)^k)
  - k: parametro de forma (indica tipo de fallo)
  - lambda: parametro de escala (vida caracteristica)
  - B10: tiempo al que 10% ha fallado (90% sobrevive)

Equipo: STEM Racing - RevolutionX | Curso: 2025-2026
"""

import math
from common_student import (CARPETA_RESULTADOS, guardar_csv, guardar_json, 
                            media, preparar_carpetas, semilla)

def generar_datos_vida(n=180):
    """Simula datos de vida de rodamientos (tiempo hasta fallo)."""
    rng = semilla(2026)
    datos = []
    for i in range(n):
        base = 125.0 * ((-math.log(1 - max(1e-9, rng.random()))) ** (1 / 3.0))
        drift = 1.0 + 0.02 * math.sin(i / 20)
        if i % 40 == 0:
            drift *= 0.85
        datos.append(max(5.0, base * drift))
    return sorted(datos)

def ajustar_weibull(tiempos):
    """Estima parametros Weibull con regresion lineal."""
    n = len(tiempos)
    xs, ys = [], []
    
    for i, t in enumerate(tiempos, start=1):
        F = (i - 0.3) / (n + 0.4)
        F = min(max(F, 1e-6), 1 - 1e-6)
        xs.append(math.log(t))
        ys.append(math.log(-math.log(1 - F)))
    
    sx, sy = sum(xs), sum(ys)
    sxx = sum(x * x for x in xs)
    sxy = sum(x * y for x, y in zip(xs, ys))
    
    det = n * sxx - sx * sx
    b = (n * sxy - sx * sy) / det
    a = (sy - b * sx) / n
    
    k = b
    lam = math.exp(-a / k)
    return k, lam

def fiabilidad(t, k, lam):
    """Calcula R(t) = probabilidad de sobrevivir hasta tiempo t."""
    return math.exp(-((t / lam) ** k))

def main():
    print("FIABILIDAD DE RODAMIENTOS - STEM RACING\n")
    preparar_carpetas()
    
    tiempos = generar_datos_vida()
    k, lam = ajustar_weibull(tiempos)
    
    b10 = lam * ((-math.log(0.90)) ** (1 / k))
    b50 = lam * ((-math.log(0.50)) ** (1 / k))
    r_mision = fiabilidad(110.0, k, lam)
    
    print(f"RESULTADOS WEIBULL:")
    print(f"   Forma (k): {k:.3f}")
    print(f"   Escala (lambda): {lam:.1f} s")
    print(f"   B10 (90% sobrevive): {b10:.1f} s")
    print(f"   B50 (vida mediana): {b50:.1f} s")
    print(f"   Fiabilidad en carrera (110s): {r_mision*100:.1f}%")
    
    max_t = max(tiempos) * 1.1
    curva = [{"tiempo_s": max_t * i / 99, "fiabilidad": round(fiabilidad(max_t * i / 99, k, lam), 4)} 
             for i in range(100)]
    
    guardar_csv(CARPETA_RESULTADOS / "s05_weibull_curva.csv", curva)
    guardar_json(CARPETA_RESULTADOS / "s05_weibull_resumen.json", {
        "test": "fiabilidad_rodamientos", "muestras": len(tiempos),
        "k": round(k, 4), "lambda": round(lam, 2),
        "b10_s": round(b10, 2), "b50_s": round(b50, 2),
        "fiabilidad_mision": round(r_mision, 4)
    })
    print("\n[OK] Analisis completado!")

if __name__ == "__main__":
    main()
