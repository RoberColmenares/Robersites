import React, { useRef, useState, useEffect } from 'react';
import "../../App.css";
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contacto = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");  // Mensaje para usuario
  const [tipoMensaje, setTipoMensaje] = useState(""); // "success" o "error"

  const enviarCorreo = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setMensaje("✅ Mensaje enviado correctamente");
          setTipoMensaje("success");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("Error:", error.text);
          setMensaje("❌ Error al enviar el mensaje, intenta de nuevo.");
          setTipoMensaje("error");
          setLoading(false);
        }
      );
  };

  // Auto ocultar mensaje después de 5 segundos
  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        setMensaje("");
        setTipoMensaje("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <div className='container-glass mb-20'>
      <section className='section-glass'>
        <div>
          <p className='Robot text-2xl mb-10 text-wave'>Contáctame</p>

          <div className='flex flex-col gap-10 md:flex-row'>

            {/* Información de contacto */}
            <div className="flex flex-col items-center text-[0.8rem] gap-3 md:w-1/2 md:gap-6 md:text-[1rem]">
              <p className="Robot text-[0.9rem] lg:text-xl text-wave">roberjosecolmenares@gmail.com</p>

              <p className='md:w-2/3'>¿Quieres destacar en el mundo digital con una web moderna y segura? Estás en el lugar correcto.</p>
              <p className='md:w-2/3 Robot text-wave'>Desarrollo 100% personalizado</p>
              <p className='md:w-2/3'>
                No utilizamos CMS como WordPress ni trabajamos con plantillas prearmadas. Cada sitio y aplicación que desarrollamos está construido desde cero, adaptado a tus necesidades específicas, con código limpio, escalable y optimizado para ofrecerte un producto único, profesional y de alto rendimiento.
              </p>

              <div className="flex gap-6 justify-center mt-3 text-3xl md:mt-0">
                <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                  <FaWhatsapp />
                </a>

                <a href="https://github.com/RoberColmenares" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/rober-colmenares-52a472284/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className='flex flex-col gap-3 md:justify-evenly md:w-1/2'>
              <p className='Robot md:w-2/3 md:mx-auto my-3 text-center text-wave'>
                Cuéntame qué necesitas y me pondré en contacto contigo lo antes posible.
              </p>

              <form ref={form} onSubmit={enviarCorreo} className="flex flex-col items-center gap-6 w-full md:w-[80%] mx-auto">
                <label className="w-[80%] flex flex-col text-white font-semibold">
                  <input
                    type="email"
                    name="user_email"
                    required
                    disabled={loading}
                    className="mt-1 p-2 bg-white/10 backdrop-blur-sm rounded-xs text-center"
                    placeholder="TuCorreo@gmail.com"
                  />
                </label>

                <label className="w-[80%] flex flex-col text-white font-semibold">

                  <textarea
                    name="message"
                    required
                    disabled={loading}
                    className="mt-1 h-28 p-2 bg-white/10 backdrop-blur-sm rounded-xs resize-none text-center"
                    placeholder="Descripción"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn text-shine mb-15 px-6 py-2 rounded hover:bg-white/20 transition flex justify-center items-center gap-2"
                >
                  {loading ? (
                    <span>Cargando...</span>
                  ) : (
                    'Enviar'
                  )}
                </button>
              </form>

              {/* Mensaje para usuario */}
              {mensaje && (
                <p
                  className={`mt-4 text-center font-semibold ${
                    tipoMensaje === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {mensaje}
                </p>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
