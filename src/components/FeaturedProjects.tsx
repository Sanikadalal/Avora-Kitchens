'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function FeaturedProjects() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
  };

  return (
    <section id="projects" className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 md:mb-32">
          <span className="text-[#8A765F] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#171717] mb-4">
            Selected Projects
          </h2>
          <p className="text-[#5E5A54] text-lg max-w-xl">
            A glimpse into kitchens we've brought to life.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-3/5 group cursor-pointer relative">
                  <div className="relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-lg">
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </motion.div>
                  </div>
                </div>
                
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <span className="text-[#D8D0C4] font-serif text-5xl md:text-6xl mb-6">
                    {project.number}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#171717] mb-4">
                    {project.title}
                  </h3>
                  <div className="space-y-2 mb-8 text-[#5E5A54]">
                    <p><strong>Location:</strong> {project.location}</p>
                    <p><strong>Type:</strong> {project.type}</p>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-[#171717] border-b border-[#171717] pb-1 hover:text-[#8A765F] hover:border-[#8A765F] transition-colors"
                  >
                    Explore Project &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
