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
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud Solutions & DevOps',
      description: 'Accelerate your digital journey with secure, scalable, and automated cloud solutions.',
      color: 'text-accent-teal',
      bgColor: 'bg-accent-teal/10',
      borderColor: 'border-accent-teal/20',
      features: [
        { icon: Cloud, name: 'Cloud Migration (AWS, Azure, GCP)', description: 'Migrate workloads with zero-downtime strategies and cost optimization.' },
        { icon: GitBranch, name: 'Hybrid & Multi-Cloud Management', description: 'Unified governance, monitoring, and orchestration across clouds.' },
        { icon: Cpu, name: 'Kubernetes & Orchestration', description: 'Production-ready clusters with autoscaling, GitOps and observability.' },
        { icon: Zap, name: 'Serverless Architectures', description: 'Event-driven apps using AWS Lambda and Azure Functions.' },
        { icon: Workflow, name: 'CI/CD & IaC', description: 'Automated pipelines with Terraform, Pulumi, and GitHub Actions.' },
        { icon: Shield, name: 'Cloud Security & Compliance', description: 'Best-practice hardening, IAM, and compliance frameworks.' },
      ],
      useCases: [
        'Cost-optimized cloud modernization',
        'Highly-available microservices on Kubernetes',
        'Zero-downtime release automation',
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'GitHub Actions']
    },
    {
      id: 'software-automation',
      icon: Workflow,
      title: 'Software Development & Automation',
      description: 'We build intelligent, automated, and future-ready applications tailored to your business.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      features: [
        { icon: Cpu, name: 'Custom Web & Mobile Applications', description: 'Robust, scalable apps with modern UX and API-first design.' },
        { icon: Users, name: 'SaaS Product Development', description: 'Multi-tenant SaaS with billing, auth, and analytics.' },
        { icon: MessageSquare, name: 'API Development & Integration', description: 'Secure REST/GraphQL APIs with SSO and rate limiting.' },
        { icon: Workflow, name: 'Workflow Automation (n8n, Make, Zapier)', description: 'Automate repetitive processes and integrate your tools.' },
        { icon: GitBranch, name: 'Custom VAPI Integrations', description: 'Reliable connectivity with third-party vendors and platforms.' },
        { icon: ArrowRight, name: 'Low-Code/No-Code Apps', description: 'Rapid delivery using platforms while preserving quality.' },
        { icon: GitBranch, name: 'Microservices & Legacy Modernization', description: 'Decompose monoliths and modernize critical systems.' },
      ],
      useCases: [
        'SaaS MVP to enterprise scale-up',
        'Back-office automation and integration',
        'Legacy system rewrite and migration',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'n8n', 'Zapier']
    },
    {
      id: 'ai-data-agentic',
      icon: Brain,
      title: 'AI, Data & Agentic Intelligence',
      description: 'Leverage the power of AI to create autonomous, reasoning-driven systems that transform operations.',
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      borderColor: 'border-accent-purple/20',
      features: [
        { icon: Workflow, name: 'LangChain & LangGraph Pipelines', description: 'Composable chains, tools and graphs for complex reasoning.' },
        { icon: GitBranch, name: 'Agentic AI Development', description: 'Autonomous agents that plan, decide and act safely.' },
        { icon: MessageSquare, name: 'Calling & Conversational AI', description: 'Voice + multimodal agents for natural interactions.' },
        { icon: Bot, name: 'Retrieval-Augmented Generation (RAG)', description: 'Private, grounded responses over your data sources.' },
        { icon: BarChart3, name: 'Predictive Analytics & Forecasting', description: 'ML models for demand, risk and performance.' },
        { icon: Cpu, name: 'Generative AI (Content & Code)', description: 'Text, image and code generation with guardrails.' },
        { icon: Brain, name: 'CV & NLP Systems', description: 'Computer vision and language understanding solutions.' },
        { icon: Shield, name: 'AI Ops – Intelligent IT Response', description: 'Proactive monitoring, anomaly detection and remediation.' },
      ],
      useCases: [
        'Knowledge assistants over enterprise data',
        'Autonomous customer support and operations',
        'Forecasting and anomaly detection in real time',
      ],
      technologies: ['LangChain', 'LangGraph', 'OpenAI', 'RAG', 'Vector DBs', 'PyTorch']
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
              className="border-white/30 text-black hover:bg-white/10 text-lg px-8 py-6"
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