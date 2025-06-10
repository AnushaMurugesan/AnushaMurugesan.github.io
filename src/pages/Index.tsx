import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSectionV2";
import WorkExperience from "@/components/WorkExperience";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <WorkExperience />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
