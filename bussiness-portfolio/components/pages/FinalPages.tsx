import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';

export const Page8: React.FC = () => {
    return (
        <PageContainer>
            <Header title="Final Car & Evaluation" pageNumber={8} />
            <div className="p-6 grid grid-cols-3 gap-6 h-full">
                <div className="col-span-1">
                    <div className="bg-cyan-600 text-white px-2 py-1 font-bold text-xs inline-block mb-2">EVALUATION</div>
                    <div className="text-[10px] text-gold-400 font-mono mb-2">
                        <p>Drag: 0.2542 [N]</p>
                        <p>Lift: -0.1896 [N]</p>
                        <p>Race Time: 1.063 [s]</p>
                    </div>
                    
                    <BodyText><strong>Nosecone:</strong> Maintained innovation. Gentle coercion of airflow.</BodyText>
                    <BodyText><strong>Front Wing:</strong> Redirected airflow to top of side pods.</BodyText>
                    <BodyText><strong>Side Pods:</strong> Accommodated redirection.</BodyText>
                    
                    <PlaceholderImage label="Final Render Side" height="h-32" />
                    <PlaceholderImage label="Final Render Iso" height="h-32" />
                </div>

                <div className="col-span-1">
                    <PlaceholderImage label="FEA Stress Analysis" height="h-32" />
                    <SectionTitle>FEA Testing</SectionTitle>
                    <BodyText>Ran full car FEA at 10N. Max stress 195 MPa at tether guides (Titanium). Safe.</BodyText>
                    
                    <SectionTitle>Wind Tunnel Testing</SectionTitle>
                    <BodyText>Difference of 0.02N in drag between CFD and Tunnel. Smoke visualization confirmed reattachment.</BodyText>
                    <div className="flex gap-2">
                        <PlaceholderImage label="Smoke 1" height="h-16" className="w-1/2" />
                        <PlaceholderImage label="Smoke 2" height="h-16" className="w-1/2" />
                    </div>

                    <SectionTitle>Weight Distribution</SectionTitle>
                    <BodyText>Pockets used to shift CoM forward between wheels. 2 deg canister angle.</BodyText>
                </div>

                <div className="col-span-1">
                    <SectionTitle>Part Integration</SectionTitle>
                    <BodyText>Minimised individual components. Wheel support structures act as tether guide supports.</BodyText>
                    <PlaceholderImage label="Integration Diagram" height="h-20" />
                    
                    <div className="bg-green-600 text-white px-2 py-1 font-bold text-xs inline-block my-2">FINAL STATISTICS</div>
                    <BodyText><strong>Objectives:</strong> Decrease in drag of 17.95%.</BodyText>
                    <BodyText><strong>Aerodynamics:</strong> 0.2542N Drag.</BodyText>
                    <BodyText><strong>Mass:</strong> Kept as low as possible.</BodyText>
                    
                    <PlaceholderImage label="Final Car Photo" height="h-40" className="mt-4" />
                </div>
            </div>
            <Footer pageNumber={8} />
        </PageContainer>
    )
}

export const Page9: React.FC = () => {
    return (
        <PageContainer>
            <Header title="CAD Modelling" pageNumber={9} />
            <div className="p-6 grid grid-cols-4 gap-6 h-full">
                <div className="col-span-1">
                    <div className="bg-cyan-500 text-white px-1 text-[10px] font-bold mb-2">SOFTWARE CHOICE</div>
                    <SectionTitle>CATIA V5</SectionTitle>
                    <BodyText>Main software. Precise surface control. Tree navigation.</BodyText>
                    
                    <SectionTitle>Autodesk Fusion 360</SectionTitle>
                    <BodyText>Used for rendering and FEA.</BodyText>
                    
                    <div className="bg-cyan-500 text-white px-1 text-[10px] font-bold mt-4 mb-2">CAD ORGANISATION</div>
                    <SectionTitle>Master Sketches</SectionTitle>
                    <BodyText>Control dimensions globally.</BodyText>
                    <PlaceholderImage label="Master Sketch" height="h-24" />
                </div>

                <div className="col-span-1">
                    <PlaceholderImage label="CATIA GUI" height="h-24" />
                    <SectionTitle>Surface Modelling</SectionTitle>
                    <BodyText>Generative Shape Design used for complex aero surfaces.</BodyText>
                    
                    <SectionTitle>Multi-Selection Surface</SectionTitle>
                    <BodyText>Guides and profiles to create smooth body.</BodyText>
                    <PlaceholderImage label="Multi-Sel Tool" height="h-24" />
                    
                    <SectionTitle>Fill</SectionTitle>
                    <BodyText>Used for nosecone of prototype 2.</BodyText>
                </div>

                <div className="col-span-1">
                    <SectionTitle>Surface Continuity</SectionTitle>
                    <BodyText><strong>G0:</strong> Meeting. <strong>G1:</strong> Tangent (Fillets). <strong>G2:</strong> Curvature (Smoothest).</BodyText>
                    <BodyText>G1 identified as minimum for aero.</BodyText>
                    
                    <div className="space-y-2">
                        <PlaceholderImage label="Curvature Analysis 1" height="h-20" />
                        <PlaceholderImage label="Curvature Analysis 2" height="h-20" />
                        <PlaceholderImage label="Connect Checker" height="h-20" />
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="bg-cyan-500 text-white px-1 text-[10px] font-bold mb-2">MFG PREPARATION</div>
                    <BodyText>Account for CNC limits (3mm ball nose).</BodyText>
                    <PlaceholderImage label="Min Radius Analysis" height="h-24" />
                    
                    <BodyText>Accessibility Analysis in Fusion 360 to check undercuts.</BodyText>
                    <PlaceholderImage label="Access Analysis" height="h-24" />
                    
                    <SectionTitle>Offset Split Surfaces</SectionTitle>
                    <BodyText>0.1mm gap for glue.</BodyText>
                    <PlaceholderImage label="Split Surface" height="h-20" />
                </div>
            </div>
            <Footer pageNumber={9} />
        </PageContainer>
    )
}

export const Page10: React.FC = () => {
    return (
        <PageContainer>
             <Header title="Manufacturing" pageNumber={10} />
             <div className="p-6 grid grid-cols-3 gap-6 h-full">
                <div className="col-span-1">
                    <div className="bg-cyan-500 text-white px-1 text-[10px] font-bold mb-2">MACHINING GOALS</div>
                    <ul className="list-none text-[9px] text-gray-300 space-y-1 mb-4">
                        <li className="text-gold-400 font-bold">» Accurately produce 2 cars.</li>
                        <li className="text-gold-400 font-bold">» Compliant cars.</li>
                        <li className="text-gold-400 font-bold">» Mass close to 50g.</li>
                    </ul>
                    
                    <SectionTitle>CNC Equipment</SectionTitle>
                    <BodyText>Denford 6600 Pro. 4-axis. 24000 RPM.</BodyText>
                    <PlaceholderImage label="CNC Router" height="h-32" />
                    
                    <SectionTitle>Machining Tolerance</SectionTitle>
                    <BodyText>IT12. 0.1mm clearance. Exclusion zones 1mm.</BodyText>
                </div>

                <div className="col-span-1">
                     <BodyText>Milling plans optimized to minimize heat and tolerance creep.</BodyText>
                     <div className="flex gap-2">
                         <PlaceholderImage label="Machining 1" height="h-24" className="w-1/2" />
                         <PlaceholderImage label="Machining 2" height="h-24" className="w-1/2" />
                     </div>
                     
                     <div className="bg-cyan-500 text-white px-1 text-[10px] font-bold mt-4 mb-2">CAM</div>
                     <SectionTitle>CAM Software</SectionTitle>
                     <BodyText>Quick Cam Pro. Native integration.</BodyText>
                     
                     <SectionTitle>Settings</SectionTitle>
                     <BodyText>3000 mm/s feed. 45 deg raster.</BodyText>
                     <PlaceholderImage label="CAM Settings" height="h-24" />
                </div>

                <div className="col-span-1">
                     <div className="bg-cyan-500 text-white px-1 text-[10px] font-bold mb-2">QUALITY CONTROL</div>
                     <SectionTitle>Compliance</SectionTitle>
                     <BodyText>Two person checking system. Scrutineering sessions performed.</BodyText>
                     
                     <SectionTitle>General</SectionTitle>
                     <BodyText>Manufactured 6 cars. Outliers rejected.</BodyText>
                     <PlaceholderImage label="Scrutineering" height="h-32" />
                     
                     <BodyText>Wheel bearings burnished and ranked.</BodyText>
                </div>
             </div>
             <Footer pageNumber={10} />
        </PageContainer>
    )
}

export const Page11: React.FC = () => {
    return (
        <PageContainer>
            <Header title="Manufacturing" pageNumber={11} />
            <div className="p-6 grid grid-cols-4 gap-6 h-full">
                <div className="col-span-1">
                    <div className="bg-cyan-500 text-white px-1 text-[10px] font-bold mb-2">PROCESS</div>
                    <SectionTitle>Sanding & Sealing</SectionTitle>
                    <BodyText>360 to 400 grit. PVA/Water seal.</BodyText>
                    
                    <SectionTitle>Assembly</SectionTitle>
                    <BodyText>Dry run. 5 min epoxy. Alignment jig.</BodyText>
                    <PlaceholderImage label="Assembly" height="h-24" />
                    
                    <SectionTitle>Puttying</SectionTitle>
                    <BodyText>Wood putty for gaps.</BodyText>
                    
                    <SectionTitle>Primer & Finish</SectionTitle>
                    <BodyText>3 coats primer. 1-2 coats auto paint.</BodyText>
                </div>

                <div className="col-span-1">
                     <PlaceholderImage label="Painting" height="h-32" />
                     
                     <SectionTitle>Assembly Jig</SectionTitle>
                     <BodyText>Negative impression for alignment. FDM PLA.</BodyText>
                     <PlaceholderImage label="Jig" height="h-24" />
                     
                     <div className="bg-cyan-500 text-white px-1 text-[10px] font-bold mt-4 mb-2">OUTSOURCING</div>
                     <SectionTitle>Nylon Parts</SectionTitle>
                     <BodyText>SLS 3D Printing. High yield strength.</BodyText>
                </div>

                <div className="col-span-2">
                     <div className="grid grid-cols-2 gap-4">
                         <div>
                             <SectionTitle>Peek Wheels</SectionTitle>
                             <BodyText>CNC Turned. +/- 0.05mm.</BodyText>
                             <PlaceholderImage label="Wheels" height="h-24" />
                         </div>
                         <div className="flex items-center justify-center">
                              <PlaceholderImage label="Checking Wheels" height="h-24" className="w-full" />
                         </div>
                     </div>
                     
                     <div className="bg-cyan-500 text-white px-1 text-[10px] font-bold mt-4 mb-2">WORKPLACE SAFETY</div>
                     <Table 
                        headers={["Risk", "Cause", "Prob", "Imp", "Score", "Control"]}
                        rows={[
                            ["Irritation", "Dust", "0.6", "0.4", "0.24", "Extraction"],
                            ["Drowsiness", "Fumes", "0.4", "0.6", "0.24", "Ventilation"],
                            ["Impact", "Ejection", "0.1", "0.8", "0.08", "Guards"],
                            ["Cuts", "Tools", "0.1", "0.2", "0.02", "Training"]
                        ]}
                     />
                     <div className="bg-red-900/40 p-2 border-l-2 border-red-500">
                         <BodyText>Specific information from SDS used.</BodyText>
                     </div>
                </div>
            </div>
            <Footer pageNumber={11} />
        </PageContainer>
    )
}