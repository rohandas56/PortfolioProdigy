import { Download, ExternalLink, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IBM_CERTIFICATIONS, PERSONAL_INFO } from '@/lib/constants';

const EducationSection = () => {
  const handleResumeDownload = () => {
    // TODO: Implement actual resume download
    alert('Resume download functionality would be implemented here');
  };

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Academic Background</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="glassmorphism border-gray-600">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">MBA in Business Analytics & Data Science</h4>
                    <p className="text-primary font-medium mb-2">Current</p>
                    <p className="text-gray-300">
                      Specializing in advanced analytics, machine learning applications in business, 
                      and strategic data-driven decision making.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="glassmorphism border-gray-600">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">B.Sc in Mathematics</h4>
                    <p className="text-primary font-medium mb-2">Graduated</p>
                    <p className="text-gray-300">
                      Strong foundation in mathematical concepts, statistics, and analytical thinking 
                      that forms the backbone of data science expertise.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* IBM Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">IBM Certifications (17 Badges)</h3>
            <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
              {IBM_CERTIFICATIONS.map((cert, index) => (
                <Card key={index} className="glassmorphism border-gray-600">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Award className="text-primary mt-1 flex-shrink-0" size={16} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{cert.name}</p>
                        <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6">
              <Button variant="link" asChild className="text-primary hover:underline p-0">
                <a href={PERSONAL_INFO.credly} target="_blank" rel="noopener noreferrer">
                  View All Certifications on Credly
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Resume Download */}
        <div className="text-center mt-16">
          <Button 
            onClick={handleResumeDownload}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
