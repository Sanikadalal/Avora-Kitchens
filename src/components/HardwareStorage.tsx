'use client';

import { motion } from 'framer-motion';
import { hardwareItems } from '@/data/hardware';
import {
  Volume2,
  ArrowUpDown,
  CornerDownRight,
  UtensilsCrossed,
  Warehouse,
  ArrowRight,
  Sparkles,
  Microwave,
  Box,
  type LucideProps
} from 'lucide-react';

const iconMap: Record<string, React.FC<LucideProps>> = {
  Volume2,
  ArrowUpDown,
  CornerDownRight,
  UtensilsCrossed,
  Warehouse,
  ArrowRight,
  Sparkles,
  Microwave,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } }
};

export default function HardwareStorage() {
  return (
    <section className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm tracking-wider font-semibold text-[#8A765F] uppercase mb-4 block">
            INTELLIGENT DESIGN
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#171717]">
            Beautiful outside. Intelligent inside.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {hardwareItems.map((item: any) => {
            const IconComponent = iconMap[item.icon] || Box;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white border border-[#D8D0C4]/40 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-[#D8D0C4]/20 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F7F5F0] flex items-center justify-center mb-6 text-[#8A765F] group-hover:scale-110 transition-transform">
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[#171717] mb-2">
                  {item.name}
                </h3>
                <p className="text-[#5E5A54] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
