import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';

export const Page4: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Wheel Development" pageNumber={4} />
      <div className="p-6 grid grid-cols-4 gap-6 h-full">
        <div className="col-span-1">
            <SectionTitle>Wheel Radius & Thickness</SectionTitle>
            <BodyText>Mass distribution determines moment of inertia. We investigated effects using Fusion 360.</BodyText>
            <PlaceholderImage label="Graph: Inertia vs Diameter" height="h-32" />
            
            <SectionTitle>Yield Strength</SectionTitle>
            <BodyText>Limit deformation to elastic region. Peak stress 60% of yield at 50N.</BodyText>
            
            <SectionTitle>Deformation</SectionTitle>
            <BodyText>Rolling resistance is due to deformation. Stiff wheels are a key goal.</BodyText>
        </div>
        
        <div className="col-span-1">
            <SectionTitle>Track Testing</SectionTitle>
            <BodyText>Trade-off between low MoI and stiffness. 1.28g wheels outperformed 0.80g wheels due to stiffness.</BodyText>
            <Table headers={["Type", "Time"]} rows={[["Flexible", "1.185"], ["Rigid", "1.182"]]} />
            
            <SectionTitle>Summary of Objectives</SectionTitle>
            <ul className="list-disc list-inside text-[9px] text-gray-400">
                <li>Durability (60% Yield)</li>
                <li>Compliance</li>
                <li>Stiffness (&lt;0.25mm)</li>
                <li>Low Inertia</li>
            </ul>
            
            <SectionTitle>Material Selection</SectionTitle>
            <BodyText>Compared Nylon 12, PEEK, Accura. Selected Ketron PEEK 1000.</BodyText>
        </div>
        
        <div className="col-span-1">
            <Table headers={["Material", "Tensile", "Density"]} rows={[["Nylon 12", "46", "1.01"], ["PEEK", "110", "1.31"]]} />
            
            <div className="bg-gold-900/20 border-t-2 border-gold-400 pt-2">
                <SectionTitle>Designs & Evaluations</SectionTitle>
                
                <h4 className="text-white font-bold text-[10px] mt-2">5 Hole Design</h4>
                <div className="flex gap-2 mb-2">
                    <PlaceholderImage className="w-12 h-12 flex-shrink-0" height="h-12" label="5 Hole" />
                    <div className="text-[8px] text-gray-400">
                        <p>Stress: 32.42 MPa</p>
                        <p>MoI: 168.86 gmm2</p>
                    </div>
                </div>

                <h4 className="text-white font-bold text-[10px] mt-2">3 Spoke Design</h4>
                 <div className="flex gap-2 mb-2">
                    <PlaceholderImage className="w-12 h-12 flex-shrink-0" height="h-12" label="3 Spoke" />
                    <div className="text-[8px] text-gray-400">
                        <p>Stress: 123.7 MPa</p>
                        <p>Failed criteria.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-1">
             <BodyText>Rib running along inside was added to 3-spoke.</BodyText>
             
             <SectionTitle>5 Spoke Design</SectionTitle>
             <PlaceholderImage label="5 Spoke FEA" height="h-24" />
             <BodyText>Stress: 57.02 MPa. MoI: 156.85. Best balance.</BodyText>
             
             <SectionTitle>Topological Optimisation</SectionTitle>
             <PlaceholderImage label="Topo Opt" height="h-24" />
             <BodyText>Irregular shape impossible to machine.</BodyText>
             
             <div className="mt-4 bg-gold-400 text-black-900 p-2 font-bold text-center uppercase text-xs">
                 Final Wheel Selection
             </div>
             <BodyText className="mt-2">Selected 5 spoke design. Met all criteria.</BodyText>
        </div>
      </div>
      <Footer pageNumber={4} />
    </PageContainer>
  );
};

export const Page5: React.FC = () => {
    return (
      <PageContainer>
        <Header title="Car Development" pageNumber={5} />
        <div className="p-6 grid grid-cols-3 gap-6 h-full">
            <div className="col-span-1">
                <SectionTitle>Prior Development & Testing</SectionTitle>
                <BodyText>Viewed World Finals as continuation. Used ANSYS Fluent. Reproducibility between software confirmed.</BodyText>
                <div className="flex justify-between text-[9px] text-gold-400 font-mono mb-2">
                    <span>Fluent: 0.226N</span>
                    <span>Discovery: 0.211N</span>
                </div>
                
                <SectionTitle>National Finals Car</SectionTitle>
                <BodyText>Analysis of previous car provided insight. Confirmed accuracy of CFD to physical testing.</BodyText>
                <PlaceholderImage label="Wind Tunnel Test" height="h-20" />
                <BodyText>Physical: 0.19N. CFD: 0.21N.</BodyText>
                
                <SectionTitle>Design Evaluation</SectionTitle>
                <BodyText>Convex-concave nosecone effective. Large fillet reduced effectiveness.</BodyText>
                
                <div className="mt-4">
                    <span className="bg-green-600 text-white px-1 text-[9px] font-bold">DESIGN PROCESS</span>
                    <BodyText className="mt-1">Individual development labelled A, B, C, D. Combined later.</BodyText>
                </div>

                <div className="mt-4">
                     <span className="bg-cyan-500 text-black px-1 text-[9px] font-bold">PROTOTYPE A</span>
                     <PlaceholderImage label="Proto A" height="h-24" />
                </div>
            </div>

            <div className="col-span-1">
                 <SectionTitle>Concept Aim</SectionTitle>
                 <BodyText>Features convex-concave features. Redirects air to top of side components.</BodyText>
                 <PlaceholderImage label="Flow Analysis A" height="h-32" />
                 
                 <div className="flex gap-2">
                     <PlaceholderImage label="Pressure Map" height="h-20" className="flex-1" />
                     <PlaceholderImage label="Velocity" height="h-20" className="flex-1" />
                 </div>
                 
                 <SectionTitle>Design Evaluation</SectionTitle>
                 <BodyText>Open channel resulted in additional drag. Front wing support weak.</BodyText>
                 
                 <SectionTitle>Improvement Actions</SectionTitle>
                 <BodyText>Create physical barrier between front wheels and central airflow.</BodyText>
            </div>

            <div className="col-span-1">
                 <div className="mt-2">
                     <span className="bg-cyan-500 text-black px-1 text-[9px] font-bold">PROTOTYPE B</span>
                     <PlaceholderImage label="Proto B" height="h-24" />
                 </div>
                 
                 <SectionTitle>Concept Aim</SectionTitle>
                 <BodyText>Gradually curved streamlined body shape. Unifies components.</BodyText>
                 
                 <SectionTitle>Design Analysis</SectionTitle>
                 <BodyText>Drag: 0.3088N. Lift: -0.0611N.</BodyText>
                 
                 <div className="flex gap-2">
                     <PlaceholderImage label="Analysis B1" height="h-20" className="flex-1" />
                     <PlaceholderImage label="Analysis B2" height="h-20" className="flex-1" />
                 </div>
                 
                 <SectionTitle>Design Evaluation</SectionTitle>
                 <BodyText>Even pressure distribution achieved. Side pods caused rollover.</BodyText>

                 <div className="mt-8">
                     <span className="bg-cyan-500 text-black px-1 text-[9px] font-bold">PROTOTYPE C</span>
                     <PlaceholderImage label="Proto C" height="h-24" />
                 </div>
            </div>
        </div>
        <Footer pageNumber={5} />
      </PageContainer>
    );
};

export const Page6: React.FC = () => {
    return (
        <PageContainer>
            <Header title="Car Development" pageNumber={6} />
            <div className="p-6 grid grid-cols-3 gap-6 h-full">
                <div className="col-span-1">
                     <SectionTitle>Concept Aim</SectionTitle>
                     <BodyText>Body shaped to cover side of front wheels. Re-energising airflow.</BodyText>
                     
                     <SectionTitle>Analysis</SectionTitle>
                     <BodyText>Drag: 0.2931 N. Lift: -0.1443 N.</BodyText>
                     
                     <div className="flex gap-2">
                         <PlaceholderImage label="Proto C Iso" height="h-24" className="w-1/2" />
                         <PlaceholderImage label="Proto C Curv" height="h-24" className="w-1/2" />
                     </div>
                     
                     <SectionTitle>Evaluation</SectionTitle>
                     <BodyText>Side pod inlet proved ineffective. Increased pressure on nosecone.</BodyText>
                     
                     <SectionTitle>Improvement Actions</SectionTitle>
                     <BodyText>Reduce height of nosecone. Remove inlets.</BodyText>
                     
                     <div className="mt-4">
                         <span className="bg-cyan-500 text-black px-1 text-[9px] font-bold">PROTOTYPE D</span>
                         <PlaceholderImage label="Proto D" height="h-24" />
                     </div>
                </div>

                <div className="col-span-1">
                     <SectionTitle>Idea</SectionTitle>
                     <BodyText>Composite body shape. Concave centre. Directs outboard.</BodyText>
                     
                     <SectionTitle>Analysis</SectionTitle>
                     <BodyText>Drag: 0.2868 N. Best so far.</BodyText>
                     
                     <div className="flex gap-2">
                         <PlaceholderImage label="Proto D Iso" height="h-24" className="w-1/2" />
                         <PlaceholderImage label="Proto D Pressure" height="h-24" className="w-1/2" />
                     </div>
                     
                     <div className="bg-blue-900/40 p-2 mt-4 border border-blue-500">
                         <h4 className="text-white text-[10px] font-bold uppercase">Combined Prototype</h4>
                         <PlaceholderImage label="Combined" height="h-16" />
                         <BodyText>Combined features A, B, C, D. Convex-concave nosecone + channels.</BodyText>
                     </div>

                     <div className="mt-4 bg-green-600 text-white px-2 py-1 font-bold text-xs">ITERATIVE COMPONENT DEVELOPMENT</div>
                     <SectionTitle className="mt-2 text-green-400 border-green-800">Front Wing</SectionTitle>
                     <BodyText>Twisted front wing proposed to align with airflow.</BodyText>
                </div>

                <div className="col-span-1">
                     <SectionTitle>Swept Endplate</SectionTitle>
                     <BodyText>Prevent rollover between pressure regions. Increases efficiency.</BodyText>
                     <PlaceholderImage label="Endplate CFD" height="h-24" />
                     
                     <SectionTitle>Vortex Generators</SectionTitle>
                     <BodyText>Creates vortex to retain airflow adhesion. Found ineffective for drag reduction.</BodyText>
                     
                     <Table 
                        headers={["Design", "Size", "Drag [N]", "Offset"]}
                        rows={[
                            ["1", "Large", "0.021", "+0.11"],
                            ["2", "Medium", "0.022", "+0.04"],
                            ["3", "Small", "0.015", "+0.05"]
                        ]}
                     />
                     
                     <SectionTitle>Evaluation</SectionTitle>
                     <BodyText>Increase in drag. Decided against implementation.</BodyText>
                </div>
            </div>
            <Footer pageNumber={6} />
        </PageContainer>
    )
}

export const Page7: React.FC = () => {
    return (
        <PageContainer>
            <Header title="Car Development" pageNumber={7} />
            <div className="p-6 grid grid-cols-4 gap-6 h-full">
                <div className="col-span-1">
                    <SectionTitle>Multi-Element Wings</SectionTitle>
                    <BodyText>Classified front wing + additional element underneath found optimal.</BodyText>
                    
                    <div className="my-4 bg-cyan-900/20 p-2 border-l-2 border-cyan-500">
                        <h4 className="text-cyan-400 font-bold text-[10px]">SIDE PODS</h4>
                    </div>
                    
                    <SectionTitle>Flat Side Pods</SectionTitle>
                    <BodyText>Extensively tested double element.</BodyText>
                    
                    <PlaceholderImage label="Sidepod CFD" height="h-24" />
                    
                    <SectionTitle>Tapered Side Pods</SectionTitle>
                    <BodyText>Redirect airflow around rear wheel.</BodyText>
                    <PlaceholderImage label="Tapered CFD" height="h-24" />
                </div>

                <div className="col-span-1">
                     <Table headers={["Design", "Drag", "Lift"]} rows={[["Flat", "0.2111", "-0.1"], ["Indented", "0.2178", "-0.1"], ["Tapered", "0.2149", "-0.14"]]} />
                     
                     <SectionTitle>Evaluation</SectionTitle>
                     <BodyText>Tapered effective but increased total drag. Flat chosen for manufacturability.</BodyText>
                     
                     <SectionTitle>Side Pod Plates</SectionTitle>
                     <BodyText>Physical barrier to prevent rollover.</BodyText>
                     <div className="flex gap-1">
                        <PlaceholderImage label="Plate 1" height="h-16" className="w-1/2" />
                        <PlaceholderImage label="Plate 2" height="h-16" className="w-1/2" />
                     </div>
                </div>

                <div className="col-span-1">
                     <SectionTitle>Side Pod Bargeboard</SectionTitle>
                     <BodyText>Turning vane implemented. Reduced drag by 0.6%.</BodyText>
                     <PlaceholderImage label="Bargeboard" height="h-20" />
                     
                     <SectionTitle>Centre of Mass</SectionTitle>
                     <BodyText>Cutting away pockets to align CoM.</BodyText>
                     <Table 
                        headers={["Front", "Rear", "Vert", "Horiz"]}
                        rows={[
                            ["None", "None", "7.1", "71.6"],
                            ["2", "8", "4.74", "72.0"],
                            ["8", "8", "4.95", "71.6"]
                        ]}
                     />
                     <SectionTitle>Evaluation</SectionTitle>
                     <BodyText>Final side pod design chosen with 8mm wall.</BodyText>
                </div>

                <div className="col-span-1">
                     <div className="my-4 bg-cyan-900/20 p-2 border-l-2 border-cyan-500">
                        <h4 className="text-cyan-400 font-bold text-[10px]">REAR WING</h4>
                    </div>
                    <SectionTitle>Horizontal Supports</SectionTitle>
                    <PlaceholderImage label="Horiz Supp" height="h-16" />
                    
                    <SectionTitle>Vertical Supports</SectionTitle>
                    <PlaceholderImage label="Vert Supp" height="h-16" />
                    <BodyText>Vertical provided stability but too much drag.</BodyText>
                    
                    <SectionTitle>Twisted Rear Wing</SectionTitle>
                    <BodyText>Angled to deflect towards low pressure zone.</BodyText>
                    <PlaceholderImage label="Twisted RW" height="h-20" />
                </div>
            </div>
            <Footer pageNumber={7} />
        </PageContainer>
    )
}