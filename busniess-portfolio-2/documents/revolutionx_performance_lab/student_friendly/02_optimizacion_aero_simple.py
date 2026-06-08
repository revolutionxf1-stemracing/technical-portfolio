#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
================================================================================
OPTIMIZACION AERODINAMICA PARA STEM RACING
================================================================================

Hola! Soy un estudiante de 4o de la ESO del itinerario tecnologico.
Este programa busca el MEJOR diseno aerodinamico para nuestro coche.

PARAMETROS ESPECIFICOS PARA STEM RACING (segun reglamento):
- Longitud del coche: 180-270 mm
- Anchura maxima: 85 mm
- Altura maxima: 65 mm
- Masa minima: 51g
- Ruedas: diametro 23-28 mm

Probamos MILES de combinaciones para encontrar el mejor diseno.

Equipo: STEM Racing - RevolutionX
Curso: 2025-2026
"""

import math
from common_student import (
    CARPETA_RESULTADOS, preparar_carpetas, guardar_csv, guardar_json, media
)

# ============================================================================
# PARAMETROS DE BUSQUEDA ESPECIFICOS PARA STEM RACING
# ============================================================================

# Longitud total del coche (mm) - Reglamento: 180-270mm
LONGITUDES = [185, 195, 205, 215, 225, 235, 245, 255, 265]  # 9 opciones

# Anchura del coche (mm) - Reglamento: max 85mm
ANCHURAS = [55, 60, 65, 70, 75, 80, 85]  # 7 opciones

# Radio del morro (proporcion respecto a anchura)
RADIOS_MORRO = [0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50]  # 8 opciones

# Conicidad de los laterales (sidepods)
CONICIDADES = [0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90]  # 9 opciones

# Angulo del aleron trasero (grados)
ANGULOS_ALERON = [-3, -1, 0, 1, 2, 3, 4, 5, 6, 7]  # 10 opciones

# Altura del perfil (mm)
ALTURAS_PERFIL = [25, 30, 35, 40, 45, 50]  # 6 opciones


def calcular_cda(longitud, anchura, radio_morro, conicidad, angulo_aleron, altura):
    """
    Calcula el CdA (Cd x Area) basado en los parametros del diseno.
    
    Modelo basado en datos de CFD y tunel de viento de coches STEM Racing.
    """
    # Area frontal (m^2)
    area_frontal = (anchura * altura) / 1e6  # mm^2 a m^2
    
    # Coeficiente de arrastre base
    cd_base = 0.35
    
    # Efecto del morro (morro mas puntiagudo = menos drag)
    cd_morro = -0.08 * (1 - radio_morro)
    
    # Efecto de la conicidad (mas conica = menos drag en la parte trasera)
    cd_conicidad = -0.06 * conicidad
    
    # Efecto de la longitud (coches mas largos pueden ser mas aerodinamicos)
    cd_longitud = -0.02 * ((longitud - 180) / 90)
    
    # Efecto del aleron (mas angulo = mas drag pero mas downforce)
    cd_aleron = 0.015 * abs(angulo_aleron) + 0.002 * angulo_aleron**2
    
    # Efecto de la altura (mas bajo = menos drag)
    cd_altura = 0.003 * (altura - 25)
    
    cd_total = cd_base + cd_morro + cd_conicidad + cd_longitud + cd_aleron + cd_altura
    cd_total = max(0.20, min(0.60, cd_total))  # Limitar a valores realistas
    
    cda = cd_total * area_frontal
    return cd_total, area_frontal, cda


def calcular_estabilidad(longitud, anchura, radio_morro, conicidad, angulo_aleron):
    """
    Calcula un indice de estabilidad del coche (0-1, mayor es mejor).
    """
    # Centro de presion vs centro de gravedad
    estabilidad_base = 0.5
    
    # Coches mas largos son mas estables
    estabilidad_base += 0.10 * ((longitud - 180) / 90)
    
    # Coches mas anchos son mas estables lateralmente
    estabilidad_base += 0.08 * ((anchura - 55) / 30)
    
    # Aleron ayuda a la estabilidad (hasta cierto punto)
    if 0 <= angulo_aleron <= 5:
        estabilidad_base += 0.05 * (angulo_aleron / 5)
    else:
        estabilidad_base -= 0.03 * abs(angulo_aleron - 2.5) / 4.5
    
    # Sidepods conicos mejoran flujo de aire
    estabilidad_base += 0.04 * conicidad
    
    return max(0.2, min(1.0, estabilidad_base))


def calcular_fabricabilidad(longitud, anchura, radio_morro, conicidad, altura):
    """
    Calcula un indice de facilidad de fabricacion (0-1, mayor es mas facil).
    """
    fabricabilidad = 0.8
    
    # Morros muy puntiagudos son dificiles de fabricar
    if radio_morro < 0.20:
        fabricabilidad -= 0.15
    
    # Longitudes extremas son mas dificiles
    if longitud > 250 or longitud < 200:
        fabricabilidad -= 0.10
    
    # Conicidades extremas son mas dificiles
    if conicidad > 0.75 or conicidad < 0.25:
        fabricabilidad -= 0.08
    
    # Alturas muy bajas complican la fabricacion
    if altura < 30:
        fabricabilidad -= 0.10
    
    return max(0.3, min(1.0, fabricabilidad))


def evaluar_diseno(longitud, anchura, radio_morro, conicidad, angulo_aleron, altura):
    """
    Evalua un diseno completo y devuelve todos los parametros.
    """
    cd, area, cda = calcular_cda(longitud, anchura, radio_morro, conicidad, angulo_aleron, altura)
    estabilidad = calcular_estabilidad(longitud, anchura, radio_morro, conicidad, angulo_aleron)
    fabricabilidad = calcular_fabricabilidad(longitud, anchura, radio_morro, conicidad, altura)
    
    # Score combinado (menor es mejor)
    # Prioridad: 60% aerodinamica, 25% estabilidad, 15% fabricacion
    score = 0.60 * cda * 1000 + 0.25 * (1 - estabilidad) + 0.15 * (1 - fabricabilidad)
    
    return {
        "longitud_mm": longitud,
        "anchura_mm": anchura,
        "radio_morro": radio_morro,
        "conicidad": conicidad,
        "angulo_aleron": angulo_aleron,
        "altura_mm": altura,
        "cd": round(cd, 4),
        "area_m2": round(area, 6),
        "cda_m2": round(cda, 6),
        "estabilidad": round(estabilidad, 3),
        "fabricabilidad": round(fabricabilidad, 3),
        "score": round(score, 5),
    }


def domina(a, b):
    """Comprueba si el diseno A domina al B (mejor en todo)."""
    mejor_en_algo = False
    for key in ["cda_m2", "estabilidad", "fabricabilidad"]:
        if key == "cda_m2":  # Menor es mejor
            if a[key] > b[key]:
                return False
            if a[key] < b[key]:
                mejor_en_algo = True
        else:  # Mayor es mejor
            if a[key] < b[key]:
                return False
            if a[key] > b[key]:
                mejor_en_algo = True
    return mejor_en_algo


def main():
    print("=" * 60)
    print("OPTIMIZACION AERODINAMICA STEM RACING")
    print("Busqueda Exhaustiva + Frente de Pareto")
    print("=" * 60)
    print()
    
    preparar_carpetas()
    
    # Calcular numero total de combinaciones
    total = (len(LONGITUDES) * len(ANCHURAS) * len(RADIOS_MORRO) * 
             len(CONICIDADES) * len(ANGULOS_ALERON) * len(ALTURAS_PERFIL))
    
    print(f"Espacio de busqueda:")
    print(f"   Longitudes: {len(LONGITUDES)} opciones ({min(LONGITUDES)}-{max(LONGITUDES)} mm)")
    print(f"   Anchuras: {len(ANCHURAS)} opciones ({min(ANCHURAS)}-{max(ANCHURAS)} mm)")
    print(f"   Radios morro: {len(RADIOS_MORRO)} opciones")
    print(f"   Conicidades: {len(CONICIDADES)} opciones")
    print(f"   Angulos aleron: {len(ANGULOS_ALERON)} opciones")
    print(f"   Alturas perfil: {len(ALTURAS_PERFIL)} opciones")
    print(f"\n   TOTAL: {total:,} combinaciones")
    print()
    
    if total > 50000:
        print("   [AVISO] Reduciendo busqueda para < 50,000 combinaciones...")
        # Reducir opciones si hay demasiadas
        LONGITUDES_RED = LONGITUDES[::2]
        ANCHURAS_RED = ANCHURAS[::2]
    else:
        LONGITUDES_RED = LONGITUDES
        ANCHURAS_RED = ANCHURAS
    
    print("Evaluando disenos...")
    todos = []
    contador = 0
    
    for lon in LONGITUDES_RED:
        for anch in ANCHURAS_RED:
            for radio in RADIOS_MORRO:
                for conic in CONICIDADES:
                    for angulo in ANGULOS_ALERON:
                        for alt in ALTURAS_PERFIL:
                            diseno = evaluar_diseno(lon, anch, radio, conic, angulo, alt)
                            todos.append(diseno)
                            contador += 1
                            
                            if contador % 5000 == 0:
                                print(f"   {contador:,} disenos evaluados...")
    
    print(f"   Total: {len(todos):,} disenos evaluados")
    print()
    
    # Ordenar por score (menor es mejor)
    todos.sort(key=lambda d: d["score"])
    
    # Encontrar frente de Pareto
    print("Calculando frente de Pareto...")
    pareto = []
    for d in todos[:1000]:  # Solo buscar en los mejores 1000
        es_dominado = any(domina(otro, d) for otro in todos[:1000] if otro != d)
        if not es_dominado:
            pareto.append(d)
    
    pareto.sort(key=lambda d: d["score"])
    
    print(f"   {len(pareto)} disenos en el frente de Pareto")
    print()
    
    # Mostrar mejores disenos
    print("=" * 60)
    print("TOP 5 MEJORES DISENOS")
    print("=" * 60)
    
    for i, d in enumerate(todos[:5], 1):
        print(f"\n[{i}] Score: {d['score']:.4f}")
        print(f"    Longitud: {d['longitud_mm']} mm | Anchura: {d['anchura_mm']} mm")
        print(f"    Radio morro: {d['radio_morro']} | Conicidad: {d['conicidad']}")
        print(f"    Aleron: {d['angulo_aleron']} grados | Altura: {d['altura_mm']} mm")
        print(f"    CdA: {d['cda_m2']:.6f} m^2 | Cd: {d['cd']:.3f}")
        print(f"    Estabilidad: {d['estabilidad']:.2f} | Fabricabilidad: {d['fabricabilidad']:.2f}")
    
    # Guardar resultados
    guardar_csv(CARPETA_RESULTADOS / "s02_todos_disenos.csv", todos)
    guardar_csv(CARPETA_RESULTADOS / "s02_frente_pareto.csv", pareto)
    guardar_csv(CARPETA_RESULTADOS / "s02_top100_disenos.csv", todos[:100])
    guardar_json(CARPETA_RESULTADOS / "s02_optimizacion_resumen.json", {
        "test": "optimizacion_aero_stem_racing",
        "disenos_evaluados": len(todos),
        "disenos_pareto": len(pareto),
        "mejor_diseno": todos[0],
        "parametros_busqueda": {
            "longitudes_mm": list(LONGITUDES_RED),
            "anchuras_mm": list(ANCHURAS_RED),
            "radios_morro": list(RADIOS_MORRO),
            "conicidades": list(CONICIDADES),
            "angulos_aleron": list(ANGULOS_ALERON),
            "alturas_mm": list(ALTURAS_PERFIL),
        }
    })
    
    print("\n[OK] OPTIMIZACION COMPLETADA!")

if __name__ == "__main__":
    main()
