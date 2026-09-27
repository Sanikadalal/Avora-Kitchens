'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/data/process';

export default function ProcessTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
  };

  return (
    <section id="process" className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm tracking-wider font-semibold text-[#8A765F] uppercase mb-4 block">
            HOW WE WORK
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#171717]">
            From idea to installation.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-[1px] bg-[#D8D0C4] -z-10 mx-[10%]"></div>
          
          {/* Mobile vertical line */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-[1px] bg-[#D8D0C4] -z-10"></div>

          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
            {processSteps.map((step: any, index: number) => (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center w-full lg:w-1/4"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAFAF7] border-2 border-[#8A765F] rounded-full flex items-center justify-center font-serif text-xl text-[#171717] z-10 mr-6 lg:mr-0 lg:mb-6">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-serif text-2xl text-[#171717] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#5E5A54] text-sm leading-relaxed max-w-[280px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
