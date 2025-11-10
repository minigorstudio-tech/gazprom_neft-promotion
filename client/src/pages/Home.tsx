import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LevelsSystem from "@/components/LevelsSystem";
import MissionTypes from "@/components/MissionTypes";
import Benefits from "@/components/Benefits";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <LevelsSystem />
      <MissionTypes />
      <Benefits />
      <FinalCTA />
      <Footer />
    </div>
  );
}
