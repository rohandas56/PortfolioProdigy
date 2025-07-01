import Navigation from '@/components/navigation';
import EducationSection from '@/components/education-section';
import Footer from '@/components/footer';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const EducationPage = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <EducationSection />
      </div>
      <Footer />
    </div>
  );
};

export default EducationPage;