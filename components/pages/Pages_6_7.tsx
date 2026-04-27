import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, Table } from '../Shared';

// =========================================================
// PÁGINA 8: RENDERS DEL MONOPLAZA
// =========================================================
export const Page8: React.FC = () => {
  const renders = [
    { src: '/assets/render-1.jpeg', alt: 'RX_NightBlade — Render frontal-lateral', label: 'Vista Frontal-Lateral' },
    { src: '/assets/render-2.jpeg', alt: 'RX_NightBlade — Render posterior', label: 'Vista Posterior' },
    { src: '/assets/render-3.jpeg', alt: 'RX_NightBlade — Render superior', label: 'Vista Superior' },
  ];

  return (
    <PageContainer>
      <Header title="Renders del Monoplaza — RX_NightBlade" pageNumber={8} />

      <div className="flex flex-col flex-1 overflow-hidden px-8 py-5 gap-4">

        {/* Intro strip */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="bg-gold-500 text-black-900 px-3 py-1 font-black text-[11px] uppercase tracking-widest shrink-0">DISEÑO 3D</div>
          <p className="text-gray-400 text-[11px] leading-snug">
            Renders fotorrealistas generados en <strong className="text-gold-400">Autodesk Fusion 360</strong> del monoplaza RX_NightBlade.
            Cada ángulo expone las decisiones de diseño adoptadas a lo largo del proceso: geometría de carrocería, pontones de gestión de flujo,
            alerón trasero y tren de rodaje con ruedas tapadas de PLA.
          </p>
        </div>

        {/* Main render — hero */}
        <div className="flex gap-4 flex-1 min-h-0">

          {/* Large render left */}
          <div className="flex-[2] flex flex-col min-w-0">
            <div className="relative w-full flex-1 min-h-0 bg-black-900 border border-gold-400/30 group overflow-hidden">
              <img
                src={renders[0].src}
                alt={renders[0].alt}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = 'none';
                  const fb = t.parentElement?.querySelector('.fb-r') as HTMLElement;
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div className="fb-r absolute inset-0 bg-black-700 border border-dashed border-gold-400/30 items-center justify-center" style={{ display: 'none' }}>
                <span className="text-gold-400/50 text-[10px] font-mono uppercase text-center p-4">{renders[0].src}</span>
              </div>
              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 flex items-end justify-between">
                <span className="text-white font-bold text-[11px] uppercase tracking-widest">{renders[0].label}</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gold-400 transform rotate-45 shrink-0" />
                  <span className="text-gold-400/70 text-[9px] font-mono uppercase">Fusion 360</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — two stacked renders */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            {renders.slice(1).map((r, i) => (
              <div key={i} className="relative flex-1 min-h-0 bg-black-900 border border-gold-400/20 group overflow-hidden">
                <img
                  src={r.src}
                  alt={r.alt}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = 'none';
                    const fb = t.parentElement?.querySelector('.fb-r') as HTMLElement;
                    if (fb) fb.style.display = 'flex';
                  }}
                />
                <div className="fb-r absolute inset-0 bg-black-700 border border-dashed border-gold-400/30 items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-gold-400/50 text-[10px] font-mono uppercase text-center p-3">{r.src}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-3 py-2 flex items-end justify-between">
                  <span className="text-white font-bold text-[10px] uppercase tracking-wider">{r.label}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-gold-400 transform rotate-45 shrink-0" />
                    <span className="text-gold-400/60 text-[8px] font-mono uppercase">Fusion 360</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom spec strip */}
        <div className="shrink-0 border-t border-gold-400/20 pt-3 flex items-center gap-8">
          {[
            { label: 'Carrocería', value: 'Madera CNC — MADCUP' },
            { label: 'Ruedas', value: 'PLA tapado' },
            { label: 'Rodamientos', value: 'Si₃N₄ cerámico' },
            { label: 'Software', value: 'Autodesk Fusion 360' },
            { label: 'Temporada', value: '25/26 — Professional' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">{label}</span>
              <span className="text-[11px] text-gold-400 font-bold">{value}</span>
            </div>
          ))}
          <div className="ml-auto">
            <div className="bg-black-900 border border-gold-400/30 px-3 py-1.5 text-center">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest block">Monoplaza</span>
              <span className="text-[13px] text-white font-black tracking-widest">RX_NIGHTBLADE</span>
            </div>
          </div>
        </div>

      </div>

      <Footer pageNumber={8} />
    </PageContainer>
  );
};

// Photo helper
const Photo: React.FC<{ src: string; alt: string; label: string; height?: string; fit?: 'cover' | 'contain' }> = ({ src, alt, label, height = 'h-28', fit = 'cover' }) => (
  <div className={`w-full ${height} relative mb-2 bg-black-900`}>
    <img
      src={src} alt={alt}
      className={`w-full h-full border border-gray-700 ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      onError={(e) => {
        const t = e.target as HTMLImageElement;
        t.style.display = 'none';
        const fb = t.parentElement?.querySelector('.fb-ph') as HTMLElement;
        if (fb) fb.style.display = 'flex';
      }}
    />
    <div className="fb-ph absolute inset-0 bg-black-700 border border-dashed border-gold-400/30 items-center justify-center" style={{ display: 'none' }}>
      <span className="text-gold-400/50 text-[10px] font-mono uppercase text-center p-2">{label}</span>
    </div>
  </div>
);


// =========================================================
// PÁGINA 7: TRIBOLOGÍA, CINEMÁTICA Y RESUMEN DE RESULTADOS
// =========================================================
export const Page7: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Tribología, Ensayo Cinemático y Resumen de Validación" pageNumber={7} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">

        {/* COL 1 — Rodamientos */}
        <div className="col-span-1 flex flex-col">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[11px] inline-block mb-3">TRIBOLOGÍA: RODAMIENTOS EN BANCO DE PRUEBAS</div>
          <SectionTitle>Ensayo de Giro Libre (Free-Spin)</SectionTitle>
          <BodyText>
            Además de comparar los materiales en papel, quisimos probarlo con el coche de verdad.
            Montamos cada tipo de rodamiento dentro de la rueda del monoplaza, le dábamos el mismo
            impulso manual y observábamos cuál se frenaba antes. No fue un ensayo profesional,
            pero sí una comparación directa usando el montaje real de la rueda.
          </BodyText>

          <div className="w-full border border-gray-700 bg-black-900 p-3 mb-3">
            <div className="text-[10px] text-gray-400 uppercase font-bold mb-2 border-b border-gray-700 pb-1">Comparativa: Acero vs. Cerámica</div>
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-gray-300 font-bold">Rodamiento de Acero</span>
                <span className="text-[10px] text-gray-400 font-mono">menos giro</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-sm overflow-hidden">
                <div className="bg-gray-500 h-full rounded-sm" style={{ width: '21%' }} />
              </div>
              <div className="text-[9px] text-gray-500 mt-0.5">Se frenaba antes en nuestra prueba</div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-gold-400 font-bold">Rodamiento Cerámico (seleccionado)</span>
                <span className="text-[10px] text-gold-400 font-mono">más giro</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-sm overflow-hidden">
                <div className="bg-gold-400 h-full rounded-sm" style={{ width: '100%' }} />
              </div>
              <div className="text-[9px] text-gray-500 mt-0.5">Mantenía mejor la inercia</div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-700 mt-1">
              <span className="text-[9px] text-gray-400">Mejora observada:</span>
              <span className="text-green-400 font-bold text-[11px]">cerámico elegido para el montaje</span>
            </div>
          </div>

          <div className="flex gap-2 mb-3">
            <div className="flex-1">
              <div className="text-[9px] text-gray-400 uppercase text-center mb-1 font-bold">Rodamiento Acero</div>
              <Photo src="/assets/rodamiento_metal.jpg" alt="Rodamiento de acero" label="rodamiento_metal.jpg" height="h-14" />
            </div>
            <div className="flex-1">
              <div className="text-[9px] text-gold-400 uppercase text-center mb-1 font-bold">Rodamiento Cerámico</div>
              <Photo src="/assets/rodamiento_ceramica.jpg" alt="Rodamiento cerámico Si₃N₄" label="rodamiento_ceramica.jpg" height="h-14" />
            </div>
          </div>

          <Table
            headers={["Tipo", "Resultado", "Decisión"]}
            rows={[
              ["Acero conv.", "Se frenaba antes", "Referencia"],
              ["Cerámica", "Mejor giro", "Seleccionado"],
            ]}
          />

          <div className="text-[10px] text-gray-500 italic">Ensayo comparativo hecho con los rodamientos dentro de la rueda del monoplaza.</div>
        </div>

        {/* COL 2 — Ensayo cinemático rampa */}
        <div className="col-span-1 flex flex-col">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[11px] inline-block mb-3">ENSAYO CINEMÁTICO: RAMPA DE 60 cm</div>
          <SectionTitle>Prueba Dinámica en Plano Inclinado</SectionTitle>
          <BodyText>
            Construimos una rampa de cartón para probar si el WD-40 marcaba alguna diferencia
            visible. La inclinación y el punto de salida eran siempre los mismos. Primero lo
            probamos con los rodamientos en seco y luego tratados con WD-40.
          </BodyText>

          <Photo src="/assets/rampa_carton.jpg" alt="Coche sobre rampa de cartón de 60cm" label="rampa_carton.jpg" height="h-24" fit="cover" />

          <Table
            headers={["Condición", "Resultado observado"]}
            rows={[
              ["Sin lubricante", "Bajada normal"],
              ["Con WD-40", "Sin mejora clara"],
            ]}
          />

          <SectionTitle>Resultado</SectionTitle>
          <BodyText>
            No vimos una mejora clara por usar lubricante. Tiene lógica: en una rampa, la fuerza
            que mueve el coche es sobre todo la gravedad, y también influyen la alineación, el
            contacto de las ruedas y pequeños errores del montaje. Por eso no usamos esta prueba
            para decir que el lubricante mejora el coche.
          </BodyText>

          <BodyText>
            Con esto cerramos una validación previa bastante realista para nuestro nivel: túnel
            de viento casero, prueba del alerón, comparación de rodamientos y rampa. No son ensayos
            perfectos, pero sí nos ayudan a justificar las decisiones principales.
          </BodyText>
        </div>

        {/* COL 3 — Resumen de resultados + especificaciones */}
        <div className="col-span-1 flex flex-col">
          <div className="bg-purple-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">RESUMEN DE ENSAYOS Y ESPECIFICACIONES</div>
          <SectionTitle>Ensayos Realizados</SectionTitle>
          <Table
            headers={["Ensayo", "Dato principal", "Qué nos dejó claro"]}
            rows={[
              ["Free-spin", "Cerámico gira mejor", "Rodamiento cerámico"],
              ["Carga alerón", "Sin grieta visible", "Diseño resistente para seguir montando"],
              ["Túnel de viento", "Hilos bastante ordenados", "No había separación fuerte"],
              ["Rampa WD-40", "Sin mejora clara", "Prioridad: alineación y rodamientos"],
              ["CFD SimScale", "Patrón coherente", "Sin problema aerodinámico evidente"],
            ]}
          />

          <div className="text-[9px] text-gray-500 mb-3">
            Resumen directo de los ensayos que sí usamos para decidir diseño, materiales y montaje.
          </div>

          <SectionTitle>Especificaciones Técnicas — RX_NightBlade</SectionTitle>
          <Table
            headers={["Parámetro", "Valor"]}
            rows={[
              ["Material carrocería", "Madera CNC (MADCUP)"],
              ["Material ruedas", "PLA, diseño tapado"],
              ["Rodamientos", "Si₃N₄ cerámico"],
              ["Software diseño", "Autodesk Fusion 360"],
              ["Software CFD", "SimScale"],
              ["Validación", "CFD + pruebas físicas simples"],
              ["Acabado", "Negro uniforme"],
            ]}
          />

          <div className="border border-gray-700 bg-black-900 p-3">
            <div className="text-[10px] text-gray-500 uppercase font-bold mb-2">Objetivos 25/26 — Estado</div>
            {[
              { done: true,  text: "Diseño CAD completo (Fusion 360)" },
              { done: true,  text: "Validación CFD (SimScale)" },
              { done: true,  text: "Ensayos físicos realizados" },
              { done: true,  text: "Mecanizado CNC recibido (MADCUP)" },
              { done: true,  text: "Acabado final: pintura negra uniforme" },
              { done: false, text: "Scrutineering y Fase Regional Madrid" },
            ].map(({ done, text }, i) => (
              <div key={i} className="flex items-center gap-2 mb-1">
                <div className={`w-3 h-3 shrink-0 flex items-center justify-center border ${done ? 'bg-green-600 border-green-500' : 'border-gray-600'}`}>
                  {done && <span className="text-white text-[8px] font-bold">✓</span>}
                </div>
                <span className={`text-[9px] ${done ? 'text-gray-300' : 'text-gray-500'}`}>{text}</span>
              </div>
            ))}
          </div>

          <div className="border border-gold-400/20 bg-black-900 p-3 mt-3">
            <div className="text-[10px] text-gray-500 uppercase font-bold mb-2">Drive de Experimentos</div>
            <p className="text-[9px] text-gray-300 leading-relaxed mb-2">
              Al final del portfolio dejamos enlazada la carpeta con los vídeos y pruebas del proyecto.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1N4WJ0uoAMu38xutRE5ee-tH73HsRlWMv?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="text-[9px] text-gold-400 underline break-all"
            >
              https://drive.google.com/drive/folders/1N4WJ0uoAMu38xutRE5ee-tH73HsRlWMv?usp=drive_link
            </a>
          </div>
        </div>

      </div>
      <Footer pageNumber={7} />
    </PageContainer>
  );
};
