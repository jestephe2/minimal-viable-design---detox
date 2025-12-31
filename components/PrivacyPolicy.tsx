import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f1f0ec] py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#707756] mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-zinc-700">
          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Introduction</h2>
            <p>
              Rachel Stephens Wellness LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including the Root Cause Reset 28-Day Program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-[#707756] mb-3">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Payment and billing information</li>
              <li>Health information and wellness goals</li>
              <li>Account credentials</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#707756] mb-3 mt-6">Automatically Collected Information</h3>
            <p>When you access our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your orders and deliver our programs</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send program materials and educational content</li>
              <li>Improve our services and develop new offerings</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, email delivery, and program delivery</li>
              <li><strong>Healthcare Providers:</strong> With your consent, to coordinate your care</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Rachel Stephens Wellness LLC</strong><br />
              Email: <a href="mailto:info@rachelstephenswellness.com" className="text-[#707756] hover:underline">info@rachelstephenswellness.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200">
          <a href="/" className="inline-block bg-[#707756] text-white px-8 py-4 rounded-full hover:bg-[#606746] transition-all font-bold">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
