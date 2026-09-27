'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IndianKitchen() {
  const considerations = [
    "Heavy daily cooking workflows",
    "Dedicated spice and masala storage",
    "Space for pressure cookers and large vessels",
    "Built-in appliance housing",
    "Easy-clean surfaces for oil and turmeric",
    "Optimal ventilation planning",
    "Generous counter space for meal prep",
    "Workflow designed around Indian cooking patterns"
  ];

  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' as any }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
                alt="Modern kitchen designed for heavy cooking" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' as any, delay: 0.2 }}
          >
            <span className="text-sm tracking-wider font-semibold text-[#8A765F] uppercase mb-4 block">
              CRAFTED FOR YOU
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#171717] mb-12 leading-tight">
              Designed for real Indian kitchens.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {considerations.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#D8D0C4] flex items-center justify-center text-[#8A765F]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-[#171717] text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <button className="px-8 py-4 bg-[#171717] text-white rounded-lg hover:bg-[#8A765F] transition-colors duration-300 font-medium text-sm tracking-wide">
                DISCOVER OUR APPROACH
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
