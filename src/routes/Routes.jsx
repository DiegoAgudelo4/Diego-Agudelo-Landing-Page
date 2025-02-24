import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "@layout/HomeLayout";
import Home from "@pages/home/Home";
import Proyects from "@pages/proyects/Proyects";
import ProyectDescription from "@views/proyectDescription/ProyectDescription";
import MobileWarning from "@utils/MobileWarning";

const AppRouter = () => {
  const basename =
    import.meta.env.MODE === "production" ? "/Diego-Agudelo-Landing-Page" : "/";

  return (
    <BrowserRouter basename={"/Diego-Agudelo-Landing-Page/"}>
      <MobileWarning />
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
