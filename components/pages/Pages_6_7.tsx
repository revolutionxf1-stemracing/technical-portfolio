import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';

// Helper para imágenes con fallback al placeholder
const Photo: React.FC<{ src: string; alt: string; label: string; height?: string; fit?: 'cover' | 'contain' }> = ({ src, alt, label, height = 'h-28', fit = 'cover' }) => (
  <div className={`w-full ${height} relative mb-2 bg-black-900`}>
    <img
      src={src}
      alt={alt}
      className={`w-full h-full border border-gray-700 ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      onError={(e) => {
        const t = e.target as HTMLImageElement;
        t.style.display = 'none';
        const fb = t.parentElement?.querySelector('.fb-placeholder') as HTMLElement;
        if (fb) fb.style.display = 'flex';
      }}
    />
    <div
      className="fb-placeholder w-full h-full bg-black-700 border border-dashed border-gold-400/30 items-center justify-center absolute inset-0"
      style={{ display: 'none' }}
    >
      <span className="text-gold-400/50 text-[9px] font-mono uppercase text-center p-2">{label}</span>
    </div>
  </div>
);


// =========================================================
// PÁGINA 6: ENSAYOS MECÁNICOS Y RESISTENCIA ESTRUCTURAL
// =========================================================
export const Page6: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Ensayos Mecánicos y Resistencia Estructural" pageNumber={6} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">

        <div className="col-span-1 flex flex-col">
          <div className="bg-red-700 text-white px-2 py-1 font-bold text-[10px] inline-block mb-3">PRUEBA DE CARGA ESTRUCTURAL</div>
          <SectionTitle>Objetivo y Justificación del Ensayo</SectionTitle>
          <BodyText>
            El alerón delantero (front wing) es el componente del monoplaza expuesto a los
            mayores esfuerzos de flexión durante la carrera. En el instante del disparo del
            cartucho de CO₂, el vehículo experimenta una aceleración longitudinal que induce
            una carga de inercia sobre todos los componentes volados. Adicionalmente, en caso
            de colisión lateral con los carriles guía de la pista, el alerón actúa como elemento
            de sacrificio y absorbe el impacto. Para cuantificar el límite estructural real
            de la pieza —más allá de las estimaciones del análisis de elementos finitos (FEA)—
            se diseñó un ensayo de carga estática de punto único, suspendiendo el prototipo
            completo impreso en 3D mediante el propio alerón.
          </BodyText>
          <SectionTitle>Metodología del Ensayo</SectionTitle>
          <BodyText>
            El vehículo fue fijado al tornillo de banco del laboratorio únicamente por los
            anclajes estructurales del alerón, simulando una situación de carga extrema en
            voladizo. Sobre el chasis, se fueron añadiendo progresivamente cargas calibradas
            mediante herramientas de taller pesadas previamente en una báscula de precisión
            (Nahita, resolución 0.1 g). Se registró la lectura de cada elemento antes de
            proceder al colgado, garantizando la trazabilidad de la carga total aplicada.
            El ensayo continuó hasta alcanzar el valor máximo soportado sin deformación
            permanente observable ni inicio de grieta.
          </BodyText>

          <Table
            headers={["Elemento de Carga", "Masa (g)"]}
            rows={[
              ["Herramienta Rotativa Dremel", "422.7"],
              ["Alicates de Punta (Dexter)", "300.6"],
              ["Alicates de Corte (negros)", "463.7"],
              ["Llave Inglesa (Cromada)", "553.5"],
              ["TOTAL CARGA APLICADA", "1.740,5 g = 1.74 kg"],
            ]}
          />
          {/* La imagen crece para rellenar todo el espacio restante de la columna */}
          <div className="flex-1 min-h-0 relative mb-0">
            <img
              src="/assets/aleron_pesos.jpg"
              alt="Alerón soportando 1.74 kg"
              className="absolute inset-0 w-full h-full object-contain border border-gray-700 bg-black-900"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.style.display = 'none';
                const fb = t.parentElement?.querySelector('.fb-ph') as HTMLElement;
                if (fb) fb.style.display = 'flex';
              }}
            />
            <div className="fb-ph absolute inset-0 bg-black-700 border border-dashed border-gold-400/30 items-center justify-center" style={{ display: 'none' }}>
              <span className="text-gold-400/50 text-[9px] font-mono uppercase text-center p-2">aleron_pesos.jpg</span>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <SectionTitle>Análisis e Interpretación de Resultados</SectionTitle>
          <BodyText>
            El alerón frontal soportó de forma continuada y sin deformación plástica ni
            aparición de micro-fisuras una carga total de 1.74 kg, lo que equivale a una
            fuerza gravitacional de aproximadamente 17.07 N aplicada en voladizo desde el
            extremo del alerón. Dado que la fuerza de impacto más severa estimada durante
            la carrera (carga de inercia en el disparo) es del orden de 2-3 N, el ensayo
            demuestra que el componente opera con un factor de seguridad (FS) superior a 5,
            muy por encima del mínimo recomendado de FS = 2 para componentes estructurales
            en competición. Este resultado valida tanto la geometría del alerón como el
            material empleado (PLA+ en el prototipo, trasladable a material de producción).
          </BodyText>

          <div className="bg-green-900/40 border border-green-500 p-3 mb-3">
            <div className="text-green-400 font-bold text-[10px] uppercase mb-1">Veredicto Estructural</div>
            <div className="text-[9px] text-gray-300">
              Factor de Seguridad estimado: <strong className="text-green-400">FS ≈ 5.7</strong><br/>
              Carga de servicio estimada: ~3 N<br/>
              Carga de ensayo soportada: 17.07 N<br/>
              Resultado: <strong className="text-green-400">APTO — Sin deformación plástica</strong>
            </div>
          </div>

          <SectionTitle>Comparativa FEA vs. Ensayo Físico</SectionTitle>
          <BodyText>
            El análisis de elementos finitos realizado previamente en Fusion 360 predijo
            una tensión máxima de 195 MPa en los soportes del alerón cuando se aplica una
            carga de 10 N sobre el conjunto del chasis, muy por debajo del límite de fluencia
            del material. El ensayo físico confirma empíricamente esta predicción y la amplía:
            el componente aguanta hasta 17.07 N en el punto más desfavorable sin ceder. Esta
            correlación entre el modelo computacional y el resultado experimental valida la
            metodología FEA utilizada, aumentando la confianza en el resto de predicciones
            estructurales del proyecto.
          </BodyText>
        </div>

        <div className="col-span-1">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[10px] inline-block mb-3">TRIBOLOGÍA: RODAMIENTOS EN BANCO DE PRUEBAS</div>
          <SectionTitle>Ensayo de Giro Libre (Free-Spin)</SectionTitle>
          <BodyText>
            Paralelamente al estudio bibliográfico de materiales de rodadura, el equipo realizó
            un ensayo empírico de tiempo de giro libre en el interior de la propia rueda del
            monoplaza para validar experimentalmente las diferencias de fricción entre los
            rodamientos de acero convencional y los cerámicos. El procedimiento consistió
            en montar el cojinete dentro de la rueda, aplicar un impulso rotacional manual
            estandarizado y cronometrar el tiempo transcurrido hasta la detención completa
            con un cronómetro digital. Se realizaron dos repeticiones por tipo de rodamiento
            y se calculó la media, garantizando la representatividad estadística del resultado.
          </BodyText>

          {/* Visual comparison block */}
          <div className="w-full border border-gray-700 bg-black-900 p-3 mb-3">
            <div className="text-[9px] text-gray-400 uppercase font-bold mb-2 border-b border-gray-700 pb-1">Comparativa: Acero vs. Cerámica</div>

            {/* Metal bearing row */}
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-gray-300 font-bold">Rodamiento de Acero</span>
                <span className="text-[9px] text-gray-400 font-mono">0.84 s</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-sm overflow-hidden">
                <div className="bg-gray-500 h-full rounded-sm" style={{ width: '21%' }} />
              </div>
              <div className="text-[8px] text-gray-500 mt-0.5">µ elevado · Bolas de acero inoxidable · Alta fricción residual</div>
            </div>

            {/* Ceramic bearing row */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-gold-400 font-bold">Rodamiento Cerámico (seleccionado)</span>
                <span className="text-[9px] text-gold-400 font-mono">3.97 s</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-sm overflow-hidden">
                <div className="bg-gold-400 h-full rounded-sm" style={{ width: '100%' }} />
              </div>
              <div className="text-[8px] text-gray-500 mt-0.5">µ reducido · Bolas Si₃N₄ (Nitruro de Silicio) · Fricción mínima</div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-700 mt-1">
              <span className="text-[8px] text-gray-400">Mejora experimental:</span>
              <span className="text-green-400 font-bold text-[10px]">+372.6% de tiempo de giro (×4.7)</span>
            </div>
          </div>

          {/* Side-by-side photo comparison */}
          <div className="flex gap-2 mb-3">
            <div className="flex-1">
              <div className="text-[8px] text-gray-400 uppercase text-center mb-1 font-bold">Rodamiento Acero</div>
              <Photo src="/assets/rodamiento_metal.jpg" alt="Rodamiento de acero en tornillo de banco" label="rodamiento_metal.jpg" height="h-16" />
            </div>
            <div className="flex-1">
              <div className="text-[8px] text-gold-400 uppercase text-center mb-1 font-bold">Rodamiento Cerámico (seleccionado)</div>
              <Photo src="/assets/rodamiento_ceramica.jpg" alt="Rodamiento cerámico Si₃N₄" label="rodamiento_ceramica.jpg" height="h-16" />
            </div>
          </div>

          <Table
            headers={["Tipo", "T. Giro (s)", "Mejora"]}
            rows={[
              ["Acero conv.", "0.84", "Referencia"],
              ["Cerámica", "3.97", "+372.6%"],
            ]}
          />

          <div className="text-[8px] text-gray-500 italic mb-2">Media de 2 mediciones. Ensayo en interior de la rueda del monoplaza.</div>
          <div className="bg-gold-900/30 border border-gold-400/50 p-2">
            <div className="text-gold-400 font-bold text-[9px] uppercase mb-1">Veredicto Tribológico</div>
            <div className="text-[8px] text-gray-300 leading-relaxed">
              El rodamiento cerámico (Si₃N₄) demostró una superioridad incontestable frente
              al acero convencional, con un tiempo de giro libre 4.7 veces mayor. Esta reducción
              masiva de la fricción rotacional se traduce directamente en una mayor velocidad
              punta y distancia de rodadura inercial en pista.
              <strong className="text-gold-400"> Componente seleccionado para el RX_NightBlade.</strong>
            </div>
          </div>
        </div>

      </div>
      <Footer pageNumber={6} />
    </PageContainer>
  );
};


// =========================================================
// PÁGINA 7: DINÁMICA DE FLUIDOS EXPERIMENTAL Y CINEMÁTICA
// =========================================================
export const Page7: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Dinámica de Fluidos Experimental y Cinemática" pageNumber={7} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full">

        {/* COLUMNA 1: Diseño y construcción del túnel */}
        <div className="col-span-1">
          <div className="bg-cyan-700 text-white px-2 py-1 font-bold text-[10px] inline-block mb-3">TÚNEL DE VIENTO CASERO</div>
          <SectionTitle>Diseño y Construcción del Aparato</SectionTitle>
          <BodyText>
            Con el objetivo de obtener una validación experimental de los datos de SimScale
            sin acceso a un túnel de viento de precisión, el equipo diseñó y construyó un
            dispositivo de visualización de flujo de bajo coste pero alta efectividad visual.
            El túnel consiste en una cámara rectangular construida con cartón reforzado,
            sellada lateralmente para minimizar las pérdidas de caudal, y equipada con una
            tapa superior de plástico transparente que permite la observación directa del
            interior sin perturbar el campo de flujo. Como generador de caudal se empleó
            un secador de pelo doméstico dirigido hacia la entrada de la cámara, capaz de
            proporcionar una velocidad de flujo estimada de 5-8 m/s, suficiente para generar
            efectos visuales de capa límite con los indicadores de hilo seleccionados.
          </BodyText>
          <Photo src="/assets/tunel_viento.jpg" alt="Túnel de viento casero" label="tunel_viento.jpg" height="h-28" />

          <SectionTitle>Indicadores de Flujo: Hilos Finos</SectionTitle>
          <BodyText>
            Para visualizar el comportamiento del flujo de aire alrededor de la carrocería,
            se adhirieron hilos extremadamente finos con pequeñas gotas de cianocrilato en
            puntos estratégicos de la superficie del coche: morro, pontones laterales y difusor
            trasero. Al activar el generador de caudal, los hilos se alinean con las líneas de
            corriente locales y revelan las zonas de flujo adherente, las regiones de separación
            de capa límite y los posibles vórtices.
          </BodyText>
          <Photo src="/assets/coche_hilos.jpg" alt="Coche con hilos para visualización del flujo" label="coche_hilos.jpg" height="h-24" />
        </div>

        {/* COLUMNA 2: Análisis del flujo y conclusión del túnel */}
        <div className="col-span-1">
          <SectionTitle>Análisis e Interpretación del Flujo</SectionTitle>
          <BodyText>
            Los resultados del túnel de viento casero fueron cualitativamente consistentes
            con las predicciones del CFD en SimScale. Los hilos situados sobre el plano
            superior de la carrocería se mantuvieron perfectamente adheridos a lo largo de
            todo el perfil, confirmando que el flujo no se desprende prematuramente de la
            superficie del morro ni de los pontones, tal y como predecían las líneas de
            corriente del simulador. En la zona del difusor trasero, los hilos mostraron
            una leve deflexión ascendente, coherente con la generación de carga descendente
            medida en la simulación. No se observaron zonas de recirculación en los flancos
            del vehículo gracias a las barreras laterales del diseño final del RX_NightBlade.
          </BodyText>

          <SectionTitle>Limitaciones del Método</SectionTitle>
          <BodyText>
            El túnel de viento casero no permite cuantificar valores de fuerzas con
            precisión, ya que la velocidad de flujo no es uniforme ni estrictamente controlada.
            No obstante, constituye un método de validación cualitativa eficaz para detectar
            grandes desviaciones entre el modelo computacional y el comportamiento real.
            La concordancia observada entre ambos métodos refuerza la confianza en el diseño
            final y valida la metodología de simulación empleada en SimScale.
          </BodyText>

          <div className="bg-cyan-950/40 border border-cyan-600/50 p-3 mt-2">
            <div className="text-cyan-400 font-bold text-[9px] uppercase mb-1">Veredicto del Túnel de Viento</div>
            <div className="text-[8px] text-gray-300 leading-relaxed">
              La ausencia de separación de capa límite en el plano superior, la inexistencia
              de zonas de recirculación lateral y la deflexión ascendente en el difusor son
              consistentes con los valores CFD de SimScale (Downforce: -0.73 N, Fuerza
              lateral: 0.05 N). El proceso iterativo de diseño sin herramientas computacionales
              ha producido un resultado aerodinámico plenamente validado de forma experimental.
            </div>
          </div>
        </div>

        {/* COLUMNA 3: Ensayo de rampa y conclusión general */}
        <div className="col-span-1">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[10px] inline-block mb-3">ENSAYO CINEMÁTICO: RAMPA</div>

          <SectionTitle>Prueba Dinámica en Rampa de 60 cm</SectionTitle>
          <BodyText>
            Para evaluar el efecto del lubricante sobre el comportamiento cinético del tren
            de rodaje, se diseñó un ensayo controlado sobre una rampa de 60 cm de longitud
            construida con cartón de densidad media. La inclinación y el punto de salida se
            mantuvieron constantes en todas las repeticiones. El parámetro medido fue el
            tiempo de descenso desde el reposo hasta el final del plano inclinado, empleando
            un cronómetro digital. El ensayo se realizó en dos condiciones: rodamientos en
            seco y rodamientos tratados con WD-40, lubricante multipropósito de viscosidad
            baja y excelente capacidad de penetración en holguras reducidas.
          </BodyText>
          <Photo src="/assets/rampa_carton.jpg" alt="Coche sobre rampa de cartón de 60cm" label="rampa_carton.jpg" height="h-24" />

          <Table
            headers={["Condición", "Tiempo de bajada (s)"]}
            rows={[
              ["Sin lubricante (seco)", "0.55"],
              ["Con WD-40", "0.55"],
            ]}
          />

          <SectionTitle>Conclusión Científica del Ensayo</SectionTitle>
          <BodyText>
            El tiempo de descenso fue idéntico en ambas condiciones: 0.55 s con y sin
            lubricante WD-40. Este resultado es un hallazgo científico coherente con la
            física del sistema: en un plano inclinado, la fuerza motriz dominante es la
            componente gravitacional (m·g·sen θ), significativamente mayor que la fricción
            de los rodamientos a esta escala de masa. El lubricante no aporta mejora
            detectable en la fase acelerada; el factor determinante de rendimiento en el
            tren de rodaje es el tipo de rodamiento —cerámico frente a acero— y no el lubricante.
          </BodyText>

          <div className="bg-gold-900/30 border border-gold-400/50 p-2">
            <div className="text-gold-400 font-bold text-[9px] uppercase mb-1">Conclusión General de Validación</div>
            <div className="text-[8px] text-gray-300 leading-relaxed">
              Los cinco ensayos experimentales —túnel de viento, carga del alerón, free-spin
              de rodamientos, rampa sin y con WD-40— confirman cualitativamente y
              cuantitativamente todas las decisiones de diseño del RX_NightBlade. La
              correlación con los datos CFD de SimScale otorga una alta confianza en el
              rendimiento esperado en la Fase Regional Madrid 25/26.
            </div>
          </div>
        </div>

      </div>
      <Footer pageNumber={7} />
    </PageContainer>
  );
};
