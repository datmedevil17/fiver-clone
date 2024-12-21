import React from 'react'
import { Spotlight } from "./ui/Spotlight";
import Spline from '@splinetool/react-spline/next';

const HeroSection = () => {

  return (
    <div className="h-[80vh] w-full flex items-center justify-center bg-[#0a0e14] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      {/* Content Section */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col md:flex-row items-center justify-between">

        {/* Text Content */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            Spotlight <br /> is the new trend.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-left">
            Spotlight effect is a great way to draw attention to a specific part of
            the page. Here, we are drawing the attention towards the text section
            of the page. I don&apos;t know why but I&apos;m running out of copy.
          </p>
        </div>

        {/* 3D Model */}
        <div className="w-full md:w-1/2 mt-2 md:mt-0 flex justify-end pl-4">
          <div className="w-full h-[400px] md:h-[500px]">
            <Spline
              scene="https://prod.spline.design/JtEHUpaKjRqqmOS8/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection;
