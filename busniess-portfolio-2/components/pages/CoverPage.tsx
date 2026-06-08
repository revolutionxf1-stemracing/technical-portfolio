import React from 'react';
import { PageContainer } from '../Shared';

export const CoverPage: React.FC = () => {
  const sponsors = ['Patrocinador Principal', 'Partner Tecnico CFD', 'Partner CAD/CAM', 'Fabricacion CNC', 'Impresion 3D', 'Centro Educativo', 'Mentoria Ingenieria', 'Metrologia'];

  return (
    <PageContainer className="bg-black-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(212,175,55,0.22),transparent_42%),radial-gradient(circle_at_82%_20%,rgba(239,68,68,0.16),transparent_40%),radial-gradient(circle_at_78%_86%,rgba(212,175,55,0.14),transparent_44%),linear-gradient(160deg,#020202,#080808_45%,#101010)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-60"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-12 md:p-16 reveal-fade">
        <div className="mt-4">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-11 h-11 rounded-full border border-gold-300/80 flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.18)]">
              <span className="text-gold-300 font-display text-[0.95rem] tracking-[0.18em]">R-X</span>
            </div>
            <span className="text-gray-100 text-4xl font-display font-medium tracking-wide">RevolutionX</span>
          </div>

          <h1 className="text-[3.05rem] md:text-[4.2rem] leading-[0.92] text-white font-display font-semibold tracking-[0.03em] uppercase">
            Portfolio Tecnico
          </h1>
          <h2 className="text-[2.2rem] md:text-[3.2rem] text-gold-300 font-black tracking-tight uppercase leading-[0.95]">
            STEM Racing Espana 2026
          </h2>
          <p className="mt-4 max-w-2xl text-[0.77rem] leading-relaxed uppercase tracking-[0.18em] text-gray-300/95">
            Documento alineado a reglamentos oficiales de competicion y normativa tecnica de la temporada 2025-2026
            vigente para eventos en Espana durante 2026.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 border border-red-400/40 bg-red-900/20 px-3 py-1.5">
            <span className="text-red-300 text-[9px] tracking-[0.14em] uppercase font-semibold">Logro previo</span>
            <span className="text-white text-[9px] tracking-[0.12em] uppercase">2do puesto Espana · Categoria Entry · Curso 24/25</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-[9px] uppercase tracking-[0.14em]">
          <div className="border border-gold-400/25 bg-black-950/55 p-4">
            <p className="text-gray-400">Categoria</p>
            <p className="text-white font-semibold mt-1">Portfolio tecnico</p>
            <p className="text-gold-300 mt-2">Scorecard: 180 puntos</p>
          </div>
          <div className="border border-gold-400/25 bg-black-950/55 p-4">
            <p className="text-gray-400">Clase objetivo</p>
            <p className="text-white font-semibold mt-1">Ruta Entry a Professional</p>
            <p className="text-gold-300 mt-2">10 paginas de contenido</p>
          </div>
          <div className="border border-gold-400/25 bg-black-950/55 p-4">
            <p className="text-gray-400">Entregables clave</p>
            <p className="text-white font-semibold mt-1">A3 + A4 + digital</p>
            <p className="text-gold-300 mt-2">Control de cumplimiento completo</p>
          </div>
        </div>

        <div className="w-full border-t border-gold-400/22 pt-6">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {sponsors.map((logo, i) => (
              <div
                key={i}
                className="h-8 border border-gold-400/15 bg-black-950/45 backdrop-blur-[1px] text-[8px] tracking-[0.1em] text-gray-300 uppercase font-semibold flex items-center justify-center"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[8px] text-gray-500 tracking-[0.18em] uppercase">
            <span>RevolutionX Team Portfolio</span>
            <span>Version de entrega: 09 Feb 2026</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-44 h-44 border border-gold-400/10 rounded-full"></div>
        <div className="absolute top-14 right-14 w-36 h-36 border border-gold-400/10 rounded-full"></div>
        <div className="absolute bottom-12 left-8 text-gold-300/65 text-[0.62rem] uppercase tracking-[0.28em] font-mono">
          Cover · no puntua
        </div>
      </div>
    </PageContainer>
  );
};
