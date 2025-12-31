import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f1f0ec] py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#707756] mb-4">Terms of Service</h1>
          <p className="text-zinc-500 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-zinc-700">
          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using the Root Cause Reset program and services provided by Rachel Stephens Wellness LLC ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Services Description</h2>
            <p>
              Rachel Stephens Wellness LLC provides wellness coaching, nutritional guidance, and educational programs, including the Root Cause Reset 28-Day Program. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to digital program materials and meal plans</li>
              <li>Professional-grade supplement kit delivery</li>
              <li>Weekly live interactive group calls</li>
              <li>1:1 coaching support</li>
              <li>Private community access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Purchase and Payment</h2>
            <h3 className="text-xl font-semibold text-[#707756] mb-3">Pricing</h3>
            <p>
              All prices are listed in U.S. dollars. We reserve the right to change our prices at any time. Prices in effect at the time of purchase will apply.
            </p>

            <h3 className="text-xl font-semibold text-[#707756] mb-3 mt-6">Payment Processing</h3>
            <p>
              Payment is processed securely through Stripe. By providing payment information, you represent that you are authorized to use the payment method provided.
            </p>

            <h3 className="text-xl font-semibold text-[#707756] mb-3 mt-6">Refund Policy</h3>
            <p>
              Due to the digital nature of our program and immediate access to materials, all sales are final. Refunds may be considered on a case-by-case basis within 7 days of purchase if you have not accessed program materials or received your supplement kit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use the program materials for personal use only</li>
              <li>Not share or distribute program materials without permission</li>
              <li>Follow all program guidelines and recommendations responsibly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Intellectual Property</h2>
            <p>
              All content, materials, and intellectual property related to our programs, including but not limited to text, graphics, logos, images, videos, and software, are owned by Rachel Stephens Wellness LLC and protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Health and Medical Disclaimer</h2>
            <p>
              Our services are educational and informational in nature and are not a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers before starting any new health program. See our full Medical Disclaimer for complete information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Rachel Stephens Wellness LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of services</li>
              <li>Any bugs, viruses, or other harmful code</li>
              <li>Any content or conduct of any third party</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Rachel Stephens Wellness LLC and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at any time, with or without notice, for any reason, including violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Contact Information</h2>
            <p>
              If you have questions about these Terms, please contact us at:
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

export default Terms;
