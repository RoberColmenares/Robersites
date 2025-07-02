import React from 'react';
import "../../App.css";
import { FaLaptopCode, FaBriefcase, FaShoppingCart, FaBuilding, FaRocket } from 'react-icons/fa';

const Servicios = () => {
  return (
    <div className='container-glass mb-15'>
      <section className='section-glass'>
        <div>
          <p className='Robot text-2xl mb-10 text-yellow-400 text-wave'>Servicios</p>

          <div className='flex flex-col gap-10 md:flex-row md:flex-wrap justify-center'>

            {/* Aplicaciones a la medida */}
            <div className='bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md w-full md:w-[45%] lg:w-[30%] text-center hover:scale-105 transition'>
              <FaLaptopCode className='text-4xl mx-auto mb-3 text-blue-400' />
              <h3 className='Robot text-lg mb-2'>Aplicaciones a la medida</h3>
              <p className='text-sm text-gray-200'>
                Desarrollo de soluciones web únicas, adaptadas a tu rubro: gestión de pacientes, reservas, consultas, agendas o reportes. Ideal para profesionales independientes y pequeñas empresas que necesitan automatizar procesos.
              </p>
            </div>

            {/* Portafolio */}
            <div className='bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md w-full md:w-[45%] lg:w-[30%] text-center hover:scale-105 transition'>
              <FaBriefcase className='text-4xl mx-auto mb-3 text-purple-400' />
              <h3 className='Robot text-lg mb-2'>Portafolio</h3>
              <p className='text-sm text-gray-200'>
                Preséntate al mundo con un portafolio profesional y atractivo. Perfecto para diseñadores, desarrolladores, fotógrafos o freelancers que buscan destacar su trabajo con estilo moderno y funcional.
              </p>
            </div>

            {/* Tienda online */}
            <div className='bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md w-full md:w-[45%] lg:w-[30%] text-center hover:scale-105 transition'>
              <FaShoppingCart className='text-4xl mx-auto mb-3 text-green-400' />
              <h3 className='Robot text-lg mb-2'>Tienda online</h3>
              <p className='text-sm text-gray-200'>
                Crea tu propio e-commerce con carrito de compras, pasarelas de pago (como Webpay o PayPal), control de stock y panel de administración. Diseñado para ayudarte a vender sin complicaciones.
              </p>
            </div>

            {/* Página corporativa */}
            <div className='bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md w-full md:w-[45%] lg:w-[30%] text-center hover:scale-105 transition'>
              <FaBuilding className='text-4xl mx-auto mb-3 text-yellow-300' />
              <h3 className='Robot text-lg mb-2'>Página corporativa</h3>
              <p className='text-sm text-gray-200'>
                Sitio institucional para empresas o marcas. Incluye presentación de servicios, equipo de trabajo, testimonios y formulario de contacto. Ideal para construir confianza y credibilidad.
              </p>
            </div>

            {/* Landing Page */}
            <div className='bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md w-full md:w-[45%] lg:w-[30%] text-center hover:scale-105 transition'>
              <FaRocket className='text-4xl mx-auto mb-3 text-pink-400' />
              <h3 className='Robot text-lg mb-2'>Landing Page</h3>
              <p className='text-sm text-gray-200'>
                Páginas de conversión enfocadas en un objetivo claro: captar leads, promocionar un producto o impulsar una campaña. Diseño rápido, optimizado para dispositivos móviles y enfocado en resultados.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
