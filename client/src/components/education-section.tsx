import { Download, ExternalLink, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IBM_CERTIFICATIONS, EDUCATION, EXPERIENCE, ADDITIONAL_CERTIFICATIONS, PERSONAL_INFO } from '@/lib/constants';

const EducationSection = () => {
  const handleResumeDownload = () => {
    const resumeUrl = '/assets/rohan-das-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Rohan_Das_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="education" className="py-20 education-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Academic foundation and professional experience in business analytics, data science, and strategic decision-making.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
              <GraduationCap className="mr-3" size={24} />
              Education
            </h3>
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <Card key={edu.id} className="glassmorphism border-gray-600">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Grade: {edu.grade}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        edu.status === 'In Progress' 
                          ? 'bg-yellow-500/20 text-yellow-400' 
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
              <Briefcase className="mr-3" size={24} />
              Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCE.map((exp) => (
                <Card key={exp.id} className="glassmorphism border-gray-600">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{exp.position}</h4>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-3">{exp.location} • {exp.period}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
              <Award className="mr-3" size={24} />
              Certifications
            </h3>
            
            {/* Recent Certifications */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-4 text-gray-300">Recent Achievements</h4>
              <div className="space-y-3">
                {ADDITIONAL_CERTIFICATIONS.map((cert, index) => (
                  <Card key={index} className="glassmorphism border-gray-600">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-sm">{cert.name}</h5>
                      <p className="text-xs text-gray-400">{cert.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* IBM Certifications */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-300">IBM Badges ({IBM_CERTIFICATIONS.length})</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {IBM_CERTIFICATIONS.slice(0, 6).map((cert, index) => (
                  <Card key={index} className="glassmorphism border-gray-600">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-xs">{cert.name}</h5>
                          <p className="text-xs text-gray-400">{cert.date}</p>
                        </div>
                        <ExternalLink size={14} className="text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download and Credly Link */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleResumeDownload}
            size="lg" 
            className="bg-primary hover:bg-primary/90"
          >
            <Download className="mr-2" size={20} />
            Download Complete Resume
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href={PERSONAL_INFO.credly} target="_blank" rel="noopener noreferrer">
              <Award className="mr-2" size={20} />
              View All IBM Badges
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;