import React from 'react';
import { CoverPage } from './components/pages/CoverPage';
import { Page2, Page3 } from './components/pages/Pages_2_3';
import { Page4, Page5 } from './components/pages/Pages_4_5';
import { Page6, Page7 } from './components/pages/Pages_6_7';
import { Page8, Page9, Page10 } from './components/pages/Pages_8_10';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="fixed bottom-8 right-8 z-50 no-print">
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-black font-bold text-sm px-5 py-3 shadow-2xl transition-all hover:scale-105 active:scale-95"
        title="Exportar como PDF (Ctrl+P)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 6 2 18 2 18 9"/>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
          <rect x="6" y="14" width="12" height="8"/>
        </svg>
        Exportar PDF
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          html, body, #root, .portfolio-shell {
            background: #000 !important;
            margin: 0;
            padding: 0;
          }
          .portfolio-shell {
            display: block !important;
          }
          .a3-page {
            page-break-after: always;
            break-after: page;
            box-shadow: none !important;
            margin: 0 !important;
            border: none !important;
            border-radius: 0 !important;
            width: 420mm !important;
            min-height: 297mm !important;
            height: 297mm !important;
            background: #050505 !important;
            overflow: hidden !important;
          }
          .a3-page:last-of-type { page-break-after: avoid; }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
        @page { size: A3 landscape; margin: 0; }
      `}</style>

      <PrintButton />

      <div className="portfolio-shell w-full min-h-screen bg-black-900 flex flex-col items-center py-12 gap-12">
        <CoverPage />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />

        <div className="text-gray-700 text-xs mt-6 mb-16 no-print">
          RevolutionX STEM Racing — Porfolio de Empresa | Black &amp; Gold Edition
        </div>
      </div>
    </>
  );
};

export default App;
