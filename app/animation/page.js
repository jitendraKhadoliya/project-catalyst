"use client";
import useLottieAnimation from "@/utils/useLottieAnimation";
import animationData from "../../public/json/walking-pencil.json";

const Page = () => {
  const animationContainerRef = useLottieAnimation(animationData);

  return (
    <div>
      <div ref={animationContainerRef}></div>
    </div>
  );
};

export default Page;
