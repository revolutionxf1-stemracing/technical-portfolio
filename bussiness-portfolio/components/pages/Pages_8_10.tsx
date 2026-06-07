import React from 'react';
import { BodyText, BulletList, Footer, Header, ImageFrame, PageContainer, SectionTitle, Table, Tag } from '../Shared';

export const Page8: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Identidad de Marca" pageNumber={8} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">
        <div className="col-span-1 flex flex-col">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[11px] inline-block mb-3">Nombre</div>
          <BodyText>
            El nombre del equipo es uno de los primeros pasos que hacer a la hora de desarrollar una identidad de marca. A la hora de decidir el nombre, buscábamos que fuese en inglés, ya que esto nos haría mantener una internacionalidad que haría que, si llegamos a clasificar a unas finales mundiales, no tuviésemos que rediseñar el nombre. Nuestra elección final fue “RevolutionX”.
          </BodyText>
          <BodyText>
            Este nombre se divide en dos principales partes. La primera es la palabra más pura, “Revolution”. Al elegir esta palabra, jugamos con su doble significado, ya que puede significar revolución en el sentido de modernidad, cambio, o en el sentido de las revoluciones que hacen las ruedas de los coches. Para darle un toque a este nombre, le añadimos al final una “X” mayúscula, la cual le añade al nombre un toque moderno y alternativo.
          </BodyText>
          <SectionTitle>Esquema de colores</SectionTitle>
          <BodyText>
            Los colores son muy importantes en toda empresa, ya que son los que hacen que el público te recuerde. RevolutionX dio en el clavo con su esquema de colores: el negro y el dorado. Estos colores representan la elegancia y la profesionalidad y, además, son colores totalmente distinguibles.
          </BodyText>
          <div className="grid grid-cols-3 gap-2">
            <ImageFrame src="/company-assets/color-black.jpg" alt="Negro de RevolutionX" height="h-24" fit="contain" className="bg-white" />
            <ImageFrame src="/company-assets/color-dark-gold.jpg" alt="Dorado oscuro de RevolutionX" height="h-24" fit="contain" className="bg-white" />
            <ImageFrame src="/company-assets/color-light-gold.jpg" alt="Dorado claro de RevolutionX" height="h-24" fit="contain" className="bg-white" />
          </div>
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-blue-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Logo y lema</div>
          <BodyText>
            Nuestro logo es uno de los elementos gráficos al que más importancia le hemos dado de todo el desarrollo de nuestra identidad, tras muchos bocetos, conseguimos el resultado del que ahora es nuestro logo. Nuestro logo es una circunferencia con forma de neumático con el nombre de nuestro logo situado en medio de la circunferencia. Nuestro logo puede ser encontrado con un fondo negro detrás, o sin fondo alguno.
          </BodyText>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <ImageFrame src="/company-assets/logo-orange.jpg" alt="Logo con fondo negro" height="h-32" fit="contain" className="bg-black" />
            <ImageFrame src="/company-assets/logo-gold.jpg" alt="Logo sin fondo" height="h-32" fit="contain" className="bg-black" />
          </div>
          <SectionTitle>Lema</SectionTitle>
          <BodyText>
            El lema no es un elemento cuya necesidad sea máxima a la hora de desarrollar una identidad, sin embargo, nosotros queríamos un lema para que nuestros valores fuesen aún más representados. Nuestro lema es “driven by purpose, defined by success”.
          </BodyText>
          <BodyText className="mb-0">
            Lo primero a tener en cuenta de este lema, es que está en inglés, esto es debido a nuestra intención ya mencionada anteriormente, es mantener al equipo internacionalizado por la posible clasificación a unas finales internacionales.
          </BodyText>
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-cyan-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Uniformes</div>
          <BodyText>
            A la hora de decidir el diseño de nuestros uniformes, buscamos algo simple pero representativo de nuestra marca. La primera decisión fue que tipo de camiseta queríamos. La decidida fue el polo, ya que lo encontramos como la opción que combina mejor la profesionalidad con la comodidad.
          </BodyText>
          <BodyText>
            En cuanto al diseño, como ya se ha dicho, hicimos un diseño simple, negro con rayas doradas en los hombros. Es importante tener en cuenta que las camisetas las hicimos con una empresa que nos patrocinador, por lo que nos hizo el servicio de manufactura gratis.
          </BodyText>
          <div className="grid grid-cols-2 gap-3">
            <ImageFrame src="/company-assets/polo-front.jpg" alt="Camiseta por delante" height="h-40" fit="contain" className="bg-white" />
            <ImageFrame src="/company-assets/polo-back.jpg" alt="Camiseta por detrás" height="h-40" fit="contain" className="bg-white" />
          </div>
        </div>
      </div>
      <Footer pageNumber={8} />
    </PageContainer>
  );
};

export const Page9: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Marketing y Ejecución" pageNumber={9} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">
        <div className="col-span-1 flex flex-col">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[11px] inline-block mb-3">Objetivos de marketing</div>
          <BodyText>
            Antes de empezar con la ejecución de proyectos de marketing, nuestro primer paso fue establecer los objetivos que queríamos cumplir con cada tarea. Esto hizo que nuestras tareas estuviesen mucho más focalizadas en cumplir los objetivos, y que no nos desviaramos del camino.
          </BodyText>
          <BulletList
            items={[
              '1. Dar visibilidad a nuestro proyecto',
              '2. Dar a conocer STEM Racing',
              '3. Colaborar con otros equipos de la competición',
              '4. Colaborar con sponsors',
            ]}
          />
          <SectionTitle className="mt-4">Objetivos de audiencias</SectionTitle>
          <Table
            headers={['Objetivo', 'Características', 'Resultados esperados']}
            rows={[
              ['Estudiantes', 'Edad: 11-19 · Chicos & chicas · Uso de redes sociales · Lenguaje coloquial', 'Aumento en la participación en STEM Racing'],
              ['Público general', 'Edad: cualquiera · Chicos & chicas · Internacional · Lenguaje formal', 'Aumento en nuestra visibilidad'],
              ['Posibles sponsors', 'Edad: 25+ · Chicos y chicas · Lenguaje formal', 'Aumento en nuestros recursos'],
              ['Escuderías de STEM Racing', '11-19 · Chicos & chicas · Lenguaje coloquial', 'Comunidad de escuderías en la que compartir dudas y visibilidad'],
            ]}
          />
          <SectionTitle>Embudo de marketing</SectionTitle>
          <BulletList
            items={[
              'Fase 1 — Conciencia. El objetivo es ampliar el alcance del equipo y generar notoriedad entre el público potencial.',
              'Fase 2 — Consideración. El público ya conoce el proyecto y comienza a interactuar con él de forma orgánica, siguiendo al equipo en redes sociales.',
              'Fase 3 — Fidelidad. El público se ha convertido en seguidor activo del equipo: interacciona con el contenido de forma regular y tiene un conocimiento profundo del proyecto.',
            ]}
          />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-blue-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Instagram y página web</div>
          <BodyText>
            Instagram es la red social que usa RevolutionX para hacer publicaciones promocionándonos a nosotros mismos y a Sponsors. Además, también la usamos para comunicarnos con empresas para mandarles nuestro prospecto de patrocinio. Además, gracias a esta plataforma, hemos conseguido crear nuestra alianza internacional la cual hablaremos más adelante.
          </BodyText>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <ImageFrame src="/company-assets/instagram-profile.png" alt="Cuenta de Instagram de RevolutionX" height="h-40" fit="contain" className="bg-white" />
            <ImageFrame src="/company-assets/instagram-post.jpg" alt="Publicación reciente del Instagram de RevolutionX" height="h-40" fit="contain" className="bg-white" />
          </div>
          <BodyText>
            Nuestro coordinador de ingeniería diseñó una página web la cual usamos para dar información del equipo y de nuestros Sponsors.
          </BodyText>
          <div className="grid grid-cols-2 gap-3">
            <ImageFrame src="/company-assets/website-home.jpg" alt="Portada de la página web de RevolutionX" height="h-28" fit="contain" className="bg-black" />
            <ImageFrame src="/company-assets/website-team.jpg" alt="Página web de RevolutionX" height="h-28" fit="contain" className="bg-black" />
          </div>
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-green-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Nova Alliance y difusión</div>
          <BodyText>
            Junto con el equipo español Owla, hemos creado un proyecto, que, aunque todavía esté en desarrollo, es importante mencionar en este porfolio. Hemos creado Nova Alliance, una alianza internacional en la que participamos equipos de STEM Racing de todo el mundo.
          </BodyText>
          <BodyText>
            El objetivo de esta alianza es ayudarnos mutuamente y consultarnos dudas y darnos visibilidad entre todos. Actualmente, en esta alianza estamos los siguientes equipos:
          </BodyText>
          <div className="flex flex-wrap gap-2 mb-3">
            <Tag>RevolutionX (España)</Tag>
            <Tag>Owla (España)</Tag>
            <Tag>Buffalo Six (Méjico)</Tag>
            <Tag>Team Stealh (Gales)</Tag>
            <Tag>Vielox (Vietnam)</Tag>
            <Tag>Apex Elegance (China)</Tag>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <ImageFrame src="/company-assets/nova-instagram.jpg" alt="Publicación de Instagram de Nova Alliance" height="h-28" fit="contain" className="bg-white" />
            <ImageFrame src="/company-assets/nova-statutes.jpg" alt="Estatutos de Nova Alliance redactados por RevolutionX" height="h-28" fit="contain" className="bg-white" />
          </div>
          <SectionTitle>Jornada de puertas abiertas</SectionTitle>
          <BodyText className="mb-0">
            Durante la jornada de puertas abiertas de nuestro centro, donde vinieron muchos niños a ver nuestras instalaciones y programas educativos, tuvimos la oportunidad de presentar nuestro equipo de STEM Racing a los niños.
          </BodyText>
        </div>
      </div>
      <Footer pageNumber={9} />
    </PageContainer>
  );
};

export const Page10: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Patrocinio, Prensa y Crowdfunding" pageNumber={10} />
      <div className="p-5 grid grid-cols-3 gap-5 h-full items-stretch">
        <div className="col-span-1 flex flex-col">
          <div className="bg-red-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Prensa y visibilidad</div>
          <BodyText>
            Nuestra responsable de estrategia, ingeniería y relaciones externas logró, a base de diversas comunicaciones con diversos periódicos, establecer comunicaciones con una periodista de EL MUNDO, la cual, tras muchos días en los cuales nos preguntaba por información del equipo, publicó un artículo de RevolutionX en la sección de GranMadrid del periódico diario.
          </BodyText>
          <BodyText>
            Tras esta aparición en la prensa, otros medios de comunicación mostraron interés en nuestro equipo y proyecto, así que un día, les invitamos a una presentación en la cual pudieron hacernos preguntas.
          </BodyText>
          <BodyText>
            RevolutionX sale en los siguientes medios de comunicación: EL MUNDO, RNE, El Español, InfoMajadahonda, Noroeste Madrid & Majadahonda Magazine y más.
          </BodyText>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <ImageFrame src="/company-assets/el-mundo.jpg" alt="Titular del artículo de EL MUNDO" height="h-44" fit="contain" className="bg-white" />
            <ImageFrame src="/company-assets/el-espanol.jpg" alt="Titular del artículo de El Español" height="h-44" fit="contain" className="bg-white" />
          </div>
          <SectionTitle>Visita de la alcaldesa de Majadahonda</SectionTitle>
          <BodyText>
            El pasado 24 de febrero, Lola Morena, la alcaldesa de Majadahonda vino, junto a varios medios de comunicación y Cristina Benzal(directora de Fórmula MadCup - STEM Racing Spain) a visitar a nuestro instituto y le hicimos una presentación en la que hablamos sobre nuestro equipo, y STEM Racing.
          </BodyText>
          <BodyText className="mb-0">
            Tras esta reunión, el ayuntamiento del municipio se ofreció a patrocinarnos.
          </BodyText>
          <ImageFrame src="/company-assets/mayor-visit.jpg" alt="El equipo de RevolutionX haciendo la presentación a Lola Moreno" height="h-24" fit="contain" />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-gold-600 text-black px-2 py-1 font-bold text-[11px] inline-block mb-3">Patrocinio</div>
          <BodyText>
            Actualmente, RevolutionX goza de: 4 patrocinadores de recursos monetarios - 625€. Pañalón. Lorena Solutions. Moñita. Titanes. El postrecito de Isabel. 3 patrocinadores de recursos materiales – 10 uniformes + 3 roll ups. Black & White. Ayuntamiento de Majadahonda. El postrecito de Isabel.
          </BodyText>
          <SectionTitle>Estrategia de patrocinios</SectionTitle>
          <BodyText>
            Como ya ha sido mencionado antes, el equipo hizo una estimación de presupuesto y llegó a a la conclusión de que necesitábamos 1000€ para cubrir todos nuestros gastos. La primera idea y más obvia, fue la de conseguir este dinero a base de patrocinadores, por lo que nos pusimos manos a la obra.
          </BodyText>
          <SectionTitle>Captación de patrocinadores</SectionTitle>
          <BodyText>
            Nuestro método de captación de patrocinadores se basó en tres pasos. El primero fue mandarle el prospecto de patrocinios a todas las empresas posibles. Durante este paso, la mayoría de las empresas, o bien no contestaban, o bien nos hacían saber que no estaban interesadas en colaborar con nosotros.
          </BodyText>
          <BodyText>
            El segundo paso se basó en mantener relaciones con los patrocinadores, en las cuales hablábamos sobre nuestro proyecto, que recursos necesitábamos, etc. Cuando las empresas nos confirmaban acuerdo de patrocinio con nosotros, pasábamos al último paso. El último paso fue la confirmación de patrocinio. En este paso oficializábamos públicamente nuestro acuerdo de patrocinios con la respectiva empresa.
          </BodyText>
          <SectionTitle>ROI y contraprestaciones en práctica</SectionTitle>
          <BodyText>
            El ROI (Return on Investment) o Retorno de Inversión es una métrica que mide cuánto beneficio obtienes con relación a lo que has invertido. El tamaño de los logos en todos estos elementos se basó en cuánto había aportado cada empresa. Esto se puede observar notoriamente con el logo de Pañalón, esta empresa nos aportó 250€, nuestro ingreso más grande por parte de patrocinadores.
          </BodyText>
          <div className="grid grid-cols-3 gap-2">
            <ImageFrame src="/company-assets/car-sponsors.jpg" alt="Diseño de la zona derecha del coche donde se ven los logos" height="h-20" fit="contain" />
            <ImageFrame src="/company-assets/banner.jpg" alt="Diseño de banner de competición" height="h-20" fit="contain" />
            <ImageFrame src="/company-assets/sponsor-shirt.jpg" alt="Diseño de la parte trasera de la camiseta" height="h-20" fit="contain" className="bg-white" />
          </div>
          <ImageFrame src="/company-assets/sponsor-post.jpg" alt="Diseño de publicación en Instagram del acuerdo de patrocinio con Black&White" height="h-20" fit="contain" className="bg-white" />
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-green-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">Crowdfunding</div>
          <BodyText>
            Debido a que vimos que únicamente con el dinero obtenido por los patrocinadores no nos iba a llegar para poder cubrir todos los gastos del presupuesto esperado, y que el proceso de búsqueda de más Sponsors era muy largo y costoso, buscamos alternativas para recaudar fondos de otra manera.
          </BodyText>
          <BodyText>
            Después de un brain storming dimos con la clave, un crowdfounding. Al día siguiente de tener esta idea, y después de un tiempo, RevolutionX lanzó su propio Crowdfounding en la plataforma GoFundMe, donde pedíamos a la gente 1000€.
          </BodyText>
          <BodyText>
            Los resultados fueron casi inmediatos, y aunque no conseguimos los 1000€ pedidos, conseguimos el dinero suficiente para poder cubrir todos nuestros gastos: 625€.
          </BodyText>
          <ImageFrame src="/company-assets/crowdfunding.jpg" alt="Crowdfounding de RevolutionX en GoFundMe" height="h-32" fit="contain" className="bg-white" />
        </div>
      </div>
      <Footer pageNumber={10} />
    </PageContainer>
  );
};
