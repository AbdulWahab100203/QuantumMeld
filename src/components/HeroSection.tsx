import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Orbs with updated colors */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse glow" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Floating Icons with updated colors */}
        <div className="absolute top-32 left-1/4 text-blue-400/40 animate-bounce hover-lift" style={{ animationDelay: '0.5s' }}>
          <Brain size={40} />
        </div>
        <div className="absolute top-48 right-1/3 text-violet-400/40 animate-bounce hover-lift" style={{ animationDelay: '1.5s' }}>
          <Zap size={36} />
        </div>
        <div className="absolute bottom-48 right-1/4 text-cyan-400/40 animate-bounce hover-lift" style={{ animationDelay: '2.5s' }}>
          <Sparkles size={38} />
        </div>
        
        {/* Updated Gradient Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(221 83% 53% / 0.4) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(250 82% 45% / 0.4) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, hsl(199 89% 48% / 0.4) 0%, transparent 50%)`
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white mb-8 fade-in hover-lift glow">
            <Sparkles size={18} className="mr-3 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide">✨ Next-Generation AI Solutions</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl mt-10 md:text-7xl font-bold text-white mb-6 fade-in fade-in-delay-1">
            Transform Your Business with{' '}
            <span className="text-transparent bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text">
              Intelligent AI
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed fade-in fade-in-delay-2">
            We build cutting-edge LLM applications, agentic AI systems, and enterprise SaaS solutions 
            that revolutionize how businesses operate and scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 fade-in fade-in-delay-3">
            <Button size="lg" className="bg-white text-primary hover:bg-white/95 text-lg px-10 py-7 group hover-lift glow font-semibold">
              🚀 Start Your AI Journey
              <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/40 text-black hover:bg-white/20 text-lg px-10 py-7 backdrop-blur-sm hover-lift font-semibold"
            >
              ▶️ Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20 fade-in fade-in-delay-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">AI Solutions Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/70">System Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;