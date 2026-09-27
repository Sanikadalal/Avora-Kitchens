'use client'

import { motion } from 'framer-motion';
import { business } from '@/data/business';

export default function TrustStats() {
  const stats = [
    { value: '10+', label: 'Years' },
    { value: '250+', label: 'Kitchens' },
    { value: '4.8★', label: 'Rating' },
    { value: '45', label: 'Days Installation' }
  ];

  return (
    <section className="bg-[#D8D0C4] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center divide-x divide-[#171717]/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center px-4"
            >
              <span className="font-serif text-5xl md:text-6xl text-[#8A765F] mb-4">
                {stat.value}
              </span>
              <span className="text-sm text-[#5E5A54] uppercase tracking-wider font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xs text-[#5E5A54]/50 italic">
            Demo values for template purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
