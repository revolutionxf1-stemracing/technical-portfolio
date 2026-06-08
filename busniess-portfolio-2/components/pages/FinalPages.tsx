import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';
import { StudentEvidencePanel } from '../StudentEvidence';

export const Page8: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Testing & Correlation" pageNumber={8} />
      <div className="p-6 grid grid-cols-3 gap-6 h-full">
        <div className="col-span-1">
          <div className="bg-red-900/15 border border-red-400/35 p-2 mb-2">
            <p className="text-red-300 text-[9px] uppercase tracking-[0.12em] font-semibold">Evolucion competitiva RevolutionX</p>
            <p className="text-gray-200 text-[9px] mt-1">De 2do puesto Entry 24/25 a flujo de validacion tecnico completo en temporada 2026.</p>
          </div>
          <div className="bg-gold-500 text-black-950 px-2 py-1 font-bold text-xs inline-block mb-2">PLAN DE ENSAYOS</div>
          <BodyText>
            Se ejecuto un plan DOE con replicas para aislar variables de mayor impacto: rozamiento, estabilidad de guia, masa y respuesta aero en salida.
          </BodyText>

          <Table
            headers={['Ensayo', 'Replicas', 'Variable']}
            rows={[
              ['Rodadura', '5', 'friccion mecanica'],
              ['Lanzamiento', '5', 'tiempo total'],
              ['Alineacion', '3', 'desvio lateral'],
              ['Masa y CoM', '3', 'consistencia'],
            ]}
          />

          <PlaceholderImage label="Banco de pruebas y protocolo de test" height="h-28" />
        </div>

        <div className="col-span-1">
          <SectionTitle>Correlacion Virtual vs Fisico</SectionTitle>
          <BodyText>
            Para cada revision final se compararon predicciones CFD con ensayos fisicos. El error se mantuvo dentro del umbral interno para validar el modelo de simulacion.
          </BodyText>

          <Table
            headers={['Rev', 'CFD drag', 'Tunel/track', 'Error']}
            rows={[
              ['R3', '0.252', '0.261', '3.6%'],
              ['R4', '0.244', '0.251', '2.9%'],
              ['R5', '0.239', '0.245', '2.5%'],
            ]}
          />

          <PlaceholderImage label="Comparativa de curvas CFD y test" height="h-24" />

          <SectionTitle>Repetibilidad</SectionTitle>
          <BodyText>
            La desviacion estandar de tiempos se redujo progresivamente mediante control dimensional y mejora del proceso de ensamblaje.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Resultados de Rendimiento</SectionTitle>
          <Table
            headers={['Metric', 'Base Entry 24/25', 'Final 2026', 'Mejora']}
            rows={[
              ['Tiempo [s]', '1.122', '1.066', '-4.99%'],
              ['Drag [N]', 'N/A formal', '0.239', 'modelo validado'],
              ['Dispersion [s]', '0.014', '0.006', '-57.14%'],
              ['NCR abiertas', '4', '0', 'cerradas'],
            ]}
          />

          <div className="bg-gold-500/10 p-2 border border-gold-400/35 my-2">
            <h4 className="text-gold-300 font-bold text-[10px] uppercase tracking-[0.12em] mb-1">Conclusiones de test</h4>
            <BodyText className="mb-0">
              Los datos de pista confirmaron las decisiones de diseno. Se priorizo consistencia de carrera sobre mejoras marginales no repetibles.
            </BodyText>
          </div>

          <PlaceholderImage label="Video frame-by-frame de salida" height="h-20" />
        </div>
      </div>
      <Footer pageNumber={8} />
    </PageContainer>
  );
};

export const Page9: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Design Process Evaluation" pageNumber={9} />
      <div className="p-6 grid grid-cols-4 gap-6 h-full">
        <div className="col-span-1">
          <div className="bg-gold-500 text-black-950 px-1 text-[10px] font-bold mb-2">LOG DE ITERACIONES</div>
          <BodyText>
            Este apartado documenta por que cambiamos el diseno, que evidencia usamos y que resultado se obtuvo. Se incluyen tambien decisiones descartadas.
          </BodyText>

          <Table
            headers={['Rev', 'Cambio', 'Estado']}
            rows={[
              ['R1', 'base inicial', 'cerrada'],
              ['R2', 'nariz optimizada', 'cerrada'],
              ['R3', 'lateral revisado', 'cerrada'],
              ['R4', 'DFM split', 'cerrada'],
              ['R5', 'final', 'aprobada'],
            ]}
          />
        </div>

        <div className="col-span-1">
          <SectionTitle>Decisiones Descargadas</SectionTitle>
          <BodyText>
            Tambien se puntua el criterio de descarte. Documentamos soluciones que parecian rapidas pero elevaban riesgo de incumplimiento o inestabilidad de fabricacion.
          </BodyText>

          <Table
            headers={['Opcion', 'Motivo descarte', 'Evidencia']}
            rows={[
              ['VG grandes', 'sube drag', 'CFD R2'],
              ['pared ultrafina', 'riesgo rotura', 'FEA + test'],
              ['single-body', 'mala accesibilidad', 'CAM sim'],
            ]}
          />

          <PlaceholderImage label="Registro de cambios con firmas" height="h-24" />
        </div>

        <div className="col-span-1">
          <SectionTitle>Impacto de Cada Cambio</SectionTitle>
          <BodyText>
            Las mejoras se monitorizaron con KPI comunes para evitar sesgo. Solo se aceptaron cambios con impacto neto positivo y sin penalizar cumplimiento.
          </BodyText>
          <PlaceholderImage label="Grafica de contribucion por revision" height="h-24" />

          <SectionTitle>Lecciones Tecnicas</SectionTitle>
          <ul className="list-disc list-inside text-[9px] text-gray-300 space-y-1">
            <li>La calidad de superficie influye mas de lo esperado.</li>
            <li>La repetibilidad del setup CNC es critica.</li>
            <li>El control de masa debe integrarse desde CAD.</li>
            <li>El mejor CFD no sustituye ensayos repetibles.</li>
          </ul>
        </div>

        <div className="col-span-1">
          <SectionTitle>Cierre de Ciclo de Diseno</SectionTitle>
          <BodyText>
            Se completo un ciclo cerrado de ingenieria: investigar, modelar, analizar, fabricar, probar, evaluar y volver a disenar. Esa trazabilidad es el centro de este portfolio.
          </BodyText>

          <div className="bg-gold-500/10 p-2 border border-gold-400/35">
            <h4 className="text-gold-300 font-bold text-[10px] uppercase tracking-[0.12em] mb-1">Evidencia para scoring</h4>
            <BodyText className="mb-0">
              Este contenido apunta directamente al KPI Evaluation y refuerza Design Concept, Testing y Portfolio Quality.
            </BodyText>
          </div>

          <PlaceholderImage label="Roadmap de mejora 2026 -> 2027" height="h-24" />
        </div>
      </div>
      <Footer pageNumber={9} />
    </PageContainer>
  );
};

export const Page10: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Compliance Matrix & Deliverables" pageNumber={10} />
      <div className="p-6 grid grid-cols-3 gap-6 h-full">
        <div className="col-span-1">
          <div className="bg-gold-500 text-black-950 px-1 text-[10px] font-bold mb-2">MATRIZ DE CUMPLIMIENTO</div>
          <BodyText>
            Se verifico cada requisito tecnico y de competicion con evidencia asociada para reducir riesgo en scrutineering y durante la entrevista tecnica.
          </BodyText>

          <Table
            headers={['Articulo', 'Requisito', 'Evidencia']}
            rows={[
              ['C5.5', 'contenido portfolio', 'pag 2-11'],
              ['C5.5.1', 'CAD/CAM/CNC', 'pag 4-7'],
              ['C5.5.2', 'A4 ortografica', 'anexo A'],
              ['C5.5.3', 'A4 render', 'anexo B'],
              ['Appendix III', 'checklist envio', 'pag 10'],
            ]}
          />

          <PlaceholderImage label="Checklist pre-scrutineering firmado" height="h-24" />
        </div>

        <div className="col-span-1">
          <SectionTitle>Entregables Oficiales</SectionTitle>
          <Table
            headers={['Entregable', 'Formato', 'Estado']}
            rows={[
              ['Portfolio tecnico', 'A3 PDF', 'listo'],
              ['Dibujo ortografico', 'A4 PDF', 'listo'],
              ['Render 3D', 'A4 PDF', 'listo'],
              ['Copia digital', 'cloud/USB', 'listo'],
            ]}
          />

          <SectionTitle>Versionado y Control</SectionTitle>
          <BodyText>
            Todos los documentos se controlaron por version, fecha y responsable tecnico para que jurado y equipo trabajen siempre sobre la misma revision valida.
          </BodyText>

          <PlaceholderImage label="Tabla de versiones y firmas" height="h-24" />

          <SectionTitle>Nota de Clase</SectionTitle>
          <BodyText>
            Si el equipo compite en Development, se prepara una version recortada a 5 paginas de contenido manteniendo la misma trazabilidad de evidencia.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Gate Final de Conformidad</SectionTitle>
          <Table
            headers={['Gate', 'Pregunta', 'Resultado']}
            rows={[
              ['G1', 'cumple formato?', 'si'],
              ['G2', 'cumple tecnica?', 'si'],
              ['G3', 'evidencia completa?', 'si'],
              ['G4', 'listo para juez?', 'si'],
            ]}
          />

          <div className="bg-gold-500/10 p-2 border border-gold-400/35 mb-3">
            <h4 className="text-gold-300 font-bold text-[10px] uppercase tracking-[0.12em] mb-1">Preparacion de entrevista</h4>
            <BodyText className="mb-0">
              Cada miembro del equipo domina datos clave de su area para responder con precision tecnica y consistencia con el portfolio entregado.
            </BodyText>
          </div>

          <PlaceholderImage label="Guion de defensa tecnica por rol" height="h-20" />
          <PlaceholderImage label="Anexo A4 ortografico y render" height="h-20" />
        </div>
      </div>
      <Footer pageNumber={10} />
    </PageContainer>
  );
};

export const Page11: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Final Engineering Summary" pageNumber={11} />
      <div className="p-6 grid grid-cols-4 gap-6 h-full">
        <div className="col-span-1">
          <div className="bg-gold-500 text-black-950 px-1 text-[10px] font-bold mb-2">RESULTADOS FINALES</div>
          <Table
            headers={['Indicador', 'Valor final', 'Estado']}
            rows={[
              ['Drag CFD', '0.239 N', 'OK'],
              ['Tiempo medio', '1.066 s', 'OK'],
              ['Dispersion', '0.006 s', 'OK'],
              ['Conformidad', '100%', 'OK'],
            ]}
          />

          <BodyText>
            El objetivo principal no fue solo velocidad pico, sino convertir a RevolutionX en un equipo tecnicamente solido, repetible y defendible ante jueces en categorias superiores.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Replica Coche A / B</SectionTitle>
          <BodyText>
            Se fabricaron dos unidades equivalentes con el mismo flujo de proceso para minimizar diferencias de rendimiento en carrera y respaldo operativo.
          </BodyText>
          <PlaceholderImage label="Comparativa dimensional coche A vs B" height="h-24" />

          <SectionTitle>Robustez de Proceso</SectionTitle>
          <BodyText>
            Se definieron parametros de proceso bloqueados para evitar variaciones por operario y mantener resultados estables durante toda la temporada.
          </BodyText>
        </div>

        <div className="col-span-1">
          <SectionTitle>Contribucion por Area</SectionTitle>
          <Table
            headers={['Area', 'Responsable', 'Salida']}
            rows={[
              ['Research', 'A', 'benchmark + hipotesis'],
              ['CAD/CAA', 'B', 'modelo + simulaciones'],
              ['CAM/CNC', 'C', 'fabricacion + QA'],
              ['Testing', 'D', 'DOE + evaluacion'],
            ]}
          />

          <PlaceholderImage label="Panel de datos para judges Q&A" height="h-24" />
        </div>

        <div className="col-span-1">
          <SectionTitle>Plan de Mejora Continua</SectionTitle>
          <BodyText>
            Para la siguiente fase competitiva se priorizan tres lineas: mejora incremental de aero frontal, automatizacion del control dimensional y ampliacion del banco de ensayos.
          </BodyText>

          <ul className="list-disc list-inside text-[9px] text-gray-300 space-y-1 mb-3">
            <li>cerrar gap CFD-test por debajo del 2%</li>
            <li>reducir tiempo de setup CAM en 20%</li>
            <li>fortalecer defensa oral con data packs</li>
          </ul>

          <div className="mt-2 bg-gold-500 text-black-950 p-2 font-bold text-center uppercase text-[10px] tracking-[0.12em]">
            Portfolio listo para evaluacion tecnica completa
          </div>

          <StudentEvidencePanel title="Conexion Directa Con Scripts Python" className="mt-2" />
        </div>
      </div>
      <Footer pageNumber={11} />
    </PageContainer>
  );
};
