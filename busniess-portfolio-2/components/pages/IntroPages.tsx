import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';
import { StudentEvidencePanel } from '../StudentEvidence';

export const Page2: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Estrategia de Puntuacion" pageNumber={2} />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 bg-black-800 p-6 border-r border-gold-400/20 flex flex-col gap-5">
          <div className="bg-red-900/15 border border-red-400/35 p-3">
            <p className="text-red-300 text-[9px] uppercase tracking-[0.14em] font-semibold">Palmares reciente</p>
            <p className="text-white text-[10px] mt-1 leading-relaxed">
              RevolutionX logro el 2do puesto nacional en categoria Entry durante el curso 2024-2025.
            </p>
            <p className="text-gray-300 text-[9px] mt-1">Este portfolio transforma ese aprendizaje en metodologia de alto rendimiento tecnico.</p>
          </div>

          <div className="bg-black-900 border border-gold-400/35 p-4">
            <h3 className="text-white font-bold uppercase mb-3 text-center border-b border-gray-700 pb-2 text-[10px] tracking-[0.12em]">Scorecard Design & Engineering</h3>
            <div className="space-y-1 text-[9px] text-gray-300">
              <p><span className="text-gold-300 font-semibold">Total:</span> 180 puntos</p>
              <p><span className="text-gold-300 font-semibold">9 KPI:</span> 20 puntos cada uno</p>
              <p><span className="text-gold-300 font-semibold">Meta:</span> cobertura total por evidencia</p>
            </div>
          </div>

          <div className="border border-gold-400/30 p-3 bg-black-950/60">
            <p className="text-gold-300 text-[9px] font-semibold uppercase tracking-[0.14em] mb-2">Reglas de formato</p>
            <ul className="text-[9px] text-gray-300 space-y-1 list-disc list-inside">
              <li>Clase Development: max. 5 paginas (sin portada).</li>
              <li>Clase Professional: max. 10 paginas (sin portada).</li>
              <li>Tamano A3 para portfolio tecnico.</li>
              <li>Entrega adicional: A4 ortografica + A4 render.</li>
            </ul>
          </div>

          <div>
            <SectionTitle>Plan de Trabajo</SectionTitle>
            <BodyText>
              Las decisiones de diseno se cerraron en sprints semanales con puertas de control: cumplimiento reglamentario, mejora cuantificada y viabilidad de fabricacion.
            </BodyText>
            <PlaceholderImage label="Cronograma tecnico + hitos de validacion" height="h-24" />
          </div>
        </div>

        <div className="w-3/4 p-6 grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <SectionTitle>Objetivos Cuantificados</SectionTitle>
            <BodyText>
              El portfolio se ha redactado para que cada afirmacion este respaldada por una evidencia verificable: simulacion, ensayo, metrologia o checklist de cumplimiento.
            </BodyText>
            <Table
              headers={['Objetivo', 'Base 24/25', 'Meta 2026']}
              rows={[
                ['Drag total', 'medido sin CFD formal', '<= 0.240 N con CFD'],
                ['Masa coche', 'control final tardio', 'control desde CAD'],
                ['Repetibilidad', 'sin sigma sistematica', '<= 0.006 s'],
                ['Conformidad', 'revision puntual', '100% pre-scrutineering'],
              ]}
            />

            <SectionTitle>Arquitectura de Evidencia</SectionTitle>
            <BodyText>
              Se organizo la informacion por trazabilidad: requisito, hipotesis, prueba, decision y resultado final. Esto acelera la evaluacion del jurado y evita huecos de contenido.
            </BodyText>
          </div>

          <div className="col-span-1">
            <SectionTitle>Cobertura de KPI</SectionTitle>
            <Table
              headers={['KPI', 'Pag', 'Evidencia principal']}
              rows={[
                ['Research', '3', 'fuentes + benchmarking'],
                ['Design concept', '3', 'conceptos A/B/C + seleccion'],
                ['3D modelling', '4', 'arbol CAD + parametros'],
                ['CAA', '5', 'CFD/FEA + independencia de malla'],
                ['Testing', '8', 'correlacion virtual-fisico'],
                ['Evaluation', '9', 'log de iteraciones'],
                ['CAM/CNC', '6', 'estrategia y validacion'],
                ['Other mfg', '7', 'ensamblaje y QA'],
                ['Portfolio quality', '10-11', 'estructura y cumplimiento'],
              ]}
            />

            <div className="border border-gold-400/30 p-3 bg-black-950/55">
              <p className="text-gold-300 text-[9px] uppercase tracking-[0.14em] font-semibold">Decision clave</p>
              <BodyText className="mb-0">
                Priorizamos calidad de evidencia frente a cantidad de texto: menos afirmaciones, mas datos verificables y comparables.
              </BodyText>
            </div>
          </div>

          <div className="col-span-1">
            <SectionTitle>Control de Riesgos de Puntuacion</SectionTitle>
            <Table
              headers={['Riesgo', 'Impacto', 'Mitigacion']}
              rows={[
                ['No trasladar aprendizaje Entry', 'alto', 'base 24/25 en pag. 2-3'],
                ['No citar reglamento', 'alto', 'matriz de articulos en pag. 10'],
                ['Sin trazabilidad', 'alto', 'registro de cambios en pag. 9'],
                ['Datos no repetibles', 'alto', 'DOE + 5 replicas'],
                ['Fabricacion no demostrada', 'medio', 'CAM/CNC detallado pag. 6-7'],
              ]}
            />

            <SectionTitle>Flujo de Revision</SectionTitle>
            <BodyText>
              Cada pagina fue revisada por dos roles (ingenieria y cumplimiento) para confirmar exactitud tecnica, coherencia narrativa y alineacion directa a scorecard.
            </BodyText>

            <StudentEvidencePanel className="mb-3" />
            <PlaceholderImage label="Checklist de revision cruzada por pagina" height="h-16" />
          </div>
        </div>
      </div>
      <Footer pageNumber={2} />
    </PageContainer>
  );
};

export const Page3: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Investigacion y Conceptos" pageNumber={3} />
      <div className="p-6 grid grid-cols-4 gap-6 h-full">
        <div className="col-span-1 border-r border-gray-800 pr-4">
          <SectionTitle>Problema de Ingenieria</SectionTitle>
          <BodyText>
            El tiempo de carrera depende de tres bloques acoplados: aerodinamica, perdidas mecanicas y estabilidad dinamica. Se definio un modelo de prioridad para atacar primero los factores con mayor sensibilidad.
          </BodyText>

          <SectionTitle>Punto de Partida RevolutionX</SectionTitle>
          <BodyText>
            Tras el 2do puesto en Entry 24/25, el equipo identifico tres brechas para escalar: mayor profundidad de analisis, control de fabricacion mas estricto y evaluacion cuantitativa por iteracion.
          </BodyText>

          <SectionTitle>Fuentes Tecnicas</SectionTitle>
          <ul className="list-disc list-inside text-[9px] text-gray-300 space-y-1 mb-3">
            <li>Reglamento tecnico de clase aplicable.</li>
            <li>Reglamento de competicion 2025-2026.</li>
            <li>Ensayos internos de rodamientos y ruedas.</li>
            <li>Historico de RevolutionX en Entry 2024-2025.</li>
          </ul>

          <PlaceholderImage label="Mapa de conocimiento y fuentes citadas" height="h-24" />
        </div>

        <div className="col-span-1 border-r border-gray-800 pr-4">
          <SectionTitle>Conceptos Iniciales</SectionTitle>
          <BodyText>
            Se generaron tres familias de concepto con objetivos distintos: bajo drag, control de estela de rueda y fabricabilidad robusta en CNC.
          </BodyText>

          <Table
            headers={['Concepto', 'Ventaja', 'Riesgo']}
            rows={[
              ['A', 'drag minimo', 'debil en rigidez'],
              ['B', 'estable en guia', 'mayor masa'],
              ['C', 'fabricable', 'menos agresivo en CFD'],
            ]}
          />

          <PlaceholderImage label="Bocetos anotados A/B/C con medidas" height="h-24" />
        </div>

        <div className="col-span-2 pl-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <SectionTitle>Criterio de Seleccion</SectionTitle>
              <BodyText>
                La seleccion no fue estetica. Se aplico una matriz ponderada con pesos de rendimiento, cumplimiento, fabricacion y repetibilidad. Se descarto cualquier opcion con riesgo de no conformidad.
              </BodyText>
              <Table
                headers={['Criterio', 'Peso', 'Ganador']}
                rows={[
                  ['Rendimiento', '40%', 'B'],
                  ['Cumplimiento', '30%', 'C'],
                  ['Fabricacion', '20%', 'C'],
                  ['Riesgo', '10%', 'B/C'],
                ]}
              />
            </div>
            <div>
              <SectionTitle>Modelo 3D de Concepto</SectionTitle>
              <BodyText>
                Cada concepto se tradujo a un CAD preliminar para verificar interferencias, volumen de seguridad y espacio de integracion de componentes antes de simulaciones de alto coste.
              </BodyText>
              <PlaceholderImage label="Comparativa CAD de conceptos" height="h-32" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <SectionTitle>Hipotesis de Trabajo</SectionTitle>
              <BodyText>
                H1: reducir area frontal efectiva mejora tiempo mas que reducir masa equivalente. H2: una distribucion de masa adelantada reduce oscilacion lateral en salida.
              </BodyText>
              <PlaceholderImage label="Graficos de sensibilidad inicial" height="h-24" />
            </div>
            <div>
              <SectionTitle>Decision Final de Concepto</SectionTitle>
              <BodyText>
                Se selecciono un concepto hibrido que combina frontal de baja separacion, lateral limpio para guia de flujo y arquitectura de fabricacion en dos mitades para control dimensional.
              </BodyText>
              <div className="p-2 border border-gold-400/25 bg-black-900/70 text-[8px] text-gray-300 font-mono">
                Resultado: Concepto C+ | aprobado en gate tecnico G2 | base para CAD definitivo
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer pageNumber={3} />
    </PageContainer>
  );
};
