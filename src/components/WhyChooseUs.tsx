'use client'

import { motion } from 'framer-motion';

const values = [
  {
    title: 'Designed around you.',
    description: 'Every kitchen begins with understanding how you live and cook.'
  },
  {
    title: 'Premium materials.',
    description: 'Sourced from trusted suppliers, tested for Indian conditions.'
  },
  {
    title: 'Precision manufacturing.',
    description: 'Factory-built components for consistent quality.'
  },
  {
    title: 'Professional installation.',
    description: 'Experienced teams who respect your home.'
  },
  {
    title: 'Transparent process.',
    description: 'Clear timelines, pricing and communication at every step.'
  },
  {
    title: 'After-sales support.',
    description: 'Dedicated service team for maintenance and care.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#171717] mb-6">
            Designed around you.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="font-semibold text-lg text-[#171717] mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-[#5E5A54] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
