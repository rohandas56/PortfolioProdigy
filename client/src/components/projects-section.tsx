import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/constants';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of data science and machine learning projects that demonstrate practical applications of analytics in solving real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="glassmorphism border-gray-600 card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-600">
                  <Button variant="link" asChild className="text-primary hover:underline p-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      View on GitHub <ExternalLink size={16} className="ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
