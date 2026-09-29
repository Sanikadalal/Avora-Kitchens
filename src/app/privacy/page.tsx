import { business } from '@/data/business';
import Navbar from '@/components/Navbar';

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#FAFAF7] min-h-screen pt-32 pb-24">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="font-serif text-4xl md:text-5xl text-[#171717] mb-8">Privacy Policy</h1>
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-16">Last Updated: October 2026</p>
        
        <div className="prose prose-lg text-gray-700 font-sans space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">1. Introduction</h2>
            <p>
              At Avora Kitchens ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">2. The Data We Collect</h2>
            <p>
              We may collect, use, store, and transfer different kinds of personal data about you, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
              <li><strong>Identity Data:</strong> First name, last name, title.</li>
              <li><strong>Contact Data:</strong> Billing address, delivery address, email address, and telephone numbers (specifically collected via our Kitchen Configurator and contact forms).</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., designing and installing your modular kitchen).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>To provide you with accurate estimates based on the Kitchen Configurator tool.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 bg-white p-6 border border-gray-200">
              <p><strong>Email:</strong> {business.email}</p>
              <p><strong>Phone:</strong> {business.phone}</p>
              <p><strong>Address:</strong> {business.address}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
