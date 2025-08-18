import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  Bookmark,
  Share2,
  TrendingUp
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Agentic AI: How Autonomous Systems Are Transforming Business',
    excerpt: 'Explore how agentic AI systems are revolutionizing business operations by enabling autonomous decision-making, complex workflow management, and intelligent process optimization.',
    author: 'Dr. Alex Chen',
    authorRole: 'CEO & AI Research Director',
    avatar: 'AC',
    date: '2024-03-15',
    readTime: '12 min read',
    category: 'AI Research',
    tags: ['Agentic AI', 'Automation', 'Business Intelligence'],
    image: '/blog/agentic-ai-future.jpg',
  };

  const blogPosts = [
    {
      title: 'Building Enterprise-Grade LLM Applications: A Complete Guide',
      excerpt: 'Learn the essential principles and best practices for developing large language model applications that can scale to enterprise requirements.',
      author: 'Sarah Rodriguez',
      authorRole: 'CTO',
      avatar: 'SR',
      date: '2024-03-12',
      readTime: '8 min read',
      category: 'Technical Guide',
      tags: ['LLM', 'Enterprise', 'Development'],
      image: '/blog/llm-enterprise.jpg',
    },
    {
      title: 'AI Ethics in Practice: Responsible Development of Intelligent Systems',
      excerpt: 'Discussing the ethical considerations and responsible practices essential for developing AI systems that benefit society.',
      author: 'Dr. Michael Park',
      authorRole: 'Head of AI Research',
      avatar: 'MP',
      date: '2024-03-10',
      readTime: '10 min read',
      category: 'AI Ethics',
      tags: ['Ethics', 'Responsible AI', 'Society'],
      image: '/blog/ai-ethics.jpg',
    },
    {
      title: 'SaaS AI Integration: Transforming Traditional Business Models',
      excerpt: 'How integrating AI capabilities into SaaS platforms is creating new opportunities and transforming traditional business models.',
      author: 'Emma Thompson',
      authorRole: 'VP of Product',
      avatar: 'ET',
      date: '2024-03-08',
      readTime: '6 min read',
      category: 'Business Strategy',
      tags: ['SaaS', 'Business Model', 'Integration'],
      image: '/blog/saas-ai.jpg',
    },
    {
      title: 'Real-time AI Decision Making: Case Study from FinTech Industry',
      excerpt: 'A deep dive into how we implemented real-time AI decision making for a major FinTech client, improving response times by 90%.',
      author: 'David Kim',
      authorRole: 'Senior ML Engineer',
      avatar: 'DK',
      date: '2024-03-05',
      readTime: '9 min read',
      category: 'Case Study',
      tags: ['FinTech', 'Real-time AI', 'Case Study'],
      image: '/blog/fintech-case.jpg',
    },
    {
      title: 'The Evolution of Conversational AI: From Chatbots to Intelligent Agents',
      excerpt: 'Tracing the evolution of conversational AI and exploring the future of intelligent agents in customer service and business operations.',
      author: 'Dr. Alex Chen',
      authorRole: 'CEO & AI Research Director',
      avatar: 'AC',
      date: '2024-03-03',
      readTime: '11 min read',
      category: 'AI Trends',
      tags: ['Conversational AI', 'Chatbots', 'Evolution'],
      image: '/blog/conversational-ai.jpg',
    },
    {
      title: 'Scaling AI Infrastructure: Lessons from 100+ Deployments',
      excerpt: 'Key insights and best practices learned from deploying AI solutions for over 100 enterprise clients across various industries.',
      author: 'Sarah Rodriguez',
      authorRole: 'CTO',
      avatar: 'SR',
      date: '2024-03-01',
      readTime: '7 min read',
      category: 'Infrastructure',
      tags: ['Scaling', 'Infrastructure', 'Deployment'],
      image: '/blog/scaling-ai.jpg',
    },
  ];

  const categories = [
    'All Posts',
    'AI Research', 
    'Technical Guide',
    'Case Study',
    'Business Strategy',
    'AI Ethics',
    'AI Trends',
    'Infrastructure'
  ];

  const BlogCard = ({ post, featured = false }: { post: any, featured?: boolean }) => (
    <Card className={`hover-lift cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}>
      <CardContent className="p-0">
        {/* Image */}
        <div className={`${featured ? 'h-64' : 'h-48'} bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center`}>
          <div className="text-center">
            <TrendingUp size={featured ? 48 : 32} className="text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">{post.category}</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
            {featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
          </div>
          
          <h3 className={`font-bold mb-3 hover:text-primary transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
            {post.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Author & Meta */}
          <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-xs font-semibold">
                  {post.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{post.author}</p>
                <p className="text-xs">{post.authorRole}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center">
                <Calendar size={12} className="mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              AI <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in fade-in-delay-1">
              Stay updated with the latest trends in AI technology, industry insights, 
              and thought leadership from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "btn-hero" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Article</h2>
            <p className="text-lg text-muted-foreground">
              Our latest insights on the future of artificial intelligence
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto fade-in">
            <BlogCard post={featuredPost} featured />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Explore our complete collection of AI insights and technical guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.title} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Load More Articles
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent-purple to-accent-teal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and get the latest AI insights, industry trends, 
            and product updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;