# STEM Racing - Laboratorio de Rendimiento

## Bienvenido al codigo del equipo RevolutionX!

Este proyecto contiene **6 programas de Python** que usamos en el equipo para analizar y mejorar nuestro coche de CO2 para la competicion STEM Racing.

> **Nota:** Este codigo ha sido desarrollado por estudiantes de 4o de la ESO del itinerario tecnologico como parte del proyecto STEM Racing.

---

## Que hay en esta carpeta?

| Archivo | Descripcion |
|---------|-------------|
| `common_student.py` | Libreria con funciones comunes (media, desviacion, guardar datos...) |
| `01_simulador_carrera_basico.py` | Simula muchas carreras con Monte Carlo |
| `02_optimizacion_aero_simple.py` | Optimiza el diseno aerodinamico |
| `03_doe_basico.py` | Analiza que factores afectan mas al tiempo |
| `04_tolerancias_basico.py` | Control de calidad de fabricacion |
| `05_fiabilidad_rodamientos_basico.py` | Predice la vida de los rodamientos |
| `06_telemetria_basica.py` | Identifica parametros desde datos reales |
| `run_all_student.py` | Ejecuta todos los analisis de una vez |

---

## Como ejecutar los programas?

### Opcion 1: Ejecutar todo de una vez
```bash
cd documents/revolutionx_performance_lab/student_friendly
python3 run_all_student.py
```

### Opcion 2: Ejecutar un programa especifico
```bash
python3 01_simulador_carrera_basico.py
```

### Donde se guardan los resultados?
Los resultados se guardan en:
```
documents/revolutionx_performance_lab/output_student/
```

---

## Explicacion de cada programa

### 1. Simulador de Carrera (Monte Carlo)

**Archivo:** `01_simulador_carrera_basico.py`

**Que hace?**
Simula miles de carreras del coche con pequenas variaciones aleatorias. Asi podemos predecir que tiempo hara normalmente y cual seria el peor caso.

**Fisica del coche:**
```
m x a = F_empuje - F_drag - F_rozamiento
```

Donde:
- `F_drag = 0.5 x rho x CdA x v^2` (resistencia del aire)
- `F_rozamiento = Crr x m x g` (rozamiento de las ruedas)

**Por que es util?**
- Conocer el tiempo medio esperado
- Prepararse para el peor caso (percentil 95)
- Entender que parametros afectan mas

---

### 2. Optimizacion Aerodinamica

**Archivo:** `02_optimizacion_aero_simple.py`

**Que hace?**
Prueba muchas combinaciones de diseno y encuentra las mejores. Usamos el **Frente de Pareto** para ver los disenos que son optimos.

**Parametros que optimiza:**
- Radio del morro
- Conicidad de los laterales
- Angulo del aleron

**Objetivos (queremos minimizar):**
1. **Drag** - Resistencia del aire
2. **Estabilidad** - Que no se desvie
3. **Fabricacion** - Que sea facil de hacer

**Que es el Frente de Pareto?**
Son los disenos donde no puedes mejorar una cosa sin empeorar otra.

---

### 3. Diseno de Experimentos (DOE)

**Archivo:** `03_doe_basico.py`

**Que hace?**
Analiza que factores afectan mas al tiempo de carrera usando experimentos sistematicos.

**Metodo:**
- Cada factor tiene nivel ALTO (+1) y BAJO (-1)
- Probamos TODAS las combinaciones (2^4 = 16 experimentos)
- Calculamos: `Efecto = Media(+1) - Media(-1)`

**Factores analizados:**
- Diametro de rueda
- Precarga del rodamiento
- Masa del coche
- Alineacion de ruedas

**Por que es util?**
Nos dice CIENTIFICAMENTE donde invertir nuestro tiempo para mejorar el coche.

---

### 4. Analisis de Tolerancias

**Archivo:** `04_tolerancias_basico.py`

**Que hace?**
Simula la fabricacion de miles de piezas para ver cuantas cumplen las especificaciones. Calcula el **Cpk** (indice de capacidad).

**Formula Cpk:**
```
Cpk = min((mu-LSL)/(3*sigma), (USL-mu)/(3*sigma))
```

- **LSL**: Limite inferior de especificacion
- **USL**: Limite superior de especificacion
- **Cpk > 1.33**: Proceso capaz
- **Cpk < 1.33**: Hay que mejorar

**Especificaciones que controlamos:**
- Distancia entre ejes (190 +/- 0.7 mm)
- Holgura de la guia (0.45 +/- 0.25 mm)
- Masa del cuerpo (51.2 +/- 1.8 g)

---

### 5. Fiabilidad de Rodamientos

**Archivo:** `05_fiabilidad_rodamientos_basico.py`

**Que hace?**
Predice cuanto duraran los rodamientos usando la **distribucion Weibull**.

**Modelo Weibull:**
```
R(t) = exp(-(t/lambda)^k)
```

- **k**: Parametro de forma (tipo de fallo)
- **lambda**: Parametro de escala (vida caracteristica)
- **B10**: Tiempo al que el 10% ha fallado
- **B50**: Vida mediana

**Por que es util?**
Sabemos si los rodamientos aguantaran toda la carrera.

---

### 6. Analisis de Telemetria

**Archivo:** `06_telemetria_basica.py`

**Que hace?**
Identifica los parametros reales del coche (Crr y CdA) a partir de datos de telemetria.

**Metodo Coast-Down:**
Cuando el coche va sin empuje, la ecuacion es:
```
-a = k0 + k1 x v^2
```

De donde obtenemos:
- `Crr = k0/g` (coeficiente de rozamiento)
- `CdA = (2 x m x k1)/rho` (coeficiente de drag x area)

**Por que es util?**
Cierra el ciclo entre el modelo teorico y la realidad.

---

## Como usar esto para el Portfolio?

| Seccion del Portfolio | Scripts recomendados |
|-----------------------|---------------------|
| **CAA** (Computer Aided Analysis) | 01, 02, 06 |
| **Testing** | 01, 03, 05, 06 |
| **Evaluation** | 03 |
| **Manufacturing** | 04 |

---

## Ejemplo de resultados

Despues de ejecutar `run_all_student.py`, encontraras archivos como:

```
output_student/
  s01_carreras_todas.csv
  s01_carreras_resumen.json
  s02_todos_disenos.csv
  s02_frente_pareto.csv
  s03_doe_experimentos.csv
  s03_doe_ranking.csv
  s04_tolerancias_piezas.csv
  s04_tolerancias_cpk.csv
  s05_weibull_curva.csv
  s06_telemetria_traza.csv
  (y mas archivos JSON con resumenes)
```

---

## Consejos para estudiantes

1. **Lee los comentarios** - Cada linea de codigo esta explicada
2. **Experimenta** - Cambia los parametros y ve que pasa
3. **Documenta** - Guarda capturas de los resultados para el portfolio
4. **Pregunta** - Si algo no esta claro, pregunta al equipo!

---

## Requisitos

- Python 3.8 o superior
- No necesita librerias externas (solo Python estandar!)

---

## Equipo

**STEM Racing - RevolutionX**  
Curso 2025-2026

---

*"La ciencia no es solo saber, es tambien hacer"*
