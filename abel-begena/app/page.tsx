import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import AboutSection from '../app/about/page';
import TrainingSection from '../components/TrainingSection';
import ContactSection from '../components/ContactSection'; // ✅ Import new section

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      {/* <TrainingSection /> */}
      <AboutSection />
      <ContactSection /> {/* ✅ Add here */}
    </div>
  );
}
