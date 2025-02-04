import { useState, useEffect } from "react";
import styles from './SkillBar.module.css'

// const SKILLS = [
//     { type: "HTML", level: 99 },
//     { type: "CSS", level: 98 },
//     { type: "JavaScript", level: 87 },
//     { type: "MongoDB", level: 92 },
//     { type: "BootStrap", level: 90 },
//     { type: "Photoshop", level: 100 },
//     { type: "Angular.js", level: 16 },
//     { type: "React.js", level: 25 },
//     { type: "PHP", level: 36 },
//     { type: "Ruby", level: 20 }
// ];

const SKILLS = [
    {
        title: "Lenguajes de programación",
        porcent: true,
        items: [
            { type: "JavaScript", level: 75 },
            { type: "Python", level: 50 },
            { type: "Java", level: 30 },
            { type: "SQL", level: 60 },
        ]
    },
    {
        title: "Desarrollo Web",
        porcent: true,
        items: [
            { type: "HTML", level: 75 },
            { type: "CSS", level: 50 },
            { type: "React.js", level: 75 },
            { type: "SpringBoot", level: 30 },
            { type: "PHP Laravel", level: 40 },
        ]
    },
    {
        title: "Bases de datos",
        porcent: true,
        items: [
            { type: "MS SQL Server", level: 75 },
            { type: "MySQL", level: 50 },
            { type: "MongoDB", level: 50 },
        ]
    },
    {
        title: "Sistemas Operativos",
        porcent: false,
        items: [
            { type: "Windows" },
            { type: "Linux" },
        ]
    },
    {
        title: "Herramientas de desarrollo",
        porcent: false,
        items: [
            { type: "Git"},
            { type: "Docker"},
            { type: "Jenkins"},
        ]
    },
    {
        title: "Ofimática",
        porcent: false,
        items: [
            { type: "Excel" },
            { type: "Word" },
            { type: "Project" },
            { type: "PowerPoint" },
            { type: "PowerBI" },
        ]
    },
    {
        title: "Metodologías",
        porcent: false,
        items: [
            { type: "Agile" },
            { type: "SCRUM" },
        ]
    },
    {
        title: "Habilidades Blandas",
        porcent: false,
        items: [
            { type: "Responsabilidad" },
            { type: "Trabajo en Equipo" },
            { type: "Gestion del tiempo" },
            { type: "Ganas de aprender" },
        ]
    },
    {
        title: "IDIOMAS",
        porcent: true,
        items: [
            { type: "Inglés A2", level: 40 },
        ]
    },
]

const SkillBars = ({ hue = 580, saturation = 50, skills = SKILLS }) => {
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCollapsed(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.container} ${collapsed ? `${styles.collapsed}` : ""}`}>

            <h3>Habilidades</h3>
            <hr />
            <ul className={styles.skills}>
                {SKILLS.map((skill, index) => (
                    <>
                        <div style={{ marginBottom: '10px' }}>
                            <h4>{skill.title}</h4>
                            {skill.porcent ?
                                skill.items.map((item, index) => (
                                    <li
                                        key={item.type}
                                        style={{
                                            width: `${item.level}%`,
                                            backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)`
                                        }}
                                        className={styles.listSkills}
                                    >
                                        <p>
                                            {item.type}<span>{item.level}</span>
                                        </p>
                                    </li>
                                ))
                                :
                                <p>
                                    {skill.items.map(item => item.type).join(", ") + "."}
                                </p>
                            }
                        </div>
                    </>
                ))}

            </ul>
            {/* 
            <h3>Habilidades</h3>
            <hr />
            <ul className={styles.skills}>
                {skills.map((skill, index) => (
                    <li
                        key={skill.type}
                        style={{
                            width: `${skill.level}%`,
                            backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)`
                        }}
                        className={styles.listSkills}
                    >
                        <p>
                            {skill.type}<span>{skill.level}</span>
                        </p>
                    </li>
                ))}
                <li
                    style={{
                        width: `${50}%`,
                        backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (5 + 3.5)}%)`

                    }}
                    className={styles.listSkills}
                >
                    <p>
                        <a href="https://cert.efset.org/en/gP8ZVQ"> Inglés</a><span> 50</span>
                    </p>

                </li>
            </ul> */}
        </div>
    );
};

export default SkillBars;
