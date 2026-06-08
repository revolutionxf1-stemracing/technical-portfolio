#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
================================================================================
LIBRERÍA DE FUNCIONES COMUNES PARA STEM RACING
================================================================================

Hola! Soy un estudiante de 4o de la ESO del itinerario tecnologico.
Este archivo tiene las funciones que usamos en TODOS los programas del equipo.
Asi no tenemos que repetir codigo y todo queda mas organizado.

QUE HAY AQUI?
- Funciones para calcular media, desviacion tipica y percentiles
- Funciones para guardar datos en CSV y JSON
- Configuracion de carpetas

Equipo: STEM Racing - RevolutionX
Curso: 2025-2026
"""

import csv
import json
import math
import random
from pathlib import Path

CARPETA_LAB = Path(__file__).resolve().parents[1]
CARPETA_RESULTADOS = CARPETA_LAB / "output_student"

def preparar_carpetas():
    """Crea la carpeta de resultados si no existe."""
    CARPETA_RESULTADOS.mkdir(parents=True, exist_ok=True)
    print(f"[OK] Carpeta de resultados lista: {CARPETA_RESULTADOS}")

def semilla(seed=2026):
    """Inicializa el generador de numeros aleatorios."""
    random.seed(seed)
    return random.Random(seed)

def media(valores):
    """Calcula la media aritmetica de una lista de numeros."""
    if not valores:
        return 0.0
    return sum(valores) / len(valores)

def desviacion_tipica(valores):
    """Calcula la desviacion tipica de una lista de numeros."""
    if len(valores) < 2:
        return 0.0
    mu = media(valores)
    suma_diferencias = sum((x - mu) ** 2 for x in valores)
    varianza = suma_diferencias / (len(valores) - 1)
    return math.sqrt(varianza)

def percentil(valores, p):
    """Calcula el percentil P de una lista de numeros."""
    if not valores:
        return 0.0
    datos_ordenados = sorted(valores)
    posicion = (len(datos_ordenados) - 1) * p / 100.0
    indice_bajo = int(posicion)
    indice_alto = min(indice_bajo + 1, len(datos_ordenados) - 1)
    fraccion = posicion - indice_bajo
    return datos_ordenados[indice_bajo] * (1 - fraccion) + datos_ordenados[indice_alto] * fraccion

def guardar_csv(ruta, filas):
    """Guarda una lista de diccionarios en un archivo CSV."""
    filas = list(filas)
    if not filas:
        ruta.write_text("", encoding="utf-8")
        return
    columnas = list(filas[0].keys())
    with ruta.open("w", newline="", encoding="utf-8") as archivo:
        escritor = csv.DictWriter(archivo, fieldnames=columnas)
        escritor.writeheader()
        escritor.writerows(filas)
    print(f"[GUARDADO] CSV: {ruta.name}")

def guardar_json(ruta, datos):
    """Guarda un diccionario en un archivo JSON."""
    contenido = json.dumps(datos, indent=2, ensure_ascii=False)
    ruta.write_text(contenido, encoding="utf-8")
    print(f"[GUARDADO] JSON: {ruta.name}")

if __name__ == "__main__":
    print("Libreria STEM Racing cargada correctamente!")
    datos_prueba = [1.05, 1.08, 1.02, 1.10, 1.07]
    print(f"Datos de prueba: {datos_prueba}")
    print(f"Media: {media(datos_prueba):.4f} segundos")
    print(f"Desviacion tipica: {desviacion_tipica(datos_prueba):.4f} segundos")
