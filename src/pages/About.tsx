import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Shield, 
  Rocket,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Waleed Babar",
      role: "CEO & Founder",
      avatar: "WB",
      bio: "Former Senior Software Engineer at Confiz. Expert in Backend Engineering, Cloud Systems, AI, and Automation.",
      skills: ["AI Strategy", "Machine Learning", "Leadership"],
      social: { linkedin: "https://www.linkedin.com/in/waleed-babar-52420b180/", twitter: "", email: "waleedbabar23@gmail.com" }
    },
    {
      name: "Ammar Ahmad",
      role: "CTO", 
      avatar: "AA",
      bio: "Engineer at OpenAI. Expert in LLM architecture and scaling.",
      skills: ["LLM Development", "System Architecture", "Engineering"],
      social: { linkedin: "https://www.linkedin.com/in/ammar-ahmad-668167274/", twitter: "#", email: "ammarahmad526@gmial.com" }
    },
    {
      name: "Ahsan Ayub",
      role: "Head of AI Research",
      avatar: "AA",
      bio: "Former Research Scientist at DeepMind.",
      skills: ["AI Research", "Agentic Systems", "Neural Networks"],
      social: { linkedin: "https://www.linkedin.com/in/ahsan-ayub-360/", twitter: "#", email: "ahsanayub360@gmail.com" }
    },
    {
      name: "Abdul Wahab",
      role: "VP of Product",
      avatar: "AW",
      bio: "Former Senior Software Engineer. Expert in Backend Engineering, Cloud Systems, AI, and Automation.",
      skills: ["Product Strategy", "UX Design", "AI Ethics"],
      social: { linkedin: "https://www.linkedin.com/in/abdul-wahab-4b2614268/", twitter: "#", email: "wahabnadeem0@gmail.com" }
    },
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI, constantly exploring new frontiers.",
      color: "text-accent-teal"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our solutions are built with enterprise-grade security and 99.9% uptime guarantees.",
      color: "text-primary"
    },
    {
      icon: Rocket,
      title: "Scalability",
      description: "From startups to Fortune 500 companies, our AI solutions grow with your business.",
      color: "text-accent-purple"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              About <span className="text-gradient">Quantummeld</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in fade-in-delay-1">
              We're a team of AI pioneers, researchers, and engineers dedicated to building 
              the next generation of intelligent systems that transform how businesses operate.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-teal rounded-xl flex items-center justify-center mr-4">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize artificial intelligence by creating accessible, powerful, and ethical AI solutions 
                that empower businesses to achieve unprecedented levels of efficiency and innovation.
              </p>
            </div>

            {/* Vision */}
            <div className="fade-in fade-in-delay-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-teal rounded-xl flex items-center justify-center mr-4">
                  <Eye size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where AI seamlessly integrates into every aspect of business operations, 
                creating intelligent, autonomous systems that enhance human capabilities and drive global progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from research and development to client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className={`service-card text-center fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon size={32} className={value.color} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI research, 
              engineering, and product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className={`hover-lift fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={`/team/${member.avatar}.jpg`} />
                    <AvatarFallback className="bg-gradient-to-br from-accent-purple to-accent-teal text-white font-bold text-lg">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-2">
                    <a href={member.social.linkedin} className="w-8 h-8 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all">
                      <Linkedin size={14} />
                    </a>
                    <a href={member.social.twitter} className="w-8 h-8 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all">
                      <Twitter size={14} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all">
                      <Mail size={14} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;