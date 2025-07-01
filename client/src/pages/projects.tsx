import Navigation from '@/components/navigation';
import ProjectsSection from '@/components/projects-section';
import Footer from '@/components/footer';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const ProjectsPage = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;