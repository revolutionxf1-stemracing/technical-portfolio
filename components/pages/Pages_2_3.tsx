import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';

const teamMembers = [
  { name: 'Saúl Morán',       role: 'Jefe de Proyectos' },
  { name: 'Víctor Jiménez',   role: 'Ingeniero de Diseño' },
  { name: 'Martín Cendra',    role: 'Team Manager' },
  { name: 'Ibrahim Aharrar',  role: 'Ingeniero de Manufactura' },
  { name: 'Yago Álvarez',     role: 'Director de Marketing' },
  { name: 'Martina Corredor', role: 'Head of Strategy, Engineering & External Relations' },
  { name: 'Claudia de Paz',   role: 'Gestión de Redes Sociales' },
  { name: 'Álvaro Cardona',   role: 'Ingeniero de Apoyo' },
];

// =========================================================
// PÁGINA 2: INTRODUCCIÓN, OBJETIVOS Y EQUIPO
// =========================================================
export const Page2: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Introducción, Objetivos y Composición del Equipo" pageNumber={2} />
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        <div className="w-1/4 bg-black-900 p-5 border-r border-gold-400/20 flex flex-col gap-4">
          <div className="bg-black-800 border border-gold-400 p-3">
            <h3 className="text-gold-400 font-bold uppercase text-[10px] mb-3 border-b border-gold-400/30 pb-1">Índice del Portfolio</h3>
            <div className="space-y-1">
              {[
                "Pág. 2 — Introducción y Equipo",
                "Pág. 3 — Ingeniería del Tren de Rodaje",
                "Pág. 4 — Desarrollo Aerodinámico y CFD",
                "Pág. 5 — Manufactura y Control de Calidad",
                "Pág. 6 — Ensayos Mecánicos y Estructurales",
                "Pág. 7 — Dinámica de Fluidos Experimental",
              ].map((item, i) => (
                <div key={i} className="text-[8px] text-gray-400">{item}</div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gold-500 text-black-900 px-2 py-1 font-bold text-[10px] inline-block mb-2">TRAYECTORIA</div>
            <div className="bg-black-800 border border-gold-400/30 p-2 mb-2">
              <div className="text-[8px] text-gold-400 font-bold uppercase mb-1">Temporada 24/25 — Madrid</div>
              <div className="text-[8px] text-gray-300">1.er puesto categoría Entry</div>
              <div className="text-[8px] text-gold-400 mt-1">Coche más rápido de Madrid</div>
            </div>
            <div className="bg-black-800 border border-gold-400/30 p-2">
              <div className="text-[8px] text-gold-400 font-bold uppercase mb-1">Fase Nacional 24/25 — España</div>
              <div className="text-[8px] text-gray-300">2.o puesto categoría Entry</div>
              <div className="text-[8px] text-gold-400 mt-1">Coche más rápido de España</div>
            </div>
          </div>

          <div>
            <div className="bg-gold-500 text-black-900 px-2 py-1 font-bold text-[10px] inline-block mb-2">OBJETIVOS 25/26</div>
            <ul className="list-none text-[9px] text-gray-300 space-y-2">
              <li className="flex gap-1"><span className="text-gold-400 font-bold">»</span><span>Ganar la Fase Regional Madrid 25/26 en categoría Professional.</span></li>
              <li className="flex gap-1"><span className="text-gold-400 font-bold">»</span><span>Desarrollar el monoplaza más rápido de la historia del equipo.</span></li>
              <li className="flex gap-1"><span className="text-gold-400 font-bold">»</span><span>Validar empíricamente cada decisión de diseño con ensayos físicos propios.</span></li>
              <li className="flex gap-1"><span className="text-gold-400 font-bold">»</span><span>Cumplir íntegramente el reglamento técnico STEM Racing.</span></li>
            </ul>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="w-3/4 p-5 flex flex-col gap-4">

          {/* Car name + intro */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gold-400 text-black-900 px-3 py-1 font-black text-sm uppercase tracking-widest">RX_NIGHTBLADE</div>
              <span className="text-gray-400 text-[10px] uppercase tracking-widest">Monoplaza Oficial — Temporada 25/26</span>
            </div>
            <BodyText>
              RevolutionX STEM Racing es una escudería estudiantil de la categoría Professional de STEM Racing España.
              Fundada sobre la experiencia de la temporada 24/25 —en la que logramos el primer puesto regional y el
              segundo nacional con el monoplaza más rápido de España—, afrontamos la temporada 25/26 con el objetivo
              de llevar nuestro nuevo monoplaza, el <strong className="text-gold-400">RX_NightBlade</strong>, al límite
              de lo que permite el reglamento. Nuestro enfoque técnico se basa en la validación empírica de cada
              decisión de diseño mediante ensayos físicos propios, complementados con análisis computacional CFD
              como herramienta de validación final. Este portfolio recoge de forma rigurosa todo el proceso de
              ingeniería que ha dado lugar al vehículo más optimizado que hemos construido hasta la fecha.
            </BodyText>
          </div>

          {/* Team grid */}
          <div>
            <SectionTitle>Composición de la Escudería</SectionTitle>
            <div className="grid grid-cols-4 gap-2">
              {teamMembers.map(({ name, role }) => (
                <div key={name} className="bg-black-900 border border-gold-400/20 p-2 hover:border-gold-400/60 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center mb-1">
                    <span className="text-gold-400 font-bold text-[8px]">{name.split(' ').map(n => n[0]).join('').slice(0,2)}</span>
                  </div>
                  <div className="text-white font-bold text-[9px] leading-tight">{name}</div>
                  <div className="text-gold-400/70 text-[7px] leading-tight mt-0.5">{role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Design methodology */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <SectionTitle>Metodología: Prueba y Error Iterativo</SectionTitle>
              <BodyText>
                Una de las señas de identidad más destacables del proceso de ingeniería del RX_NightBlade
                es que el diseño aerodinámico fue desarrollado en su totalidad a través de ciclos iterativos
                de diseño, fabricación de prototipos en impresión 3D y ensayo físico. Sin depender del CFD
                como herramienta de diseño primaria —a la que el equipo solo tuvo acceso en las fases
                finales del proyecto—, logramos llegar a una geometría altamente optimizada. Los resultados
                de la simulación CFD en SimScale, realizados al final del proceso, confirmaron empíricamente
                que las decisiones tomadas mediante intuición ingenieril y prueba y error eran correctas.
                Esta capacidad de optimización sin herramientas de simulación avanzadas demuestra un nivel
                de comprensión aerodininámica profundo y diferenciador frente a otros equipos de la competición.
              </BodyText>
            </div>
            <div>
              <SectionTitle>Software Utilizado</SectionTitle>
              <BodyText>
                El diseño 3D del monoplaza se realizó íntegramente en <strong className="text-gold-400">Autodesk Fusion 360</strong>,
                aprovechando sus módulos de modelado de sólidos, análisis de elementos finitos (FEA) y
                generación de trayectorias de mecanizado (CAM). Fusion 360 fue seleccionado por su
                accesibilidad para equipos estudiantiles, su completo ecosistema integrado y la posibilidad
                de realizar análisis FEA sin necesidad de software adicional. Para la validación aerodinámica
                computacional, se empleó <strong className="text-gold-400">SimScale</strong>, plataforma
                cloud de CFD basada en OpenFOAM que permite ejecutar simulaciones de dinámica de fluidos
                externa de alta fidelidad sin requerir hardware local de alto rendimiento, siendo ideal
                para el perfil de un equipo estudiantil con recursos tecnológicos limitados.
              </BodyText>
              <div className="flex gap-2 mt-1">
                <div className="bg-black-900 border border-gold-400/30 px-2 py-1 text-[8px] text-gold-400 font-bold">Autodesk Fusion 360</div>
                <div className="bg-black-900 border border-blue-500/30 px-2 py-1 text-[8px] text-blue-400 font-bold">SimScale CFD</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer pageNumber={2} />
    </PageContainer>
  );
};


// =========================================================
// PÁGINA 3: INGENIERÍA DEL TREN DE RODAJE
// =========================================================
export const Page3: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Ingeniería del Tren de Rodaje" pageNumber={3} />
      <div className="p-5 grid grid-cols-4 gap-5 h-full">

        <div className="col-span-1 border-r border-gray-800 pr-4">
          <div className="bg-gold-600/20 p-2 border-l-2 border-gold-400 mb-3">
            <h4 className="text-gold-400 font-bold text-[10px] uppercase">Marco Teórico</h4>
          </div>
          <SectionTitle>Resistencia a la Rodadura e Inercia</SectionTitle>
          <BodyText>
            La resistencia a la rodadura es la disipación de energía mecánica que se produce
            cuando una rueda gira bajo la acción de una carga normal. En un monoplaza de STEM
            Racing, esta pérdida es crítica puesto que la única fuente de energía es el impulso
            inicial del cartucho de CO₂, que actúa únicamente durante el primer tercio del
            recorrido. Una vez consumido el cartucho, el vehículo avanza exclusivamente por
            inercia. Matemáticamente, el momento de inercia rotacional (I) de una rueda es
            proporcional a la masa (m) y al cuadrado del radio (r): I = ½·m·r². Por tanto,
            minimizar tanto la masa como la distribución radial de material es fundamental
            para reducir la energía necesaria para acelerar el tren de rodaje hasta la velocidad
            punta y maximizar la velocidad al cruzar la línea de meta.
          </BodyText>

          <SectionTitle>Efecto Magnus y Estela de Ruedas</SectionTitle>
          <BodyText>
            Las ruedas giratorias del monoplaza generan el denominado Efecto Magnus, un fenómeno
            aerodinámico por el cual la rotación de un cuerpo en un fluido crea una diferencia
            de presión que induce una fuerza perpendicular al flujo. El diseño de los pontones
            laterales del RX_NightBlade fue optimizado específicamente para aislar el flujo
            central de la perturbación generada por la estela de las ruedas delanteras,
            minimizando la resistencia parásita asociada a este efecto.
          </BodyText>
        </div>

        <div className="col-span-1 border-r border-gray-800 pr-4">
          <SectionTitle>Selección de Material para Ruedas</SectionTitle>
          <BodyText>
            La elección del material de la rueda implica equilibrar tres factores en tensión:
            rigidez (minimizar la deformación elástica bajo carga), baja densidad (reducir
            el momento de inercia) y durabilidad (resistir el desgaste por impacto). Tras
            una comparativa sistemática de tres candidatos —Nylon 12 PA, PEEK y Accura 60—,
            se seleccionó el <strong className="text-gold-400">Ketron PEEK 1000</strong> como
            material óptimo. Con una resistencia a la tracción de 110 MPa y una densidad de
            1.31 g/cm³, el PEEK ofrece la mejor relación rigidez/peso de los candidatos
            evaluados, garantizando una deformación máxima bajo la carga de pista inferior a
            0.25 mm, límite establecido para que la resistencia a la rodadura se mantenga
            constante y predecible durante la carrera.
          </BodyText>
          <Table
            headers={["Material", "Tracción (MPa)", "Densidad (g/cm³)"]}
            rows={[
              ["Nylon 12 PA", "46", "1.01"],
              ["PEEK (selec.)", "110", "1.31"],
              ["Accura 60", "58", "1.21"],
            ]}
          />
          <SectionTitle>Diseños de Rueda: FEA</SectionTitle>
          <BodyText>
            Se evaluaron cuatro geometrías de rueda mediante análisis de elementos finitos
            (FEA), buscando el equilibrio entre tensión de Von Mises, momento de inercia (MoI)
            y viabilidad de mecanizado. El diseño de 5 radios (MoI: 156.85 g·mm², tensión:
            57.02 MPa) fue seleccionado como el óptimo por cumplir todos los criterios
            con el menor momento de inercia viable.
          </BodyText>
        </div>

        <div className="col-span-1 border-r border-gray-800 pr-4">
          <SectionTitle>Rodamientos: Investigación Tribológica</SectionTitle>
          <BodyText>
            El cojinete de rodadura es el elemento más crítico del tren de rodaje en términos
            de eficiencia mecánica. Se realizó una investigación comparativa exhaustiva entre
            rodamientos de acero convencionales y rodamientos híbridos cerámicos. Las bolas
            de nitruro de silicio (Si₃N₄) de los rodamientos cerámicos presentan una dureza
            superior, menor coeficiente de expansión térmica y una superficie mucho más lisa,
            lo que se traduce en una fricción de rodadura significativamente inferior. Para
            cuantificar esta diferencia, el equipo realizó un ensayo empírico de giro libre
            montando cada rodamiento en el interior de la propia rueda del monoplaza —reproduciendo
            las condiciones reales de operación— y aplicando un impulso rotacional manual
            estandarizado, midiendo el tiempo hasta la detención completa.
          </BodyText>

          {/* Visual comparison */}
          <div className="w-full border border-gray-700 bg-black-900 p-3 mb-3">
            <div className="text-[9px] text-gray-400 uppercase font-bold mb-2 border-b border-gray-700 pb-1">Resultado: Acero vs. Cerámica (en rueda)</div>
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-gray-300 font-bold">Acero conv.</span>
                <span className="text-[9px] text-gray-400 font-mono">0.84 s</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-sm overflow-hidden">
                <div className="bg-gray-500 h-full rounded-sm" style={{ width: '21%' }} />
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-gold-400 font-bold">Cerámico ✓</span>
                <span className="text-[9px] text-gold-400 font-mono">3.97 s</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-sm overflow-hidden">
                <div className="bg-gold-400 h-full rounded-sm" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-700 mt-1">
              <span className="text-[8px] text-gray-400">Mejora:</span>
              <span className="text-green-400 font-bold text-[10px]">+372.6% de tiempo de giro</span>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <SectionTitle>Análisis de Resultados del Ensayo</SectionTitle>
          <BodyText>
            Los resultados del ensayo de giro libre realizado en el interior de la rueda del
            monoplaza son significativamente más representativos que los obtenidos en banco
            aislado, ya que reproducen las condiciones de carga radial y axial reales a las
            que estará sometido el rodamiento durante la carrera. El rodamiento de acero
            convencional giró durante una media de <strong className="text-gold-400">0.84 s</strong>,
            mientras que el cerámico alcanzó los <strong className="text-gold-400">3.97 s</strong>,
            lo que supone un incremento del rendimiento de un asombroso <strong className="text-green-400">372.6%</strong>.
            Esta diferencia de casi 5 veces más tiempo de giro libre implica directamente
            que la energía cinética almacenada en el sistema rueda-rodamiento se disipa
            a una tasa cuatro veces más lenta, resultando en una ventaja de rendimiento
            absolutamente decisiva en la fase de rodadura inercial de la pista, que comprende
            aproximadamente los 2/3 del recorrido total tras el agotamiento del cartucho.
          </BodyText>
          <Table
            headers={["Tipo", "T. Giro (s)", "Mejora"]}
            rows={[
              ["Acero conv.", "0.84", "Referencia"],
              ["Cerámico ✓", "3.97", "+372.6%"],
            ]}
          />
          <div className="text-[8px] text-gray-500 italic mb-3">Media de 2 mediciones. Ensayo realizado en el interior de la rueda del monoplaza.</div>

          <SectionTitle>Lubricación: Conclusión</SectionTitle>
          <BodyText>
            Adicionalmente al tipo de rodamiento, se evaluó el efecto del lubricante sobre
            el tiempo de descenso en rampa. El ensayo, descrito en detalle en la página 7,
            determinó que la aplicación de WD-40 no produjo una diferencia medible en el
            tiempo de bajada (0.55 s en ambos casos), lo cual es consistente con la física
            del sistema: en un plano inclinado, la componente gravitacional domina sobre
            la fricción a estas escalas de masa y velocidad. Este hallazgo confirma que el
            factor diferencial de rendimiento en el tren de rodaje es el tipo de rodamiento,
            no el lubricante, validando la selección del cerámico como componente definitivo.
          </BodyText>
        </div>

      </div>
      <Footer pageNumber={3} />
    </PageContainer>
  );
};
