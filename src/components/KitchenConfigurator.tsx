'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Calculator, ArrowRight } from 'lucide-react';

const layouts = [
  { id: 'straight', name: 'Straight', basePrice: 150000, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' },
  { id: 'l-shape', name: 'L-Shape', basePrice: 200000, img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80' },
  { id: 'u-shape', name: 'U-Shape', basePrice: 280000, img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80' },
  { id: 'island', name: 'Island', basePrice: 350000, img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80' },
];

const materials = [
  { id: 'laminate', name: 'Premium Laminate', multiplier: 1, desc: 'Durable, matte finish. Best for high-use Indian kitchens.' },
  { id: 'acrylic', name: 'High-Gloss Acrylic', multiplier: 1.4, desc: 'Seamless, mirror-like finish. Extremely premium look.' },
  { id: 'veneer', name: 'Natural Wood Veneer', multiplier: 1.8, desc: 'Real wood texture. Classic, warm, and luxurious.' },
];

const sizes = [
  { id: 'small', name: 'Compact', desc: 'Up to 80 sq.ft', multiplier: 0.8 },
  { id: 'medium', name: 'Standard', desc: '80 - 150 sq.ft', multiplier: 1 },
  { id: 'large', name: 'Spacious', desc: '150+ sq.ft', multiplier: 1.5 },
];

export default function KitchenConfigurator() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    layout: layouts[1],
    material: materials[0],
    size: sizes[1],
  });

  const calculatePrice = () => {
    const base = selections.layout.basePrice;
    const materialMult = selections.material.multiplier;
    const sizeMult = selections.size.multiplier;
    const minPrice = Math.round((base * materialMult * sizeMult) / 10000) * 10000;
    const maxPrice = minPrice + 80000;
    
    // Format to Indian Rupees format (e.g., ₹2.5L)
    const formatLakhs = (val: number) => `₹${(val / 100000).toFixed(2)}L`;
    return `${formatLakhs(minPrice)} - ${formatLakhs(maxPrice)}`;
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  return (
    <section id="estimator" className="bg-[#171717] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-[#8A765F] blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator strokeWidth={1.5} className="w-5 h-5 text-[#D8D0C4]" />
            <span className="label-sm text-[#D8D0C4]">BUDGET CALCULATOR</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Design your kitchen. <br/>Know your budget.</h2>
          <p className="text-gray-400">Get an instant, transparent cost estimate based on your specific layout and material preferences. No surprises.</p>
        </div>

        <div className="bg-[#FAFAF7] text-[#171717] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left Panel: Steps & Interactive Form */}
          <div className="flex-1 p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl">
                {step === 1 && "Select Layout"}
                {step === 2 && "Choose Finish"}
                {step === 3 && "Kitchen Size"}
                {step === 4 && "Your Estimate"}
              </h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`h-2 w-8 rounded-full transition-colors ${step >= i ? 'bg-[#8A765F]' : 'bg-[#D8D0C4]/40'}`}></div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                {/* STEP 1: LAYOUT */}
                {step === 1 && (
                  <motion.div key="step1" variants={slideVariants as any} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-2 gap-4">
                    {layouts.map(layout => (
                      <button
                        key={layout.id}
                        onClick={() => { setSelections({...selections, layout}); setTimeout(() => setStep(2), 400); }}
                        className={`relative group text-left rounded-xl overflow-hidden border-2 transition-all ${selections.layout.id === layout.id ? 'border-[#8A765F]' : 'border-transparent hover:border-[#D8D0C4]'}`}
                      >
                        <div className="h-32 bg-gray-200 relative">
                          <img src={layout.img} alt={layout.name} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-4 bg-white flex justify-between items-center">
                          <span className="font-semibold">{layout.name}</span>
                          {selections.layout.id === layout.id && <Check strokeWidth={1.5} className="w-5 h-5 text-[#8A765F]" />}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* STEP 2: MATERIAL */}
                {step === 2 && (
                  <motion.div key="step2" variants={slideVariants as any} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-4">
                    {materials.map(mat => (
                      <button
                        key={mat.id}
                        onClick={() => { setSelections({...selections, material: mat}); setTimeout(() => setStep(3), 400); }}
                        className={`text-left p-6 rounded-xl border-2 transition-all flex justify-between items-center bg-white ${selections.material.id === mat.id ? 'border-[#8A765F] shadow-md' : 'border-gray-100 hover:border-[#D8D0C4]'}`}
                      >
                        <div>
                          <h4 className="font-bold text-lg">{mat.name}</h4>
                          <p className="text-sm text-gray-500 mt-1">{mat.desc}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selections.material.id === mat.id ? 'border-[#8A765F] bg-[#8A765F]' : 'border-gray-300'}`}>
                          {selections.material.id === mat.id && <Check strokeWidth={1.5} className="w-4 h-4 text-white" />}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* STEP 3: SIZE */}
                {step === 3 && (
                  <motion.div key="step3" variants={slideVariants as any} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-4">
                    {sizes.map(size => (
                      <button
                        key={size.id}
                        onClick={() => { setSelections({...selections, size}); setTimeout(() => setStep(4), 400); }}
                        className={`text-left p-6 rounded-xl border-2 transition-all flex justify-between items-center bg-white ${selections.size.id === size.id ? 'border-[#8A765F] shadow-md' : 'border-gray-100 hover:border-[#D8D0C4]'}`}
                      >
                        <div>
                          <h4 className="font-bold text-lg">{size.name}</h4>
                          <p className="text-sm text-gray-500 mt-1">{size.desc}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selections.size.id === size.id ? 'border-[#8A765F] bg-[#8A765F]' : 'border-gray-300'}`}>
                          {selections.size.id === size.id && <Check strokeWidth={1.5} className="w-4 h-4 text-white" />}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* STEP 4: RESULT */}
                {step === 4 && (
                  <motion.div key="step4" variants={slideVariants as any} initial="hidden" animate="visible" exit="exit" className="text-center py-6">
                    <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Estimated Range</p>
                    <h3 className="font-serif text-5xl md:text-6xl text-[#8A765F] mb-6">{calculatePrice()}</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      This is a ballpark estimate based on your selections. To get a precise, 100% accurate quote including hardware and installation, let's schedule a site visit.
                    </p>
                    
                    <form className="max-w-sm mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#8A765F] bg-white" required />
                      <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#8A765F] bg-white" required />
                      <button className="w-full bg-[#171717] text-white py-4 rounded-lg font-semibold hover:bg-[#8A765F] transition-colors flex items-center justify-center gap-2">
                        Get Detailed Quote <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Navigation Buttons */}
            {step < 4 && (
               <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-6">
                 {step > 1 ? (
                   <button onClick={() => setStep(step - 1)} className="text-gray-500 hover:text-black font-medium transition-colors">
                     ← Back
                   </button>
                 ) : <div></div>}
                 
                 <button onClick={() => setStep(step + 1)} className="flex items-center gap-2 bg-[#8A765F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#705e4a] transition-colors">
                   Continue <ChevronRight strokeWidth={1.5} className="w-4 h-4" />
                 </button>
               </div>
            )}
          </div>

          {/* Right Panel: Live Summary */}
          <div className="hidden md:block w-[40%] bg-[#F7F5F0] border-l border-gray-200 p-8 md:p-12">
            <h4 className="font-serif text-xl mb-8 border-b border-gray-300 pb-4">Your Selections</h4>
            
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Layout</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                    <img src={selections.layout.img} alt="Layout" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-medium text-lg">{selections.layout.name}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Material & Finish</p>
                <p className="font-medium text-lg">{selections.material.name}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Kitchen Size</p>
                <p className="font-medium text-lg">{selections.size.name} <span className="text-gray-500 text-sm font-normal">({selections.size.desc})</span></p>
              </div>
            </div>

            <div className="mt-12 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Check strokeWidth={1.5} className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Professional Installation</span>
              </div>
              <div className="flex items-center gap-3">
                <Check strokeWidth={1.5} className="w-5 h-5 text-green-600" />
                <span className="font-semibold">10-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
