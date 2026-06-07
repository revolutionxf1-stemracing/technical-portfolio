import React from 'react';
import { PageContainer, Header, Footer, SectionTitle, BodyText, PlaceholderImage, Table } from '../Shared';

export const Page12: React.FC = () => {
    return (
        <PageContainer>
            <Header title="Validación Física y Análisis Computacional" pageNumber={12} />
            <div className="p-6 grid grid-cols-3 gap-6 h-full">
                {/* COLUMN 1: Aerodynamics (CFD & Wind Tunnel) */}
                <div className="col-span-1">
                    <div className="bg-cyan-600 text-white px-2 py-1 font-bold text-xs inline-block mb-2">AERODINÁMICA Y VALIDACIÓN CFD</div>
                    
                    <SectionTitle>Análisis Computacional de Fluidos (CFD)</SectionTitle>
                    <BodyText>
                        Para garantizar un rendimiento óptimo en pista, hemos sometido nuestro diseño final a rigurosas simulaciones mediante el software SimScale. El análisis aerodinámico arrojó resultados sumamente prometedores que corroboran nuestras hipótesis de diseño iniciales. Concretamente, registramos una fuerza total en el eje Y (fuerza lateral) de apenas 0.05 N, indicando una excelente estabilidad direccional frente a turbulencias cruzadas. Lo más destacable es el valor en el eje Z, donde obtuvimos una carga aerodinámica (downforce) de -0.73 N, esencial para mantener el vehículo adherido a la pista a altas velocidades y evitar el levantamiento del morro. Finalmente, la resistencia al avance (fuerza X) registró un valor óptimo de 0.00 N neto relativo en las áreas medidas, validando la extremada eficiencia de penetración del perfil aerodinámico de nuestro monoplaza para la competición STEM Racing.
                    </BodyText>
                    <PlaceholderImage label="SimScale CFD Líneas de Flujo" height="h-20" />
                    <PlaceholderImage label="SimScale Gráfica de Fuerzas Z" height="h-20" />

                    <SectionTitle>Túnel de Viento Experimental</SectionTitle>
                    <BodyText>
                        Con el objetivo de contrastar empíricamente los datos obtenidos en las simulaciones CFD, el equipo diseñó y construyó un túnel de viento casero altamente funcional. El dispositivo consta de una cámara de pruebas aislada con una cubierta superior transparente, lo que permite una observación directa sin perturbar el sistema, y emplea un secador de pelo para generar un flujo de aire forzado constante. Al adherir hilos extremadamente finos a lo largo de la carrocería del vehículo impreso en 3D, pudimos visualizar el comportamiento real de la capa límite. Esta prueba física nos permitió confirmar de forma visual que la silueta de nuestro coche evita la formación de vórtices indeseados y guía el aire exactamente como predecía el modelo computacional.
                    </BodyText>
                    <div className="flex gap-2 mb-2">
                        <PlaceholderImage label="Prueba en Túnel de Viento" height="h-20" className="flex-1" />
                        <PlaceholderImage label="Detalle de Hilos en Chasis" height="h-20" className="flex-1" />
                    </div>
                </div>

                {/* COLUMN 2: Structural & Friction Tests */}
                <div className="col-span-1">
                    <div className="bg-green-600 text-white px-2 py-1 font-bold text-xs inline-block mb-2">ESTRUCTURA Y DINÁMICA</div>

                    <SectionTitle>Prueba Estructural del Alerón Frontal</SectionTitle>
                    <BodyText>
                        El alerón delantero es una de las piezas más críticas del ensamblaje, siendo sumamente susceptible a fracturas provocadas por las fuerzas g extremas durante la zona de frenado al final de la pista. Para validar su integridad estructural y garantizar el cumplimiento estricto del reglamento técnico en materia de durabilidad y seguridad, diseñamos un exigente test de carga estática. Suspendimos verticalmente el prototipo impreso en 3D utilizando únicamente los anclajes estructurales del alerón. Posteriormente, aplicamos una tensión de carga severa colgando diversas herramientas de taller previamente calibradas y pesadas, buscando alcanzar el límite de cedencia del material PLA/PETG.
                    </BodyText>
                    <Table 
                        headers={["Componente de Carga", "Masa Medida (g)"]}
                        rows={[
                            ["Herramienta Rotativa (Dremel)", "422.7"],
                            ["Alicates Universales", "300.6"],
                            ["Alicates de Corte", "463.7"],
                            ["Llave Inglesa Metálica", "553.5"],
                            ["CARGA TOTAL SOPORTADA", "1740.5 (1.74 kg)"]
                        ]}
                    />
                    <BodyText>
                        Sorprendentemente, el montaje estructural del alerón frontal logró soportar con éxito una masa total acumulada de 1.74 kg de forma sostenida sin presentar ningún tipo de deformación plástica irreversible ni propagación de micro-fracturas. Esto demuestra un coeficiente de seguridad mecánico sobresaliente, garantizando la supervivencia del componente en carrera.
                    </BodyText>
                    <PlaceholderImage label="Vehículo suspendido con 1.74kg" height="h-24" />
                </div>

                {/* COLUMN 3: Bearings & Conclusions */}
                <div className="col-span-1">
                    <div className="bg-gold-600 text-black px-2 py-1 font-bold text-xs inline-block mb-2">FRICCIÓN Y RENDIMIENTO</div>

                    <SectionTitle>Análisis de Fricción en Rodamientos</SectionTitle>
                    <BodyText>
                        La reducción de la resistencia a la rodadura rotacional es un factor físico determinante para maximizar la velocidad punta y lograr arañar milésimas de segundo en el tiempo total de carrera. Para optimizar este parámetro, llevamos a cabo un estudio cinemático empírico comparativo entre rodamientos de acero convencionales y rodamientos de alto rendimiento equipados con bolas de cerámica. Empleando un sistema de fijación mediante un tornillo de banco de precisión, acoplamos los cojinetes y aplicamos un impulso rotacional uniforme. Procedimos entonces a cronometrar el tiempo de "giro libre" o free-spin hasta la detención completa. Esta rigurosa metodología evidenció empíricamente una superioridad incontestable de los rodamientos cerámicos, disipando menos energía en forma de calor y manteniendo su inercia angular durante un periodo notablemente prolongado.
                    </BodyText>
                    <PlaceholderImage label="Rodamiento metálico en tornillo de banco" height="h-20" />

                    <SectionTitle>Prueba Dinámica de Rampa y Lubricación</SectionTitle>
                    <BodyText>
                        Como fase final de la validación mecánica, diseñamos un experimento para evaluar el comportamiento dinámico global del ensamblaje y cuantificar los beneficios tangibles de la lubricación. Construimos una pista de caída libre inclinada empleando una rampa de cartón de 60 cm de longitud estandarizada. La prueba consistió en liberar el vehículo desde el reposo en la cúspide para medir tanto su aceleración de descenso como la distancia total recorrida inercialmente sobre una superficie plana. Inicialmente, el test se ejecutó con los rodamientos instalados completamente en seco. Acto seguido, se purgaron los cojinetes y se inyectó un lubricante de muy baja viscosidad térmica. El contraste de resultados fue concluyente: el lubricante redujo la fricción estática inicial, aumentando la velocidad de salida de la rampa y extendiendo masivamente la distancia de rodadura total, confirmando que la tribología de las ruedas está perfectamente optimizada.
                    </BodyText>
                    <PlaceholderImage label="Descenso en rampa de cartón (60cm)" height="h-20" />
                </div>
            </div>
            <Footer pageNumber={12} />
        </PageContainer>
    )
}
