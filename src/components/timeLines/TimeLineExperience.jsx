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
                        <li>Trabajo independiente sin ningun convenio laboral formal.</li>
                        <li>Rol de desarrollador de software full stack, con énfasis en el desarrollo web frontend con React, desarrollo backend con Java SpringBoot y PHP Laravel</li>
                        <li>Responsable de diseñar y construir aplicaciones que se ajustan a los requerimientos del cliente.</li>
                        <li>Capacidad de autogestión del tiempo, priorizando tareas y proyectos para asegurar la entrega puntual de los productos requeridos.
                            Asesorías en diferentes áreas de el desarrollo del software, análisis, diseño y codificación.</li>
                    </ul>,
            },
            {
                title: "Agosto - Diciembre 2024",
                cardTitle: "Prácticas profesionales",
                url: "https://isibi-front.vercel.app/",
                cardSubtitle: "Prestar servicios sobre desarrollo de software.",
                cardDetailedText:
                    <ul>
                        <li>Análisis de Requerimientos: Identificación del problema y recopilación de necesidades del usuario para definir las funcionalidades del software.</li>
                        <li>Diseño del Sistema: Creación de la arquitectura del software (microservicios), modelado de datos y definición de la interfaz de usuario con la herramienta Figma.</li>
                        <li>Desarrollo de Software: Implementación de funcionalidades utilizando tecnologías web mediante metodología Scrum, asegurando calidad y rendimiento usando tecnologías open source, React.js, Python con FastApi, MongoDB y Docker.</li>
                        <li>Pruebas y Validación: Ejecución de pruebas funcionales en un entorno de pre-produccion y de integración con postman  y swagger para garantizar el correcto funcionamiento del sistema.</li>
                        <li>Despliegue: Implementación del software desarrollado (ISIBI) en el entorno de producción, asegurando su disponibilidad</li>
                    </ul>
            },
            {
                title: "Julio - Noviembre 2023",
                cardTitle: "Pidgin Contact Solutions",
                cardSubtitle: "SQL Junior Developer",
                cardDetailedText:
                    <ul>
                        <li>Encargado de la gestión de datos mediante tareas de Extracción, Transformación y Carga (ETL) desde diversas fuentes en SQL Server, implementando Stored Prodedures, Functions, Views y Jobs.</li>
                        <li>Responsable de analizar detalladamente errores e inconvenientes que surgían durante el proceso de desarrollo, seguido de la proposición de soluciones efectivas para optimizar los procesos y la calidad del servicio.</li>
                        <li>Comunicación permanente y directa con el cliente para cumplir sus necesidades.</li>
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