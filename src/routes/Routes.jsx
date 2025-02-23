import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/Home";
import Proyects from "../pages/proyects/Proyects";
import ProyectDescription from "../views/proyectDescription/ProyectDescription";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/Diego-Agudelo-Landing-Page/">
      <HomeLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-projects" element={<Proyects />} />
          <Route path="/my-projects/:id" element={<ProyectDescription />} />
        </Routes>
      </HomeLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
