'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { kitchenTypes } from '@/data/kitchens';
import Link from 'next/link';

export default function KitchenTypes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section id="kitchens" className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-[#8A765F] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Explore
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#171717]">
            Find Your Kitchen
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {kitchenTypes.map((kitchen) => (
            <motion.div key={kitchen.id} variants={itemVariants} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
                >
                  <Image
                    src={kitchen.image}
                    alt={kitchen.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </motion.div>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-[#171717]">{kitchen.name}</h3>
                <p className="text-[#5E5A54] leading-relaxed">
                  {kitchen.description}
                </p>
                <Link
                  href={`/kitchens/${kitchen.id}`}
                  className="inline-block mt-2 text-[#8A765F] font-medium transition-colors hover:text-[#171717]"
                >
                  Explore &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
