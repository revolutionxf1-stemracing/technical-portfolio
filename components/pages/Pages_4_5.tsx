import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';

// =========================================================
// PÁGINA 4: DESARROLLO AERODINÁMICO Y VALIDACIÓN CFD
// =========================================================
export const Page4: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Desarrollo Aerodinámico y Simulación CFD" pageNumber={4} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full">

        <div className="col-span-1">
          <div className="bg-cyan-600 text-white px-2 py-1 font-bold text-[10px] inline-block mb-3">DISEÑO ITERATIVO SIN CFD</div>
          <SectionTitle>Optimización por Prueba y Error</SectionTitle>
          <BodyText>
            La principal característica diferenciadora del proceso de ingeniería del RX_NightBlade
            es que la totalidad del desarrollo aerodinámico se llevó a cabo sin acceso a herramientas
            de simulación computacional durante la fase de diseño. A lo largo de múltiples iteraciones,
            el equipo modeló, imprimió en 3D y evaluó prototipos físicos, ajustando la geometría de
            la carrocería en función de criterios de ingeniería fundamentados en la mecánica de fluidos
            teórica: minimización del área frontal, maximización de la continuidad superficial,
            eliminación de gradientes de presión adversos en la zona trasera y diseño de pontones
            que aíslen el flujo limpio del turbulento generado por las ruedas. Este enfoque, lejos
            de ser una limitación, demuestra una comprensión profunda e intuitiva de los principios
            aerodinámicos, ya que los resultados del CFD —obtenidos solo en la fase final como
            herramienta de validación— confirmaron la idoneidad de todas las decisiones tomadas.
          </BodyText>

          <SectionTitle>Fundamentos del Diseño Final</SectionTitle>
          <BodyText>
            La geometría definitiva del RX_NightBlade integra varios principios aerodinámicos
            trabajados a lo largo del proceso iterativo. El morro adopta una forma cóncavo-convexa
            que canaliza activamente el flujo hacia la parte superior e inferior de la carrocería,
            maximizando la generación de carga descendente en el alerón delantero. Los pontones
            laterales incorporan barreras verticales de separación de flujo que aíslan la zona
            de baja presión central de la turbulencia generada por las ruedas, reduciendo la
            resistencia parásita asociada al efecto Magnus. La zona trasera del vehículo finaliza
            en un difusor de recompresión gradual que recupera la presión estática del flujo
            y minimiza la estela, factor determinante del coeficiente de resistencia al avance.
          </BodyText>
          <PlaceholderImage label="Vista lateral RX_NightBlade (CAD Fusion 360)" height="h-24" />
        </div>

        <div className="col-span-1">
          <div className="bg-blue-700 text-white px-2 py-1 font-bold text-[10px] inline-block mb-3">VALIDACIÓN COMPUTACIONAL (SimScale CFD)</div>
          <SectionTitle>Metodología y Configuración de la Simulación</SectionTitle>
          <BodyText>
            Una vez finalizado el proceso iterativo de diseño físico, se procedió a la validación
            computacional del diseño final mediante la plataforma SimScale, empleando un dominio
            de simulación External Aerodynamics con el solver de volumen finito (FVM) incompresible.
            El equipo aprendió a utilizar SimScale de forma autónoma en un período de una semana,
            configurando el dominio de cálculo, la malla de elementos finitos y las condiciones
            de contorno. La velocidad de entrada del fluido se estableció en <strong className="text-gold-400">20 m/s</strong>,
            valor representativo de la velocidad punta estimada del RX_NightBlade en condiciones
            de competición. La malla fue refinada localmente en las zonas de mayor interés
            aerodinámico: morro, alerón delantero, pontones y difusor trasero.
          </BodyText>

          <SectionTitle>Resultados y Análisis de Fuerzas</SectionTitle>
          <BodyText>
            La simulación convergió con residuos de velocidad y presión por debajo de 1×10⁻⁴,
            asegurando la validez numérica de los resultados. Los valores de fuerza obtenidos
            son altamente favorables y confirman la eficacia del proceso de diseño iterativo.
            La fuerza en el eje Y (lateral) de tan solo <strong className="text-gold-400">0.05 N</strong>
            demuestra la simetría casi perfecta del perfil, esencial para garantizar que el
            vehículo avance en línea recta sin necesidad de corrección de trayectoria. La fuerza
            en el eje Z de <strong className="text-cyan-400">-0.73 N</strong> confirma la generación
            de downforce activo, que presiona el monoplaza contra la pista, incrementa la adherencia
            y estabiliza el vehículo especialmente en la fase de máxima velocidad. La fuerza en
            el eje X de <strong className="text-gold-400">0.00 N</strong> neto en la referencia
            de análisis valida la excelente eficiencia de penetración del perfil diseñado.
          </BodyText>

          {/* CFD Data Highlight */}
          <div className="bg-blue-950/60 border border-blue-500 p-3 my-2">
            <div className="text-blue-300 font-bold text-[10px] uppercase mb-2">Resultados CFD — SimScale (v = 20 m/s)</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-white font-mono font-bold text-sm">0.05 N</div>
                <div className="text-gray-400 text-[8px] uppercase">Eje Y (Lateral)</div>
              </div>
              <div className="text-center border-x border-blue-500/40">
                <div className="text-cyan-400 font-mono font-bold text-sm">-0.73 N</div>
                <div className="text-gray-400 text-[8px] uppercase">Eje Z (Downforce)</div>
              </div>
              <div className="text-center">
                <div className="text-gold-400 font-mono font-bold text-sm">0.00 N</div>
                <div className="text-gray-400 text-[8px] uppercase">Eje X (Drag neto)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <SectionTitle>Interpretación de los Datos CFD</SectionTitle>
          <BodyText>
            Los tres valores de fuerza obtenidos en SimScale permiten caracterizar de forma
            completa el comportamiento aerodinámico del RX_NightBlade. La fuerza lateral (Y)
            de 0.05 N es prácticamente nula e indica que el diseño es perfectamente simétrico
            respecto al plano longitudinal del vehículo, lo que garantiza la ausencia de
            momentos de guiñada inducidos aerodinámicamente que pudieran desviar la trayectoria.
            El downforce (Z = -0.73 N) es el parámetro más relevante desde el punto de vista
            del rendimiento en pista: esta fuerza negativa incrementa la carga normal sobre los
            neumáticos, reduciendo la resistencia a la rodadura relativa y mejorando la estabilidad.
            El hecho de que el equipo, sin haber utilizado CFD durante el diseño, haya llegado
            a una geometría que genera downforce neto positivo demuestra la solidez del proceso
            de ingeniería iterativa aplicado.
          </BodyText>

          <SectionTitle>Visualización del Flujo</SectionTitle>
          <BodyText>
            Las imágenes de post-procesado de SimScale muestran las líneas de corriente coloreadas
            por velocidad del fluido. Se observa cómo el flujo libre de alta velocidad se
            ve perturbado por la carrocería, acelerándose en las zonas de menor sección y
            generando las zonas de baja presión que producen la carga aerodinámica descendente.
            La ausencia de zonas de recirculación en la estela trasera confirma que el difusor
            cumple su función de recompresión gradual.
          </BodyText>
          <img
            src="/assets/cfd_lineas.png"
            alt="Líneas de flujo SimScale"
            className="w-full h-24 object-cover mb-2 border border-gray-700"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <PlaceholderImage label="cfd_lineas.png — Líneas de Corriente SimScale" height="h-24" />

          <img
            src="/assets/cfd_grafica.png"
            alt="Gráfica de convergencia SimScale"
            className="w-full h-20 object-cover mb-2 border border-gray-700"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <PlaceholderImage label="cfd_grafica.png — Gráfica de Fuerzas" height="h-20" />
        </div>

      </div>
      <Footer pageNumber={4} />
    </PageContainer>
  );
};


// =========================================================
// PÁGINA 5: MANUFACTURA (MADCUP) Y CONTROL DE CALIDAD
// =========================================================
export const Page5: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Manufactura Avanzada y Proceso de Fabricación" pageNumber={5} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full">

        <div className="col-span-1">
          <div className="bg-green-700 text-white px-2 py-1 font-bold text-[10px] inline-block mb-3">PROCESO DE FABRICACIÓN</div>
          <SectionTitle>Delegación a MADCUP: Mecanizado CNC Profesional</SectionTitle>
          <BodyText>
            Dadas las limitaciones de acceso a maquinaria CNC de precisión a escala estudiantil
            —ya que encontrar una empresa dispuesta a proporcionar tiempo de fresadora a un equipo
            escolar presenta barreras logísticas considerables—, el equipo tomó la decisión
            estratégica de delegar el mecanizado de la carrocería directamente a <strong className="text-gold-400">MADCUP</strong>,
            la organización oficial de STEM Racing España. Esta decisión garantiza que el RX_NightBlade
            sea mecanizado en condiciones industriales con los más altos estándares de calidad
            y precisión dimensional, utilizando bloques de madera de densidad controlada y fresadoras
            CNC de 4 ejes con tolerancias de producción de ±0.1 mm o superiores. El fichero CAD
            final en formato STEP fue entregado a MADCUP tras superar la verificación de fabricabilidad
            (DFM), asegurando la ausencia de geometrías con radios interiores inferiores al diámetro
            de la fresa de acabado y sin socavados que impidan la extracción del bloque mecanizado.
          </BodyText>
          <SectionTitle>Preparación del Fichero para Fabricación (DFM)</SectionTitle>
          <BodyText>
            Previamente a la entrega del fichero a MADCUP, el equipo realizó en Fusion 360 un
            análisis exhaustivo de fabricabilidad del diseño. El análisis de radio mínimo verificó
            que ninguna zona de la carrocería presentara radios interiores problemáticos para las
            fresas disponibles. Asimismo, el análisis de accesibilidad detectó y eliminó zonas
            con socavados en la primera revisión del diseño. El fichero final fue exportado
            en formato STEP neutro, garantizando la interoperabilidad con el software CAM
            que utilice MADCUP para la generación de trayectorias de herramienta.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Impresión 3D: Prototipado Iterativo</SectionTitle>
          <BodyText>
            Durante todo el proceso de desarrollo previo al encargo del modelo definitivo a
            MADCUP, el equipo fabricó sus propios prototipos mediante impresión 3D en tecnología
            FDM (Fused Deposition Modeling) con filamento PLA+ y PETG. Esta capacidad de
            prototipado rápido fue determinante para el éxito del proceso de diseño iterativo:
            cada modificación geométrica del perfil aerodinámico podía ser evaluada físicamente
            en el túnel de viento casero en un plazo de pocas horas tras el modelado en Fusion 360.
            Los prototipos impresos también fueron los utilizados en los ensayos de carga estructural
            del alerón y en las pruebas de rodadura en rampa, proporcionando datos de validación
            valiosos antes de comprometer el material definitivo.
          </BodyText>
          <SectionTitle>Post-Procesado del Modelo Definitivo</SectionTitle>
          <BodyText>
            Una vez recibido el modelo mecanizado por MADCUP, el equipo procederá a un proceso
            de acabado superficial estandarizado. El proceso incluye un lijado progresivo desde
            grano 360 hasta grano 400, la aplicación de una capa de sellador PVA diluido en agua
            (1:1) para consolidar la superficie de madera, y finalmente dos a tres manos de
            pintura de acabado en aerosol para carrocería de automoción. Este tratamiento reduce
            la rugosidad superficial Ra, contribuyendo a un flujo de capa límite más laminar
            y a un menor coeficiente de arrastre viscoso en las zonas de bajo espesor.
          </BodyText>
          <PlaceholderImage label="Prototipo FDM en túnel de viento" height="h-20" />
        </div>

        <div className="col-span-1">
          <div className="bg-red-700 text-white px-2 py-1 font-bold text-[10px] inline-block mb-3">CONTROL DE CALIDAD Y ESCRUTINIO</div>
          <SectionTitle>Sistema de Verificación para el Escrutinio</SectionTitle>
          <BodyText>
            El escrutinio técnico (scrutineering) de STEM Racing es una inspección exhaustiva
            realizada por el jurado de ingenieros antes de la carrera, en la que se verifica
            que el monoplaza cumple estrictamente las especificaciones del reglamento técnico
            en dimensiones, masa y seguridad. Para garantizar la superación de este proceso,
            el equipo implementó un protocolo de verificación propio con listas de comprobación
            (checklists) estandarizadas, adaptadas directamente de los criterios del reglamento
            oficial de STEM Racing España. Cada dimensión externa es verificada con calibre
            Vernier y comparada con los valores del modelo CAD.
          </BodyText>
          <SectionTitle>Ensamblaje y Alineación del Tren de Rodaje</SectionTitle>
          <BodyText>
            El ensamblaje del tren de rodaje —instalación de rodamientos cerámicos, ejes y
            ruedas de PEEK— es la operación más sensible de todo el proceso de fabricación.
            Se emplea un útil de alineación (jig) impreso en 3D que garantiza la perpendicularidad
            de los ejes de las ruedas respecto al eje longitudinal del vehículo, eliminando
            la resistencia de rodadura parásita causada por la convergencia o divergencia
            de las ruedas. Antes de la aplicación del adhesivo epoxi de fijación definitivo,
            se realiza siempre un montaje en seco para verificar el ajuste de todos los
            componentes y detectar posibles interferencias.
          </BodyText>
          <SectionTitle>Estado de Fabricación Actual</SectionTitle>
          <div className="bg-gold-900/30 border border-gold-400/50 p-2">
            <div className="text-gold-400 font-bold text-[9px] uppercase mb-1">Estado del RX_NightBlade</div>
            <div className="text-[8px] text-gray-300 leading-relaxed">
              El fichero definitivo ha sido enviado a MADCUP para mecanizado CNC.
              La masa total del vehículo será determinada y registrada en el momento
              de la recepción del modelo mecanizado, previo al proceso de acabado
              superficial y ensamblaje del tren de rodaje.
            </div>
          </div>
          <SectionTitle>Evaluación de Riesgos en el Puesto de Trabajo</SectionTitle>
          <Table
            headers={["Riesgo", "Causa", "Control"]}
            rows={[
              ["Irritación ocular", "Polvo lijado", "Protección ocular"],
              ["Narcosis", "Vapores pintura", "Ventilación"],
              ["Corte", "Herramientas manuales", "Formación"],
            ]}
          />
        </div>

      </div>
      <Footer pageNumber={5} />
    </PageContainer>
  );
};
