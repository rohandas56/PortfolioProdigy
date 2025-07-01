import Navigation from '@/components/navigation';
import AboutSection from '@/components/about-section';
import Footer from '@/components/footer';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const AboutPage = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;