import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  GitBranch, 
  Cloud, 
  ArrowRight,
  Bot,
  Brain,
  Workflow,
  BarChart3,
  Users,
  Shield,
  Zap,
  Cpu
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'llm',
      icon: MessageSquare,
      title: 'LLM-based Applications',
      description: 'Custom large language model applications that transform how your business communicates and processes information.',
      color: 'text-accent-teal',
      bgColor: 'bg-accent-teal/10',
      borderColor: 'border-accent-teal/20',
      features: [
        {
          icon: Bot,
          name: 'Intelligent Chatbots',
          description: 'AI-powered conversational interfaces that understand context and provide accurate responses.'
        },
        {
          icon: Brain,
          name: 'AI Copilots',
          description: 'Assistant applications that help users complete complex tasks with AI guidance.'
        },
        {
          icon: Cpu,
          name: 'Content Generation',
          description: 'Automated content creation systems for marketing, documentation, and communication.'
        },
        {
          icon: BarChart3,
          name: 'Document Analysis',
          description: 'Intelligent document processing and insights extraction from unstructured data.'
        }
      ],
      useCases: [
        'Customer Support Automation',
        'Internal Knowledge Management',
        'Content Marketing at Scale',
        'Legal Document Review',
        'Technical Documentation'
      ],
      technologies: ['GPT-4', 'Claude', 'LLaMA', 'Custom Fine-tuning', 'RAG Systems']
    },
    {
      id: 'agentic',
      icon: GitBranch,
      title: 'Agentic AI Applications',
      description: 'Autonomous AI agents that can reason, plan, and execute complex workflows without human intervention.',
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      borderColor: 'border-accent-purple/20',
      features: [
        {
          icon: Workflow,
          name: 'Autonomous Workflows',
          description: 'Self-managing processes that adapt and optimize based on real-time conditions.'
        },
        {
          icon: Brain,
          name: 'Decision Making',
          description: 'AI agents that can analyze situations and make informed decisions independently.'
        },
        {
          icon: GitBranch,
          name: 'Multi-System Integration',
          description: 'Seamless integration across multiple platforms and data sources.'
        },
        {
          icon: Zap,
          name: 'Task Automation',
          description: 'Complete automation of complex business processes end-to-end.'
        }
      ],
      useCases: [
        'Supply Chain Optimization',
        'Financial Trading Systems',
        'Healthcare Diagnosis Assistance',
        'Cybersecurity Monitoring',
        'Predictive Maintenance'
      ],
      technologies: ['AutoGPT', 'LangChain', 'CrewAI', 'Multi-Agent Systems', 'Reinforcement Learning']
    },
    {
      id: 'saas',
      icon: Cloud,
      title: 'SaaS Platforms',
      description: 'Scalable software-as-a-service solutions with integrated AI capabilities for enterprise customers.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      features: [
        {
          icon: BarChart3,
          name: 'Analytics Dashboards',
          description: 'Real-time insights and predictive analytics powered by AI algorithms.'
        },
        {
          icon: Users,
          name: 'Multi-tenant Architecture',
          description: 'Secure, scalable platforms supporting thousands of concurrent users.'
        },
        {
          icon: Shield,
          name: 'Enterprise Security',
          description: 'Bank-grade security with compliance for GDPR, HIPAA, and SOX.'
        },
        {
          icon: Cpu,
          name: 'API-First Design',
          description: 'Comprehensive APIs for seamless integration with existing systems.'
        }
      ],
      useCases: [
        'Business Intelligence Platforms',
        'Customer Relationship Management',
        'Human Resources Management',
        'Financial Analysis Tools',
        'Marketing Automation'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS/Azure']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in fade-in-delay-1">
              We offer three core AI service categories, each designed to solve specific business 
              challenges and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      {services.map((service, serviceIndex) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-20 ${serviceIndex % 2 === 1 ? 'bg-gradient-to-b from-background to-secondary/20' : ''}`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Service Header */}
              <div className="text-center mb-16">
                <div className={`w-20 h-20 rounded-3xl ${service.bgColor} flex items-center justify-center mx-auto mb-6 fade-in`}>
                  <service.icon size={40} className={service.color} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in fade-in-delay-1">
                  {service.title}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in fade-in-delay-2">
                  {service.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {service.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <Card 
                      key={feature.name} 
                      className={`service-card ${service.borderColor} fade-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <FeatureIcon size={24} className={service.color} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Use Cases & Technologies */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Use Cases */}
                <div className="fade-in fade-in-delay-3">
                  <h3 className="text-2xl font-bold mb-6">Use Cases</h3>
                  <ul className="space-y-3">
                    {service.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${service.bgColor} mr-3`} />
                        <span className="text-muted-foreground">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="fade-in fade-in-delay-4">
                  <h3 className="text-2xl font-bold mb-6">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className={`${service.borderColor} ${service.bgColor}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12 fade-in fade-in-delay-5">
                <Button size="lg" className="btn-hero text-lg px-8 py-6">
                  Learn More About {service.title}
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent-purple to-accent-teal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can solve your specific challenges and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;