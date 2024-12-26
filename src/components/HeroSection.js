import React from 'react';
import Spline from '@splinetool/react-spline/next';
import { Spotlight } from "./ui/spotlight";

const HeroSection = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-black relative overflow-hidden z-10">
      <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
     <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-16 py-10 space-y-10 lg:space-y-0">
  {/* Left Content */}
  <div className="lg:w-1/2">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
      Discover the Future of Interaction
    </h1>
    <p className="mt-4 text-gray-600 text-lg sm:text-xl">
      Explore the seamless integration of 3D models with modern design.
      Experience interactive, engaging content that adapts to any screen size.
    </p>
  </div>

  {/* 3D Model */}
  <div className="lg:w-1/2 flex justify-center lg:justify-end">
    <div className="w-300px h-[300px] sm:h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Spline
        scene="https://prod.spline.design/8fcFSxa15zPBmmEZ/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default HeroSection;
