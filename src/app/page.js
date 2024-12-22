import Image from "next/image";
import { WavyBackgroundDemo } from "@/components/WavyBackground";
import  HeroSection  from "@/components/HeroSection";
import Hello from "@/components/Hello";
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0f0f0f" }} // Lighter shade of black
    >
        <WavyBackgroundDemo className="p-10"/>
        <HeroSection/>
        {/* <GridBackgroundDemo/> */}
        <Hello/>
    </div>
  );
}
