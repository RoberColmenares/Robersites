// src/components/ProjectCard.jsx
import React from "react";
import "../../App.css";

// Importación de imágenes de los proyectos
import img from '../../assets/img/pizza.png';
import img2 from '../../assets/img/perrunos.png';
import img3 from '../../assets/img/villalobos.png';
import img4 from '../../assets/img/joyeria.png';

const ProjectCard = () => {
  return (
    <div className='container-glass mb-20'>
      <section className='section-glass'>
        <h2 className="Robot text-2xl mb-8">Proyectos Recientes</h2>

        <div className="md:flex md:flex-wrap">
          
          {/* 🟡 Proyecto 1: Joyería Online */}
          <figure
            style={{ backgroundImage: `url(${img4})` }}
            className="card bg-[url('/ruta/a/tu-imagen.jpg')]"
          >
            <a href="https://joyeria-rc.vercel.app/home" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card-info">

                <p>React</p>
                <p>CSS puro</p>
                <p>Node.js</p>
                <p>PostgreSQL</p>
                <button className="Robot mt-4">Ver más</button>
              </div>
              <span className="mobile-button">Ver más</span>
            </a>
          </figure>

          {/* 🐶 Proyecto 2: Página de adopción de mascotas */}
          <figure
            style={{ backgroundImage: `url(${img2})` }}
            className="card bg-[url('/ruta/a/tu-imagen.jpg')]"
          >
            <a href="https://perrunos-eight.vercel.app/" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card-info">
                <p>HTML</p>
                <p>Tailwind</p>
                <p>JavaScript</p>
                <button className="Robot mt-4">Ver más</button>
              </div>
              <span className="mobile-button">Ver más</span>
            </a>
          </figure>

          {/* 🍕 Proyecto 3: Tienda online de pizzas (e-commerce básico) */}
          <figure
            style={{ backgroundImage: `url(${img})` }}
            className="card bg-[url('/ruta/a/tu-imagen.jpg')]"
          >
            <a href="https://robercolmenares.github.io/Bassi-Ecommecer/" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card-info">

                <p>React</p>
                <p>CSS puro</p>
                <p>JavaScript</p>
                <button className="Robot mt-4">Ver más</button>
              </div>
              <span className="mobile-button">Ver más</span>
            </a>
          </figure>

          {/* 🏠 Proyecto 4: Sitio institucional de constructora Villalobos */}
          <figure
            style={{ backgroundImage: `url(${img3})` }}
            className="card bg-[url('/ruta/a/tu-imagen.jpg')]"
          >
            <a href="https://villalobos.vercel.app/" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card-info">

                <p>HTML</p>
                <p>CSS puro</p>
                <button className="Robot mt-4">Ver más</button>
              </div>
              <span className="mobile-button">Ver más</span>
            </a>
          </figure>

        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
