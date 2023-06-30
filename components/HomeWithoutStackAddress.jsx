import useLottieAnimation from "@/utils/useLottieAnimation";
import React from "react";
import animationData from "@/public/json/currency.json";

const HomeWithoutStackAddress = () => {
  const animationContainerRef = useLottieAnimation(animationData);

  return (
    <div>
      HomeWithoutStackAddress
      <div>
        <div ref={animationContainerRef}></div>
      </div>
    </div>
  );
};

export default HomeWithoutStackAddress;
