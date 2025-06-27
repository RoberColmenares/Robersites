// src/components/Zona.jsx
import React, { useState, useRef } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { FaTools, FaProjectDiagram, FaConciergeBell, FaEnvelope, FaHome } from 'react-icons/fa';
import PageWrapper from './PageWrapper';
import '../App.css';

// Lista de íconos y rutas
const icons = [
  { to: '/zona/habilidades', Icon: FaTools },
  { to: '/zona/proyectos', Icon: FaProjectDiagram },
  { to: '/zona/servicios', Icon: FaConciergeBell },
  { to: '/zona/contacto', Icon: FaEnvelope },
  { to: '/', Icon: FaHome },
];

// Detectar si el dispositivo es táctil
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

const Zona = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const [scales, setScales] = useState(Array(icons.length).fill(1));

  // Solo activa el efecto de hover en dispositivos no táctiles
  const handleMouseMove = (e) => {
    if (isTouchDevice || !navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const mouseX = e.clientX;

    const newScales = icons.map((_, i) => {
      const iconWidth = navRect.width / icons.length;
      const iconCenterX = navRect.left + iconWidth * (i + 0.5);
      const distance = Math.abs(mouseX - iconCenterX);

      const maxDistance = 150;
      const scale = distance > maxDistance ? 1 : 1.8 - (distance / maxDistance) * 0.8;

      return scale;
    });

    setScales(newScales);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setScales(Array(icons.length).fill(1));
    }
  };

  return (
    <div>
      {/* Renderiza el contenido de la ruta actual con animación */}
      <PageWrapper key={location.pathname}>
        <Outlet />
      </PageWrapper>

      {/* Barra inferior de navegación */}
      <nav
        ref={navRef}
        onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
        onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
        className="text-2xl flex justify-center space-x-4 fixed bottom-4 w-max left-1/2 transform -translate-x-1/2 rounded-2xl z-50
          md:text-4xl md:space-x-7 md:px-10 md:py-6 text-white border-gray-400"
      >
        {icons.map(({ to, Icon }, i) => (
          <NavLink
            key={to}
            to={to}
            style={{ transform: `scale(${!isTouchDevice ? scales[i] : 1})` }}
            className="metallic-hover transition-transform duration-150"
          >
            <Icon />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Zona;
