import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import img from '../assets/img/rbr.svg';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      <section className="w-full max-w-7xl flex flex-col bg-white/1 backdrop-blur-xs rounded-xl p-6 shadow-lg border border-white/20 text-white">
        
        {/* Contacto + íconos */}
        <div className="md:flex md:justify-end md:items-center">
          <p className="md:text-xl lg:text-2xl text-xs md:mr-10 Robot text-center">Roberjosecolmenares@gmail.com</p>
          <div className="flex gap-6 justify-center mt-3 text-3xl md:mt-0">
            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaWhatsapp />
            </a>
            <a href="mailto:tucorreo@gmail.com" className="hover:text-red-500 transition">
              <MdEmail />
            </a>
            <a href="https://github.com/TuUsuario" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/TuUsuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col items-center my-10 md:flex-row md:justify-between">
          
          {/* Imagen y nombre */}
          <div className="md:w-1/2 flex flex-col items-center text-center space-y-4 text-2xl">
            <img src={img} alt="Rober" className="w-[220px] md:w-[350px]" />
            <h2 className="md:text-3xl ">Rober Colmenares</h2>
            <h1 className="md:text-2xl Robot">Full Stack Developer y Téc. Ciberseguridad</h1>
          </div>

          {/* Descripción */}
          <div className="md:w-1/2 flex flex-col items-center text-center mt-10 md:mt-0 space-y-4">
            <p className="Robot md:w-3/4 text-wave md:text-2xl">No soy un robot, soy un creador apasionado por la tecnología.</p>
            <h2 className="md:w-4/5 md:text-2xl ">Mi propósito es diseñar para ti una página web o aplicación que se adapte a tus necesidades, que sea</h2>
            <p className="Robot">
              <strong className="text-red-500">Segura</strong>, <strong className="text-green-500">Autogestionable</strong> y <strong className="text-yellow-500">Fácil de usar</strong>.
            </p>
            <Link to="/zona/habilidades" className="btn mt-4 text-shine ">
              Comenzar
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Inicio;
