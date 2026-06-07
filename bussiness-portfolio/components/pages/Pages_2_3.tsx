import React from 'react';
import { BodyText, BulletList, Footer, Header, ImageFrame, PageContainer, SectionTitle, Tag } from '../Shared';

export const Page2: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Gestión de Proyectos: Iniciación" pageNumber={2} />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[24%] bg-black-900 p-5 border-r border-gold-400/20 flex flex-col gap-4">
          <div className="bg-black-800 border border-gold-400/30 p-3">
            <h3 className="text-gold-400 font-bold uppercase text-[11px] mb-3 border-b border-gold-400/30 pb-1">Índice del porfolio</h3>
            <div className="space-y-1 text-[9px] text-gray-400">
              <div>Pág. 2 — Iniciación</div>
              <div>Pág. 3 — Alcance, WBS y cronograma</div>
              <div>Pág. 4 — Presupuesto y recursos</div>
              <div>Pág. 5 — Roles y responsabilidades</div>
              <div>Pág. 6 — RACI y comunicación</div>
              <div>Pág. 7 — Riesgos y monitoreo</div>
              <div>Pág. 8 — Identidad de marca</div>
              <div>Pág. 9 — Marketing y ejecución</div>
              <div>Pág. 10 — Patrocinio, prensa y crowdfunding</div>
            </div>
          </div>

          <div>
            <div className="bg-gold-500 text-black px-2 py-1 font-bold text-[11px] inline-block mb-2">Preguntas WH</div>
            <BulletList
              className="text-[10px]"
              items={[
                '¿Quiénes somos? Somos RevolutionX, un equipo de la competición STEM Racing. Somos alumnos de 4º y 3º ESO del instituto IES José Saramago de Majadahonda.',
                '¿Por qué queremos competir en STEM Racing? Porque tras nuestro primer año en esta competición, nos dimos cuenta de que nos apasiona. Además, queremos superarnos respecto al año pasado.',
                '¿Qué tenemos que hacer para lograr nuestros objetivos? Tenemos que entregar dos porfolios, elaborar una presentación verbal y, lo más importante, diseñar y fabricar un coche que correrá sobre una pista de 20m.',
                '¿Cuándo empezaremos a trabajar en este proyecto? Nada más después de la temporada 2024/25, cuanto más tiempo tengamos, más preparados estaremos para cualquier adversidad.',
                '¿Dónde podremos ver si nuestros objetivos se han cumplido? El primer paso serán las finales regionales de Madrid, donde aspiraremos a ser los mejores equipos de nuestra Comunidad Autónoma para cumplir nuestro objetivo de clasificar a las finales nacionales de España.',
              ]}
            />
          </div>

          <div className="border border-gold-400/20 bg-black-800 p-3">
            <div className="text-gold-400 text-[11px] font-bold uppercase mb-2">¿Cómo nos visualizamos?</div>
            <BodyText className="text-[10px] mb-0">
              Nos vemos como un equipo que ha elaborado su identidad de marca y ha aumentado su visibilidad, con uno de los coches más rápidos de la categoría.
            </BodyText>
          </div>
        </div>

        <div className="w-[76%] p-5 flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gold-400 text-black px-3 py-1 font-black text-base uppercase tracking-widest">Kick Off Meeting</div>
              <span className="text-gray-400 text-[11px] uppercase tracking-widest">20 de junio de 2025</span>
            </div>
            <BodyText>
              El 20 de junio de 2025, RevolutionX tuvo su primera reunión de cara a la temporada 2025/2026. Es importante tener en cuenta saber en qué contexto se tuvo esta reunión, ya que veníamos de que el día anterior quedásemos segundos de la categoría Entry en las finales nacionales de España, donde, además, conseguimos el coche más rápido de la categoría.
            </BodyText>
            <BodyText>
              Los sentimientos que teníamos todos los participantes del equipo en esa temporada eran agridulces. Nuestra felicidad era obvia, habíamos quedado como el segundo mejor equipo del país en nuestra categoría con el coche más rápido, sin embargo, todo el equipo sentía que podíamos llegar a más, teníamos claro que la temporada siguiente íbamos a apuntar a lo más alto, íbamos a intentar clasificar a las finales nacionales en la categoría Professional.
            </BodyText>
            <BodyText>
              Una vez tuvimos claro cuál iba a ser nuestra categoría para la temporada 2025/26, tocó hacer el primer paso de cualquier proyecto, responder a las preguntas WH (Who, Why, What, When, Where, How). Así es como respondimos a todas estas preguntas.
            </BodyText>
          </div>

          <div className="grid grid-cols-[1.15fr_0.85fr] gap-4">
            <div>
              <SectionTitle>Carta del proyecto</SectionTitle>
              <BodyText>
                La carta de proyecto es un documento formal que marca el punto de partida oficial de cualquier proyecto. En ella se recoge, de manera concisa y estructurada, toda la información esencial que lo define: su propósito, sus objetivos, los hitos principales, los responsables, las limitaciones y los riesgos previstos.
              </BodyText>
              <BodyText>
                Su función principal es la de servir como acuerdo de partida entre todos los involucrados, dejando por escrito qué se va a hacer, por qué y quién lo va a llevar a cabo. De esta manera, todos los miembros del equipo parten de una misma base de entendimiento, evitando malentendidos o desviaciones a lo largo del proceso.
              </BodyText>
              <BodyText>
                La importancia de la carta de proyecto reside en varios aspectos clave. En primer lugar, otorga dirección y claridad, ya que, al definir los objetivos y la justificación del proyecto desde el inicio, el equipo sabe exactamente hacia dónde se dirige y cuáles son sus motivaciones.
              </BodyText>
              <BodyText className="mb-0">
                En segundo lugar, anticipa los problemas, ya que identificar desde el principio las limitaciones y los riesgos permite al equipo estar preparado y tomar medidas preventivas antes de que estos se conviertan en obstáculos reales.
              </BodyText>
            </div>

            <div className="flex flex-col">
              <SectionTitle>Claves del proyecto</SectionTitle>
              <div className="flex flex-wrap gap-2 mb-3">
                <Tag>Professional</Tag>
                <Tag>Madrid</Tag>
                <Tag>2025/2026</Tag>
                <Tag>STEM Racing</Tag>
              </div>
              <div className="border border-gold-400/20 bg-black-800 p-3 mb-3">
                <div className="text-gold-400 text-[11px] font-bold uppercase mb-2">Brújula del proyecto</div>
                <BodyText className="text-[10px] mb-0">
                  En definitiva, la carta de proyecto es la brújula que guía al equipo desde el inicio hasta la conclusión del proyecto, garantizando que todos trabajan de manera alineada hacia un mismo fin.
                </BodyText>
              </div>
              <ImageFrame src="/company-assets/logo-gold.jpg" alt="Logo de RevolutionX" height="h-48" fit="contain" className="bg-black" />
            </div>
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
      <Header title="Alcance, WBS y Cronograma" pageNumber={3} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full">
        <div className="col-span-1 flex flex-col">
          <div className="bg-gold-600/20 p-2 border-l-2 border-gold-400 mb-3">
            <h4 className="text-gold-400 font-bold text-[11px] uppercase">Declaración de alcance</h4>
          </div>
          <BodyText>
            La declaración de alcance es un documento el cual todo proyecto tiene que hacer para determinar hasta dónde puede llegar un proyecto y, que está en mano del equipo para cumplir su objetivo.
          </BodyText>
          <div className="flex flex-wrap gap-2 mb-3">
            <Tag>Diseño del coche</Tag>
            <Tag>Fabricación</Tag>
            <Tag>Búsqueda de fondos</Tag>
            <Tag>Porfolio empresa</Tag>
            <Tag>Porfolio ingeniería</Tag>
            <Tag>Redes sociales</Tag>
            <Tag>Uniforme</Tag>
          </div>
          <ImageFrame src="/company-assets/scope.jpg" alt="Declaración de alcance de RevolutionX" height="h-[12rem]" fit="contain" className="bg-[#2c2c2c]" />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-blue-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Work Breakdown Structure (WBS)</div>
          <BodyText>
            El WBS (Work Breakdown Structure), también llamado EDT (Estructura de Desglose de Trabajo), es una técnica que ayuda a entender las fases que ha tenido cada tarea que se ha realizado. Este es el WBS del equipo de las tareas más importantes realizadas:
          </BodyText>
          <SectionTitle>Ingeniería</SectionTitle>
          <BulletList
            items={[
              'Coche: Conceptualización – Sketch – Modelado 3D – Testing – Refinamiento – Manufactura',
              'Túnel de viento: Conceptualización - Estructuración del diseño - Modelado 3D - Impresión por piezas - Unión de piezas',
              'Porfolio técnico: Conceptualización - Sketch - Refinamiento - Gráficos - Refinamiento final',
            ]}
          />
          <SectionTitle className="mt-4">Gestión de empresa</SectionTitle>
          <BulletList
            items={[
              'Prospecto de patrocinio: Conceptualización - Sketch – Refinamiento',
              'Alianza Internacional (Nova Alliance): Colaboración (Owla) - Estrategia – Contacto - Publicación',
              'Uniformes: Conceptualización - Prototipado – Refinamiento – Manufactura',
              'Pit Display: Brain Storming – Prototipado - Análisis de referentes – Refinamiento',
            ]}
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-green-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Cronograma</div>
          <BodyText>
            El cronograma de organización ha sido una parte clave para el desarrollo y la organización de RevolutionX, el cual hemos ido actualizando aproximadamente cada mes para conseguir una organización constante.
          </BodyText>
          <BodyText>
            Nuestro cronograma se ha basado en un diagrama de Gantt, que hemos hecho en Excel y con la ayuda de otra aplicación llamada ClickUp. Un diagrama de Gantt es un gráfico estructurado que muestra fechas de principio, fin y duración de un proyecto en concreto.
          </BodyText>
          <BodyText>
            Inicialmente, hemos rellenado el cronograma con proyectos generales y de largo plazo (ej: diseño del primer prototipo del coche, búsqueda de patrocinadores, etc.). A continuación, detallamos más estas tareas, subdividiéndolas en tareas más concretas.
          </BodyText>
          <BodyText className="mb-2">
            Después, cuando todas las tareas estaban asignadas con sus respectivas fechas, nos ceñimos a éstas, cumpliendo con las fechas lo mejor que pudimos. Finalmente, refinamos el cronograma para adjuntarlo en el porfolio.
          </BodyText>
          <ImageFrame src="/company-assets/gantt.jpg" alt="Diagrama de Gantt de RevolutionX" height="h-[11.5rem]" fit="contain" className="bg-white" />
        </div>
      </div>
      <Footer pageNumber={3} />
    </PageContainer>
  );
};
