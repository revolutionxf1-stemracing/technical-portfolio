import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText } from '../Shared';

const Photo: React.FC<{
  src: string;
  alt: string;
  label: string;
  height?: string;
  fit?: 'cover' | 'contain';
}> = ({ src, alt, label, height = 'h-28', fit = 'cover' }) => (
  <div className={`w-full ${height} relative bg-black-900`}>
    <img
      src={src}
      alt={alt}
      className={`w-full h-full border border-gray-700 ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      onError={(e) => {
        const t = e.target as HTMLImageElement;
        t.style.display = 'none';
        const fb = t.parentElement?.querySelector('.fb-ph') as HTMLElement;
        if (fb) fb.style.display = 'flex';
      }}
    />
    <div
      className="fb-ph absolute inset-0 bg-black-700 border border-dashed border-gold-400/30 items-center justify-center"
      style={{ display: 'none' }}
    >
      <span className="text-gold-400/50 text-[10px] font-mono uppercase text-center p-2">{label}</span>
    </div>
  </div>
);

export const Page5: React.FC = () => {
  return (
    <PageContainer>
      <Header title="Ampliacion CFD: Campos de Velocidad, Flujo y Presion" pageNumber={5} />
      <div className="p-5 grid grid-cols-12 gap-5 h-full items-stretch">

        <div className="col-span-3 flex flex-col">
          <div className="bg-blue-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">
            LECTURA TECNICA DE LA SIMULACION
          </div>
          <SectionTitle>Misma Historia en Tres Vistas</SectionTitle>
          <BodyText>
            En la pagina anterior vimos la simulacion como una comprobacion general. Aqui lo
            importante es leer las imagenes sin venderlas como una verdad absoluta. SimScale nos
            permitio mirar el comportamiento del aire alrededor del coche desde distintos angulos
            y comprobar si el patron visual se parecia a lo que esperabamos.
          </BodyText>
          <BodyText>
            Las tres imagenes de esta pagina sirven para lo mismo pero vistas de forma distinta:
            el mapa de velocidad deja ver donde el aire pierde energia, las lineas de corriente
            muestran si el flujo permanece adherido o se separa, y el mapa de presion superficial
            enseña en que zonas se concentran los gradientes de carga. Si las tres lecturas
            coinciden, la interpretacion del modelo es mucho mas fiable.
          </BodyText>

          <div className="bg-blue-950/60 border border-blue-500 p-3 mb-3">
            <div className="text-blue-300 font-bold text-[11px] uppercase mb-2">Setup usado en SimScale</div>
            {[
              ['Tipo', 'Aerodinamica externa'],
              ['Uso', 'Lectura visual'],
              ['Control', 'Comparar patrones'],
              ['Zonas clave', 'Morro y ruedas'],
              ['Lectura clave', 'Flujo ordenado'],
              ['Limite', 'No es pista real'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start justify-between gap-3 py-1 border-b border-blue-500/15 last:border-b-0">
                <span className="text-[9px] text-gray-500 uppercase">{k}</span>
                <span className="text-[9px] text-gray-300 font-mono text-right">{v}</span>
              </div>
            ))}
          </div>

          <SectionTitle>Que Nos Interesaba Ver</SectionTitle>
          <BodyText>
            No buscabamos una simulacion bonita sin mas. Nos fijamos sobre todo en cuatro cosas:
            que el morro no generase una bolsa de alta presion innecesaria, que los pontones
            ayudasen a separar la perturbacion de las ruedas del flujo limpio central, que la
            parte superior no sufriese separacion brusca al llegar al cockpit y que la estela
            trasera saliese lo mas compacta posible.
          </BodyText>

          <div className="mt-auto border border-gold-400/20 bg-black-900 p-3">
            <div className="text-[10px] text-gold-400 uppercase font-bold mb-2">Conclusion rapida</div>
            <p className="text-[10px] text-gray-300 leading-relaxed">
              Lo relevante no es sacar un numero perfecto. Lo importante es que velocidad,
              presion y lineas de corriente cuentan una historia parecida: no aparece una zona
              claramente caotica que obligue a rehacer el coche.
            </p>
          </div>
        </div>

        <div className="col-span-6 flex flex-col">
          <div className="bg-cyan-700 text-white px-2 py-1 font-bold text-[11px] inline-block mb-3">
            LINEAS DE CORRIENTE Y VELOCIDAD DEL FLUJO
          </div>
          <SectionTitle>Vista Lateral: Flujo Adherido y Estela Trasera</SectionTitle>
          <Photo
            src="/assets/cfd_lineas_lateral.jpeg"
            alt="Simulacion CFD con lineas de corriente en vista lateral"
            label="cfd_lineas_lateral.jpeg"
            height="h-56"
            fit="contain"
          />
          <BodyText className="mt-3">
            La vista lateral deja bastante claro que el flujo principal pasa por encima del coche
            sin encontrar cambios geometricos demasiado agresivos. Las lineas superiores apenas se
            desordenan hasta la parte trasera, lo que sugiere que la carroceria mantiene el aire
            adherido durante casi todo el recorrido. Debajo y alrededor de las ruedas si aparecen
            curvaturas mas fuertes, algo normal porque ahi es donde se concentra buena parte de la
            turbulencia.
          </BodyText>
          <BodyText>
            La estela no desaparece, evidentemente, pero parece bastante centrada respecto al eje
            del coche. Eso nos interesaba porque una asimetria grande habria sido mala señal. La
            zaga no parece provocar una separacion violenta; mas bien deja salir el flujo de forma
            progresiva, que era la intencion del diseño.
          </BodyText>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            {[
              {
                title: 'Flujo superior',
                text: 'Permanece bastante limpio hasta el aleron trasero, sin una separacion evidente en la imagen.',
              },
              {
                title: 'Zona de ruedas',
                text: 'Es donde mas se deforma el patron de corriente; por eso tenia sentido trabajar los pontones.',
              },
              {
                title: 'Estela',
                text: 'Sale bastante centrada, sin una asimetria visual que llame la atencion.',
              },
              {
                title: 'Lectura global',
                text: 'El coche no corta el aire perfecto, pero lo guia de forma bastante controlada para esta escala.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="border border-cyan-600/30 bg-cyan-950/20 p-3">
                <div className="text-cyan-400 font-bold text-[10px] uppercase mb-1">{title}</div>
                <div className="text-[9px] text-gray-400 leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 flex flex-col">
          <div className="bg-gold-500 text-black px-2 py-1 font-bold text-[11px] inline-block mb-3">
            MAPAS DE CAMPO SOBRE EL MONOPLAZA
          </div>

          <SectionTitle>Mapa de Velocidad</SectionTitle>
          <Photo
            src="/assets/cfd_mapa_velocidad.jpeg"
            alt="Mapa de magnitud de velocidad sobre el monoplaza"
            label="cfd_mapa_velocidad.jpeg"
            height="h-48"
            fit="contain"
          />
          <BodyText className="mt-3">
            En planta se distinguen zonas de menor velocidad alrededor del cockpit, el tren
            delantero y la region cercana a las ruedas. Son las areas donde el aire se frena al
            encontrarse con la geometria o con la estela que generan los elementos rotacionales.
            Fuera de esas zonas, el campo permanece bastante uniforme.
          </BodyText>

          <SectionTitle>Mapa de Presion Superficial</SectionTitle>
          <Photo
            src="/assets/cfd_presion_superficial.jpeg"
            alt="Mapa de presion superficial sobre el coche"
            label="cfd_presion_superficial.jpeg"
            height="h-36"
            fit="contain"
          />
          <BodyText className="mt-3">
            El mapa de presion muestra zonas mas marcadas en puntos esperables: punta del morro,
            union del halo con la toma superior, caras delanteras de las ruedas y algunos cambios
            de seccion en los pontones. No lo usamos para afirmar una carga exacta, sino para
            comprobar que no hubiese una concentracion rara en una zona que no esperabamos.
          </BodyText>
        </div>

      </div>
      <Footer pageNumber={5} />
    </PageContainer>
  );
};
