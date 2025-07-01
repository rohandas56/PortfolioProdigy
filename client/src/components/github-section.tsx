import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GITHUB_PROJECTS } from '@/lib/constants';

const GitHubSection = () => {
  const getProjectIcon = (icon: string) => {
    return <span className="text-3xl">{icon}</span>;
  };

  return (
    <section id="github" className="py-20 github-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">GitHub Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my open-source machine learning projects on GitHub showcasing practical implementations and innovative solutions to real-world problems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {GITHUB_PROJECTS.map((project) => (
            <Card key={project.id} className="glassmorphism border-gray-600 card-hover relative overflow-hidden">
              {/* Project Category Thumbnail */}
              <div className={`h-40 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative`}>
                {getProjectIcon(project.icon)}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-black/30 text-white border-none">
                    {project.category}
                  </Badge>
                </div>
                {/* GitHub stats overlay */}
                <div className="absolute bottom-3 left-3 flex space-x-3">
                  <div className="flex items-center bg-black/30 rounded-full px-2 py-1">
                    <Star size={12} className="text-white mr-1" />
                    <span className="text-white text-xs">★</span>
                  </div>
                  <div className="flex items-center bg-black/30 rounded-full px-2 py-1">
                    <GitFork size={12} className="text-white mr-1" />
                    <span className="text-white text-xs">Fork</span>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-primary text-xl leading-tight">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-3">
                  <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90 flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-white flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="https://github.com/rohandas56" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;