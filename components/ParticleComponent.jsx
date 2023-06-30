// import React, { useCallback } from "react";
// import { init as particlesInit, loadFull } from "tsparticles";
// import Particles from "react-particles";

// const ParticleComponent = () => {
//   // Callback function to initialize particles
//   const handleParticlesInit = useCallback(async (tsParticles) => {
//     console.log(tsParticles);
//     await loadFull(tsParticles);
//   }, []);

//   // Callback function when particles are loaded
//   const handleParticlesLoaded = useCallback(async (container) => {
//     console.log(container);
//   }, []);

//   // Particle parameters
//   const particlesParams = {
//     background: { color: "#000" },
//     fpsLimit: 120,
//     interactivity: {
//       events: {
//         onClick: { enable: true, mode: "push" },
//         onHover: { enable: false, mode: "repulse" },
//         resize: true,
//       },
//       modes: {
//         push: { quantity: 4 },
//         repulse: { distance: 200, duration: 0.4 },
//       },
//     },
//     particles: {
//       color: "#ff5757",
//       links: {
//         color: "#ff5757",
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 2,
//       },
//       collisions: { enable: true },
//       move: {
//         direction: "none",
//         enable: true,
//         outModes: "bounce",
//         random: true,
//         speed: 1,
//         straight: false,
//       },
//       number: { density: { enable: true, area: 800 }, value: 80 },
//       opacity: { value: 0.5 },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 5 } },
//     },
//     detectRetina: true,
//   };
//   return (
//     <div>
//       <Particles
//         id="tsparticles"
//         params={particlesParams}
//         init={handleParticlesInit}
//         loaded={handleParticlesLoaded}
//         className="z-[-10]"
//       />
//     </div>
//   );
// };

// export default ParticleComponent;
