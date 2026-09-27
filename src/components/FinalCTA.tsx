'use client'

import { motion } from 'framer-motion';
import { business } from '@/data/business';

export default function FinalCTA() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/cta-bg.jpg")' }} 
      >
        <div className="absolute inset-0 bg-[#171717]/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Ready to transform your kitchen?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Book a free consultation with our design team.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="#contact"
              className="w-full sm:w-auto bg-[#8A765F] text-white rounded-full px-8 py-4 font-semibold text-sm hover:bg-[#8A765F]/90 transition-colors duration-300"
            >
              Book a Consultation
            </a>
            <a 
              href={`tel:${business.phone}`}
              className="w-full sm:w-auto bg-transparent border border-white text-white rounded-full px-8 py-4 font-semibold text-sm hover:bg-white/10 transition-colors duration-300"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
