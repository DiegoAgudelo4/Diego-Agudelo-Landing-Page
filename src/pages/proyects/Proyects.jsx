import { Box } from "@mui/material";

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Opcional: para el módulo autoplay
import { Autoplay } from "swiper/modules";

import ProyectList from "@components/proyects/ProyectList";
import { motion } from "framer-motion"
import { useEffect } from "react";
import { scrollToTop } from "@utils/ScrollTo";

const imgs = ['img/ISIBI/HomeISIBI.png', 'img/ISIBI/LoginISIBI.png', 'img/ISIBI/BusquedaAvanzada.png', 'img/ISIBI/PanelDeControl.png', 'img/Hikari/Home.png', 'img/Hikari/Catalogo.png']


const Proyects = () => {

    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Box className={`nav-top-padding`}
                sx={{
                    minHeight: '100vh',
                    marginTop: '20px'
                }}
            >
                {/* <h2>Proyectos</h2> */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    loop={true}
                >
                    {imgs.map((img) => (
                        <SwiperSlide key={img}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '400px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={`${img}`}
                                    alt={`${img}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>

                        </SwiperSlide>
                    ))}
                </Swiper>
                <ProyectList />
            </Box>
        </motion.div>
    );
};

export default Proyects;
