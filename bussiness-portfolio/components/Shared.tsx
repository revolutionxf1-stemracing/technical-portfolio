import React from 'react';

export const PageContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`a3-page bg-black-800 relative text-sm flex flex-col shadow-[0_30px_90px_rgba(0,0,0,0.45)] mb-10 border border-gold-400/10 rounded-[10px] ${className}`}>
    {children}
  </div>
);

export const Header: React.FC<{ title: string; subtitle?: string; pageNumber: number }> = ({ title, subtitle = "PORFOLIO DE EMPRESA" }) => (
  <div className="w-full h-20 border-b border-gold-400/90 flex items-center justify-between px-10 bg-black-900 z-10 shrink-0">
    <div className="flex flex-col">
      <span className="text-gray-400 text-[12px] tracking-[0.22em] uppercase">{subtitle}</span>
      <h1 className="text-[38px] font-bold text-white uppercase tracking-[-0.04em] leading-none mt-1">{title}</h1>
    </div>
    <div className="flex items-center gap-3">
      <img src="/company-assets/logo-gold.jpg" alt="RevolutionX" className="w-10 h-10 rounded-full object-cover border border-gold-400/60" />
      <div className="flex flex-col items-end">
        <span className="text-gold-400 font-bold text-[22px] leading-none">RevolutionX</span>
        <span className="text-gray-500 text-[10px] uppercase tracking-[0.22em]">STEM Racing</span>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex space-x-20 opacity-20">
        <div className="h-2 w-[1px] bg-gold-400"></div>
        <div className="h-2 w-[1px] bg-gold-400"></div>
        <div className="h-2 w-[1px] bg-gold-400"></div>
      </div>
    </div>
  </div>
);

export const Footer: React.FC<{ pageNumber: number }> = ({ pageNumber }) => (
  <div className="w-full h-10 border-t border-gold-400/30 flex items-center justify-between px-10 bg-black-900 mt-auto shrink-0">
    <div className="flex items-center gap-3">
      <div className="w-4 h-4 bg-gold-400 transform -skew-x-12"></div>
      <span className="font-bold text-white uppercase text-[13px] tracking-wide">Page {pageNumber}</span>
    </div>
    <div className="text-gray-500 uppercase text-[11px] tracking-[0.22em]">RevolutionX Team</div>
  </div>
);

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`text-gold-400 font-bold uppercase tracking-[0.06em] text-[15px] mb-2 border-b border-gold-400/20 pb-1.5 ${className}`}>
    {children}
  </h3>
);

export const BodyText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-gray-300 text-[12px] leading-[1.52] text-justify mb-3 ${className}`}>
    {children}
  </p>
);

export const ImageFrame: React.FC<{ src: string; alt: string; height?: string; className?: string; fit?: 'cover' | 'contain' }> = ({
  src,
  alt,
  height = 'h-32',
  className = '',
  fit = 'cover',
}) => (
  <div className={`w-full ${height} bg-black-900 border border-gold-400/20 mb-3 relative overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  </div>
);

export const Tag: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-2 py-1 border border-gold-400/30 bg-black-900 text-[9px] font-bold uppercase tracking-[0.14em] text-gold-400 ${className}`}>
    {children}
  </span>
);

export const BulletList: React.FC<{ items: React.ReactNode[]; className?: string }> = ({ items, className = '' }) => (
  <ul className={`space-y-2 ${className}`}>
    {items.map((item, index) => (
      <li key={index} className="flex gap-2 text-[11px] leading-[1.45] text-gray-300">
        <span className="text-gold-400 font-bold">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const Table: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="w-full mb-4 border border-gold-400/20">
    <div className="grid bg-gold-400/10 border-b border-gold-400/20" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
      {headers.map((h, i) => (
        <div key={i} className="px-2 py-1.5 text-[11px] font-bold text-gold-400 uppercase text-center border-r border-gold-400/20 last:border-r-0 leading-tight">{h}</div>
      ))}
    </div>
    {rows.map((row, rI) => (
      <div key={rI} className="grid border-b border-gold-400/10 last:border-b-0" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
        {row.map((cell, cI) => (
          <div key={cI} className="px-2 py-1.5 text-[11px] text-gray-400 text-center border-r border-gold-400/10 last:border-r-0 flex items-center justify-center leading-tight">
            {cell}
          </div>
        ))}
      </div>
    ))}
  </div>
);
