'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { materials } from '@/data/materials';

export default function MaterialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMaterial = materials[activeIndex];

  return (
    <section id="materials" className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <span className="text-sm tracking-wider font-semibold text-[#8A765F] uppercase mb-4 block">
            FINISHES
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#171717]">
            Made to your taste.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Material Selector */}
          <div className="lg:w-1/4">
            {/* Mobile: Horizontal scrollable pills */}
            <div className="flex overflow-x-auto pb-4 lg:hidden gap-3 no-scrollbar">
              {materials.map((material: any, index: number) => (
                <button
                  key={material.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors ${
                    activeIndex === index
                      ? 'bg-[#8A765F] text-white'
                      : 'bg-[#D8D0C4] text-[#5E5A54] hover:bg-[#8A765F]/20'
                  }`}
                >
                  {material.name}
                </button>
              ))}
            </div>

            {/* Desktop: Vertical list */}
            <div className="hidden lg:flex flex-col space-y-2">
              {materials.map((material: any, index: number) => (
                <button
                  key={material.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left py-4 px-6 border-l-2 transition-all ${
                    activeIndex === index
                      ? 'border-[#8A765F] text-[#171717] font-bold bg-[#8A765F]/5'
                      : 'border-transparent text-[#5E5A54] hover:text-[#171717] hover:bg-[#D8D0C4]/20'
                  }`}
                >
                  <span className="text-lg">{material.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Material Display */}
          <div className="lg:w-3/4">
            <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl bg-[#D8D0C4]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeMaterial.id}
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' as any }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            
            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMaterial.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-3xl text-[#171717] mb-4">
                    {activeMaterial.name}
                  </h3>
                  <p className="text-[#5E5A54] max-w-2xl text-lg mb-6">
                    {activeMaterial.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeMaterial.features?.map((feature: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 rounded-full bg-[#D8D0C4]/40 text-[#5E5A54] text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
