import React from 'react';

export const PageContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`a3-page bg-black-800 relative text-xs flex flex-col shadow-2xl mb-8 border border-gray-800 ${className}`}>
    {children}
  </div>
);

export const Header: React.FC<{ title: string; subtitle?: string; pageNumber: number }> = ({ title, subtitle = "DESIGN & ENGINEERING PORTFOLIO", pageNumber }) => (
  <div className="w-full h-16 border-b border-gold-400 flex items-center justify-between px-8 bg-black-900 z-10 shrink-0">
    <div className="flex flex-col">
      <span className="text-gray-400 text-[10px] tracking-[0.2em] uppercase">{subtitle}</span>
      <h1 className="text-3xl font-bold text-white uppercase tracking-tighter">{title}</h1>
    </div>
    <div className="flex items-center gap-4">
      {/* Placeholder for RevolutionX Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-gold-400 flex items-center justify-center">
          <span className="text-gold-400 font-bold text-[10px]">RX</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-gold-400 font-bold text-lg leading-none">RevolutionX</span>
          <span className="text-gray-500 text-[8px] uppercase tracking-widest">STEM Racing</span>
        </div>
      </div>
    </div>
    {/* Page number marker for visual reference in PDF style */}
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
  <div className="w-full h-8 border-t border-gold-400/30 flex items-center justify-between px-8 bg-black-900 mt-auto shrink-0">
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-gold-400 transform -skew-x-12"></div>
      <span className="font-bold text-white uppercase">Page {pageNumber}</span>
    </div>
    <div className="text-gray-500 uppercase text-[10px] tracking-widest">RevolutionX Team</div>
  </div>
);

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`text-gold-400 font-bold uppercase tracking-wide text-sm mb-2 border-b border-gold-400/20 pb-1 ${className}`}>
    {children}
  </h3>
);

export const BodyText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-gray-300 text-[10px] leading-relaxed text-justify mb-3 ${className}`}>
    {children}
  </p>
);

export const PlaceholderImage: React.FC<{ label?: string; height?: string; className?: string }> = ({ label = "Image", height = "h-32", className = '' }) => (
  <div className={`w-full ${height} bg-black-700 border border-dashed border-gold-400/30 flex items-center justify-center mb-4 relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-gold-400/5 group-hover:bg-gold-400/10 transition-colors"></div>
    <span className="text-gold-400/50 text-xs font-mono uppercase text-center p-2">{label}</span>
    <img src={`https://picsum.photos/400/300?random=${Math.random()}`} alt="placeholder" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay grayscale" />
  </div>
);

export const Table: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="w-full mb-4 border border-gold-400/20">
    <div className="grid bg-gold-400/10 border-b border-gold-400/20" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
      {headers.map((h, i) => (
        <div key={i} className="p-1 text-[9px] font-bold text-gold-400 uppercase text-center border-r border-gold-400/20 last:border-r-0">{h}</div>
      ))}
    </div>
    {rows.map((row, rI) => (
      <div key={rI} className="grid border-b border-gold-400/10 last:border-b-0" style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
        {row.map((cell, cI) => (
          <div key={cI} className="p-1 text-[9px] text-gray-400 text-center border-r border-gold-400/10 last:border-r-0 flex items-center justify-center">
            {cell}
          </div>
        ))}
      </div>
    ))}
  </div>
);
