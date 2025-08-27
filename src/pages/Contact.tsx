import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar,
  ArrowRight,
  Send
} from 'lucide-react';
import { useState } from 'react';

// Add this interface before the Contact component
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'quantummeld23@gmail.com',
      description: 'Send us an email and we\'ll respond within 24 hours',
      color: 'text-accent-teal',
      bgColor: 'bg-accent-teal/10',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our AI experts',
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: '123 Innovation Drive, Suite 400',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri, 9AM - 6PM PST',
      description: 'Weekend support available for enterprise clients',
      color: 'text-accent-teal',
      bgColor: 'bg-accent-teal/10',
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const CONTACT_ENDPOINT = (import.meta as any).env?.VITE_CONTACT_ENDPOINT || '/api/contact';

  // Add this handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  // Update the handleSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in fade-in-delay-1">
              Ready to transform your business with AI? Let's discuss how our solutions 
              can solve your specific challenges and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={info.title} 
                  className={`service-card text-center fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${info.bgColor} flex items-center justify-center mx-auto mb-4`}>
                      <Icon size={24} className={info.color} />
                    </div>
                    <h3 className="font-bold mb-2">{info.title}</h3>
                    <p className="font-semibold text-foreground mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Additional Info */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="fade-in">
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="firstName" 
                            required 
                            className="mt-1"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="lastName" 
                            required 
                            className="mt-1"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="abc@gmail.com" 
                          required 
                          className="mt-1"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input 
                          id="company" 
                          placeholder="Your Company Name" 
                          className="mt-1"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          placeholder="How can we help you?" 
                          required 
                          className="mt-1"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project and requirements..."
                          rows={5}
                          required 
                          className="mt-1"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>

                      {isLoading && <p>Sending...</p>}
                      {error && <p className="text-red-500">{error}</p>}
                      {success && <p className="text-green-500">Message sent successfully!</p>}

                      {/* Update your submit button */}
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full btn-hero text-lg py-6"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Sending...' : 'Send Message'}
                        <Send size={20} className="ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Information */}
              <div className="space-y-8 fade-in fade-in-delay-2">
                {/* Quick Actions */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button variant="outline" size="lg" className="w-full justify-start">
                        <Calendar size={20} className="mr-3" />
                        Schedule a Consultation
                        <ArrowRight size={16} className="ml-auto" />
                      </Button>
                      <Button variant="outline" size="lg" className="w-full justify-start">
                        <MessageSquare size={20} className="mr-3" />
                        Start Live Chat
                        <ArrowRight size={16} className="ml-auto" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-1">How long does a typical project take?</h4>
                        <p className="text-sm text-muted-foreground">
                          Project timelines vary from 4-16 weeks depending on complexity and requirements.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Do you offer custom AI solutions?</h4>
                        <p className="text-sm text-muted-foreground">
                          Yes, we specialize in building custom AI solutions tailored to your specific needs.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">What's included in support?</h4>
                        <p className="text-sm text-muted-foreground">
                          24/7 monitoring, regular updates, bug fixes, and performance optimization.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enterprise */}
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Enterprise Solutions</h3>
                    <p className="text-muted-foreground mb-4">
                      Need enterprise-grade AI solutions? Our team can provide custom implementations, 
                      dedicated support, and scalable architectures.
                    </p>
                    <Button className="btn-hero">
                      Contact Enterprise Sales
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;