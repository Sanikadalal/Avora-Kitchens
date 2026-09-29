import { business } from '@/data/business';
import Navbar from '@/components/Navbar';

export default function TermsConditions() {
  return (
    <main className="bg-[#FAFAF7] min-h-screen pt-32 pb-24">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="font-serif text-4xl md:text-5xl text-[#171717] mb-8">Terms & Conditions</h1>
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-16">Last Updated: October 2026</p>
        
        <div className="prose prose-lg text-gray-700 font-sans space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Avora Kitchens website and our services, you accept and agree to be bound by the terms and provisions of this agreement. Any participation in our services will constitute acceptance of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">2. Design & Quotation Accuracy</h2>
            <p>
              The estimates provided by our online Kitchen Configurator are approximate and serve as a baseline guide. Final pricing is subject to a physical site visit, final material selection, and precise measurements. Avora Kitchens reserves the right to amend quotations based on structural realities discovered during site inspection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">3. Installation & Timelines</h2>
            <p>
              While we strive to adhere strictly to proposed project timelines, installation dates are estimates. We are not liable for delays caused by unforeseen structural issues, supply chain disruptions for imported materials, or delays in client approvals. We require clear site access during the agreed installation window.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">4. Warranties & Maintenance</h2>
            <p>
              We provide a standard warranty on all modular cabinetry and hardware as detailed in your final contract. This warranty covers manufacturing defects but does not cover damage caused by improper use, water damage beyond normal kitchen environments, or unauthorized modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">5. Intellectual Property</h2>
            <p>
              All 3D designs, blueprints, and layouts provided during the consultation phase remain the intellectual property of Avora Kitchens until a formal contract is signed and the initial deposit is received.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#171717] mb-4">6. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms & Conditions, please contact us:
            </p>
            <div className="mt-4 bg-white p-6 border border-gray-200">
              <p><strong>Email:</strong> {business.email}</p>
              <p><strong>Phone:</strong> {business.phone}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
