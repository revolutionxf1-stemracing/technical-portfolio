import React from 'react';
import { CoverPage } from './components/pages/CoverPage';
import { Page2, Page3 } from './components/pages/IntroPages';
import { Page4, Page5, Page6, Page7 } from './components/pages/DevPages';
import { Page8, Page9, Page10, Page11 } from './components/pages/FinalPages';

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
      <Page8 />
      <Page9 />
      <Page10 />
      <Page11 />
      
      <div className="text-gray-600 text-xs mt-10 mb-20">
        Recreated Structure | Black & Gold Edition
      </div>
    </div>
  );
};

export default App;