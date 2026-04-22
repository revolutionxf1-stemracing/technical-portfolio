import React from 'react';
import { CoverPage } from './components/pages/CoverPage';
import { Page2, Page3 } from './components/pages/Pages_2_3';
import { Page4, Page5 } from './components/pages/Pages_4_5';
import { Page6, Page7 } from './components/pages/Pages_6_7';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black-900 flex flex-col items-center py-10 gap-10">
      <CoverPage />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />

      <div className="text-gray-600 text-xs mt-10 mb-20">
        RevolutionX STEM Racing — Portfolio Técnico | Black &amp; Gold Edition
      </div>
    </div>
  );
};

export default App;