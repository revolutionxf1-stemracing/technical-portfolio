#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ANALISIS DE TOLERANCIAS Y CALIDAD - STEM RACING

Simulamos la fabricacion de muchos coches para ver cuantos
cumplen las especificaciones. Calculamos el Cpk para medir
la capacidad del proceso.

FORMULA Cpk = min((mu-LSL)/(3*sigma), (USL-mu)/(3*sigma))
  - LSL: Limite inferior de especificacion
  - USL: Limite superior de especificacion
  - Cpk > 1.33 = proceso capaz

Equipo: STEM Racing - RevolutionX | Curso: 2025-2026
"""

from common_student import (CARPETA_RESULTADOS, desviacion_tipica, guardar_csv, 
                            guardar_json, media, percentil, preparar_carpetas, semilla)

ESPECIFICACIONES = {
    "distancia_ejes_mm": {"nom": 190.0, "sigma": 0.16, "lsl": 189.3, "usl": 190.7},
    "holgura_guia_mm": {"nom": 0.45, "sigma": 0.07, "lsl": 0.20, "usl": 0.75},
    "masa_cuerpo_g": {"nom": 51.2, "sigma": 0.50, "lsl": 50.0, "usl": 53.0},
}

def calcular_cpk(valores, lsl, usl):
    """Calcula el indice de capacidad Cpk."""
    mu = media(valores)
    s = desviacion_tipica(valores)
    if s == 0:
        return 999.0
    return min((mu - lsl) / (3 * s), (usl - mu) / (3 * s))

def fabricar_pieza(seed):
    """Simula la fabricacion de una pieza con variabilidad."""
    rng = semilla(seed)
    error_setup = rng.gauss(0.0, 0.04)
    
    pieza = {}
    fallos = 0
    for nombre, spec in ESPECIFICACIONES.items():
        valor = spec["nom"] + rng.gauss(0.0, spec["sigma"]) + 0.2 * error_setup
        pieza[nombre] = round(valor, 4)
        if valor < spec["lsl"] or valor > spec["usl"]:
            fallos += 1
    
    pieza["cumple"] = 1 if fallos == 0 else 0
    pieza["num_fallos"] = fallos
    return pieza

def main():
    print("ANALISIS DE TOLERANCIAS STEM RACING\n")
    preparar_carpetas()
    
    N_PIEZAS = 12000
    print(f"Simulando {N_PIEZAS} piezas fabricadas...")
    piezas = [fabricar_pieza(5000 + i * 11) for i in range(N_PIEZAS)]
    
    tasa_ok = media([p["cumple"] for p in piezas])
    ppm_defectos = (1 - tasa_ok) * 1_000_000
    
    capacidades = []
    for nombre, spec in ESPECIFICACIONES.items():
        valores = [p[nombre] for p in piezas]
        cpk = calcular_cpk(valores, spec["lsl"], spec["usl"])
        capacidades.append({
            "especificacion": nombre, "media": round(media(valores), 4),
            "std": round(desviacion_tipica(valores), 4), "cpk": round(cpk, 3),
            "estado": "Capaz" if cpk >= 1.33 else "Revisar"
        })
    
    print(f"\nRESULTADOS:")
    print(f"   Tasa de cumplimiento: {tasa_ok*100:.2f}%")
    print(f"   Defectos por millon (PPM): {ppm_defectos:.0f}")
    print(f"\nCAPACIDAD (Cpk):")
    for c in capacidades:
        print(f"   {c['especificacion']}: Cpk={c['cpk']} [{c['estado']}]")
    
    guardar_csv(CARPETA_RESULTADOS / "s04_tolerancias_piezas.csv", piezas)
    guardar_csv(CARPETA_RESULTADOS / "s04_tolerancias_cpk.csv", capacidades)
    guardar_json(CARPETA_RESULTADOS / "s04_tolerancias_resumen.json", {
        "test": "tolerancias_basico", "piezas": N_PIEZAS,
        "tasa_ok": round(tasa_ok, 4), "ppm_defectos": round(ppm_defectos, 1)
    })
    print("\n[OK] Analisis completado!")

if __name__ == "__main__":
    main()
