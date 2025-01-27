import { Chrono } from "react-chrono";
import styles from './TimeLine.module.css'
import { useState } from "react";

const TimeLine = () => {
    const [items, setitems] = useState(
        [
            // {
            //     title: "Julio 2024 - actualidad",
            //     cardTitle: <div className={styles.example}>Hola mundo</div>,
            //     // url: "http://www.history.com",
            //     cardSubtitle: "Freelancer",
            //     cardDetailedText: "",
            //     // media: {
            //     //     type: "IMAGE",
            //     //     source: {
            //     //         url: "http://someurl/image.jpg"
            //     //     }
            //     // }
            // },
            {
                title: "Julio 2024 - actualidad (2025-1)",
                cardTitle: "Freelance Software Developer",
                // url: "http://www.history.com",
                cardSubtitle: "Prestar servicios de desarrollo de software.",
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

export default TimeLine