import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';

const teamMembers = [
  { name: 'Saúl Morán', role: 'Integrante del equipo' },
  { name: 'Víctor Jiménez', role: 'Integrante del equipo' },
  { name: 'Martín Cendra', role: 'Integrante del equipo' },
  { name: 'Ibrahim Aharrar', role: 'Integrante del equipo' },
  { name: 'Yago Álvarez', role: 'Integrante del equipo' },
  { name: 'Martina Corredor', role: 'Integrante del equipo' },
  { name: 'Claudia de Paz', role: 'Integrante del equipo' },
  { name: 'Álvaro Cardona', role: 'Integrante del equipo' },
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
            <h3 className="text-gold-400 font-bold uppercase text-[11px] mb-3 border-b border-gold-400/30 pb-1">Índice del Portfolio</h3>
            <div className="space-y-1">
              {[
                "Pág. 2 — Introducción y Equipo",
                "Pág. 3 — Ingeniería del Tren de Rodaje",
                "Pág. 4 — Aerodinámica, CFD y Túnel de Viento",
                "Pág. 5 — Ampliación CFD y Mapas de Campo",
                "Pág. 6 — Manufactura y Ensayo Estructural",
                "Pág. 7 — Tribología, Cinemática y Resumen",
                "Pág. 8 — Renders del Monoplaza",
              ].map((item, i) => (
                <div key={i} className="text-[9px] text-gray-400">{item}</div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gold-500 text-black-900 px-2 py-1 font-bold text-[11px] inline-block mb-2">TRAYECTORIA</div>
            <div className="bg-black-800 border border-gold-400/30 p-2 mb-2">
              <div className="text-[9px] text-gold-400 font-bold uppercase mb-1">Temporada 24/25 — Madrid</div>
              <div className="text-[9px] text-gray-300">Experiencia previa en competición</div>
              <div className="text-[9px] text-gold-400 mt-1">Aprendizaje para esta temporada</div>
            </div>
            <div className="bg-black-800 border border-gold-400/30 p-2">
              <div className="text-[9px] text-gold-400 font-bold uppercase mb-1">Fase Nacional 24/25 — España</div>
              <div className="text-[9px] text-gray-300">Referencia técnica del coche anterior</div>
              <div className="text-[9px] text-gold-400 mt-1">Base para mejorar el RX_NightBlade</div>
            </div>
          </div>

          <div>
            <div className="bg-gold-500 text-black-900 px-2 py-1 font-bold text-[11px] inline-block mb-2">OBJETIVOS 25/26</div>
            <ul className="list-none text-[10px] text-gray-300 space-y-2">
              <li className="flex gap-1"><span className="text-gold-400 font-bold">»</span><span>Ganar la Fase Regional Madrid 25/26 en categoría Professional.</span></li>
              <li className="flex gap-1"><span className="text-gold-400 font-bold">»</span><span>Mejorar el monoplaza de la temporada anterior.</span></li>
              <li className="flex gap-1"><span className="text-gold-400 font-bold">»</span><span>Probar físicamente las decisiones importantes del diseño.</span></li>
              <li className="flex gap-1"><span className="text-gold-400 font-bold">»</span><span>Cumplir íntegramente el reglamento técnico STEM Racing.</span></li>
            </ul>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="w-3/4 p-5 flex flex-col gap-4">

          {/* Car name + intro */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gold-400 text-black-900 px-3 py-1 font-black text-base uppercase tracking-widest">RX_NIGHTBLADE</div>
              <span className="text-gray-400 text-[11px] uppercase tracking-widest">Monoplaza Oficial — Temporada 25/26</span>
            </div>
            <BodyText>
              RevolutionX somos un equipo de estudiantes del IES Saramago que competimos en la categoría
              Professional de STEM Racing España. Este año trabajamos con el{' '}
              <strong className="text-gold-400">RX_NightBlade</strong>, un coche en el que hemos intentado
              aplicar lo que aprendimos en cursos anteriores y en las pruebas del taller. La idea central
              del proyecto ha sido no fiarnos solo del ordenador: si una decisión afectaba al rendimiento,
              intentábamos comprobarla con un ensayo sencillo antes de darla por buena.
            </BodyText>
          </div>

          {/* Team grid */}
          <div>
            <SectionTitle>Composición de la Escudería</SectionTitle>
            <div className="grid grid-cols-4 gap-2">
              {teamMembers.map(({ name, role }) => (
                <div key={name} className="bg-black-900 border border-gold-400/20 p-2 hover:border-gold-400/60 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center mb-1">
                    <span className="text-gold-400 font-bold text-[9px]">{name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                  </div>
                  <div className="text-white font-bold text-[10px] leading-tight">{name}</div>
                  <div className="text-gold-400/70 text-[8px] leading-tight mt-0.5">{role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Design methodology */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <SectionTitle>Metodología: Prueba y Error Iterativo</SectionTitle>
              <BodyText>
                Nuestro método en aerodinámica fue básicamente: modelar, imprimir, probar, repetir. No teníamos
                acceso a CFD durante el diseño, así que fuimos probando distintas formas de carrocería y
                viendo cuál tenía más sentido según lo que sabíamos de fluidos. Cuando al final sí usamos
                SimScale para revisar el resultado, nos sirvió más como comprobación que como punto de
                partida. Para nosotros eso fue lo más útil del proceso: comparar lo que veíamos en pruebas
                físicas con lo que mostraba la simulación.
              </BodyText>
            </div>
            <div>
              <SectionTitle>Software Utilizado</SectionTitle>
              <BodyText>
                Para el diseño 3D usamos <strong className="text-gold-400">Autodesk Fusion 360</strong>:
                modelado, análisis FEA y preparación del archivo para CNC, todo en el mismo programa.
                Lo elegimos porque ya lo conocíamos un poco y porque tener el FEA integrado nos evitaba
                instalar más cosas. Para la simulación aerodinámica usamos{' '}
                <strong className="text-gold-400">SimScale</strong>, que funciona en la nube y no necesitas
                un ordenador potente. Lo fuimos aprendiendo con tutoriales y pruebas, sin tratarlo como
                una herramienta mágica.
              </BodyText>
              <div className="flex gap-2 mt-1">
                <div className="bg-black-900 border border-gold-400/30 px-2 py-1 text-[9px] text-gold-400 font-bold">Autodesk Fusion 360</div>
                <div className="bg-black-900 border border-blue-500/30 px-2 py-1 text-[9px] text-blue-400 font-bold">SimScale CFD</div>
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
            <h4 className="text-gold-400 font-bold text-[11px] uppercase">Marco Teórico</h4>
          </div>
          <SectionTitle>Resistencia a la Rodadura e Inercia</SectionTitle>
          <BodyText>
            La resistencia a la rodadura es la energía que se pierde cuando una rueda gira
            bajo carga. En STEM Racing es un factor clave porque después de que el cartucho
            de CO₂ se dispara, el coche ya no tiene más empuje y sigue solo por inercia.
            Cuanta menos fricción haya en el tren de rodaje, más lejos llega. El momento de
            inercia también importa: I = ½·m·r². Cuanto más ligera y compacta sea la rueda,
            menos energía necesita para ponerse en movimiento y más rápido llega a la velocidad
            máxima.
          </BodyText>

          <SectionTitle>Efecto Magnus y Estela de Ruedas</SectionTitle>
          <BodyText>
            Cuando las ruedas giran aparece el Efecto Magnus: la rotación en el aire crea una
            diferencia de presión que genera una fuerza lateral. Para el coche esto significa
            que las ruedas delanteras crean una zona de turbulencia a su alrededor. Los pontones
            del RX_NightBlade están diseñados para separar ese flujo turbulento del flujo limpio
            que pasa por el centro, reduciendo así la resistencia extra que causaría esa
            perturbación.
          </BodyText>
        </div>

        <div className="col-span-1 border-r border-gray-800 pr-4">
          <SectionTitle>Rueda Final</SectionTitle>
          <BodyText>
            Para el coche final usamos ruedas de <strong className="text-gold-400">PLA</strong>.
            Lo importante para nosotros era que fuesen rígidas, que girasen bien y que no
            complicasen el montaje del rodamiento. Por eso dejamos la rueda prácticamente tapada:
            solo queda abierta la zona donde entra el rodamiento cerámico.
          </BodyText>
          <BodyText>
            Esta decisión también tenía sentido aerodinámico. Una rueda con radios o huecos puede
            mover más aire alrededor del tren delantero y crear turbulencia extra. Al cerrar la
            mayor parte de la superficie, la geometría queda más limpia y más fácil de integrar
            con los pontones del coche.
          </BodyText>
          <SectionTitle>Diseños de Rueda: FEA</SectionTitle>
          <BodyText>
            Probamos cuatro geometrías distintas con FEA en Fusion 360. Queríamos el menor
            momento de inercia posible sin pasarnos de tensión ni complicar la fabricación.
            Al principio el diseño de 5 radios parecía el más equilibrado, pero al cerrar la
            decisión vimos que una rueda tapada era mejor para el flujo. La versión final va
            entapada casi entera, dejando solo la zona necesaria para insertar el rodamiento
            cerámico.
          </BodyText>
        </div>

        <div className="col-span-1 border-r border-gray-800 pr-4">
          <SectionTitle>Rodamientos: Investigación Tribológica</SectionTitle>
          <BodyText>
            El rodamiento es probablemente la pieza más importante para el rendimiento. Nos
            preguntamos si valía la pena pagar más por uno cerámico en lugar de usar uno de
            acero normal. Las bolas de nitruro de silicio (Si₃N₄) son más duras, tienen la
            superficie más lisa y se expanden menos con el calor, lo que en teoría reduce
            la fricción. Para comprobarlo físicamente montamos cada rodamiento dentro de la
            rueda del coche, le dábamos un impulso parecido y observábamos cuál mantenía mejor
            el giro.
          </BodyText>

          {/* Visual comparison */}
          <div className="w-full border border-gray-700 bg-black-900 p-3 mb-3">
            <div className="text-[10px] text-gray-400 uppercase font-bold mb-2 border-b border-gray-700 pb-1">Resultado: Acero vs. Cerámica (en rueda)</div>
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-gray-300 font-bold">Acero conv.</span>
                <span className="text-[10px] text-gray-400 font-mono">menos giro</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-sm overflow-hidden">
                <div className="bg-gray-500 h-full rounded-sm" style={{ width: '21%' }} />
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-gold-400 font-bold">Cerámico ✓</span>
                <span className="text-[10px] text-gold-400 font-mono">más giro</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-sm overflow-hidden">
                <div className="bg-gold-400 h-full rounded-sm" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-700 mt-1">
              <span className="text-[9px] text-gray-400">Lectura:</span>
              <span className="text-green-400 font-bold text-[11px]">el cerámico mantiene mejor la inercia</span>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <div className="flex-1">
              <div className="text-[9px] text-gray-400 uppercase text-center mb-1 font-bold">Rodamiento Acero</div>
              <div className="w-full h-20 relative bg-black-900">
                <img src="/assets/rodamiento_metal.jpg" alt="Rodamiento de acero"
                  className="w-full h-full object-cover border border-gray-700"
                  onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = 'none'; const fb = t.parentElement?.querySelector('.fb') as HTMLElement; if (fb) fb.style.display = 'flex'; }}
                />
                <div className="fb absolute inset-0 bg-black-700 border border-dashed border-gold-400/20 items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-gold-400/40 text-[9px] font-mono text-center p-1">rodamiento_metal.jpg</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[9px] text-gold-400 uppercase text-center mb-1 font-bold">Rodamiento Cerámico</div>
              <div className="w-full h-20 relative bg-black-900">
                <img src="/assets/rodamiento_ceramica.jpg" alt="Rodamiento cerámico Si₃N₄"
                  className="w-full h-full object-cover border border-gray-700"
                  onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = 'none'; const fb = t.parentElement?.querySelector('.fb') as HTMLElement; if (fb) fb.style.display = 'flex'; }}
                />
                <div className="fb absolute inset-0 bg-black-700 border border-dashed border-gold-400/20 items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-gold-400/40 text-[9px] font-mono text-center p-1">rodamiento_ceramica.jpg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <SectionTitle>Análisis de Resultados del Ensayo</SectionTitle>
          <BodyText>
            En la prueba se veía bastante claro que el rodamiento cerámico conservaba mejor el
            giro que el de acero. No lo tratamos como una medición de laboratorio perfecta,
            porque el impulso era manual, pero sí como una comparación práctica dentro de la
            rueda real del coche. Para nuestro nivel de proyecto era suficiente para decidir
            que el cerámico tenía más sentido.
          </BodyText>
          <Table
            headers={["Tipo", "Resultado observado", "Decisión"]}
            rows={[
              ["Acero conv.", "Se frenaba antes", "Referencia"],
              ["Cerámico", "Mantenía mejor el giro", "Seleccionado"],
            ]}
          />
          <div className="text-[10px] text-gray-500 italic mb-3">Ensayo comparativo realizado con los rodamientos montados dentro de la rueda del monoplaza.</div>

          <SectionTitle>Lubricación: Conclusión</SectionTitle>
          <BodyText>
            También probamos el WD-40 en una rampa de cartón para ver si el lubricante hacía
            una diferencia visible. En esa prueba no apreciamos mejora clara. Tiene sentido si
            lo piensas: en un plano inclinado lo que más manda es la gravedad y el rozamiento
            total del conjunto, no solo el lubricante del rodamiento. Por eso nos centramos más
            en elegir bien el tipo de rodamiento y en alinear las ruedas.
          </BodyText>
        </div>

      </div>
      <Footer pageNumber={3} />
    </PageContainer>
  );
};
