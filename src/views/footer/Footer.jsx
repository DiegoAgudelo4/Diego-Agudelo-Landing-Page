import { handleScrollTo } from '@utils/ScrollTo';
import styles from './Footer.module.css';
import { Stack, Avatar, Box, Typography } from '@mui/material';

import ReactLogo from '/img/logo/react-logo.png';
import MuiLogo from '/img/logo/mui-logo.png';
import ViteLogo from '/img/logo/vite-logo.png';
import SwiperLogo from '/img/logo/swiper-logo.svg';
import FramerLogo from '/img/logo/framer-logo.png';

const numeroCelular= '+573134171749'
const mensajeDefecto = 'Mi Web: Hola, me encantaría saber más de ti.'

const Footer = () => {
  return (
    <div className={styles.main} id="hm-contact">
      <div className={styles.footerBasic}>
        Contáctame via redes sociales
        <footer style={{ marginTop: '20px' }}>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/-diego-agudelo/">
              <i className="icon ion-social-linkedin"></i>
            </a>
            <a href="https://github.com/DiegoAgudelo4">
              <i className="icon ion-social-github"></i>
            </a>
            <a href={`https://wa.me/${numeroCelular}?text=${mensajeDefecto}`}>
              <i className="icon ion-social-whatsapp"></i>
            </a>
          </div>

          <p className={styles.copyright}>Diego Alejandro Agudelo Rendon © 2025</p>
          <Box className={styles.listInline} onClick={() => handleScrollTo('hm-home')} >
            <Typography variant='h6'>
              Home
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: 2, flexWrap: 'wrap' }}>
            {[ReactLogo, ViteLogo, MuiLogo, FramerLogo, SwiperLogo].map((logo, index) => (
              <Box
                key={index}
                component="img"
                src={logo}
                alt="Technology Logo"
                sx={{
                  width: { xs: 60, sm: 70, md: 80 },
                  height: 60,
                  objectFit: 'contain',
                }}
              />
            ))}
          </Stack>

        </footer>
      </div>
    </div>
  );
};

export default Footer;
