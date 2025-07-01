import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/lib/constants';
import profileImage1 from '@assets/profile_1751346921333.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  src={profileImage1}
                  alt="Rohan Das - Professional Portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
