
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WhyChooseUS from "./components/WhyChooseUS";
import MovingCards from "./components/MovingCards";
import CardHoverEffect from "./components/CardHoverEffect";
import WavyBackgroundDemo from "./components/WavyBackgroundDemo";


export default function Home() {


  return (
    <>
      <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

        <HeroSection />
        <FeatureSection />
        <WhyChooseUS />
        <MovingCards />
        <CardHoverEffect />
        <WavyBackgroundDemo />
        
      </div>
    </>
  );
}
