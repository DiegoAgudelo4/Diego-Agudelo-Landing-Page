import { useEffect, useState } from 'react';
import Button from '../../components/buttons/Button';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ConsoleEffect from '../../components/consoleEffect/ConsoleEffect';

const Navigate = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = ({ to = null, nav = null }) => {
    console.log("clicked")
    if (to) handleScrollTo(to);
    if (nav) navigate(nav);
  };

  // Menú de navegación
  const menuItems = [
    { text: 'Home', to: 'home', nav: '/' },
    { text: 'About Me', to: 'about', nav: '/' },
    { text: 'Experience', to: 'experience', nav: '/' },
    { text: 'Contact', to: 'contact', nav: '/' },
    { text: 'Projects', nav: '/my-proyects' },
  ];

  return (
    <>
      {/* AppBar de Material-UI */}
      {/* <AppBar position="fixed" sx={{ display: isVisible ? 'flex' : 'none', transition: '0.3s', background: 'transparent' }}> */}
      <AppBar position="fixed" sx={{transition: '0.3s', background: '#242424' }}>
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
            {menuItems.map((item) => (
              <div key={item.text} onClick={() => handleClick(item)}>
                <Button text={item.text} />
              </div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer para navegación móvil */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        sx={{
          background: 'transparent'
        }}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => { handleClick(item); setDrawerOpen(false); }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navigate;
