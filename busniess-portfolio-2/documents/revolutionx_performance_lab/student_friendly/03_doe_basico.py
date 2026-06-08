#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
DISENO DE EXPERIMENTOS (DOE) PARA STEM RACING

Analizamos que factores afectan mas al tiempo de carrera usando DOE factorial.
Usamos 4 factores con 2 niveles cada uno (2^4 = 16 experimentos).

Equipo: STEM Racing - RevolutionX | Curso: 2025-2026
"""

import itertools
from common_student import (CARPETA_RESULTADOS, preparar_carpetas, semilla, 
                            media, percentil, guardar_csv, guardar_json)

FACTORES = ["diametro_rueda", "precarga_rodamiento", "masa_coche", "alineacion_ruedas"]

def generar_experimentos():
    """Genera las 16 combinaciones de niveles (-1, +1)."""
    experimentos = []
    for niveles in itertools.product([-1, 1], repeat=len(FACTORES)):
        exp = {f: niveles[i] for i, f in enumerate(FACTORES)}
        experimentos.append(exp)
    return experimentos

def simular_tiempo(exp, idx):
    """Simula tiempo de carrera. Modelo: tiempo base + efectos de factores."""
    rng = semilla(3000 + idx)
    tiempo = 1.09
    tiempo -= 0.010 * exp["diametro_rueda"]
    tiempo += 0.006 * exp["precarga_rodamiento"]
    tiempo += 0.008 * exp["masa_coche"]
    tiempo += 0.011 * abs(exp["alineacion_ruedas"])
    tiempo -= 0.004 * exp["diametro_rueda"] * exp["masa_coche"]
    return tiempo + rng.gauss(0.0, 0.0015)

def calcular_efecto(datos, factor):
    """Efecto = Media(+1) - Media(-1)."""
    alto = [d["tiempo_s"] for d in datos if d[factor] > 0]
    bajo = [d["tiempo_s"] for d in datos if d[factor] < 0]
    return media(alto) - media(bajo)

def bootstrap_ic(datos, factor, n=500):
    """Intervalo de confianza 95% con Bootstrap."""
    rng, efectos = semilla(777), []
    for _ in range(n):
        muestra = [datos[rng.randrange(len(datos))] for _ in range(len(datos))]
        efectos.append(calcular_efecto(muestra, factor))
    return percentil(efectos, 2.5), percentil(efectos, 97.5)

def main():
    print("DOE STEM RACING\n")
    preparar_carpetas()
    
    experimentos = generar_experimentos()
    datos = []
    for i, exp in enumerate(experimentos):
        resultado = exp.copy()
        resultado["tiempo_s"] = round(simular_tiempo(exp, i), 5)
        datos.append(resultado)
    
    ranking = []
    for factor in FACTORES:
        efecto = calcular_efecto(datos, factor)
        ic_bajo, ic_alto = bootstrap_ic(datos, factor)
        ranking.append({
            "factor": factor, "efecto_s": round(efecto, 6),
            "efecto_abs": round(abs(efecto), 6),
            "ic95_bajo": round(ic_bajo, 6), "ic95_alto": round(ic_alto, 6),
            "recomendacion": "ALTO (+1)" if efecto < 0 else "BAJO (-1)"
        })
    ranking.sort(key=lambda r: r["efecto_abs"], reverse=True)
    
    print("RANKING DE FACTORES:")
    for r in ranking:
        print(f"  {r['factor']}: {r['efecto_s']*1000:.2f}ms -> {r['recomendacion']}")
    
    guardar_csv(CARPETA_RESULTADOS / "s03_doe_experimentos.csv", datos)
    guardar_csv(CARPETA_RESULTADOS / "s03_doe_ranking.csv", ranking)
    guardar_json(CARPETA_RESULTADOS / "s03_doe_resumen.json", {
        "test": "doe_basico", "equipo": "STEM Racing",
        "experimentos": len(datos), "top_factor": ranking[0]
    })
    print("\n[OK] DOE completado!")

if __name__ == "__main__":
    main()
