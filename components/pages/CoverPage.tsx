import React from 'react';
import { PageContainer } from '../Shared';

// Patrocinadores: guarda cada imagen en public/assets/ con el nombre indicado
const sponsors = [
  { file: 'sponsor_titantes.png',              label: 'Titantes' },
  { file: 'sponsor_postrecito.png',            label: 'El Postrecito de Isabel' },
  { file: 'sponsor_monita.png',                label: 'Moñita' },
  { file: 'sponsor_panalon.png',               label: 'Pañalon' },
  { file: 'sponsor_coesegur.png',              label: 'Coesegur' },
  { file: 'sponsor_blackandwhite.png',         label: 'Black and White' },
  { file: 'sponsor_ayuntamiento.png',          label: 'Ayuntamiento de Majadahonda' },
  { file: 'sponsor_iessaramago.png',           label: 'IES José Saramago Majadahonda' },
];

export const CoverPage: React.FC = () => {
  return (
    <PageContainer className="bg-black-900">
      {/* Background: render_coche sin degradado */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/render_coche.png"
          alt="Car Background"
          className="w-full h-full object-cover opacity-30"
          onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-16">
        {/* Header: logo + título */}
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white font-bold text-xl">RX</span>
            </div>
            <span className="text-white text-3xl font-light tracking-wide">RevolutionX</span>
          </div>
          <h1 className="text-6xl text-white font-thin mb-2 tracking-widest">DESIGN &amp; ENGINEERING</h1>
          <h2 className="text-7xl text-white font-black tracking-tighter uppercase">Portfolio</h2>
          <p className="text-gray-400 text-sm tracking-widest uppercase mt-3">STEM Racing — Fase Regional 25/26 · Madrid</p>
          <p className="text-gold-400/80 text-xs tracking-widest uppercase mt-1 font-bold">Monoplaza: RX_NightBlade · Categoría Professional</p>
        </div>

        {/* Sponsors */}
        <div className="w-full border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-[9px] uppercase tracking-widest mb-4">Patrocinadores &amp; Colaboradores</p>
          <div className="flex gap-5 items-center flex-wrap">
            {sponsors.map(({ file, label }) => (
              <div key={file} className="h-10 flex items-center justify-center">
                <img
                  src={`/assets/${file}`}
                  alt={label}
                  title={label}
                  className="max-h-10 max-w-[90px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Si no existe la imagen, muestra el nombre como texto
                    const t = e.target as HTMLImageElement;
                    t.style.display = 'none';
                    const span = document.createElement('span');
                    span.className = 'text-gray-500 text-[9px] font-bold uppercase tracking-wide whitespace-nowrap';
                    span.textContent = label;
                    t.parentElement?.appendChild(span);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};