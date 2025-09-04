import Layout from '@/components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Your privacy is important to us. This Privacy Policy explains how QuantumMeld collects, uses, and safeguards your information.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
              <p className="text-muted-foreground">
                We may collect personal information such as your name, email address, and any other details you provide via forms or when contacting us. We also collect usage data to improve our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">How We Use Information</h2>
              <p className="text-muted-foreground">
                We use your information to operate and improve our website and services, respond to inquiries, send updates you opt into, and ensure security and compliance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to analyze traffic and enhance user experience. You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Data Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell your personal information. We may share data with trusted service providers under confidentiality agreements and when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
              <p className="text-muted-foreground">
                You may request access, correction, or deletion of your personal data. Contact us at info@quantummeld.co for assistance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p className="text-muted-foreground">
                If you have questions about this policy, please contact us at info@quantummeld.co.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;


