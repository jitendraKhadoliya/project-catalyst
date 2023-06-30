import useLottieAnimation from "@/utils/useLottieAnimation";
import React, { useEffect } from "react";
// import animationData from "@/public/json/currency.json";
import animationData from "@/public/json/walking-pencil.json";

const HomeWithoutStackAddress = () => {
  const animationContainerRef = useLottieAnimation(animationData);

  return (
    <div>
      <div ref={animationContainerRef} className="h-[80vh]"></div>
      HomeWithoutStackAddress
    </div>
  );
};

export default HomeWithoutStackAddress;
