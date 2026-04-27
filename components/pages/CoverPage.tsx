import React from 'react';
import { PageContainer } from '../Shared';

const sponsorGroups = [
  {
    title: 'Patrocinadores',
    items: [
      { file: 'titanes_sponsor.jpeg', label: 'Titanes', className: 'bg-white/95 border-white/10' },
      { file: 'postrecito-de-isabel_sponsor.jpeg', label: 'El Postrecito de Isabel', className: 'bg-white/95 border-white/10' },
      { file: 'moñita_sponsor.jpeg', label: 'Moñita', className: 'bg-white/95 border-white/10' },
      { file: 'panalon_sponsor.jpeg', label: 'Pañalon', className: 'bg-white/95 border-white/10' },
      { file: 'black-and-white_sponsor.jpeg', label: 'Black and White', className: 'bg-white/95 border-white/10' },
      { file: 'lorena_sponsor.jpeg', label: 'Lorena Solutions', className: 'bg-white/95 border-white/10' },
    ],
  },
  {
    title: 'Apoyo institucional',
    items: [
      { file: 'ayuntamiento_sponsor.png', label: 'Ayuntamiento de Majadahonda', className: 'bg-white/95 border-white/10' },
      { file: 'saramago_sponsor.jpeg', label: 'IES José Saramago Majadahonda', className: 'bg-white/95 border-white/10' },
      { file: 'stem_racing_sponsor.jpeg', label: 'STEM Racing', className: 'bg-black/80 border-gray-700' },
    ],
  },
];

export const CoverPage: React.FC = () => {
  return (
    <PageContainer className="bg-black-900">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/render_coche.png"
          alt="Car Background"
          className="w-full h-full object-cover opacity-30"
          onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-16">
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white font-bold text-2xl">RX</span>
            </div>
            <span className="text-white text-4xl font-light tracking-wide">RevolutionX</span>
          </div>
          <h1 className="text-7xl text-white font-thin mb-2 tracking-widest">DESIGN &amp; ENGINEERING</h1>
          <h2 className="text-8xl text-white font-black tracking-tighter uppercase">Portfolio</h2>
          <p className="text-gray-400 text-base tracking-widest uppercase mt-3">STEM Racing — Fase Regional 25/26 · Madrid</p>
          <p className="text-gold-400/80 text-sm tracking-widest uppercase mt-1 font-bold">Monoplaza: RX_NightBlade · Categoría Professional</p>
        </div>

        <div className="w-full border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-4">Sponsors integrados con los assets reales del portfolio</p>
          <div className="grid grid-cols-2 gap-6">
            {sponsorGroups.map(({ title, items }) => (
              <div key={title}>
                <p className="text-gray-600 text-[9px] uppercase tracking-[0.28em] mb-3">{title}</p>
                <div className="flex gap-3 items-center flex-wrap">
                  {items.map(({ file, label, className }) => (
                    <div
                      key={file}
                      className={`h-14 min-w-[112px] px-3 rounded-sm border flex items-center justify-center ${className}`}
                    >
                      <img
                        src={`/assets/${file}`}
                        alt={label}
                        title={label}
                        className="max-h-9 max-w-[110px] object-contain"
                        onError={(e) => {
                          const t = e.target as HTMLImageElement;
                          t.style.display = 'none';
                          const span = document.createElement('span');
                          span.className = 'text-gray-500 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap';
                          span.textContent = label;
                          t.parentElement?.appendChild(span);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
