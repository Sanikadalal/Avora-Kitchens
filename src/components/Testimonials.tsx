'use client'

import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-full md:min-w-[600px] snap-center flex flex-col relative"
            >
              <div className="absolute top-0 left-0 -translate-x-4 -translate-y-12 font-serif text-[120px] text-[#D8D0C4]/30 leading-none pointer-events-none">
                "
              </div>
              <div className="relative z-10 pl-8 md:pl-12 border-l border-[#D8D0C4]">
                <p className="font-serif text-2xl md:text-3xl italic text-[#171717] leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-[#171717]">{testimonial.name}</p>
                  <p className="text-sm text-[#5E5A54]">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
