import React from 'react';
import "../../App.css";
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contacto = () => {
  return (
    <div className='container-glass mb-20'>
      <section className='section-glass '>
        <div>
          <p className='Robot text-2xl '>Contáctame</p>

          <div className='flex flex-col gap-10 md:flex-row'>

            {/* Información de contacto */}
            <div className="flex flex-col items-center text-[0.8rem] gap-3 md:w-1/2 md:gap-6 md:text-[1rem]">
              <p className="Robot text-[0.9rem] lg:text-xl text-wave">roberjosecolmenares@gmail.com</p>

              <p className='md:w-2/3 '>¿Quieres destacar en el mundo digital con una web moderna y segura? Estás en el lugar correcto.</p>
              <p className='md:w-2/3 Robot text-wave'> Desarrollo 100% personalizado</p>
              <p className='md:w-2/3' >No utilizamos CMS como WordPress ni trabajamos con plantillas prearmadas. Cada sitio y aplicación que desarrollamos está construido desde cero, adaptado a tus necesidades específicas, con código limpio, escalable y optimizado para ofrecerte un producto único, profesional y de alto rendimiento.</p>

              <div className="flex gap-6 justify-center mt-3 text-3xl md:mt-0">
                <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                  <FaWhatsapp />
                </a>
                <a href="mailto:roberjosecolmenares@gmail.com" className="hover:text-red-500 transition">
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

            {/* Formulario */}
            <div className='flex flex-col gap-3  md:justify-evenly md:w-1/2'>
              <p className='Robot md:w-2/3 md:mx-auto my-3 text-center text-wave'>
                Cuéntame qué necesitas y me pondré en contacto contigo lo antes posible.
              </p>

              <form className='flex flex-col md:gap-8 items-center gap-3 w-full' action="">
                <input
                  className='text-center w-[80%] p-2 bg-white/10 backdrop-blur-sm rounded-xs'
                  type="email"
                  name="correo"
                  placeholder='TuCorreo@gmail.com'
                />
                <textarea
                  className='text-center w-[80%] h-28 p-2 bg-white/10 backdrop-blur-sm rounded-xs resize-none'
                  name="mensaje"
                  placeholder='Descripción'
                />
                <button
                  className='btn text-shine mb-15'
                  type='submit'
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
