import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Proyects from '../pages/proyects/Proyects';


const AppRoutes = () => {
  return (
    <BrowserRouter basename="/Diego-Agudelo-Landing-Page/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-proyects" element={<Proyects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
