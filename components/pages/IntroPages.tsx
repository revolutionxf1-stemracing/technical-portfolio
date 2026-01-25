import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';

export const Page2: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Objectives & General Research" pageNumber={2} />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 bg-black-800 p-6 border-r border-gold-400/20 flex flex-col gap-6">
          <div className="bg-black-900 border border-gold-400 p-4 relative">
            <h3 className="text-white font-bold uppercase mb-4 text-center border-b border-gray-700 pb-2">Welcome to our Journey</h3>
            <div className="space-y-2">
                <p className="text-gold-400 text-xs font-bold mb-2">TABLE OF CONTENTS</p>
                {[
                  "Pg. 2 - Research & Development",
                  "Pg. 3 - Research & Development",
                  "Pg. 4 - App of Computer Aided Analysis",
                  "Pg. 5 - Design Concepts",
                  "Pg. 6 - Design Concepts II",
                  "Pg. 7 - Design Concepts III",
                  "Pg. 8 - Testing Evaluation",
                  "Pg. 9 - 3D Modelling",
                  "Pg. 10 - CAM/CNC",
                  "Pg. 11 - Manufacturing"
                ].map((item, i) => (
                    <div key={i} className="text-[9px] text-gray-400 truncate">{item}</div>
                ))}
            </div>
          </div>
          
          <div>
            <div className="bg-gold-500 text-black-900 px-2 py-1 font-bold text-sm inline-block mb-2">INITIAL OBJECTIVES</div>
            <BodyText>
              Before beginning development, we established overarching objectives:
            </BodyText>
            <ul className="list-disc list-inside text-[9px] text-gray-300 space-y-1 mb-4">
                <li><strong className="text-gold-400">Race Performance:</strong> Achieve best track times.</li>
                <li><strong className="text-gold-400">Compliance:</strong> Comply with all regulations.</li>
                <li><strong className="text-gold-400">Durability:</strong> Endure all races without repair.</li>
            </ul>
            <PlaceholderImage label="Free Body Diagram" height="h-24" />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6 grid grid-cols-3 gap-6">
           <div className="col-span-1">
              <SectionTitle>Launch Efficiency</SectionTitle>
              <BodyText>The energy conserved from initial launch is directly correlated to the track times. We found that the canister only applies thrust for approx 1/3 of track length.</BodyText>
              
              <SectionTitle>Track Testing</SectionTitle>
              <BodyText>From testing force output of CO2 canisters, we found a 20% error range. Physical testing for times was deemed inconsistent. Instead, we tested individual factors.</BodyText>
              
              <SectionTitle>Mathematical Race Model</SectionTitle>
              <BodyText>To evaluate designs efficiently, we created a Python race model including friction, yaw stability, and aerodynamics.</BodyText>
              <PlaceholderImage label="Math Model Code" height="h-20" />
           </div>
           
           <div className="col-span-1">
              <SectionTitle>Refine Mode</SectionTitle>
              <BodyText>A refine mode allowed investigating single variables. This produced graphs of race times vs variable changes.</BodyText>
              <PlaceholderImage label="Race Model Output Graphs" height="h-32" />
              
              <SectionTitle>Key Findings</SectionTitle>
              <BodyText>The model allowed us to weight variables. For example, increased wheelbase drag negated stability benefits.</BodyText>
           </div>
           
           <div className="col-span-1">
              <SectionTitle>Key Performance Indicators</SectionTitle>
              <PlaceholderImage label="Pie Chart: KPIs" height="h-32" />
              
              <div className="bg-gold-600/20 p-2 border border-gold-400 mb-2">
                  <h4 className="text-gold-400 font-bold text-xs uppercase">Thrust Efficiency</h4>
              </div>
              <SectionTitle>Tipping Moment</SectionTitle>
              <BodyText>Tipping moment creates load on front wheels. We aim to align center of mass with thrust vector within 5mm vertically.</BodyText>
           </div>
        </div>
      </div>
      <Footer pageNumber={2} />
    </PageContainer>
  );
};

export const Page3: React.FC = () => {
    return (
      <PageContainer>
        <Header title="Objectives & General Research" pageNumber={3} />
        <div className="p-6 grid grid-cols-4 gap-6 h-full">
            <div className="col-span-1 border-r border-gray-800 pr-4">
                <SectionTitle>Inertia</SectionTitle>
                <BodyText>Inertia is resistance to change in velocity. Rotational inertia is quadratic to radius. 41.65% of performance is dictated by mass.</BodyText>
                
                <div className="bg-blue-900/20 border border-blue-500/30 p-2 mb-4">
                    <h4 className="text-blue-400 font-bold text-xs uppercase mb-2">Aerodynamic Efficiency</h4>
                    <SectionTitle className="text-blue-300 border-blue-900">Adverse Pressure Gradients</SectionTitle>
                    <div className="flex gap-2">
                        <div className="w-1/2"><BodyText>Regions of airflow recirculation creating drag.</BodyText></div>
                        <div className="w-1/2"><PlaceholderImage label="Diagram" height="h-16" /></div>
                    </div>
                </div>

                <SectionTitle>Wheel Wake</SectionTitle>
                <BodyText>Rotating surfaces pull airflow into high pressure regions.</BodyText>
                
                <SectionTitle>Magnus Effect</SectionTitle>
                <BodyText>Caused by deflection of air from counter-directional spin.</BodyText>
            </div>

            <div className="col-span-1 border-r border-gray-800 pr-4">
                <PlaceholderImage label="Magnus Effect Diagram" height="h-24" />
                
                <SectionTitle>Summary of Key Design Objectives</SectionTitle>
                <ul className="list-none text-[9px] text-gray-300 space-y-2 mb-4">
                    <li className="flex gap-2"><span className="text-gold-400 font-bold">»</span> <span><strong className="text-white">Car Mass:</strong> Close to 50g limit.</span></li>
                    <li className="flex gap-2"><span className="text-gold-400 font-bold">»</span> <span><strong className="text-white">Durability:</strong> Withstand 10 races.</span></li>
                    <li className="flex gap-2"><span className="text-gold-400 font-bold">»</span> <span><strong className="text-white">Aerodynamics:</strong> Reduce adverse pressure.</span></li>
                    <li className="flex gap-2"><span className="text-gold-400 font-bold">»</span> <span><strong className="text-white">Tipping:</strong> CoM within 5mm of thrust.</span></li>
                </ul>

                <SectionTitle>Bearing Research</SectionTitle>
                <BodyText>tested various bearing types and lubricants. Used a machine to spin to 12,000 RPM.</BodyText>
                <PlaceholderImage label="Bearing Rig" height="h-24" />
            </div>

            <div className="col-span-2 pl-2">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <SectionTitle>Burnishing Investigation</SectionTitle>
                        <BodyText>Hybrid ceramic bearings performed consistently better. 21.53% increase in spin time after burnishing.</BodyText>
                        <PlaceholderImage label="Graph: Burnishing Revs vs Time" height="h-32" />
                    </div>
                    <div>
                         <Table 
                            headers={["Lubricant", "Trial 1", "Trial 2", "Avg"]}
                            rows={[
                                ["Factory", "119.63", "116.74", "117.17"],
                                ["Light Oil", "27.58", "28.38", "27.84"],
                                ["Isopropyl", "112.51", "104.30", "106.28"],
                                ["Clean", "126.66", "119.38", "123.95"]
                            ]}
                         />
                         <BodyText>SMR73C-2OS #7 LD hybrid ceramic selected.</BodyText>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <SectionTitle>Lubrication & Seals</SectionTitle>
                        <BodyText>Removal of seals initially better, but contamination risk high.</BodyText>
                        <Table 
                            headers={["Condition", "Trial 1", "Avg"]}
                            rows={[
                                ["Seals", "119.63", "117.17"],
                                ["Removed", "114.73", "114.97"],
                                ["Dust", "33.50", "34.34"]
                            ]}
                         />
                    </div>
                    <div>
                        <SectionTitle>Application to Race Model</SectionTitle>
                        <BodyText>Derived bearing friction function applied to model.</BodyText>
                        <div className="p-2 border border-gray-700 bg-black-900 font-mono text-[8px] text-green-400">
                             F_f = (95000 / (t + 8.5)) ...
                        </div>
                        <SectionTitle className="mt-4">Moment of Inertia</SectionTitle>
                        <BodyText>Wheels must accelerate to 1400 rad/s. Minimizing MoI is key.</BodyText>
                    </div>
                </div>
            </div>
        </div>
        <Footer pageNumber={3} />
      </PageContainer>
    );
  };