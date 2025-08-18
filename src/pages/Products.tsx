import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Zap, 
  Shield,
  MessageSquare,
  Brain,
  BarChart3,
  Workflow,
  ExternalLink
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'NeuralChat Pro',
      category: 'LLM Application',
      description: 'Enterprise-grade conversational AI platform with advanced context understanding and multi-language support.',
      features: ['Multi-language Support', 'Context Memory', 'Custom Training', 'API Integration'],
      pricing: 'Starting at $299/month',
      rating: 4.9,
      users: '10K+',
      icon: MessageSquare,
      color: 'text-accent-teal',
      bgColor: 'bg-accent-teal/10',
      borderColor: 'border-accent-teal/20',
      image: '/products/neuralchat.jpg',
      featured: true,
    },
    {
      name: 'AgentFlow',
      category: 'Agentic AI',
      description: 'Autonomous workflow automation platform that intelligently handles complex business processes.',
      features: ['Workflow Automation', 'Decision Trees', 'Multi-System Integration', 'Real-time Analytics'],
      pricing: 'Starting at $599/month',
      rating: 4.8,
      users: '5K+',
      icon: Workflow,
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      borderColor: 'border-accent-purple/20',
      image: '/products/agentflow.jpg',
      featured: true,
    },
    {
      name: 'DataInsight Suite',
      category: 'SaaS Platform',
      description: 'Comprehensive business intelligence platform with AI-powered predictive analytics and reporting.',
      features: ['Predictive Analytics', 'Custom Dashboards', 'Real-time Reporting', 'Data Visualization'],
      pricing: 'Starting at $199/month',
      rating: 4.7,
      users: '15K+',
      icon: BarChart3,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      image: '/products/datainsight.jpg',
      featured: false,
    },
    {
      name: 'SmartAssist AI',
      category: 'LLM Application',
      description: 'AI copilot for customer service teams with intelligent ticket routing and response suggestions.',
      features: ['Ticket Routing', 'Response Suggestions', 'Sentiment Analysis', 'Performance Metrics'],
      pricing: 'Starting at $99/month',
      rating: 4.6,
      users: '8K+',
      icon: Brain,
      color: 'text-accent-teal',
      bgColor: 'bg-accent-teal/10',
      borderColor: 'border-accent-teal/20',
      image: '/products/smartassist.jpg',
      featured: false,
    },
    {
      name: 'AutoSecure Pro',
      category: 'Agentic AI',
      description: 'Autonomous cybersecurity platform that detects, analyzes, and responds to threats in real-time.',
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring'],
      pricing: 'Contact for pricing',
      rating: 4.9,
      users: '2K+',
      icon: Shield,
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      borderColor: 'border-accent-purple/20',
      image: '/products/autosecure.jpg',
      featured: false,
    },
    {
      name: 'SalesAI Platform',
      category: 'SaaS Platform',
      description: 'Complete sales enablement platform with AI-driven lead scoring and pipeline optimization.',
      features: ['Lead Scoring', 'Pipeline Analytics', 'Forecasting', 'CRM Integration'],
      pricing: 'Starting at $149/month',
      rating: 4.5,
      users: '12K+',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      image: '/products/salesai.jpg',
      featured: false,
    },
  ];

  const featuredProducts = products.filter(product => product.featured);
  const otherProducts = products.filter(product => !product.featured);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center">
        {Array.from({ length: fullStars }, (_, index) => (
          <Star key={index} size={14} className="text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && <Star size={14} className="text-yellow-400 fill-current opacity-50" />}
        <span className="ml-1 text-sm text-muted-foreground">({rating})</span>
      </div>
    );
  };

  const ProductCard = ({ product, featured = false }: { product: typeof products[0], featured?: boolean }) => {
    const Icon = product.icon;
    
    return (
      <Card className={`hover-lift ${product.borderColor} ${featured ? 'ring-2 ring-primary/20' : ''}`}>
        <CardContent className="p-0">
          {/* Product Image */}
          <div className={`h-48 ${product.bgColor} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
            <Icon size={64} className={product.color} />
            {featured && (
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
          </div>
          
          {/* Product Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-xs">
                {product.category}
              </Badge>
              {renderStars(product.rating)}
            </div>
            
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {product.description}
            </p>
            
            {/* Features */}
            <ul className="space-y-1 mb-4">
              {product.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-center text-sm">
                  <div className={`w-1.5 h-1.5 rounded-full ${product.bgColor} mr-2`} />
                  {feature}
                </li>
              ))}
              {product.features.length > 3 && (
                <li className="text-sm text-muted-foreground">
                  +{product.features.length - 3} more features
                </li>
              )}
            </ul>
            
            {/* Stats */}
            <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users size={14} className="mr-1" />
                {product.users} users
              </div>
              <div className="font-semibold text-foreground">{product.pricing}</div>
            </div>
            
            {/* CTA */}
            <div className="space-y-2">
              <Button className="w-full btn-hero">
                Start Free Trial
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <ExternalLink size={14} className="mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in fade-in-delay-1">
              Discover our suite of AI-powered solutions designed to transform your business operations 
              and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Our most popular and advanced AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProducts.map((product, index) => (
              <div key={product.name} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProductCard product={product} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Product Suite</h2>
            <p className="text-lg text-muted-foreground">
              Explore all our AI solutions across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.map((product, index) => (
              <div key={product.name} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent-purple to-accent-teal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Our team can build tailor-made AI solutions that perfectly fit your unique business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Discuss Custom Solution
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Enterprise Pricing
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;