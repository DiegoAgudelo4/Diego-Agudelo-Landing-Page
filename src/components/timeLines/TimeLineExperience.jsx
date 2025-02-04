import { Chrono } from "react-chrono";
import styles from './TimeLine.module.css'
import { useState } from "react";

const TimeLine = () => {
    const [items, setitems] = useState(
        [
            {
                title: "2023 - actualidad",
                cardTitle: "Freelance Software Developer",
                // url: "http://www.history.com",
                cardSubtitle: "Prestar servicios sobre desarrollo de software.",
                cardDetailedText:
                    <ul>
                        <li>Diseño de aplicaciones web</li>
                        <li>Desarrollo de aplicaciones web Full-Stack</li>
                        <li>Desarrollo web con especialización en front End en el framework React</li>
                        <li>Asesorías sobre desarrollo front end</li>
                        <li>Diseño de páginas web en figma</li>
                        <li>Despliegue de aplicaciones</li>
                    </ul>,
            },
            {
                title: "Agosto - Diciembre 2024",
                cardTitle: "Prácticas profesionales",
                url: "https://isibi-front.vercel.app/",
                cardSubtitle: "Prestar servicios sobre desarrollo de software.",
                cardDetailedText:
                    <div>
                        <p>
                            Analizar, Diseñar, Desarrollar, Probar y Desplegar un software web que permita consultar diferentes catálogos de la <a href="https://www.mbies.info/">MBIES</a> desde un mismo sitio.
                        </p>
                        <p>
                            Como resultado se obtiene el software ISIBI
                        </p>

                    </div>
            },
            {
                title: "Julio - Noviembre 2023",
                cardTitle: "Pidgin Contact Solutions",
                cardSubtitle: "SQL Junior Developer",
                cardDetailedText:
                    <ul>
                        <li>
                            Encargado de la gestión de datos mediante tareas de Extracción, Transformación y Carga (ETL) desde diversas fuentes.

                        </li>
                        <li>
                            Responsable de analizar detalladamente errores e inconvenientes que surgían durante el proceso de desarrollo, seguido
                            de la proposición de soluciones efectivas para optimizar los procesos y la calidad del servicio.
                        </li>
                        <li>
                            Comunicación directa con el cliente para cumplir sus necesidades.
                        </li>
                    </ul>
            },
        ]
    )

    return (
        <Chrono
            items={items}
            mode='VERTICAL_ALTERNATING'
            disableToolbar='true'
            theme={{
                primary: '#FF4655',
                secondary: '#0E1822',
                cardBgColor: 'white',
                titleColor: 'black',
                titleColorActive: 'white',
            }}
            fontSizes={{
                cardSubtitle: '0.85rem',
                cardText: '0.8rem',
                cardTitle: '1rem',
                title: '1rem',
            }}
            classNames={{
                card: styles.mycard,
                // cardMedia: 'my-card-media',
                // cardSubTitle: 'my-card-subtitle',
                cardText: 'my-card-text',
                cardTitle: styles.mycardtitle,
                controls: styles.mycontrols,
                title: styles.mytitle,
            }}
        >
            {/* <div
                >
                    <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
                </div>
                <div>
                    <img src="<url to  a nice image" />
                </div> */}
        </Chrono>
    )
}

export default TimeLine