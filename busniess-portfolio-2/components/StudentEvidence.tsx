import React from 'react';
import { Table } from './Shared';

import s01Json from '../documents/revolutionx_performance_lab/output_student/s01_carreras_summary.json';
import s02Json from '../documents/revolutionx_performance_lab/output_student/s02_opt_summary.json';
import s03Json from '../documents/revolutionx_performance_lab/output_student/s03_doe_summary.json';
import s04Json from '../documents/revolutionx_performance_lab/output_student/s04_tolerancias_summary.json';
import s05Json from '../documents/revolutionx_performance_lab/output_student/s05_weibull_summary.json';
import s06Json from '../documents/revolutionx_performance_lab/output_student/s06_telemetria_summary.json';

type S01 = { mean_time_s: number; p95_time_s: number; success_rate: number };
type S02 = { pareto_size: number; mejor_diseno: { drag_obj: number; score: number } };
type S03 = { top_factor: { factor: string; effect_s: number; recomendacion: string } };
type S04 = { pass_rate: number; ppm_defects: number };
type S05 = { b10_s: number; mission_reliability_110s: number };
type S06 = { crr: number; cda_m2: number };

export const studentEvidence = {
  s01: s01Json as S01,
  s02: s02Json as S02,
  s03: s03Json as S03,
  s04: s04Json as S04,
  s05: s05Json as S05,
  s06: s06Json as S06,
};

const num = (v: number, d = 3) => v.toFixed(d);
const pct = (v: number, d = 2) => `${(v * 100).toFixed(d)}%`;

export const StudentEvidencePanel: React.FC<{ title?: string; className?: string }> = ({
  title = 'Evidencia Conectada (Laboratorio Estudiante)',
  className = '',
}) => {
  const rows = [
    ['S01 Simulador', `${num(studentEvidence.s01.mean_time_s, 4)} s`, `P95 ${num(studentEvidence.s01.p95_time_s, 4)} s`],
    ['S02 Optimizacion', `Pareto ${studentEvidence.s02.pareto_size}`, `Drag ${num(studentEvidence.s02.mejor_diseno.drag_obj, 5)}`],
    ['S03 DOE', studentEvidence.s03.top_factor.factor, `${studentEvidence.s03.top_factor.recomendacion} (${num(studentEvidence.s03.top_factor.effect_s, 4)} s)`],
    ['S04 Tolerancias', `Pass ${pct(studentEvidence.s04.pass_rate, 2)}`, `PPM ${Math.round(studentEvidence.s04.ppm_defects)}`],
    ['S05 Fiabilidad', `B10 ${num(studentEvidence.s05.b10_s, 2)} s`, `R(110s) ${pct(studentEvidence.s05.mission_reliability_110s, 1)}`],
    ['S06 Telemetria', `Crr ${num(studentEvidence.s06.crr, 4)}`, `CdA ${num(studentEvidence.s06.cda_m2, 6)} m2`],
  ];

  return (
    <div className={`border border-gold-400/30 bg-black-950/55 p-2 ${className}`}>
      <h4 className="text-gold-300 font-bold text-[10px] uppercase tracking-[0.12em] mb-2">{title}</h4>
      <Table headers={['Prueba', 'KPI 1', 'KPI 2']} rows={rows} />
      <p className="text-[8px] text-gray-400 uppercase tracking-[0.08em]">
        Fuente: documents/revolutionx_performance_lab/output_student/*.json
      </p>
    </div>
  );
};
