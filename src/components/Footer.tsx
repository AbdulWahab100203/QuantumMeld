import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      // { name: 'Products', href: '/products' },
      // { name: 'Blog', href: '/blog' },
    ],
    solutions: [
      { name: 'LLM Applications', href: '/services#llm' },
      { name: 'Agentic AI', href: '/services#agentic' },
      { name: 'SaaS Platforms', href: '/services#saas' },
      { name: 'Custom Development', href: '/contact' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Documentation', href: '/docs' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-t from-primary/5 to-transparent border-t">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Insights</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest updates on AI technology, industry trends, and our newest solutions delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-3">
            <Input 
              placeholder="Enter your email" 
              className="flex-1"
              type="email"
            />
            <Button className="btn-hero px-6">
              Subscribe
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-teal rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-2xl font-bold text-gradient">NeuralTech</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Leading the future of AI technology with innovative LLM applications, 
              agentic systems, and enterprise SaaS solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-accent-teal" />
                <span>contact@neuraltech.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-accent-teal" />
                <span>+1 (555) 321-5667</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-accent-teal" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} NeuralTech. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;