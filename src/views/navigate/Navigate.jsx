import { useEffect, useState } from 'react';
import Button from '../../components/buttons/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ConsoleEffect from '../../components/consoleEffect/ConsoleEffect';
import { motion } from "framer-motion"
import useSectionObserver from '../../hooks/useSectionObserver';
import { handleScrollTo } from '../../utils/ScrollTo';

const sections = [
  { id: 'hm-home', text: 'Inicio' },
  { id: 'hm-about', text: 'Sobre mí' },
  { id: 'hm-experience', text: 'Experiencia' },
  { id: 'hm-contact', text: 'Contacto' }
];



const Navigate = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { text: 'Home', to: 'home', nav: '/' },
    { text: 'About Me', to: 'about', nav: '/' },
    { text: 'Experience', to: 'experience', nav: '/' },
    { text: 'Contact', to: 'contact', nav: '/' },
    { text: 'Projects', nav: '/my-projects' },
  ])
  const navigate = useNavigate();
  const location = useLocation();
  const sectionObserved = useSectionObserver("hm", 0.4);

  // Manejar visibilidad de la barra de navegación según el scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  const handleNavClick = (to, nav = '/') => () => handleClick({ to, nav });

  const handleClick = ({ to = null, nav = null }) => {
    if (to) handleScrollTo(to);
    if (nav) navigate(nav);

    setDrawerOpen(false)
  };


  return (
    <>
      {/* AppBar de Material-UI */}
      {/* <AppBar position="fixed" sx={{ display: isVisible ? 'flex' : 'none', transition: '0.3s', background: 'transparent' }}> */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

        <AppBar
          position="fixed"
          sx={{
            transition: "0.3s",
            background: "#242424",
            height: "70px",
            // width: "100vw",
            boxSizing: 'border-box',
            left: 0,
            right: 0,
            overflowX: "hidden",
          }}
        >
          <Toolbar>
            <ConsoleEffect preText="~$" texts={['Página en construcción', 'Diego Alejandro', 'Agudelo Rendon']} colors={['white', 'white']} />

            {/* Botón de menú para dispositivos móviles */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ marginLeft: 'auto', display: { xs: 'block', md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Botones para pantallas grandes */}

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, marginLeft: 'auto' }}>

              {sections.map(({ id, text }) => (
                (!location.pathname.includes('my-projects') || id === 'hm-home') && (
                  <div key={id} onClick={handleNavClick(id)}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Button text={text} active={sectionObserved === id} />
                    </motion.div>
                  </div>
                )
              ))}
              <div onClick={handleNavClick(null, '/my-projects')}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Button text="Proyectos" active={location.pathname.includes('my-projects')} />
                </motion.div>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>


      {/* Drawer para navegación móvil */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': { 
            backgroundColor: '#242424',
            color: '#fff'
          }
        }}
      >

        <List sx={{ width: 250 }}>
          {sections.map(({ id, text }) => (
            (!location.pathname.includes('my-projects') || id === 'hm-home') && (
              <ListItem key={id} onClick={handleNavClick(id)} disablePadding>
                <ListItemButton >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={handleNavClick(null, '/my-projects')}>
              <ListItemText primary={'Proyectos'} active={location.pathname.includes('my-projects')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navigate;
