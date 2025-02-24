import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import SideBar from "@components/sideBar/SideBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Title from "@components/texts/Title";
import { scrollToTop } from "@utils/ScrollTo";
import Section from "@components/section/Section";
import BodySection from "@components/section/BodySection";



const proyectInfoData =
    [{
        id: 'isibi',
        title: 'ISIBI: Integrador de sistemas de información Bibliográfica',
        sections: [
            {
                id: "py-resumen",
                label: "Resumen",
                title: "ISIBI: Integrador de sistemas de información Bibliográfica",
                bodyList: [
                    {
                        text: `El proyecto se centra en el desarrollo de un software web que integra las respuestas al realizar búsquedas de catálogos bibliográficos de las bibliotecas pertenecientes a la Mesa de Bibliotecas de Instituciones de Educación Superior de Antioquia (MBIES). El objetivo principal es facilitar la búsqueda simultánea, personalizada y rápida en estos catálogos, abordando la problemática de dispersión de los recursos bibliográficos. A través de la implementación de microservicios, se logra una menor complejidad de despliegue en cualquier servidor. El software permitirá la búsqueda avanzada, historial de usuario y un panel de administrador, mejorando el desempeño y la experiencia del usuario. Este proyecto surge como una evolución de iniciativas anteriores que, aunque efectivas en sus enfoques iniciales, presentaban limitaciones tecnológicas y funcionales. Se utilizaron tecnologías open source como Python, MongoDB, el framework React - Javascript y contenerización con docker, enfocadas en la creación de una arquitectura escalable y orientada a microservicios. La nueva versión del software no solo proporcionará herramientas para optimizar el proceso de investigación, sino que también permitirá un mayor alcance en la colaboración entre catálogos institucionales. `,
                        image: 'img/ISIBI/HomeISIBI.png',
                        imagePlace: 'left'
                    },
                ]
            },
            {
                id: "py-problema",
                label: "Problema",
                title: "Problema a solucionar",
                bodyList: [
                    {
                        text: `Los estudiantes e investigadores enfrentan una gran dificultad al buscar recursos bibliográficos debido a la dispersión de los catálogos de las bibliotecas académicas. Cada institución mantiene su propio sistema de catalogación, lo que obliga a los usuarios a realizar búsquedas individuales en cada catálogo. Esta dispersión de sistemas de catalogación resulta en procesos ineficientes y frustrantes, ya que los usuarios deben invertir tiempo y esfuerzo en buscar la misma información en múltiples plataformas. Esta situación afecta negativamente la accesibilidad y el aprovechamiento de los recursos disponibles. Por ello, la MBIES está en busca de una solución de software que permita integrar las respuestas de catálogos de las diferentes bibliotecas académicas en una única plataforma.`,
                        image: 'img/ISIBI/Problema.png',
                        imagePlace: 'right'
                    },
                ]
            },
            {
                id: "py-Solucion",
                label: "Solución",
                title: "Solución",
                bodyList: [
                    {
                        text: `Los usuarios serán cualquier persona que tenga la dirección de la página web. El software web permitirá a los usuarios, desde dispositivos que soporten navegadores web, consultar múltiples catálogos bibliográficos de universidades integradas en la plataforma, utilizando texto y filtros avanzados como fecha de publicación, autor, catálogo, para sus búsquedas. Los resultados de estas búsquedas mostrarán información de los catálogos seleccionados, permitiendo al usuario interactuar y navegar entre ellos, con la opción de seleccionar libros y ser redirigido a la página original del catálogo correspondiente.`,
                        image: 'img/ISIBI/Solucion.png',
                        imagePlace: 'left'
                    },
                    {
                        text: `Modos de Uso:
                            Rol de Administrador:
                            `,
                        textList: [
                            {
                                textTitle: 'Sin Inicio de Sesión',
                                list: ['Los usuarios podrán realizar consultas y acceder a los resultados de búsqueda.', 'Los historiales de búsqueda no se guardarán.']
                            },
                            {
                                textTitle: 'Con Inicio de Sesión',
                                list: ['Los usuarios podrán iniciar sesión para acceder a funcionalidades adicionales.', 'Posibilidad de guardar historiales de búsqueda para consultas futuras.','Opción de marcar recursos como favoritos y acceder a una lista personalizada de estos.']
                            },
                            {
                                textTitle: 'Funcionalidades Adicionales -> Filtros de Búsqueda Avanzada',
                                list: ['Los usuarios podrán refinar sus búsquedas utilizando filtros como autor, año de publicación, tipo de material, entre otros.']
                            },
                            {
                                textTitle: 'Rol de Administrador',
                                list: ['El sistema incluirá un rol de usuario administrador con acceso completo a la información de usuarios, catálogos e historiales de búsqueda. ']
                            },
                            
                        ],
                        imagePlace: 'right'
                    },
                ]
            },
            {
                id: "py-arquitectura",
                label: "Arquitectura",
                title: "Arquitectura de la solución",
                bodyList: [
                    {
                        text: `En la imagen presenta las tecnologías usadas para el desarrollo de cada uno de los servicios. Se separa el front y el backend en diferentes capas pero este se puede ejecutar en el mismo servidor que el backend ya que todos son microservicios. A continuación una descripción:`,
                        textList: [
                            {
                                textTitle: 'Interfaz de usuario (UI)',
                                list: ['Se ejecuta en un contenedor Docker y está construida utilizando tecnologías React (JS) y Material-UI (MUI)', 'La UI interactúa con el backend mediante HTTP, comunicándose con un Nginx Load Balancer']
                            },
                            {
                                textTitle: 'Nginx Load Balancer',
                                list: ['Actúa como un balanceador de carga que distribuye las peticiones hacia los servicios backend que están detrás de él', 'La UI interactúa con el backend mediante HTTP, comunicándose con un Nginx Load Balancer.']
                            },
                            {
                                textTitle: 'Main Service Gateway (FastAPI)',
                                list: ['Este es el servicio principal o puerta de enlace que recibe las peticiones HTTP y se comunica con los distintos microservicios: Catalogs Service, Crawler Service, y Users Service.', 'Actúa como un intermediario para encaminar las solicitudes entrantes hacia los microservicios apropiados.']
                            },
                            {
                                textTitle: 'Microservicios (FastAPI)',
                                list: ['Catalogs Service: Encargado de gestionar la información relacionada con catálogos.', 'Crawler Service: Realiza las tareas de crawling (raspado) para extraer información de fuentes externas.', 'Users Service: Se encarga de gestionar la información de usuarios, tales como la autenticación y gestión de perfiles.', 'Todos los microservicios están contenerizados y escritos en FastAPI.']
                            },
                            {
                                textTitle: 'Servidor MongoDB, es una base de datos NoSQL que maneja diferentes conjuntos de datos',
                                list: ['Catalogs Systems: Almacena información del sistema de catálogos.', 'Catalogs: Almacena información sobre los catálogos.', 'Users: Almacena la información de usuarios.', 'La comunicación entre los microservicios y el servidor MongoDB se realiza a través de TCP/IP.']
                            },
                        ],
                        image: 'img/ISIBI/Arquitectura.png',
                        imagePlace: 'left',
                    },
                ]
            },
            {
                id: "py-resultados",
                label: "Resultados",
                title: "Resultados del desarrollo",
                bodyList: [
                    {
                        text: ``,
                        collage:['']
                    },
                ]
            },
        ],
    }, {
        id: 'hikari',
        title: 'Hikari: Tienda de ropa',
        sections: [
            {
                id: "py-home",
                label: "Inicio",
                title: "Hikari Tienda de ropa",
                bodyList: [
                    {
                        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti aut magnam nemo repellendus assumenda necessitatibus, ipsum quod adipisci explicabo laboriosam iure, unde quam alias inventore eaque odit ad incidunt!`,
                        image: 'img/Hikari/Home.png',
                        imagePlace: 'left'
                    },
                ]
            },
        ],
    }
    ]

const ProyectDescription = () => {
    const { id } = useParams();

    const [proyectInfo, setProyectInfo] = useState(null);
    const [sections, setSections] = useState([])

    useEffect(() => {
        const foundProject = proyectInfoData.find((project) => project.id === id);
        if (foundProject) {
            setProyectInfo(foundProject);
            const sections = foundProject.sections.map((section) => ({ id: section.id, label: section.label }))
            setSections(sections)
        }
    }, [id]);

    useEffect(() => {
        scrollToTop()
    }, [])


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Box
                sx={{ display: 'flex', flexDirection: 'column' }}
            >
                {/* Contenido del proyecto */}
                <Box
                    sx={{
                        width: proyectInfo ? 'calc(100vw - 170px)' : '100%'
                    }}
                >
                    {proyectInfo ?
                        <>
                            {proyectInfo.sections.map((section) => (
                                <Section key={section.id} secId={section.id} title={section.title}>

                                    {section.bodyList.map((body, index) => (
                                        <BodySection key={`${proyectInfo.title}-section-${index}`} title={proyectInfo.title} image={body.image} text={body.text} float={body.imagePlace} textList={body.textList} />
                                    ))}

                                </Section>

                            ))}

                            <SideBar sections={sections} />
                        </>
                        :
                        <Box className={`nav-top-padding`} sx={{ textAlign: 'center', margin: '20px 0px', height: '100vh' }}>
                            <Title text={"No hay información sobre el proyecto"} />
                        </Box>
                    }
                </Box>
                {/* Navegacion */}

            </Box>
        </motion.div>
    );
};

export default ProyectDescription;
