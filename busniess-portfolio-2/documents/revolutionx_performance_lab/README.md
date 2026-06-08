# RevolutionX Performance Lab (Python)

Suite avanzada de pruebas para generar evidencia tecnica de alto impacto en el portfolio STEM Racing.

## Objetivo
Convertir decisiones de diseno en resultados cuantitativos, repetibles y defendibles ante jurado.

## Pruebas incluidas
1. `01_vehicle_dynamics_montecarlo.py`
- Simulacion Monte Carlo de carrera con incertidumbres (masa, drag, friccion, empuje, alineacion).
- Entrega sensibilidad para priorizar mejoras con mayor ROI.

2. `02_aero_nsga2_optimizer.py`
- Optimizacion multiobjetivo NSGA-II (drag, estabilidad, fabricabilidad).
- Genera frente de Pareto + diseno campeon por score ponderado.

3. `03_doe_factor_screening.py`
- Diseno de experimentos (DOE) con efectos principales, interacciones y CI bootstrap.
- Permite justificar estadisticamente decisiones de setup/diseno.

4. `04_tolerance_stackup_montecarlo.py`
- Simulacion de tolerancias y riesgo de no conformidad.
- Reporta tasa de paso, PPM defectos, Cpk y factores criticos.

5. `05_bearing_reliability_weibull.py`
- Ajuste Weibull MLE para vida de rodamiento.
- Calcula B10, B50 y fiabilidad con bandas de confianza.

6. `06_telemetry_system_identification.py`
- Identificacion de parametros fisicos desde telemetria (`Crr`, `CdA`, curva de empuje).
- Cierra el bucle simulacion-pista.

## Ejecucion rapida
```bash
cd documents/revolutionx_performance_lab
python3 run_all.py
```

## Ejecucion individual
```bash
python3 tests/01_vehicle_dynamics_montecarlo.py --runs 12000 --processes 6
python3 tests/02_aero_nsga2_optimizer.py --population 140 --generations 120
python3 tests/03_doe_factor_screening.py --input data/doe_real_runs.csv --boot 2000
python3 tests/04_tolerance_stackup_montecarlo.py --runs 30000
python3 tests/05_bearing_reliability_weibull.py --input data/bearing_spin_samples.csv --boot 800
python3 tests/06_telemetry_system_identification.py --input data/telemetry_sample.csv
```

## Salidas
Se generan en `documents/revolutionx_performance_lab/output`:
- `*.json` resumen ejecutivo para portfolio.
- `*.csv` tablas y trazas para graficas.

## Como meterlo en el portfolio tecnico
- `Computer Aided Analysis`: usa `01`, `02`, `06`.
- `Testing`: usa `01`, `03`, `05`, `06`.
- `Evaluation`: usa rankings de sensibilidad, efectos DOE y Pareto.
- `CAM/CNC + Other Manufacturing`: usa `04` (capacidad de proceso y conformidad).

## Nota
Los modelos son avanzados y ya listos para demostrar metodologia. Para convertirlos en evidencia final de competicion, sustituye datasets sinteticos por datos reales del coche RevolutionX.
