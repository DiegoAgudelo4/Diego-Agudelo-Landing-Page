import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';

const MobileWarning = () => {
  const location = useLocation();

  // Array de rutas restringidas (incluyendo rutas dinámicas)
  const restrictedRoutes = [
    /^\/my-projects\/.+/, 
  ];

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const currentPath = location.pathname;

    const isRestrictedPath = restrictedRoutes.some((route) => {
      if (typeof route === 'string') {
        return matchPath(route, currentPath);
      } else if (route instanceof RegExp) {
        return route.test(currentPath);
      }
      return false;
    });

    if (isMobile && isRestrictedPath) {
      alert('⚠️ Esta página no es compatible con dispositivos móviles. Para una mejor experiencia, usa un computador.');
    }
  }, [location.pathname]);

  return null; // No renderiza nada
};

export default MobileWarning;
