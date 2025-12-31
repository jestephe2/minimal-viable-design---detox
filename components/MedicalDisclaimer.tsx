import React from 'react';

const MedicalDisclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f1f0ec] py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#707756] mb-4">Medical Disclaimer</h1>
          <p className="text-zinc-500 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-zinc-700">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <p className="font-semibold text-amber-900">
              IMPORTANT: Please read this disclaimer carefully before using our services.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">No Medical Advice</h2>
            <p>
              The information provided by Rachel Stephens Wellness LLC ("we," "us," or "our") through the Root Cause Reset program, website, and all related services is for educational and informational purposes only. This information is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="mt-4">
              <strong>Always seek the advice of your physician or other qualified health provider</strong> with any questions you may have regarding a medical condition, health concerns, or before starting any new health, nutrition, or wellness program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Not a Licensed Medical Provider</h2>
            <p>
              Unless explicitly stated otherwise, Rachel Stephens Wellness LLC and its representatives are not licensed physicians, psychiatrists, psychologists, or other licensed healthcare professionals. Our services do not create a doctor-patient or therapist-patient relationship.
            </p>
            <p className="mt-4">
              Dr. Emily Plasker, DC, IHP, is a licensed Doctor of Chiropractic and Integrative Health Practitioner. Her role in our programs is to provide functional medicine guidance and wellness coaching within her scope of practice, not to diagnose or treat medical conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Individual Results May Vary</h2>
            <p>
              Any testimonials, case studies, or examples of results are illustrative only and should not be interpreted as a promise or guarantee of results. Individual results will vary based on many factors including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Individual health status and medical history</li>
              <li>Adherence to program guidelines</li>
              <li>Genetic factors</li>
              <li>Lifestyle factors</li>
              <li>Environmental factors</li>
              <li>Concurrent medical treatments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Supplement Information</h2>
            <p>
              The supplements included in our program are provided by Metagenics, a professional-grade supplement company. These statements have not been evaluated by the Food and Drug Administration (FDA). These products are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="mt-4">
              <strong>Consult your healthcare provider before taking any supplements</strong>, especially if you are pregnant, nursing, taking medications, or have any medical conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Detoxification Considerations</h2>
            <p>
              Detoxification programs may not be appropriate for everyone. You should not participate in our program if you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Are pregnant or nursing</li>
              <li>Have kidney or liver disease</li>
              <li>Have a history of eating disorders</li>
              <li>Are underweight or malnourished</li>
              <li>Have certain medical conditions (consult your doctor)</li>
              <li>Are taking certain medications that may interact with program components</li>
            </ul>
            <p className="mt-4">
              <strong>Always consult your healthcare provider</strong> to determine if a detoxification program is appropriate for you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Medical Emergency</h2>
            <p>
              If you are experiencing a medical emergency, call 911 or seek immediate medical attention. Do not rely on information from our program or website in case of a medical emergency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Never Disregard Professional Medical Advice</h2>
            <p>
              Never disregard professional medical advice or delay in seeking it because of something you have read on our website or learned through our programs. Reliance on any information provided by Rachel Stephens Wellness LLC is solely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">No Warranties</h2>
            <p>
              We make no warranties or representations about the accuracy, completeness, or suitability of the information provided. While we strive to provide accurate and up-to-date information, health and nutrition science is constantly evolving.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Rachel Stephens Wellness LLC disclaims all liability for any injury, loss, or damage that may result from your use of our programs, products, or services. You assume full responsibility for your health and wellness decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">External Links</h2>
            <p>
              Our website may contain links to third-party websites or resources. We are not responsible for the content, accuracy, or opinions expressed on these external sites. Inclusion of any link does not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Professional Guidance</h2>
            <p>
              We strongly encourage you to work with qualified healthcare professionals throughout your wellness journey. Our program is designed to complement, not replace, the relationship you have with your healthcare providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Acknowledgment</h2>
            <p>
              By using our services, you acknowledge that you have read, understood, and agree to this Medical Disclaimer. You acknowledge that you are participating in our program voluntarily and at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#707756] mb-4">Questions</h2>
            <p>
              If you have questions about this Medical Disclaimer, please contact us at:
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

export default MedicalDisclaimer;
