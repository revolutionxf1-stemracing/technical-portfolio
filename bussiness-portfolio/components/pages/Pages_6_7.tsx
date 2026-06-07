import React from 'react';
import { BodyText, BulletList, Footer, Header, ImageFrame, PageContainer, SectionTitle, Table } from '../Shared';

export const Page6: React.FC = () => {
  return (
    <PageContainer>
      <Header title="RACI y Plan de Comunicación" pageNumber={6} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">
        <div className="col-span-1 flex flex-col">
          <div className="bg-blue-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Gráfico RACI</div>
          <BodyText>
            El RACI (Responsible, Accountable, Consulted & Informed) es una tabla que permite visualizar como ha participado cada persona del equipo en todas las tareas. Nuestro RACI, está modificado habiendo solo tres categorías, responsable, informado y aislado.
          </BodyText>
          <ImageFrame src="/company-assets/raci.png" alt="Gráfico RACI de RevolutionX" height="h-[12rem]" fit="contain" className="bg-white" />
          <Table
            headers={['Clave', 'Significado']}
            rows={[
              ['Rp', 'Responsable'],
              ['Inf', 'Informado'],
              ['A', 'Aislado'],
            ]}
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-cyan-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Identificación de stakeholders</div>
          <BodyText>
            Un stakeholder es cualquier persona, grupo u organización que tiene interés o se ve afectado por un proyecto. Es imprescindible identificar cuáles son los stakeholders de tu proyecto para una mejor comunicación.
          </BodyText>
          <BodyText>
            Este mismo fue el primer paso del equipo para la estrategia de comunicación, identificar todos los stakeholders del equipo. Tras un pequeño trabajo de investigación y análisis, llegamos a la conclusión de que teníamos 9 stakeholders: los coordinadores del equipo, los miembros del equipo, nuestro mentor, la prensa, los jueces de la competición, nuestros seguidores, los miembros de Nova Alliance (nuestra alianza internacional) y Owla (cofundadores junto a nosotros de Nova Alliance).
          </BodyText>
          <SectionTitle>Herramientas de comunicación</SectionTitle>
          <Table
            headers={['Herramienta', 'Stakeholders', 'Frecuencia']}
            rows={[
              ['WhatsApp', 'Miembros del equipo, coordinadores, patrocinadores.', 'Diaria'],
              ['Telegram', 'Miembros del equipo, coordinadores, mentor, Owla.', 'Semanal'],
              ['Instagram', 'Seguidores, patrocinadores, miembros de Nova Alliance.', 'Mensual'],
              ['Gmail', 'Miembros del equipo, coordinadores, mentor, patrocinadores.', 'Semanal'],
            ]}
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-green-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Plan de comunicación</div>
          <BodyText>
            RevolutionX ha diseñado un plan de comunicación en el que se aclara que tipo de relación vas a tener con cada stakeholder.
          </BodyText>
          <Table
            headers={['Tipo', 'Stakeholder', 'Información comunicada']}
            rows={[
              ['Interna', 'Miembros del equipo', 'Datos del proyecto, cronogramas, alcance, presupuesto.'],
              ['Interna', 'Coordinadores', 'Datos del proyecto, cronogramas, alcance, presupuesto.'],
              ['Interna', 'Mentor', 'Datos del proyecto, alcance, presupuesto.'],
              ['Externa', 'Patrocinadores', 'Datos del proyecto, presupuesto'],
              ['Externa', 'Owla', 'Datos y gestión de Nova Alliance'],
              ['Externa', 'Miembros de Nova Alliance', 'Datos de Nova Alliance'],
              ['Externa', 'Seguidores', 'Publicaciones de Instagram'],
            ]}
          />
          <Table
            headers={['Stakeholder', 'Frecuencia']}
            rows={[
              ['Miembros del equipo', 'Diaria'],
              ['Coordinadores', 'Semanal'],
              ['Mentor', 'Semanal'],
              ['Patrocinadores', 'Trimestral'],
              ['Owla', 'Mensual'],
              ['Miembros de Nova Alliance', 'Mensual'],
              ['Seguidores', 'Mensual'],
            ]}
          />
        </div>
      </div>
      <Footer pageNumber={6} />
    </PageContainer>
  );
};

export const Page7: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Gestión de Riesgos y Monitoreo" pageNumber={7} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">
        <div className="col-span-1 flex flex-col">
          <div className="bg-red-800 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Gestión de riesgos</div>
          <BodyText>
            Uno de los mayores retos que hemos tenido este año como equipo ha sido identificar nuestros riesgos y errores y cómo asesorarlos adecuadamente. Para ello, hemos previsto los errores con antelación, planificándonos con un buen margen tanto de tiempo como de presupuesto para solventar con rapidez posibles contratiempos.
          </BodyText>
          <BodyText>
            Estos riesgos, naturalmente, han influido en todas nuestras áreas, desde la fabricación del coche hasta el pit display.
          </BodyText>
          <SectionTitle>Ingeniería</SectionTitle>
          <BulletList
            items={[
              'Protección del coche: Riesgo identificado: Posible rotura del coche antes de la competición. Solución: Comprar un maletín acolchado.',
              'Medidas de las pegatinas: Riesgo identificado: Posible falta o exceso de medidas de las pegatinas en el coche. Solución: Comprobar medidas en Fusion 360 y usar varios bocetos con distintas medidas.',
              'Impresión del coche: Riesgo identificado: Posible rotura del coche durante el fresado en CNC. Solución: Tener un diseño en impresora 3D de repuesto.',
              'Simulaciones: Riesgo identificado: No tener las simulaciones listas para el Porfolio de Ingeniería. Solución: Priorizar las simulaciones a otras tareas más secundarias.',
            ]}
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[11px] inline-block mb-3">Marketing y Pit Display</div>
          <BulletList
            items={[
              'Patrocinadores: Riesgo identificado: No tener suficientes patrocinadores para la competición. Solución: Recurrir a patrocinadores más cercanos y fáciles de conseguir para asegurar una buena identidad de marca.',
              'Difusión de nuestra marca: Riesgo identificado: No difundir suficientemente nuestra marca como para ser reconocidos. Solución: Resaltar más nuestro logo en el pit display, salir en periódicos conocidos y apuntarnos a eventos de STEM Racing (Cupra City Garage, etc.)',
              'Presupuesto: Riesgo identificado: No tener suficiente dinero para el proyecto. Solución: Llevar un presuesto organizativo con el dinero del que disponemos y el que necesitamos para una mayor planificación (véase pág. 9).',
              'Fecha límite elementos: Riesgo identificado: No tener todos los elementos del pit display a tiempo. Solución: Pedir los elementos lo antes posible para tener un margen de tiempo si había errores de impresión.',
              'Resolución de imágenes en carteles: Riesgo identificado: Baja resolución de los carteles impresos. Solución: Pedir opinión de la empresa que nos imprime los carteles para ajustarlos si hay algún problema.',
            ]}
          />
          <SectionTitle className="mt-4">Monitoreo y control</SectionTitle>
          <BodyText>
            Registro de riesgos: Impacto y probabilidad. Monitoreo y control.
          </BodyText>
          <BodyText>
            Un informe de estado es un control mensual de las tareas realizadas y las que faltan por realizar, llevando así una organización constante del proyecto.
          </BodyText>
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-green-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Informes de estado</div>
          <BodyText>
            Nuestro coordinador de empresa ha estado haciendo un informe de estado mensual:
          </BodyText>
          <ImageFrame src="/company-assets/status-report.jpg" alt="Informes de estado de RevolutionX" height="h-[16rem]" fit="contain" className="bg-white" />
        </div>
      </div>
      <Footer pageNumber={7} />
    </PageContainer>
  );
};
