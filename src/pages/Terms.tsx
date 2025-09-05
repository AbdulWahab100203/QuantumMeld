import Layout from '@/components/Layout';

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">Terms of <span className="text-gradient">Service</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in fade-in-delay-1">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using QuantumMeld products or services, you agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>

            <div className="fade-in fade-in-delay-1">
              <h2 className="text-2xl font-bold mb-3">2. Use of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use the services in compliance with applicable laws and not to misuse, disrupt, or harm the services or other users.
              </p>
            </div>

            <div className="fade-in fade-in-delay-2">
              <h2 className="text-2xl font-bold mb-3">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, and technology within our services are owned by or licensed to QuantumMeld and protected by law.
              </p>
            </div>

            <div className="fade-in fade-in-delay-3">
              <h2 className="text-2xl font-bold mb-3">4. Disclaimers and Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Services are provided “as is” without warranties of any kind. QuantumMeld is not liable for indirect or consequential damages.
              </p>
            </div>

            <div className="fade-in fade-in-delay-4">
              <h2 className="text-2xl font-bold mb-3">5. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms periodically. Continued use of the services constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div className="fade-in fade-in-delay-5">
              <h2 className="text-2xl font-bold mb-3">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about these Terms? Contact us at info@quantummeld.co.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;


