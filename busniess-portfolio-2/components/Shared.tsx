import React from 'react';

export const PageContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className="w-full overflow-x-auto pb-1">
    <div className={`a3-page min-w-[980px] md:min-w-0 relative text-xs flex flex-col shadow-[0_28px_60px_rgba(0,0,0,0.55)] border border-gold-400/20 bg-black-900/95 backdrop-blur-sm reveal-rise ${className}`}>
      <div className="page-ambient-grid"></div>
      <div className="page-noise"></div>
      {children}
    </div>
  </div>
);

export const Header: React.FC<{ title: string; subtitle?: string; pageNumber: number }> = ({
  title,
  subtitle = 'REVOLUTIONX · PORTFOLIO TECNICO · STEM RACING SPAIN 2025-2026',
  pageNumber,
}) => (
  <div className="w-full h-20 border-b border-gold-400/30 flex items-center justify-between px-8 bg-gradient-to-r from-black-950 via-black-900 to-black-950 z-10 shrink-0 relative">
    <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"></div>
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-[10px] tracking-[0.3em] uppercase font-medium">{subtitle}</span>
        <div className="h-px w-24 border-t border-dotted border-gold-400/60"></div>
      </div>
      <h1 className="text-[2.08rem] font-display font-semibold text-white uppercase tracking-[0.02em] leading-none">{title}</h1>
    </div>
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full border border-gold-400/80 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <span className="text-gold-300 font-display font-semibold text-[0.7rem] tracking-wider">R-X</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-gold-300 font-display font-semibold text-2xl leading-none tracking-wide">RevolutionX</span>
          <span className="text-gray-500 text-[8px] uppercase tracking-[0.3em]">STEM Racing</span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-gray-500 text-[9px] uppercase tracking-[0.24em] mb-0.5">Pagina</p>
        <p className="font-display text-gold-300 text-xl leading-none">{pageNumber.toString().padStart(2, '0')}</p>
      </div>
    </div>
    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none opacity-60">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="h-1 w-1 rounded-full bg-gold-400/45"></div>
      ))}
    </div>
  </div>
);

export const Footer: React.FC<{ pageNumber: number }> = ({ pageNumber }) => (
  <div className="w-full h-10 border-t border-gold-400/20 flex items-center justify-between px-8 bg-black-950/95 mt-auto shrink-0 relative">
    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
    <div className="flex items-center gap-2.5">
      <div className="w-5 h-3 bg-gradient-to-r from-gold-500 to-gold-300 transform -skew-x-[26deg]"></div>
      <span className="font-display text-gold-300 uppercase tracking-[0.16em] text-sm">Pagina {pageNumber}</span>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-gray-500 uppercase text-[9px] tracking-[0.26em]">RevolutionX Team · Spain 2026</span>
      <div className="flex gap-1.5 opacity-60">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-300/70"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gold-300/40"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gold-300/25"></span>
      </div>
    </div>
  </div>
);

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`text-gold-300 font-display font-semibold uppercase tracking-[0.14em] text-[0.8rem] mb-2 border-b border-gold-400/20 pb-1.5 ${className}`}>
    {children}
  </h3>
);

export const BodyText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-gray-300 text-[10px] leading-relaxed text-justify mb-3 tracking-[0.01em] ${className}`}>
    {children}
  </p>
);

export const PlaceholderImage: React.FC<{ label?: string; height?: string; className?: string }> = ({ label = 'Evidencia', height = 'h-32', className = '' }) => (
  <div className={`w-full ${height} border border-gold-400/25 mb-4 relative overflow-hidden group bg-gradient-to-br from-black-900 via-black-800 to-black-900 ${className}`}>
    <div className="absolute inset-0 opacity-35" style={{ backgroundImage: 'linear-gradient(to right, rgba(212,175,55,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.10) 1px, transparent 1px)', backgroundSize: '18px 18px' }}></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black-950/80 via-black-900/40 to-transparent"></div>
    <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold-300/40 via-gold-500/0 to-gold-300/40"></div>
    <div className="relative z-10 h-full w-full flex items-center justify-center px-3">
      <span className="text-gold-300/90 text-[9px] font-mono uppercase tracking-[0.2em] text-center px-3 py-1.5 border border-gold-400/25 bg-black-950/65 backdrop-blur-sm">
        {label}
      </span>
    </div>
  </div>
);

export const Table: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="w-full mb-4 border border-gold-400/20 rounded-sm overflow-hidden bg-black-950/50 backdrop-blur-[1px]">
    <div className="grid bg-gradient-to-r from-gold-400/15 via-gold-400/10 to-gold-400/15 border-b border-gold-400/25" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
      {headers.map((h, i) => (
        <div key={i} className="px-1.5 py-1.5 text-[8px] font-semibold text-gold-300 uppercase text-center tracking-[0.08em] border-r border-gold-400/20 last:border-r-0">{h}</div>
      ))}
    </div>
    {rows.map((row, rI) => (
      <div key={rI} className="grid border-b border-gold-400/10 last:border-b-0 odd:bg-black-900/35 even:bg-black-900/60" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
        {row.map((cell, cI) => (
          <div key={cI} className="px-1.5 py-1 text-[8px] text-gray-300 text-center border-r border-gold-400/10 last:border-r-0 flex items-center justify-center">
            {cell}
          </div>
        ))}
      </div>
    ))}
  </div>
);
