import { useState } from 'react';
import { Mail, MapPin, Clock, Github, Award, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { PERSONAL_INFO } from '@/lib/constants';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at " + PERSONAL_INFO.email,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to discuss data science opportunities or collaborate on exciting projects? Let's start a conversation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glassmorphism border-gray-600">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="mt-2 bg-secondary/50 border-gray-600 focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="mt-2 bg-secondary/50 border-gray-600 focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="mt-2 bg-secondary/50 border-gray-600 focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glassmorphism border-gray-600">
              <CardHeader>
                <CardTitle className="text-primary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary flex-shrink-0" size={20} />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary flex-shrink-0" size={20} />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="text-primary flex-shrink-0" size={20} />
                  <span>Available for opportunities</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-gray-600">
              <CardHeader>
                <CardTitle className="text-primary">Connect with Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" asChild className="bg-secondary/50 hover:bg-primary">
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="bg-secondary/50 hover:bg-primary">
                    <a href={PERSONAL_INFO.credly} target="_blank" rel="noopener noreferrer">
                      <Award size={20} />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-secondary/50 hover:bg-primary">
                    <Linkedin size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-secondary/50 hover:bg-primary">
                    <Twitter size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
