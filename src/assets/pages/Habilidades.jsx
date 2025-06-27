import React, { useState, useEffect, useRef } from 'react';
import "../../App.css";

const habilidadesInfo = {
  HTML5: [
    "Estructura semántica y correcta sintaxis.",
    "Buenas prácticas de accesibilidad.",
    "Uso de etiquetas semánticas.",
    "Formularios accesibles y optimizados.",
    "Optimización SEO con etiquetas meta, títulos jerárquicos, y uso adecuado de headings.",
    "Organización del contenido para una lectura clara y estructurada.",
    "Compatibilidad multiplataforma y responsive-ready.",
    "Validación de código con herramientas como W3C Validator."
  ],
  CSS3: [
    "Maquetación moderna con Flexbox y Grid.",
    "Diseño responsive y media queries.",
    "Animaciones y transiciones fluidas.",
    "Uso de pseudoclases y pseudoelementos.",
    "Custom properties para mantener consistencia en el diseño.",
    "Uso eficiente de selectores avanzados.",
    "Estilización accesible y adaptable para diferentes dispositivos.",
    "Frameworks de diseño como Tailwind y Bootstrap.",
    "Uso de CSS (utility-first, responsive, dark mode, personalización de temas).",
    "Optimización de estilos para rendimiento "
  ],
  JavaScript: [
    "Mi Lenguaje de programación principal para el desarrollo web.",
    "Manipulación dinámica del DOM para interfaces interactivas.",
    "Gestión de eventos y formularios.",
    "Manejo de asincronía con Promesas, async/await y fetch API.",
    "Uso de funciones de orden superior y programación funcional.",
    "Validaciones de formularios del lado del cliente.",
    "Integración con APIs externas y consumo de datos en formato JSON.",
    "Uso de módulos ES6 para una mejor organización del código.",
    "Soporte en frameworks y bibliotecas modernas como React, Express y Node.js."
  ],
  React: [
    "Creación de interfaces de usuario con componentes reutilizables.",
    "Gestión de estado con useState, useEffect y context API.",
    "Enrutamiento con React Router DOM para SPA.",
    "Consumo de APIs REST y manejo de datos en tiempo real.",
    "Renderizado condicional y manejo eficiente de listas.",
    "Optimización de rendimiento con memo, lazy loading y Suspense.",
    "Formularios controlados y validación de datos.",
    "Diseño responsive con integración de Tailwind CSS o Bootstrap.",
    "Implementación de temas como dark mode y switching dinámico.",

  ],
  "Node.js": [
    "Ejecución de JavaScript en el entorno del servidor.",
    "Creación de servidores web con Express.js.",
    "Manejo de rutas, middlewares y controladores.",
    "Conexión con bases de datos relacionales y no relacionales.",
    "Autenticación segura con JWT y bcrypt.",
    "Validación de entradas con express-validator o Joi.",
    "Configuración de CORS, headers y seguridad básica con Helmet.js.",
    "Subida y gestión de archivos con Multer.",
    "Manejo de errores centralizado y logs.",
    "Amante del Patron MVC",
    "Uso de herramientas como nodemon, dotenv y PM2."
  ],
  PostgreSQL: [
    "Creación de bases de datos y tablas relacionales básicas.",
    "Uso de claves primarias y foráneas para mantener relaciones.",
    "Consultas simples y moderadas usando SELECT, WHERE, JOIN y GROUP BY.",
    "Relaciones entre tablas (uno a uno, uno a muchos).",
    "Inserción, actualización y eliminación de datos con SQL.",
    "Conexión de la base de datos a proyectos Node.js con `pg`.",
    "Uso básico de pgAdmin para visualizar y gestionar datos."
  ],
  Seguridad: [
    "Protección contra ataques comunes: XSS, CSRF, inyección SQL.",
    "Encriptación de contraseñas con bcrypt y hashing seguro.",
    "Autenticación y autorización basada en JWT y roles (RBAC).",
    "Validación de entradas en frontend y backend.",
    "Seguridad en cabeceras HTTP con Helmet.js.",
    "Control de tráfico con rate limiting y CORS.",
    "Uso de HTTPS y certificados SSL para cifrado de datos.",
    "Backups automáticos y recuperación ante desastres.",
    "Seguridad en APIs mediante tokens, expiración y scopes.",
    "Aplicación de principios básicos de hardening de servidores y bases de datos."
  ],
  Herramientas: [
    "Control de versiones eficiente con Git y GitHub (ramas, merges, pull requests).",
    "Visual Studio.",
    "Postman para pruebas de endpoints y documentación de APIs.",
    "Chrome DevTools para análisis de rendimiento y depuración.",
    "Figma y Canvas como base para diseño UI/UX y prototipos.",
    "Vite para bundling y entorno de desarrollo rápido.",
    "NPM/Yarn para gestión de dependencias y scripts.",
    "Terminal y CLI para automatización y flujo ágil de trabajo.",
    "Manejo de `.env`, variables de entorno y configuración por entorno.",
    "Integración continua (CI) y despliegue en plataformas como Vercel, Netlify o Render."
  ],
  
};

const Habilidades = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: [] });
  const modalRef = useRef();

  const handleOpenModal = (label) => {
    setModalContent({ 
      title: label, 
      description: habilidadesInfo[label] || ["Descripción no disponible."] 
    });
    setModalOpen(true);
  };

  // Cerrar modal si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalOpen]);

  return (
    <div className='container-glass mb-10'>
      <section className='section-glass'>
        <h2 className='Robot text-2xl mb-4'>HABILIDADES</h2>

        <div className='md:flex md:items-center'>
          <div className='text-xs space-y-3 md:w-1/3 md:space-y-6 md:text-lg'>
            <p className='Robot text-xl text-wave'>Desarrollador Web Full Stack </p> 
            <p>con experiencia en la creación de aplicaciones web completas, utilizando tecnologías modernas y mejores prácticas.</p>
            <p>Capaz de gestionar proyectos de principio a fin, desde el desarrollo del frontend y backend hasta la implementación del patrón MVC. Integración y consumo de APIs REST, manejo de autenticación segura mediante JWT, y diseño responsivo con enfoque en UX/UI para ofrecer interfaces intuitivas y atractivas.</p>
          </div>

          <div className='grid grid-cols-2 justify-items-center my-10 gap-5 md:w-2/3 lg:grid-cols-3'>
            {[
              { icon: 'html5', color: 'border-orange-500', label: 'HTML5' },
              { icon: 'css3', color: 'border-blue-500', label: 'CSS3' },
              { icon: 'javascript', color: 'border-yellow-500', label: 'JavaScript' },
              { icon: 'react', color: 'border-blue-300', label: 'React' },
              { icon: 'nodejs', color: 'border-green-500', label: 'Node.js' },
              { icon: 'postgresql', color: 'border-gray-500', label: 'PostgreSQL' },
              { icon: '/icons/shield.svg', color: 'border-blue-500', label: 'Seguridad', isSvg: true },
              { icon: '/icons/tools.svg', color: 'border-gray-500', label: 'Herramientas', isSvg: true },
            ].map(({ icon, color, label, isSvg }) => (
              <figure
                key={label}
                className={`
                  flex flex-col border ${color} w-max items-center px-2 py-4 md:px-5 bg-black/20 gap-5 rounded-2xl
                  hover:scale-110 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.7)]
                  hover:border-white hover:bg-white-900/50
                  transition-transform transition-shadow transition-colors duration-300
                `}
              >
                {isSvg ? (
                  <img src={icon} alt={label} className="w-16 h-16" />
                ) : (
                  <i
                    className={`devicon-${icon}-plain colored text-6xl`}
                    title={label}
                  />
                )}
                <button className='bg-black py-1 px-2 rounded-md hover:bg-white hover:text-black hover:scale-110 transition' onClick={() => handleOpenModal(label)}>Ver más</button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className=" px-3 fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white mb-10 text-black p-6 rounded-2xl max-w-md w-full relative"
          >
            <button
              className="absolute top-2 right-4 text-xl font-bold hover:text-red-500"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">{modalContent.title}</h3>

            <ul className="list-disc ml-5  text-left">
              {modalContent.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Habilidades;
