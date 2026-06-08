#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
EJECUTAR TODOS LOS TESTS - STEM RACING

Este script ejecuta todos los analisis del laboratorio de rendimiento.
Solo tienes que ejecutar este archivo y se haran todos los tests!

Equipo: STEM Racing - RevolutionX | Curso: 2025-2026
"""

import subprocess
import sys
from pathlib import Path

CARPETA = Path(__file__).resolve().parent
SCRIPTS = [
    "01_simulador_carrera_basico.py",
    "02_optimizacion_aero_simple.py",
    "03_doe_basico.py",
    "04_tolerancias_basico.py",
    "05_fiabilidad_rodamientos_basico.py",
    "06_telemetria_basica.py",
]

def main():
    print("=" * 60)
    print("STEM RACING - LABORATORIO DE RENDIMIENTO")
    print("Ejecutando todos los analisis...")
    print("=" * 60)
    print()
    
    for i, script in enumerate(SCRIPTS, 1):
        print(f"[{i}/{len(SCRIPTS)}] Ejecutando {script}...")
        subprocess.run([sys.executable, script], cwd=CARPETA, check=True)
        print()
    
    print("=" * 60)
    print("[OK] TODOS LOS ANALISIS COMPLETADOS!")
    print(f"Resultados en: {CARPETA.parent}/output_student")
    print("=" * 60)

if __name__ == "__main__":
    main()
