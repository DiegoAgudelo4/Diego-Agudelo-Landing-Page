import { Box } from "@mui/material"
import HomeLayout from "../../layout/HomeLayout"

// Importaciones de Swiper
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';


import "swiper/css";

const Proyects = () => {
    return (
        <HomeLayout>
            <Box
                sx={{
                    minHeight: '100vh',
                    paddingTop: '10vh',
                }}
            >
                proyects
            </Box>
        </HomeLayout>
    )
}

export default Proyects