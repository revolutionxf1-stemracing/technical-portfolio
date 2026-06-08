import React from 'react';
import { CoverPage } from './components/pages/CoverPage';
import { Page2, Page3 } from './components/pages/IntroPages';
import { Page4, Page5, Page6, Page7 } from './components/pages/DevPages';
import { Page8, Page9, Page10, Page11 } from './components/pages/FinalPages';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-6 md:py-10 gap-8 md:gap-10 px-3 md:px-6">
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
      <Page11 />
      
      <div className="text-gray-500 text-[10px] mt-4 mb-16 uppercase tracking-[0.2em]">
        RevolutionX Portfolio Tecnico | Espana 2025-2026 | 2do puesto Entry 24/25
      </div>
    </div>
  );
};

export default App;
