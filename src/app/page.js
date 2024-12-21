import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0f0f0f" }} // Lighter shade of black
    >
      <HeroSection />
      <MacbookScroll />
    </div>
  );
}
