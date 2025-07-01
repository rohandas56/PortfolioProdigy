import Navigation from '@/components/navigation';
import GitHubSection from '@/components/github-section';
import Footer from '@/components/footer';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const GitHubPage = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <GitHubSection />
      </div>
      <Footer />
    </div>
  );
};

export default GitHubPage;