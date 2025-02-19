import { Box } from "@mui/material";
import HomeLayout from "../../layout/HomeLayout";

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Opcional: para el módulo autoplay
import { Autoplay } from "swiper/modules";
import ProyectList from "../../components/proyects/ProyectList";

const imgs = ['ISIBI/HomeISIBI.png', 'ISIBI/LoginISIBI.png', 'ISIBI/BusquedaAvanzada.png','ISIBI/PanelDeControl.png', 'Hikari/Home.png', 'Hikari/Catalogo.png']

const Proyects = () => {
    return (
        <HomeLayout>
            <Box
                sx={{
                    minHeight: '100vh',
                    paddingTop: '10vh',
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
                                    src={`img/${img}`}
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
                <ProyectList/>
            </Box>
        </HomeLayout>
    );
};

export default Proyects;
