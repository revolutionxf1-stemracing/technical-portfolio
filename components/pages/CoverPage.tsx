import React from 'react';
import { PageContainer } from '../Shared';

export const CoverPage: React.FC = () => {
  return (
    <PageContainer className="bg-black-900">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img src="https://picsum.photos/1200/800" alt="Car Background" className="w-full h-full object-cover opacity-40 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-16">
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white font-bold text-xl">RX</span>
            </div>
            <span className="text-white text-3xl font-light tracking-wide">RevolutionX</span>
          </div>
          <h1 className="text-6xl text-white font-thin mb-2 tracking-widest">DESIGN & ENGINEERING</h1>
          <h2 className="text-7xl text-white font-black tracking-tighter uppercase">Portfolio</h2>
        </div>

        {/* Car Model Overlay in center bottom */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-3/4 h-64">
          {/* Placeholder for the 3D Car Render */}
          <div className="w-full h-full flex items-end justify-center">
            <img src="https://picsum.photos/800/300" alt="F1 Car Render" className="w-full object-contain drop-shadow-2xl" />
          </div>
        </div>

        <div className="w-full flex justify-between items-end border-t border-gray-700 pt-8 mt-auto">
          {/* Logos Row */}
          <div className="flex gap-8 opacity-70 grayscale">
            {['Ford', 'Carsales', 'Bosch', 'Leap Australia', 'Zagame', 'Trinity', 'Objective 3D', 'Ansys'].map((logo, i) => (
              <div key={i} className="h-6 w-16 bg-white/20 flex items-center justify-center text-[8px] text-black-900 font-bold rounded">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};