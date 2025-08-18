import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
