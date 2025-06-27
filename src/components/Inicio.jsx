import React from "react";
import { Helmet } from "react-helmet";
import { FaWhatsapp, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import img from "../assets/img/Rober2.png";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      {/* Meta tags para compartir en redes */}
      <Helmet>
        <title>Rober Colmenares - Full Stack Developer y Téc. Ciberseguridad</title>
        <meta property="og:title" content="Rober Colmenares - Full Stack Developer y Téc. Ciberseguridad" />
        <meta property="og:description" content="No soy un robot, soy un creador apasionado por la tecnología. Diseño páginas web seguras, autogestionables y fáciles de usar." />
        <meta property="og:url" content="https://robercolmenares.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://robercolmenares.com/assets/preview.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rober Colmenares - Full Stack Developer y Téc. Ciberseguridad" />
        <meta name="twitter:description" content="No soy un robot, soy un creador apasionado por la tecnología. Diseño páginas web seguras, autogestionables y fáciles de usar." />
        <meta name="twitter:image" content="https://robercolmenares.com/assets/preview.jpg" />
      </Helmet>

      {/* Contenido visible de la página */}
      <div className="flex justify-center items-center min-h-screen p-5">
        <section className="w-full max-w-7xl flex flex-col bg-white/1 backdrop-blur-xs rounded-xl p-6 shadow-lg border border-white/20 text-white">
          
          {/* Contacto + íconos */}
          <div className="md:flex md:justify-end md:items-center">
            <p className="md:text-xl lg:text-2xl text-xs md:mr-10 Robot text-center">
              Roberjosecolmenares@gmail.com
            </p>
            <div className="flex gap-6 justify-center mt-3 text-3xl md:mt-0">
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://github.com/RoberColmenares"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rober-colmenares-52a472284/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
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
              <h1 className="md:text-2xl Robot">
                Full Stack Developer y Téc. Ciberseguridad
              </h1>
              <div className="text-center mt-6">
                <a
                  href="/cv.pdf"
                  download="CV_Rober_Colmenares.pdf"
                  className=" btn text-shine flex flex-col items-center "
                >
                  <FaDownload className="text-lg" />
                  cv
                </a>
              </div>
            </div>

            {/* Descripción */}
            <div className="md:w-1/2 flex flex-col items-center text-center mt-10 md:mt-0 space-y-4">
              <p className="Robot md:w-3/4 text-wave md:text-2xl">
                No soy un robot, soy un creador apasionado por la tecnología.
              </p>
              <h2 className="md:w-4/5 md:text-2xl ">
                Mi propósito es diseñar para ti una página web o aplicación que
                se adapte a tus necesidades, que sea
              </h2>
              <p className="Robot">
                <strong className="text-red-500">Segura</strong>,{" "}
                <strong className="text-green-500">Autogestionable</strong> y{" "}
                <strong className="text-yellow-500">Fácil de usar</strong>.
              </p>
              <Link to="/zona/habilidades" className="btn mt-4 text-shine ">
                Comenzar
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Inicio;
