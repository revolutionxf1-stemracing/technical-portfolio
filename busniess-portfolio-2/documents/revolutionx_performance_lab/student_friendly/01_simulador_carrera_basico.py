#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
================================================================================
SIMULADOR DE CARRERA STEM RACING - Monte Carlo
================================================================================

Hola! Soy un estudiante de 4o de la ESO del itinerario tecnologico.
Este programa simula MUCHAS carreras de nuestro coche de CO2 para
predecir como de rapido ira en la competicion.

PARAMETROS CALIBRADOS CON DATOS REALES:
- Tiempo de referencia mundial: ~1.087s en 20m
- Tiempos tipicos de competicion: 1.1s - 1.4s

FISICA DEL COCHE (Segunda Ley de Newton):
    m x a = F_empuje - F_drag - F_rozamiento

    Donde:
    - F_drag = 0.5 x rho x CdA x v^2  (resistencia del aire)
    - F_rozamiento = Crr x m x g      (rozamiento de las ruedas)

Equipo: STEM Racing - RevolutionX
Curso: 2025-2026
"""

import math
from common_student import (
    CARPETA_RESULTADOS, preparar_carpetas, semilla, media, percentil,
    guardar_csv, guardar_json
)

def simular_una_carrera(numero_simulacion):
    """Simula una carrera completa del coche de STEM Racing."""
    rng = semilla(numero_simulacion)
    
    # ========================================================================
    # PARAMETROS CALIBRADOS CON DATOS REALES DE STEM RACING
    # ========================================================================
    # Referencia: mejor tiempo mundial ~1.087s en 20m
    
    # Masa del coche (50-55g segun reglamento)
    masa = 0.052 * (1 + rng.gauss(0, 0.02))  # 52g +/- 2%
    
    # CdA = Coeficiente de arrastre x Area frontal
    # Valores tipicos para coches de competicion: 0.0025-0.0040 m^2
    cda = 0.0032 * (1 + rng.gauss(0, 0.08))  # Valor realista con 8% variacion
    
    # Crr = Coeficiente de rozamiento de ruedas
    # Valores tipicos: 0.015-0.025 para rodamientos de competicion
    crr = 0.020 * (1 + rng.gauss(0, 0.15))  # 0.020 +/- 15%
    
    # Empuje del cartucho de CO2 (8g CO2 tipico)
    # El empuje decae rapidamente - modelo exponencial
    # Empuje pico realista: 8-12N (no 18N como antes)
    empuje_pico = 10.0 * (1 + rng.gauss(0, 0.10))  # 10N +/- 10%
    
    # Tau = Constante de tiempo del empuje (como de rapido decae)
    # Valores tipicos: 0.08-0.15s
    tau = 0.10 * (1 + rng.gauss(0, 0.10))
    
    # Empuje residual (al final del cartucho)
    empuje_residual = 0.8 * (1 + rng.gauss(0, 0.20))
    
    # ========================================================================
    # CONSTANTES DEL ENTORNO
    # ========================================================================
    rho = 1.20       # Densidad del aire (kg/m^3)
    g = 9.80665      # Gravedad (m/s^2)
    pista = 20.0     # Longitud de la pista (metros)
    dt = 0.0005      # Paso de tiempo mas fino para precision
    
    # ========================================================================
    # ESTADO INICIAL
    # ========================================================================
    tiempo = 0.0
    posicion = 0.0
    velocidad = 0.0
    velocidad_maxima = 0.0
    
    # ========================================================================
    # BUCLE DE SIMULACION
    # ========================================================================
    while posicion < pista and tiempo < 5.0:
        
        # Empuje del CO2: decae exponencialmente
        f_empuje = empuje_pico * math.exp(-tiempo / max(0.05, tau)) + empuje_residual
        
        # Despues de ~0.5s el cartucho esta casi vacio
        if tiempo > 0.5:
            f_empuje = max(0.0, empuje_residual * math.exp(-(tiempo - 0.5) / 0.3))
        
        # Resistencia del aire (aumenta con v^2)
        f_drag = 0.5 * rho * cda * velocidad * velocidad
        
        # Rozamiento de las ruedas
        f_rozamiento = crr * masa * g
        
        # Segunda ley de Newton: F = m*a
        fuerza_neta = f_empuje - f_drag - f_rozamiento
        aceleracion = fuerza_neta / max(1e-6, masa)
        
        # Actualizar velocidad y posicion (metodo de Euler)
        velocidad = max(0.0, velocidad + aceleracion * dt)
        posicion = posicion + velocidad * dt
        tiempo = tiempo + dt
        
        # Guardar velocidad maxima
        if velocidad > velocidad_maxima:
            velocidad_maxima = velocidad
    
    return {
        "simulacion": numero_simulacion,
        "tiempo_s": round(tiempo, 4),
        "velocidad_max_mps": round(velocidad_maxima, 2),
        "velocidad_max_kmh": round(velocidad_maxima * 3.6, 1),
        "masa_kg": round(masa, 5),
        "cda_m2": round(cda, 6),
        "crr": round(crr, 5),
        "empuje_n": round(empuje_pico, 2),
        "exito": 1 if posicion >= pista else 0,
    }


def main():
    print("=" * 60)
    print("SIMULADOR DE CARRERAS STEM RACING")
    print("Metodo Monte Carlo - Parametros Calibrados")
    print("=" * 60)
    print()
    print("Referencia: Mejor tiempo mundial ~1.087s en 20m")
    print()
    
    preparar_carpetas()
    NUMERO_CARRERAS = 2500
    
    print(f"Simulando {NUMERO_CARRERAS} carreras...")
    resultados = []
    for i in range(NUMERO_CARRERAS):
        resultado = simular_una_carrera(2026 + i * 13)
        resultados.append(resultado)
        if (i + 1) % 500 == 0:
            print(f"   {i + 1} carreras completadas")
    
    tiempos = [r["tiempo_s"] for r in resultados]
    velocidades = [r["velocidad_max_kmh"] for r in resultados]
    
    tiempo_medio = media(tiempos)
    tiempo_p50 = percentil(tiempos, 50)
    tiempo_p5 = percentil(tiempos, 5)
    tiempo_p95 = percentil(tiempos, 95)
    vel_media = media(velocidades)
    tasa_exito = media([r["exito"] for r in resultados])
    
    print()
    print("RESULTADOS DEL ANALISIS")
    print("-" * 40)
    print(f"   Numero de simulaciones: {NUMERO_CARRERAS}")
    print(f"   Tasa de exito: {tasa_exito * 100:.1f}%")
    print()
    print("   TIEMPOS DE CARRERA (20m):")
    print(f"      Mejor caso (P5):   {tiempo_p5:.3f} s")
    print(f"      Tiempo medio:      {tiempo_medio:.3f} s")
    print(f"      Mediana (P50):     {tiempo_p50:.3f} s")
    print(f"      Peor caso (P95):   {tiempo_p95:.3f} s")
    print()
    print(f"   Velocidad maxima media: {vel_media:.1f} km/h")
    
    resumen = {
        "test": "simulador_carrera_calibrado",
        "equipo": "STEM Racing - RevolutionX",
        "referencia_mundial_s": 1.087,
        "numero_simulaciones": NUMERO_CARRERAS,
        "tiempo_medio_s": round(tiempo_medio, 4),
        "tiempo_p50_s": round(tiempo_p50, 4),
        "tiempo_p5_s": round(tiempo_p5, 4),
        "tiempo_p95_s": round(tiempo_p95, 4),
        "velocidad_max_media_kmh": round(vel_media, 1),
        "tasa_exito": round(tasa_exito, 4),
    }
    
    guardar_csv(CARPETA_RESULTADOS / "s01_carreras_todas.csv", resultados)
    guardar_json(CARPETA_RESULTADOS / "s01_carreras_resumen.json", resumen)
    print("\n[OK] SIMULACION COMPLETADA!")

if __name__ == "__main__":
    main()
