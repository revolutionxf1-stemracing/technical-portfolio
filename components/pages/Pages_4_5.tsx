import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, Table } from '../Shared';

// Photo helpers
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
// PÁGINA 4: AERODINÁMICA + CFD + TÚNEL DE VIENTO
// =========================================================
export const Page4: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Aerodinámica: Diseño, Simulación CFD y Validación Experimental" pageNumber={4} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">

        {/* COL 1 — Diseño iterativo */}
        <div className="col-span-1 flex flex-col">
          <div className="bg-cyan-600 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">DISEÑO ITERATIVO SIN CFD</div>
          <SectionTitle>Optimización por Prueba y Error</SectionTitle>
          <BodyText>
            Toda la aerodinámica la diseñamos sin usar CFD. El proceso fue más o menos así:
            modelábamos una geometría en Fusion 360, la imprimíamos, la comparábamos con versiones
            anteriores y ajustábamos según lo que sabíamos de mecánica de fluidos: reducir el área
            frontal, mantener la continuidad de la superficie, evitar cambios bruscos de presión en
            la parte trasera y separar el flujo limpio de la turbulencia de las ruedas con los
            pontones. Cuando por fin simulamos en SimScale, lo usamos como una revisión del diseño,
            no como una prueba perfecta de que todo fuese exacto.
          </BodyText>

          <SectionTitle>Principios del Diseño Final</SectionTitle>
          <BodyText>
            El diseño final tiene varias cosas pensadas. El morro dirige el aire hacia arriba y
            hacia abajo para aprovechar mejor el flujo. Los pontones
            tienen paredes laterales que intentan mantener separado el flujo limpio central de la
            turbulencia que crean las ruedas, lo que reduce la resistencia. La parte trasera termina
            en una zona más progresiva para no cortar el aire de golpe y evitar una estela demasiado
            desordenada.
          </BodyText>

          <div className="bg-cyan-950/40 border border-cyan-600/50 p-3 mb-3">
            <div className="text-cyan-400 font-bold text-[10px] uppercase mb-2">Proceso de Diseño</div>
            {[
              { n: "01", t: "Forma base", d: "Perfil inicial de referencia impreso en 3D." },
              { n: "02", t: "Iteración", d: "Ajuste de morro, pontones y difusor por criterios teóricos." },
              { n: "03", t: "Validación CFD", d: "Simulación SimScale del diseño final." },
              { n: "04", t: "Validación física", d: "Túnel de viento casero con hilos de flujo." },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-2 items-start mb-1">
                <div className="bg-cyan-600 text-white font-black text-[10px] px-1.5 py-0.5 shrink-0">{n}</div>
                <div>
                  <div className="text-white font-bold text-[10px]">{t}</div>
                  <div className="text-gray-400 text-[9px]">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <Photo src="/assets/cfd_grafica.png" alt="Gráfica de convergencia SimScale" label="cfd_grafica.png" height="h-36" fit="contain" />
        </div>

        {/* COL 2 — CFD SimScale */}
        <div className="col-span-1 flex flex-col">
          <div className="bg-blue-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">VALIDACIÓN COMPUTACIONAL (SimScale CFD)</div>
          <SectionTitle>Configuración de la Simulación</SectionTitle>
          <BodyText>
            Cuando tuvimos el diseño cerrado, lo simulamos en SimScale para ver si los números
            cuadraban con lo que esperábamos. Configuramos una simulación de aerodinámica externa y
            revisamos sobre todo las zonas que más nos interesaban: morro, pontones, alerón y parte
            trasera. La simulación nos sirvió para comparar tendencias, no para vender un número como
            si fuese una medición de pista.
          </BodyText>

          <SectionTitle>Resultados Obtenidos</SectionTitle>
          <BodyText>
            En vez de quedarnos solo con cifras, miramos si el patrón general tenía sentido.
            Lo importante fue que el flujo no parecía separarse de forma brusca en la parte
            superior, que la estela salía bastante centrada y que no aparecía una asimetría
            evidente entre izquierda y derecha. Eso nos dio confianza para seguir con esta
            carrocería.
          </BodyText>

          <div className="bg-blue-950/60 border border-blue-500 p-3 mb-3">
            <div className="text-blue-300 font-bold text-[11px] uppercase mb-2">Lectura CFD — SimScale</div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="text-center">
                <div className="text-white font-mono font-bold text-sm">baja</div>
                <div className="text-gray-400 text-[9px] uppercase">Eje Y (Lateral)</div>
              </div>
              <div className="text-center border-x border-blue-500/40">
                <div className="text-cyan-400 font-mono font-bold text-sm">estable</div>
                <div className="text-gray-400 text-[9px] uppercase">Eje Z (Downforce)</div>
              </div>
              <div className="text-center">
                <div className="text-gold-400 font-mono font-bold text-sm">controlado</div>
                <div className="text-gray-400 text-[9px] uppercase">Estela</div>
              </div>
            </div>
            <div className="border-t border-blue-500/30 pt-2 grid grid-cols-2 gap-1">
              {[
                ["Tipo", "Aerodinámica externa"],
                ["Uso", "Comparar tendencias"],
                ["Zonas revisadas", "Morro y pontones"],
                ["Límite", "No sustituye pista"],
              ].map(([k, v]) => (
                <div key={k} className="text-[9px]">
                  <span className="text-gray-500">{k}: </span>
                  <span className="text-gray-300 font-mono">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <BodyText>
            La conclusión no fue "el coche es perfecto", sino algo más útil: el diseño no mostraba
            ningún problema enorme a primera vista. Para un equipo de instituto eso ya era una buena
            señal, porque nos permitía pasar a fabricar y validar con pruebas físicas.
          </BodyText>

          <Photo src="/assets/cfd_lineas.png" alt="Líneas de flujo SimScale" label="cfd_lineas.png — Líneas de Corriente" height="h-36" fit="contain" />
        </div>

        {/* COL 3 — Túnel de viento */}
        <div className="col-span-1 flex flex-col">
          <div className="bg-cyan-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">VALIDACIÓN EXPERIMENTAL — TÚNEL DE VIENTO</div>
          <SectionTitle>Construcción del Dispositivo</SectionTitle>
          <BodyText>
            Como no tenemos acceso a un túnel de viento real, nos montamos uno casero. La base
            es una cámara rectangular de cartón reforzado con una tapa de plástico transparente
            para poder ver el interior sin molestar al flujo. Como generador de caudal usamos
            un secador de pelo normal dirigido a la entrada. No es preciso, pero es suficiente
            para ver si los hilos se vuelven locos o si el aire sigue una dirección razonable
            alrededor de la carrocería.
          </BodyText>

          <Photo src="/assets/tunel_viento.jpg" alt="Túnel de viento casero" label="tunel_viento.jpg" height="h-28" fit="cover" />

          <SectionTitle>Hilos de Flujo e Interpretación</SectionTitle>
          <BodyText>
            Pegamos hilos muy finos con una gota de cianocrilato en puntos clave del coche:
            morro, pontones y difusor trasero. Al encender el secador, los hilos se mueven con
            el flujo y muestran hacia dónde va el aire en cada zona. Los hilos de la parte
            superior se mantuvieron bastante ordenados, sin señales claras de separación fuerte.
            En la parte trasera se veía más movimiento, que era esperable. No usamos esta prueba
            para sacar números, solo para detectar si había una zona claramente mal diseñada.
          </BodyText>

          <Photo src="/assets/coche_hilos.jpg" alt="Coche con hilos para visualización del flujo" label="coche_hilos.jpg" height="h-28" fit="cover" />

          <BodyText>
            Evidentemente este ensayo no da datos cuantitativos: la velocidad no es uniforme
            ni controlada, así que no puedes medir fuerzas. Pero sí te dice si hay algo muy
            mal. En nuestro caso no vimos una separación exagerada del flujo, así que lo tomamos
            como una validación cualitativa, nada más, pero útil.
          </BodyText>
        </div>

      </div>
      <Footer pageNumber={4} />
    </PageContainer>
  );
};


// =========================================================
// PÁGINA 6: MANUFACTURA + ENSAYO ESTRUCTURAL
// =========================================================
export const Page6: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Manufactura, Control de Calidad y Ensayo Estructural" pageNumber={6} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">

        {/* COL 1 — Fabricación */}
        <div className="col-span-1 flex flex-col">
          <div className="bg-green-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">PROCESO DE FABRICACIÓN</div>
          <SectionTitle>Delegación a MADCUP</SectionTitle>
          <BodyText>
            No tenemos acceso a fresadoras CNC, así que mandamos el archivo a{' '}
            <strong className="text-gold-400">MADCUP</strong>, que es la empresa que organiza
            STEM Racing y ofrece el mecanizado de la carrocería para los equipos participantes.
            El archivo que les enviamos estaba en formato STEP, que es el formato que nos pidieron
            para poder preparar el mecanizado.
          </BodyText>
          <SectionTitle>Verificación DFM</SectionTitle>
          <BodyText>
            Antes de enviar el archivo, lo revisamos en Fusion 360 para ver si había problemas
            de fabricabilidad. Comprobamos que los radios interiores no fueran demasiado pequeños
            para las fresas y que no hubiera socavados. En la primera revisión sí encontramos
            alguna zona problemática y la corregimos. El archivo final lo exportamos en STEP,
            que es el formato estándar para que el software CAM de MADCUP pueda generar las
            trayectorias de mecanizado.
          </BodyText>
          <div className="space-y-1.5 mb-3">
            {[
              { n: "01", t: "Diseño CAD", d: "Modelado 3D en Fusion 360 con FEA integrado." },
              { n: "02", t: "Verificación DFM", d: "Radios mínimos, socavados y exportación STEP." },
              { n: "03", t: "Mecanizado CNC", d: "Fabricación externa por MADCUP sobre bloque de madera." },
              { n: "04", t: "Acabado superficial", d: "Lijado P360→P400, sellador PVA, pintura negra uniforme." },
              { n: "05", t: "Ensamblaje", d: "Montaje con jig de alineación + epoxi de precisión." },
              { n: "06", t: "Scrutineering", d: "Verificación dimensional con calibre Vernier." },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-2 items-start">
                <div className="bg-gold-400 text-black font-black text-[10px] px-1.5 py-0.5 shrink-0">{n}</div>
                <div>
                  <div className="text-white font-bold text-[10px]">{t}</div>
                  <div className="text-gray-400 text-[9px]">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto bg-gold-900/30 border border-gold-400/50 p-3">
            <div className="text-gold-400 font-bold text-[10px] uppercase mb-1">Estado Actual</div>
            <div className="text-[9px] text-gray-300 leading-relaxed mb-2">
              Fichero CAD enviado a MADCUP y carrocería ya recibida. El acabado final se dejó
              en negro uniforme para mantener una superficie simple y sin elementos que generen
              drag extra.
            </div>
            <div className="flex gap-2">
              <div className="bg-green-900/50 border border-green-600 px-2 py-1 text-[9px] text-green-400 font-bold">Diseño: COMPLETADO</div>
              <div className="bg-green-900/50 border border-green-600 px-2 py-1 text-[9px] text-green-400 font-bold">CNC: RECIBIDO</div>
            </div>
          </div>
        </div>

        {/* COL 2 — Control de calidad */}
        <div className="col-span-1 flex flex-col">
          <div className="bg-red-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">CONTROL DE CALIDAD Y ENSAMBLAJE</div>
          <SectionTitle>Sistema de Verificación para el Scrutineering</SectionTitle>
          <BodyText>
            Antes de la carrera, el jurado revisa el coche para comprobar que cumple el
            reglamento: dimensiones, masa, acabado... Para no tener sorpresas el día de la
            competición nos hicimos nuestra propia lista de verificación sacada directamente
            del reglamento oficial. Medimos cada dimensión exterior con calibre Vernier y
            la comparamos con el modelo CAD.
          </BodyText>

          <SectionTitle>Ensamblaje y Alineación del Tren de Rodaje</SectionTitle>
          <BodyText>
            Lo más delicado del montaje es alinear bien las ruedas. Si quedan un poco torcidas,
            la resistencia a la rodadura sube bastante. Para hacerlo bien imprimimos en 3D un
            útil de alineación que mantiene las ruedas rectas respecto al coche.
            Antes de pegar nada con epoxi hacemos siempre un montaje en seco para verificar que
            todo encaja correctamente.
          </BodyText>

          <Table
            headers={["Componente", "Material", "Justificación"]}
            rows={[
              ["Ruedas", "PLA", "Tapadas salvo alojamiento del rodamiento"],
              ["Rodamientos", "Si₃N₄ (cerámico)", "Min. fricción rotacional"],
              ["Carrocería", "Madera CNC", "Ligereza + mecanizabilidad"],
              ["Acabado", "Pintura negra aerosol", "Uniforme, sin detalles que creen drag"],
            ]}
          />

          <SectionTitle>Evaluación de Riesgos en el Puesto de Trabajo</SectionTitle>
          <Table
            headers={["Riesgo", "Causa", "Medida de Control"]}
            rows={[
              ["Irritación ocular", "Polvo de lijado", "Gafas de protección"],
              ["Intoxicación", "Vapores de pintura", "Ventilación forzada"],
              ["Corte", "Herramientas manuales", "Formación y EPI"],
              ["Quemadura", "Cianocrilato exotérmico", "Guantes de nitrilo"],
            ]}
          />

          <div className="mt-2">
            <div className="text-[10px] text-gray-500 uppercase font-bold mb-2">Lista de Verificación Pre-Carrera</div>
            {[
              "Dimensiones exteriores dentro de reglamento",
              "Masa total dentro del límite reglamentario",
              "Rodamientos cerámicos correctamente instalados",
              "Alineación de ruedas verificada con jig",
              "Adhesivo epoxi curado (24h mínimo)",
              "Acabado superficial: negro uniforme sin burbujas",
              "Número de coche visible y fijo",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 border border-gold-400/50 shrink-0" />
                <span className="text-[9px] text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COL 3 — Ensayo estructural alerón */}
        <div className="col-span-1 flex flex-col">
          <div className="bg-red-800 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">ENSAYO ESTRUCTURAL — ALERÓN DELANTERO</div>
          <SectionTitle>Objetivo y Justificación del Ensayo</SectionTitle>
          <BodyText>
            El alerón es probablemente la pieza que más carga soporta: en el momento del disparo
            del CO₂ recibe toda la inercia del coche, y si hay un golpe lateral con los carriles
            de la pista es lo primero que impacta. Para saber cuánto aguantaba de verdad, más
            allá de lo que decía el FEA, diseñamos un ensayo colgando el prototipo completo
            impreso en 3D únicamente por los anclajes del alerón.
          </BodyText>
          <SectionTitle>Metodología</SectionTitle>
          <BodyText>
            Sujetamos el coche al tornillo de banco del laboratorio por los anclajes del alerón,
            dejando el resto del chasis colgando. Fuimos añadiendo herramientas de taller encima,
            cada una pesada antes para llevar cierto control del total. Fuimos subiendo la carga
            poco a poco y paramos cuando ya nos parecía suficiente para el tipo de esfuerzo que
            podía sufrir en carrera.
          </BodyText>

          <Table
            headers={["Elemento de Carga", "Qué Comprobaba"]}
            rows={[
              ["Herramientas pequeñas", "Carga inicial"],
              ["Alicates", "Carga intermedia"],
              ["Llave inglesa", "Carga alta"],
              ["Montaje completo", "Sin grieta visible"],
            ]}
          />

          <div className="bg-black-900 border border-gray-700 p-3 mb-3">
            <div className="text-gray-400 font-bold text-[10px] uppercase mb-1">Datos del Ensayo</div>
            <div className="text-[10px] text-gray-300">
              Carga aplicada de forma progresiva<br />
              Ensayo hecho con el coche colgado por el alerón<br />
              Observación principal: <strong className="text-green-400">sin grieta visible</strong><br />
              Resultado usado como comprobación práctica, no como cálculo exacto
            </div>
          </div>

          <SectionTitle>FEA vs. Ensayo Físico</SectionTitle>
          <BodyText>
            El FEA nos sirvió para localizar zonas delicadas, pero la prueba física fue la que
            nos dio confianza real. Si el alerón aguantaba el peso del coche y varias cargas
            añadidas sin marcarse ni agrietarse, el diseño tenía margen suficiente para seguir
            con el montaje.
          </BodyText>

          <div className="flex-1 min-h-0 relative" style={{ minHeight: '80px' }}>
            <img
              src="/assets/aleron_pesos.jpg"
              alt="Alerón soportando carga en el ensayo"
              className="absolute inset-0 w-full h-full object-contain border border-gray-700 bg-black-900"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.style.display = 'none';
                const fb = t.parentElement?.querySelector('.fb-ph') as HTMLElement;
                if (fb) fb.style.display = 'flex';
              }}
            />
            <div className="fb-ph absolute inset-0 bg-black-700 border border-dashed border-gold-400/30 items-center justify-center" style={{ display: 'none' }}>
              <span className="text-gold-400/50 text-[10px] font-mono uppercase text-center p-2">aleron_pesos.jpg</span>
            </div>
          </div>
        </div>

      </div>
      <Footer pageNumber={6} />
    </PageContainer>
  );
};
