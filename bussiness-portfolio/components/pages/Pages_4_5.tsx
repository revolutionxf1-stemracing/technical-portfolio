import React from 'react';
import { BodyText, BulletList, Footer, Header, ImageFrame, PageContainer, SectionTitle, Table } from '../Shared';

export const Page4: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Gestión de Presupuesto y Recursos" pageNumber={4} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">
        <div className="col-span-1 flex flex-col">
          <div className="bg-green-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Gestión de recursos</div>
          <BodyText>
            La gestión de recursos es clave a la hora de distribuir bien todo el dinero y material que tienes. RevolutionX vio elementos fundamentales en los que gastar la gran cantidad de los recursos: el Pit Display, y la fabricación del coche en CNC.
          </BodyText>
          <SectionTitle>Seguimiento del gasto presupuestario (Base vs Original)</SectionTitle>
          <BodyText>
            Al comenzar el proyecto, el coordinador del sector de gestión de empresa hizo una estimación de que presupuesto necesitábamos para poder comprar todo lo que queríamos. Se estimó que necesitábamos un alrededor de 1000€ para poder costear todo.
          </BodyText>
          <BodyText>
            Cuando a base de Sponsors y el Crowdfounding logramos llegar a esas cifras, hicimos una búsqueda aguda sobre todo lo que queríamos comprar. Las estimaciones fueron correctas, el precio total de todos los elementos que compramos de cara a la competición ha sido de 1033€.
          </BodyText>
          <SectionTitle>Fondos de patrocinio financiero</SectionTitle>
          <Table
            headers={['Origen', 'Valor']}
            rows={[
              ['Crowdfding', '625 €'],
              ['Pañalón', '250 €'],
              ['Lorena Solutions', '140 €'],
              ['Moñita', '100 €'],
              ['Titanes', '85 €'],
              ['El Postrecito de Isabel', '50 €'],
              ['Total', '1.250 €'],
            ]}
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-blue-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Patrocinio material y gastos</div>
          <SectionTitle>Fondo de patrocinio material</SectionTitle>
          <Table
            headers={['Patrocinador', 'Aportación']}
            rows={[
              ['Black and White', '10 camisetas + 2 roll-ups'],
              ['Ayto Majadahonda', '1 roll-up'],
              ['Total', '10 camisetas + 3 roll-ups'],
            ]}
          />
          <SectionTitle>Gastos</SectionTitle>
          <Table
            headers={['Material comprado', 'Coste', 'Fuente del dinero']}
            rows={[
              ['4 Carteles Pit Display', '380 €', 'Crowdfding'],
              ['Cartel Nova Alliance', '17 €', 'Crowdfding'],
              ['Cartel grande frontal', '26 €', 'Crowdfding'],
              ['Maletín Coche', '30 €', 'Pañalón'],
              ['Rodamientos', '30 €', 'Pañalón'],
              ['Túnel de viento', '140 €', 'Lorena Solutions'],
              ['Impresión coche CNC', '250 €', 'Crowdfding'],
              ['Estampado camisetas', '80 €', 'Titanes'],
              ['Sprays', '20 €', 'Pañalón'],
              ['Pegatinas', '10 €', 'Crowdfding'],
              ['Tarta competición', '50 €', 'El Postrecito de Isabel'],
              ['Total', '1.033 €', ''],
            ]}
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[11px] inline-block mb-3">Documento de referencia</div>
          <ImageFrame src="/company-assets/budget.jpg" alt="Gestión de recursos de RevolutionX" height="h-[16rem]" fit="contain" className="bg-white" />
          <BodyText>
            Este seguimiento económico muestra el presupuesto logrado por el equipo y cómo se distribuyó en elementos de competición, fabricación, comunicación y presentación.
          </BodyText>
          <BulletList
            items={[
              'Elementos fundamentales en los que gastar la gran cantidad de los recursos: el Pit Display, y la fabricación del coche en CNC.',
              'Las estimaciones fueron correctas.',
              'El precio total de todos los elementos que compramos de cara a la competición ha sido de 1033€.',
            ]}
          />
        </div>
      </div>
      <Footer pageNumber={4} />
    </PageContainer>
  );
};

export const Page5: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Roles y Responsabilidades" pageNumber={5} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">
        <div className="col-span-1 flex flex-col">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[11px] inline-block mb-3">Estructura del equipo</div>
          <BodyText>
            Una de las tareas más duras que tuvimos nada más empezar, fue la de buscar sustitutos a los compañeros que no querían continuar con este proyecto, sin embargo, conseguimos estructurar el equipo consiguiendo un equilibrio perfecto entre ingenieros y responsables de la gestión de empresa.
          </BodyText>
          <BodyText>
            Una de las claves en nuestro gran funcionamiento como equipo ha sido la de designar a 2 jefes/coordinadores de proyectos, ya que esto nos ha permitido tener más orden, teniendo un gestor de equipo más focalizado en el sector de la ingeniería y coordinador en la gestión de la empresa.
          </BodyText>
          <BodyText>
            En fundamental recalcar, que nuestro equipo está dotado de alumnos muy polivalentes, eso nos hace poder trabajar hombro con hombro. Además, hemos tenido la suerte de tener la ayuda de alumnos, que aun sabiendo que no iban a poder participar oficialmente en la competición ya que todos los roles estaban asignados, estos se ofrecieron a colaborar con nosotros de manera voluntaria.
          </BodyText>
          <Table
            headers={['Miembro', 'Rol']}
            rows={[
              ['Saúl Morán', 'Coordinador del equipo'],
              ['Martín Cendra', 'Gestor del equipo'],
              ['Martina Corredor', 'Estrategia, ingeniería & relaciones externas'],
              ['Víctor Jiménez', 'Ingeniero de diseño'],
              ['Yago Álvarez', 'Comunicación & RRSS'],
              ['Álvaro Cardona', 'Ingeniero de fabricación'],
              ['Claudia de Paz', 'Ayudante en gestión de empresa'],
              ['Ibrahim Aharrar', 'Ayudante en Ingieniería'],
            ]}
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-red-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Habilidades y conocimientos</div>
          <Table
            headers={['Miembro', 'Habilidades', 'Conocimientos']}
            rows={[
              ['Saúl Morán', 'Excel, Canva, GIMP, Click Up.', ''],
              ['Martín Cendra', 'Fusion360, Antigravity, Visual Studio Code.', 'Uso de IA, programación, ingeniería.'],
              ['Martina Corredor', 'Canva, Ansys, Prezi', 'Diseño gráfico, comunicación, ingeniería'],
              ['Víctor Jiménez', 'Fusion360, DaVinci Resolve.', 'Ingeniería, aerodinámica, impresión 3d'],
              ['Yago Álvarez', 'BeFunky, Instagram, Prezi, Canva, CapCut.', 'Comunicación, diseño gráfico, edición de videos'],
              ['Álvaro Cardona', 'Fusion360, Ansys, Blender.', 'Aerodinámica, simulación, impresión 3d, ingeniería.'],
              ['Claudia de Paz', 'Canva, BeFunky.', 'Comunicación, diseño gráfico.'],
              ['Ibrahim Aharrar', 'Fusion360.', 'Ingeniería, aerodinámica.'],
            ]}
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-blue-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Descripción de roles</div>
          <BulletList
            items={[
              'Coordinador del equipo: Para encontrar un coordinador de equipo que organizase las tareas de la gestión de empresa de RevolutionX, buscamos a una persona con capacidad de liderar y dosificar grandes proyectos en pequeños trabajos elaborados por distintas personas. Estas características las reúne Saúl con creces.',
              'Gestor del equipo: Como ya se ha mencionado antes, RevolutionX tiene un organizador en cada sector, y, claro está, el gestor de equipo y responsable de ingeniería Martín, desempeña labores distintas a Saul, responsable de la gestión de empresa. Martín, junto a herramientas como Antigravity, ha diseñado nuestra página web.',
              'Estrategia, ingeniería & diseño: Martina cumple estas expectativas con creces. Además de haber ayudado a los ingenieros a hacer pruebas de simulación, ella ha sido la responsable de contactar con empresas externas que pudiesen ser posibles patrocinadoras, además de contactar con medios de comunicación como RTVE, El Mundo o El Español.',
              'Ingeniero de diseño: Víctor lleva dos años siendo el ingeniero de diseño de RevolutionX, y ya se consolidó como uno de los mejores de la competición el año pasado, donde creó el coche Entry más rápido de España.',
            ]}
          />
        </div>
      </div>
      <Footer pageNumber={5} />
    </PageContainer>
  );
};
