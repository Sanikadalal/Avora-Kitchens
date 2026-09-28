'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end bg-[#F7F5F0]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Premium Avora Kitchen"
          fill
          priority
          className="object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.2em] text-[#F7F5F0]/90 mb-6 font-sans font-semibold"
          >
            MODULAR KITCHENS · BENGALURU
          </motion.p>
          
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 whitespace-pre-line"
          >
            {'Designed around\nthe way you live.'}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg text-white/80 max-w-xl mb-12 leading-relaxed"
          >
            Thoughtfully designed modular kitchens crafted for modern Indian homes.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="inline-flex items-center justify-center gap-2 bg-[#8A765F] hover:bg-[#72624E] text-white font-sans font-medium rounded-full px-8 py-4 transition-colors duration-300">
              Get a Free Consultation
              <ArrowRight strokeWidth={1.5} className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center bg-transparent border border-white hover:bg-white/10 text-white font-sans font-medium rounded-full px-8 py-4 transition-colors duration-300">
              Explore Kitchens
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="font-sans text-sm uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as any }}
        >
          <ChevronDown strokeWidth={1.5} className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
