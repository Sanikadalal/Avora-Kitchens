'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function Introduction() {
  return (
    <section id="about" className="w-full bg-[#F7F5F0] py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center"
        >
          {/* Left Column (3 cols) */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-6 lg:pr-12">
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.2em] text-[#5E5A54] font-sans font-semibold"
            >
              THE ART OF THE KITCHEN
            </motion.p>
            
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl text-[#171717] leading-tight"
            >
              Where thoughtful design meets everyday living.
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className="font-sans text-lg text-[#5E5A54] leading-relaxed space-y-6 mt-4"
            >
              <p>
                We believe that the kitchen is the soul of the modern home. It is a space that demands more than just aesthetic appeal—it requires a delicate balance of functional intelligence, enduring quality, and intuitive layout.
              </p>
              <p>
                Our modular kitchens are crafted precisely for the nuances of Indian cooking and living. By integrating premium global materials with smart storage solutions, we create environments that make cooking a joy rather than a chore. From bespoke cabinetry to seamless installation, every detail is considered to elevate your daily rituals.
              </p>
            </motion.div>
          </div>

          {/* Right Column (2 cols) */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-2 order-1 lg:order-2 relative aspect-[4/5] w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Kitchen design details"
              fill
              className="object-cover rounded-xl shadow-lg"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
