import React from 'react';
import { PageContainer, ImageFrame, Tag } from '../Shared';

const previewItems = [
  { title: 'Identidad de marca', src: '/company-assets/logo-gold.jpg', fit: 'contain' as const },
  { title: 'Uniformes', src: '/company-assets/polo-front.jpg', fit: 'contain' as const },
  { title: 'Página web', src: '/company-assets/website-home.jpg', fit: 'contain' as const },
  { title: 'Instagram', src: '/company-assets/instagram-profile.png', fit: 'contain' as const },
  { title: 'Crowdfounding', src: '/company-assets/crowdfunding.jpg', fit: 'contain' as const },
];

export const CoverPage: React.FC = () => {
  return (
    <PageContainer className="bg-black-900">
      <div className="absolute inset-0 z-0">
        <img
          src="/company-assets/car-sponsors.jpg"
          alt="RevolutionX"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(0,0,0,0.18),_rgba(0,0,0,0.78)_55%,_rgba(0,0,0,0.94)_100%)]" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-16">
        <div className="mt-8 max-w-[58%]">
          <div className="flex items-center gap-4 mb-5">
            <img src="/company-assets/logo-gold.jpg" alt="RevolutionX" className="w-12 h-12 rounded-full object-cover border border-white/40" />
            <span className="text-white text-4xl font-light tracking-wide">RevolutionX</span>
          </div>

          <h1 className="text-[72px] leading-[0.96] text-white font-thin tracking-[0.16em]">PORFOLIO</h1>
          <h2 className="text-[90px] leading-[0.9] text-white font-black tracking-[-0.05em] uppercase">de empresa</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            <Tag>Gestión de Proyectos</Tag>
            <Tag>Patrocinio y Marketing</Tag>
            <Tag>RevolutionX</Tag>
          </div>

          <p className="text-gray-400 text-base tracking-[0.24em] uppercase mt-5">
            STEM Racing · Temporada 2025/2026 · IES José Saramago
          </p>
          <p className="text-gold-400/90 text-sm tracking-[0.22em] uppercase mt-2 font-bold">
            “driven by purpose, defined by success”
          </p>
        </div>

        <div className="w-full border-t border-gray-700/70 pt-6">
          <div className="grid grid-cols-5 gap-5">
            {previewItems.map(({ title, src, fit }) => (
              <div key={title}>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.24em] mb-2">{title}</p>
                <ImageFrame src={src} alt={title} height="h-24" fit={fit} className="mb-0 bg-white/95" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
