import React from 'react'
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from 'framer-motion';


const HeroSection = () => {
    console.log(motion.div)
  return (
    <AuroraBackground>

        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-white rounded-full w-fit text-black px-4 py-2">
          Debug now
        </button>

    </AuroraBackground>
  )
}

export default HeroSection
