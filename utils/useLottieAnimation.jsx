"use client";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const useLottieAnimation = (animationData) => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData, // Use the provided animation data
    });

    return () => {
      anim.destroy();
    };
  }, [animationData]);

  return animationContainerRef;
};

export default useLottieAnimation;

// import Lottie from "lottie-web";
// import { useEffect, useRef } from "react";

// const useLottieAnimation = (animationData) => {
//   const animationContainerRef = useRef(null);

//   useEffect(() => {
//     const anim = Lottie.loadAnimation({
//       container: animationContainerRef.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//     });

//     return () => {
//       anim.destroy();
//     };
//   }, [animationData]);

//   return animationContainerRef;
// };

// export default useLottieAnimation;
