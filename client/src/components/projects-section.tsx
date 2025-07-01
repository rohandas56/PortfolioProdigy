import { ExternalLink, Github, Award, BarChart3, Brain, TrendingUp, Shield, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { KAGGLE_PROJECTS } from '@/lib/constants';

const ProjectsSection = () => {
  const getProjectIcon = (icon: string) => {
    return <span className="text-3xl">{icon}</span>;
  };

  return (
    <section id="projects" className="py-20 projects-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kaggle Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my data science projects on Kaggle showcasing expertise in machine learning, analytics, and real-world problem solving across diverse domains.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {KAGGLE_PROJECTS.map((project) => (
            <Card key={project.id} className="glassmorphism border-gray-600 card-hover relative overflow-hidden">
              {/* Project Category Thumbnail */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative`}>
                {getProjectIcon(project.icon)}
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-black/30 text-white border-none">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-primary text-lg leading-tight">{project.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="bg-gray-600/20 text-gray-400 text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="ghost" size="sm" asChild className="text-orange-400 hover:bg-orange-400/10 flex-1">
                    <a href={project.kaggle} target="_blank" rel="noopener noreferrer">
                      <Award size={16} className="mr-1" />
                      Kaggle
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:bg-gray-400/10 flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="https://www.kaggle.com/rohandas77" target="_blank" rel="noopener noreferrer">
              <Award className="mr-2" size={20} />
              View All Projects on Kaggle
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
