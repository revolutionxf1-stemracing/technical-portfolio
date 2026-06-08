import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';

export const Page4: React.FC = () => {
  return (
    <PageContainer>
      <Header title="3D Modelling & DFM" pageNumber={4} />
      <div className="p-6 grid grid-cols-4 gap-6 h-full">
        <div className="col-span-1">
          <SectionTitle>Arquitectura CAD</SectionTitle>
          <BodyText>
            El modelo maestro se construyo con parametros globales para longitud, secciones, offsets de guia y volumenes de seguridad. Esto permitio iterar sin reconstruir el arbol.
          </BodyText>
          <Table
            headers={['Parametro', 'Uso', 'Control']}
            rows={[
              ['L_total', 'packaging', 'bloqueado por regla'],
              ['W_body', 'aero lateral', 'vinculado a guia'],
              ['Z_com', 'estabilidad', 'calibrado en test'],
              ['t_shell', 'rigidez', 'DFM/CNC'],
            ]}
          />
          <PlaceholderImage label="Arbol CAD con nomenclatura estandar" height="h-24" />
        </div>

        <div className="col-span-1">
          <SectionTitle>Continuidad de Superficies</SectionTitle>
          <BodyText>
            Se verifico continuidad G1/G2 en zonas de aceleracion de flujo. Los cambios de curvatura bruscos se eliminaron para reducir separacion en CFD y facilitar acabado superficial.
          </BodyText>
          <PlaceholderImage label="Curvature comb + zebra analysis" height="h-24" />

          <SectionTitle>Control de Interferencias</SectionTitle>
          <BodyText>
            Se ejecutaron revisiones de colision con ruedas, guia y volumen de cartucho, mas chequeos de desmontaje para mantenimiento rapido en paddock.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Design for Manufacture</SectionTitle>
          <BodyText>
            Cada geometria se filtro por capacidades reales de mecanizado: radio minimo de herramienta, acceso de fresa y orientacion para minimizar fijaciones y tiempos de ciclo.
          </BodyText>
          <Table
            headers={['Restriccion', 'Limite', 'Decision']}
            rows={[
              ['Radio interno', '>= 1.5 mm', 'fillets actualizados'],
              ['Undercut', '0 permitido', 'split de cuerpo'],
              ['Tolerancia critica', '+/-0.10 mm', 'operacion de acabado'],
              ['Pegado', '0.10 mm gap', 'caras offset'],
            ]}
          />
        </div>

        <div className="col-span-1">
          <SectionTitle>Iteraciones de Modelo</SectionTitle>
          <Table
            headers={['Rev', 'Cambio', 'Efecto']}
            rows={[
              ['R1', 'nariz inicial', 'base de referencia'],
              ['R2', 'lateral limpio', '-5.1% drag'],
              ['R3', 'canales guiados', '-2.4% drag'],
              ['R4', 'split CNC', '+repetibilidad'],
              ['R5', 'final', 'aprobado gate G3'],
            ]}
          />

          <PlaceholderImage label="Plano ortografico interno con cotas maestras" height="h-24" />
          <BodyText>
            El entregable A4 ortografico de competicion se genero directamente desde este modelo para evitar incoherencias entre portfolio y documentacion de scrutineering.
          </BodyText>
        </div>
      </div>
      <Footer pageNumber={4} />
    </PageContainer>
  );
};

export const Page5: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Computer Aided Analysis" pageNumber={5} />
      <div className="p-6 grid grid-cols-3 gap-6 h-full">
        <div className="col-span-1">
          <SectionTitle>CFD: Configuracion</SectionTitle>
          <BodyText>
            Simulacion estacionaria con condiciones de pista equivalentes. Se aplico refinamiento local en nariz, ruedas y estela para capturar gradientes de presion relevantes.
          </BodyText>
          <Table
            headers={['Bloque', 'Ajuste', 'Motivo']}
            rows={[
              ['Dominio', 'extendido', 'evitar bloqueo'],
              ['Malla', 'local refinada', 'captura wake'],
              ['Turbulencia', 'k-omega SST', 'separacion'],
              ['Convergencia', '<1e-4', 'consistencia'],
            ]}
          />
          <PlaceholderImage label="Malla CFD y zonas de refinamiento" height="h-24" />

          <SectionTitle>Independencia de Malla</SectionTitle>
          <BodyText>
            Se validaron tres densidades de malla. El cambio de drag entre media y fina fue inferior al 1.5%, aceptando la media para iteraciones rapidas.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Resultados CFD por Iteracion</SectionTitle>
          <Table
            headers={['Modelo', 'Drag [N]', 'Lift [N]', 'Decision']}
            rows={[
              ['R1', '0.287', '-0.082', 'referencia'],
              ['R2', '0.264', '-0.121', 'mantener'],
              ['R3', '0.252', '-0.153', 'ajustar lateral'],
              ['R4', '0.244', '-0.171', 'validar manufactura'],
              ['R5', '0.239', '-0.182', 'final'],
            ]}
          />

          <PlaceholderImage label="Mapa de presion comparativo R1 vs R5" height="h-24" />

          <SectionTitle>FEA Estructural</SectionTitle>
          <BodyText>
            Se evaluaron zonas criticas con carga equivalente de manipulado y carrera para evitar deformaciones permanentes en fijaciones, aletas y soporte de guia.
          </BodyText>
          <PlaceholderImage label="FEA: tensiones de Von Mises" height="h-20" />
        </div>

        <div className="col-span-1">
          <SectionTitle>Correlacion CAA a Decision</SectionTitle>
          <BodyText>
            Ningun resultado de CAA se acepto aislado. Cada mejora propuesta debia superar filtro de cumplimiento y de fabricabilidad antes de pasar a prototipo fisico.
          </BodyText>

          <Table
            headers={['Hallazgo', 'Accion', 'Impacto']}
            rows={[
              ['Separacion frontal', 'bajar curvatura', '-3.4% drag'],
              ['Wake rueda', 'placa lateral', '-1.2% drag'],
              ['Flexion soporte', 'nervio interno', '+42% rigidez'],
              ['Masa alta', 'pocket controlado', '-1.8 g'],
            ]}
          />

          <div className="bg-gold-500/10 p-2 border border-gold-400/35 mt-2">
            <h4 className="text-gold-300 font-bold text-[10px] uppercase tracking-[0.12em] mb-1">Evidencia para jueces</h4>
            <BodyText className="mb-0">
              Se incluyen capturas de setup, malla, residuales y comparativa entre revisiones para demostrar dominio de herramienta y criterio de ingenieria.
            </BodyText>
          </div>

          <PlaceholderImage label="Residuales + criterio de convergencia" height="h-24" />
        </div>
      </div>
      <Footer pageNumber={5} />
    </PageContainer>
  );
};

export const Page6: React.FC = () => {
  return (
    <PageContainer>
      <Header title="CAM / CNC" pageNumber={6} />
      <div className="p-6 grid grid-cols-3 gap-6 h-full">
        <div className="col-span-1">
          <SectionTitle>Plan de Mecanizado</SectionTitle>
          <BodyText>
            El cuerpo se fabrico en dos mitades para asegurar accesibilidad total, acabado uniforme y control dimensional en superficies funcionales.
          </BodyText>
          <Table
            headers={['Fase', 'Operacion', 'Objetivo']}
            rows={[
              ['OP10', 'desbaste 3 ejes', 'retiro rapido material'],
              ['OP20', 'semiacabado', 'preparar tolerancias'],
              ['OP30', 'acabado fino', 'superficie aero'],
              ['OP40', 'taladros criticos', 'alineacion eje'],
            ]}
          />
          <PlaceholderImage label="Secuencia CAM con herramientas" height="h-24" />

          <SectionTitle>Postprocesado</SectionTitle>
          <BodyText>
            Se verifico el codigo G con simulacion de colisiones y revision manual de primeras trayectorias para evitar marcas por entrada/salida en zonas visibles.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Parametros CAM</SectionTitle>
          <Table
            headers={['Parametro', 'Valor', 'Justificacion']}
            rows={[
              ['Herramienta', 'fresa bola', 'acabado continuo'],
              ['Step-over', '8-12%', 'rugosidad controlada'],
              ['Feed', 'segun material', 'evitar vibracion'],
              ['Stock final', '0.15 mm', 'acabado limpio'],
            ]}
          />

          <PlaceholderImage label="Simulacion trayectorias y tiempo ciclo" height="h-24" />

          <SectionTitle>Control Dimensional</SectionTitle>
          <BodyText>
            Tras cada corrida se midieron cotas criticas en plantilla de control. Las desviaciones mayores al limite interno se corrigieron antes de ensamblaje.
          </BodyText>
          <Table
            headers={['Cota', 'Nominal', 'Medido', 'Estado']}
            rows={[
              ['ancho guia', 'x.xx', 'x.xx', 'OK'],
              ['altura eje', 'x.xx', 'x.xx', 'OK'],
              ['simetria lateral', '0.00', '0.05', 'OK'],
            ]}
          />
        </div>

        <div className="col-span-1">
          <SectionTitle>Evidencia de Capacidad CNC</SectionTitle>
          <BodyText>
            Para puntuar maximo en CAM/CNC se muestra cadena completa: CAD parametrico, preparacion CAM, simulacion, ejecucion CNC y control metrologico posterior.
          </BodyText>
          <div className="bg-gold-500/10 p-2 border border-gold-400/35 mb-3">
            <p className="text-gold-300 text-[9px] font-semibold uppercase tracking-[0.14em]">Checklist CAM/CNC para jurado</p>
            <ul className="text-[9px] text-gray-300 list-disc list-inside mt-1 space-y-1">
              <li>capturas de toolpath con nombre de operacion</li>
              <li>tabla de herramientas y offsets usados</li>
              <li>evidencia de pieza en maquina</li>
              <li>registro de inspeccion post-mecanizado</li>
            </ul>
          </div>

          <PlaceholderImage label="Fotos reales: setup CNC + pieza terminada" height="h-28" />
          <PlaceholderImage label="Hoja de control dimensional firmada" height="h-20" />
        </div>
      </div>
      <Footer pageNumber={6} />
    </PageContainer>
  );
};

export const Page7: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Fabricacion, Ensamblaje y QA" pageNumber={7} />
      <div className="p-6 grid grid-cols-4 gap-6 h-full">
        <div className="col-span-1">
          <SectionTitle>Procesos No CNC</SectionTitle>
          <BodyText>
            Se documentaron operaciones complementarias: lijado tecnico, sellado, imprimacion, pintado y curado controlado. Cada etapa afecta masa final y acabado superficial.
          </BodyText>
          <PlaceholderImage label="Secuencia de acabado superficial" height="h-24" />

          <SectionTitle>Jigs y Utiles</SectionTitle>
          <BodyText>
            Se uso un jig de ensamblaje para fijar alineacion de componentes criticos y reducir dispersion entre coche A y coche B.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Plan de Ensamblaje</SectionTitle>
          <Table
            headers={['Paso', 'Control', 'Criterio']}
            rows={[
              ['1', 'dry fit', 'sin interferencias'],
              ['2', 'pegado', 'alineacion <0.1 mm'],
              ['3', 'curado', 'tiempo controlado'],
              ['4', 'verificacion', 'peso + geometria OK'],
            ]}
          />

          <PlaceholderImage label="Fotos del jig y montaje final" height="h-24" />

          <SectionTitle>Trazabilidad de Piezas</SectionTitle>
          <BodyText>
            Cada coche y subcomponente se etiqueto por revision para relacionar cualquier desviacion de pista con su lote de fabricacion.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Quality Assurance</SectionTitle>
          <Table
            headers={['Control', 'Frecuencia', 'Estado']}
            rows={[
              ['Masa total', 'cada unidad', '100%'],
              ['Geometria clave', 'cada unidad', '100%'],
              ['Rodadura libre', 'cada unidad', '100%'],
              ['Checklist regla', 'pre-evento', '100%'],
            ]}
          />

          <BodyText>
            Las no conformidades se registraron con accion correctiva inmediata y responsable asignado. Ninguna unidad avanzo a carrera con desviaciones abiertas.
          </BodyText>

          <PlaceholderImage label="Registro QA y NCR cerradas" height="h-24" />
        </div>

        <div className="col-span-1">
          <SectionTitle>Seguridad de Taller</SectionTitle>
          <Table
            headers={['Riesgo', 'Prob', 'Impacto', 'Control']}
            rows={[
              ['Polvo fino', 'M', 'M', 'extraccion + EPI'],
              ['Fumes', 'B', 'M', 'ventilacion activa'],
              ['Corte herramienta', 'B', 'A', 'resguardos'],
              ['Impacto pieza', 'B', 'A', 'procedimiento setup'],
            ]}
          />

          <div className="bg-gold-500/10 p-2 border border-gold-400/35">
            <h4 className="text-gold-300 font-bold text-[10px] uppercase tracking-[0.12em] mb-1">Mensaje para el jurado</h4>
            <BodyText className="mb-0">
              Este apartado demuestra ejecucion industrial real, control de proceso y cultura de seguridad, criterios clave del KPI Other Manufacturing.
            </BodyText>
          </div>

          <PlaceholderImage label="SDS + matriz de riesgo firmada" height="h-20" />
        </div>
      </div>
      <Footer pageNumber={7} />
    </PageContainer>
  );
};
