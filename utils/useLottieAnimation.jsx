"use client";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const useLottieAnimation = (animationData, selectedAddress) => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, [animationData, selectedAddress]);

  return animationContainerRef;
};

export default useLottieAnimation;
