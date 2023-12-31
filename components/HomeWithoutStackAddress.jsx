import useLottieAnimation from '@/utils/useLottieAnimation';
import React, { useEffect, useState } from 'react';
// import animationData from "@/public/json/currency.json";
import animationData from '@/public/json/walking-pencil.json';

const HomeWithoutStackAddress = () => {
  const animationContainerRef = useLottieAnimation(animationData);

  return (
    <div className=" flex items-center justify-normal flex-col md:flex-row">
      <div ref={animationContainerRef} className="h-[90vh] lg:ml-[100px]"></div>
      <div className=" flex justify-center w-[200px] text-[24px] flex-col items-baseline mb-6 md:mb-0">
        <span>Unlock the power of your</span>
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text text-[35px]">
          stack addresses
        </span>
        <span>and explore their potential in the blockchain revolution of</span>
        <span className=" text-[60px] bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-sans font-bold">
          Cardano
        </span>
      </div>
    </div>
  );
};

export default HomeWithoutStackAddress;
