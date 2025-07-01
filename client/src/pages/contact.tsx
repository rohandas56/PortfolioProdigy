import Navigation from '@/components/navigation';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const ContactPage = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;