import { Chrono } from "react-chrono";
import styles from './TimeLine.module.css'
import { useState } from "react";

const TimeLineAcademic = () => {
    const [items, setitems] = useState(
        [
            {
                title: "2019-2025",
                cardTitle: "Pregrado en ingeniería informática",
                cardSubtitle: "Politécnico Colombiano Jaime Isaza Cadavid",
                cardDetailedText: <ul>
                    <li>Analizar y construir Software aplicando estándares de calidad y buenas prácticas.</li>
                    <li>Modelar y diseñar la arquitectura de proyectos informáticos.</li>
                    <li>Innovar en la práctica de su función investigando alternativas tecnológicas, enfoques, técnicas y metodologías que permitan optimizar el proceso.</li>
                    <li>Administrar los recursos requeridos en un proceso informático teniendo en cuenta la articulación adecuada entre la productividad, costo y calidad.</li>
                    <li>Brindar soporte técnico a las Tecnologías Informáticas.</li>
                    <li>Gestionar servicios y plataformas de TI aplicando estándares y buenas prácticas.</li>
                </ul>,
                media: {
                    type: "IMAGE",
                    source: {
                        url: "https://universidadesgratuitas.com/wp-content/uploads/2021/04/Politecnico-Colombiano-Jaime-Isaza-Cadavid-campus.jpg"
                    }
                }
            },
            {
                title: "2022-2023",
                cardTitle: "Certificación en inglés",
                cardSubtitle: "Politécnico Colombiano Jaime Isaza Cadavid",
                cardDetailedText: "Certificación en competencias en inglés: Nivel A2",
            },
        ]
    )

    return (
        <div >
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
                // textOverlay
            >
                {/* <div
                >
                    <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
                </div>
                <div>
                    <img src="<url to  a nice image" />
                </div> */}
            </Chrono>
        </div>
    )
}

export default TimeLineAcademic