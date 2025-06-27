import { Route, Routes } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";
import Inicio from "./components/Inicio";
import Zona from "./components/Zona";


import ProjectCard from "./assets/pages/ProjectCard";
import Habilidades from "./assets/pages/Habilidades";
import Servicios from "./assets/pages/Servicios";
import Contacto from "./assets/pages/Contacto";


export default function App() {
  return (
    <>
      {/* Fondo constante en todo el sitio */}
      <ParticlesBackground />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        <Routes>
          {/* Página de inicio con botón Comenzar */}
          <Route path="/" element={<Inicio />} />

          {/* Layout Zona con barra abajo */}
          <Route path="/zona/*" element={<Zona />}>
            <Route path="habilidades" element={<Habilidades />} />
            <Route path="proyectos" element={<ProjectCard />} />
            <Route path="servicios" element={<Servicios />} />
            <Route path="contacto" element={<Contacto />} />

          </Route>
        </Routes>
      </main>
    </>
  );
}
