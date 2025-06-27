import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const [numParticles, setNumParticles] = useState(200);

  // Detectar ancho ventana y ajustar cantidad
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setNumParticles(100); // móvil
      } else {
        setNumParticles(200); // escritorio
      }
    }

    handleResize(); // chequea al montar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#152844",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: numParticles,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#cd6155",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.4,
              sync: false,
            },
          },
          size: {
            value: 3.5,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#5B0B15",
            opacity: 0.5,
            width: 1.3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 6,
            },
          },
        },
      }}
    />
  );
}
