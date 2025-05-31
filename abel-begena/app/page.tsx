import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import AboutSection from '../app/about/page';
import TrainingSection from '../components/TrainingSection';  // <-- Import here

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      {/* <TrainingSection />  */}
      <AboutSection />
    </div>
  );
}
