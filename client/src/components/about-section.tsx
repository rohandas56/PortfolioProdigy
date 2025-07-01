import { MapPin } from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '@/lib/constants';
import profileImage2 from '@assets/profile1_1751347051047.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src={profileImage2}
                alt="Rohan Das - Professional Portrait"
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">MBA in Business Analytics & Data Science</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate about harnessing AI-powered solutions to solve real-world business challenges and fuel data-driven growth. 
              With a strong foundation in mathematics (B.Sc) and advanced expertise in business analytics, I bridge the gap 
              between complex data science concepts and practical business applications.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-primary mb-3">Technical Skills</h4>
                <ul className="space-y-2 text-gray-300">
                  {SKILLS.technical.map((skill) => (
                    <li key={skill.name}>
                      <i className={`${skill.icon} text-primary mr-2`}></i>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Expertise</h4>
                <ul className="space-y-2 text-gray-300">
                  {SKILLS.expertise.map((skill) => (
                    <li key={skill.name}>
                      <i className={`${skill.icon} text-primary mr-2`}></i>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="text-primary" size={20} />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
