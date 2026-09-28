'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { business } from '@/data/business';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', location: '', type: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#171717] mb-6">
            Let's create your kitchen.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#171717] mb-6">Contact Information</h3>
              <div className="space-y-6 text-[#5E5A54]">
                <a href={`tel:${business.phone}`} className="flex items-center gap-4 hover:text-[#171717] transition-colors">
                  <Phone strokeWidth={1.5} className="w-5 h-5 text-[#8A765F]" />
                  <span>{business.phone}</span>
                </a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-4 hover:text-[#171717] transition-colors">
                  <Mail strokeWidth={1.5} className="w-5 h-5 text-[#8A765F]" />
                  <span>{business.email}</span>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin strokeWidth={1.5} className="w-5 h-5 text-[#8A765F] shrink-0 mt-1" />
                  <span>{business.address}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#D8D0C4]">
              <a 
                href={`https://wa.me/${business.whatsapp.replace(/\D/g,'')}?text=Hi, I'm interested in getting a modular kitchen.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1DA851] transition-colors"
              >
                <MessageCircle strokeWidth={1.5} className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-[#D8D0C4]/30 p-8 rounded-lg text-center">
                <h3 className="font-serif text-2xl text-[#171717] mb-2">Thank You</h3>
                <p className="text-[#5E5A54]">We've received your inquiry and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#5E5A54] mb-2">Full Name</label>
                    <input type="text" id="name" required className="w-full bg-transparent border-b border-[#D8D0C4] py-3 text-[#171717] focus:outline-none focus:border-[#8A765F] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-[#5E5A54] mb-2">Phone Number</label>
                    <input type="tel" id="phone" required className="w-full bg-transparent border-b border-[#D8D0C4] py-3 text-[#171717] focus:outline-none focus:border-[#8A765F] transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#5E5A54] mb-2">Email</label>
                    <input type="email" id="email" className="w-full bg-transparent border-b border-[#D8D0C4] py-3 text-[#171717] focus:outline-none focus:border-[#8A765F] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm text-[#5E5A54] mb-2">Location / City</label>
                    <input type="text" id="location" required className="w-full bg-transparent border-b border-[#D8D0C4] py-3 text-[#171717] focus:outline-none focus:border-[#8A765F] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="type" className="block text-sm text-[#5E5A54] mb-2">Kitchen Type</label>
                    <select id="type" className="w-full bg-transparent border-b border-[#D8D0C4] py-3 text-[#171717] focus:outline-none focus:border-[#8A765F] transition-colors appearance-none">
                      <option value="">Select Type</option>
                      <option value="L-Shape">L-Shape</option>
                      <option value="U-Shape">U-Shape</option>
                      <option value="Straight">Straight</option>
                      <option value="Parallel">Parallel</option>
                      <option value="Island">Island</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm text-[#5E5A54] mb-2">Estimated Budget</label>
                    <select id="budget" className="w-full bg-transparent border-b border-[#D8D0C4] py-3 text-[#171717] focus:outline-none focus:border-[#8A765F] transition-colors appearance-none">
                      <option value="">Select Budget</option>
                      <option value="2-3L">₹2 - 3 Lakhs</option>
                      <option value="3-5L">₹3 - 5 Lakhs</option>
                      <option value="5-8L">₹5 - 8 Lakhs</option>
                      <option value="8L+">₹8 Lakhs +</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#5E5A54] mb-2">Message (Optional)</label>
                  <textarea id="message" rows={3} className="w-full bg-transparent border-b border-[#D8D0C4] py-3 text-[#171717] focus:outline-none focus:border-[#8A765F] transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full md:w-auto bg-[#8A765F] text-white rounded-full px-8 py-4 font-semibold text-sm hover:bg-[#8A765F]/90 transition-colors duration-300 mt-8">
                  Book a Free Consultation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
