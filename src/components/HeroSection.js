import React from 'react';
import Spline from '@splinetool/react-spline/next';

const HeroSection = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center bg-[#0a0e14] relative overflow-hidden">
      <div className="max-w-7xl mx-[80px] flex flex-col md:flex-row items-center justify-center w-full px-4 pt-5 md:pt-0">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
            Spotlight <br /> is the new trend.
          </h1>
          <p className="mt-4 text-base text-neutral-300 max-w-lg">
            Spotlight effect is a great way to draw attention to a specific part of
            the page. Here, we are drawing attention to the text section of the page.
          </p>
        </div>

        {/* 3D Model */}
        <div className=" flex justify-center mt-2  md:mt-0">
          <div className="w-full h-full md:h-[500px]">
            <Spline
              scene="https://prod.spline.design/JtEHUpaKjRqqmOS8/scene.splinecode"
              className="w-full h-full mx-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
