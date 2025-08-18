import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  GitBranch, 
  Cloud, 
  ArrowRight,
  Cpu,
  Workflow,
  BarChart3
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'LLM Applications',
      description: 'Custom large language model applications including chatbots, AI copilots, and intelligent automation tools.',
      features: ['Custom Chatbots', 'AI Copilots', 'Content Generation', 'Document Analysis'],
      color: 'text-accent-teal',
      bgColor: 'bg-accent-teal/10',
      borderColor: 'border-accent-teal/20',
    },
    {
      icon: GitBranch,
      title: 'Agentic AI Systems',
      description: 'Autonomous AI agents that can perform complex workflows, make decisions, and interact with multiple systems.',
      features: ['Autonomous Workflows', 'Decision Making', 'Multi-System Integration', 'Task Automation'],
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      borderColor: 'border-accent-purple/20',
    },
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Scalable software-as-a-service platforms with integrated AI capabilities for enterprise customers.',
      features: ['Enterprise Dashboards', 'Analytics Platforms', 'API Integrations', 'Custom Solutions'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in three core areas of AI technology, delivering cutting-edge solutions 
            that transform how businesses operate and scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`service-card group cursor-pointer ${service.borderColor} fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className={service.color} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.bgColor} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with AI?
          </p>
          <Button size="lg" className="btn-hero text-lg px-8 py-6">
            Get Started Today
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;