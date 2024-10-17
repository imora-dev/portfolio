import { EducationSection } from "@/components/Education";
import { SocialDock } from "@/components/SocialMediaDock";
import { AboutSection } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TapeSection />
      <ProjectsSection/>
      <EducationSection />
      <AboutSection />
      <SocialDock />
      <Footer />
    </>

  );
}
