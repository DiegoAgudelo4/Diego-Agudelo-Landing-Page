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
                id: "py-home",
                label: "Inicio",
                title: "ISIBI: Integrador de sistemas de información Bibliográfica",
                bodyList: [
                    {
                        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti aut magnam nemo repellendus assumenda necessitatibus, ipsum quod adipisci explicabo laboriosam iure, unde quam alias inventore eaque odit ad incidunt!`,
                        image: 'img/ISIBI/HomeISIBI.png',
                        imagePlace: 'left'
                    },
                    {
                        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti aut magnam nemo repellendus assumenda necessitatibus, ipsum quod adipisci explicabo laboriosam iure, unde quam alias inventore eaque odit ad incidunt!`,
                        image: 'img/ISIBI/HomeISIBI.png',
                        imagePlace: 'right'
                    },
                ]
            },
            {
                id: "py-description",
                label: "Descripción",
                title: "Descripción del proyecto",
                bodyList: [
                    {
                        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti aut magnam nemo repellendus assumenda necessitatibus, ipsum quod adipisci explicabo laboriosam iure, unde quam alias inventore eaque odit ad incidunt!`,
                        image: 'img/ISIBI/HomeISIBI.png',
                        imagePlace: 'left'
                    },
                    {
                        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti aut magnam nemo repellendus assumenda necessitatibus, ipsum quod adipisci explicabo laboriosam iure, unde quam alias inventore eaque odit ad incidunt!`,
                        image: 'img/ISIBI/HomeISIBI.png',
                        imagePlace: 'right'
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
                                        <BodySection key={`${proyectInfo.title}-section-${index}`} title={proyectInfo.title} image={body.image} text={body.text} float={body.imagePlace} />
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
