'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

const kitchenTypes = ['L-Shaped', 'U-Shaped', 'Straight', 'Parallel', 'Island', 'Peninsula'];
const budgets = ['₹2–3L', '₹3–5L', '₹5–8L', '₹8L+'];
const homeTypes = ['Apartment', 'Villa', 'Independent House'];

export default function BudgetEstimate() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedHome, setSelectedHome] = useState('');

  return (
    <section className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#171717] mb-6">
            Let's design a kitchen that fits your space and budget.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12 text-left"
        >
          {/* Kitchen Type */}
          <div>
            <h3 className="text-sm font-semibold text-[#5E5A54] uppercase tracking-wider mb-4">Select Kitchen Type</h3>
            <div className="flex flex-wrap gap-3">
              {kitchenTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 rounded-full text-sm transition-colors duration-300 ${
                    selectedType === type
                      ? 'bg-[#8A765F] text-white'
                      : 'bg-[#F7F5F0] text-[#171717] hover:bg-[#D8D0C4]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <h3 className="text-sm font-semibold text-[#5E5A54] uppercase tracking-wider mb-4">Estimated Budget</h3>
            <div className="flex flex-wrap gap-3">
              {budgets.map(budget => (
                <button
                  key={budget}
                  onClick={() => setSelectedBudget(budget)}
                  className={`px-6 py-3 rounded-full text-sm transition-colors duration-300 ${
                    selectedBudget === budget
                      ? 'bg-[#8A765F] text-white'
                      : 'bg-[#F7F5F0] text-[#171717] hover:bg-[#D8D0C4]'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Home Type */}
          <div>
            <h3 className="text-sm font-semibold text-[#5E5A54] uppercase tracking-wider mb-4">Home Type</h3>
            <div className="flex flex-wrap gap-3">
              {homeTypes.map(home => (
                <button
                  key={home}
                  onClick={() => setSelectedHome(home)}
                  className={`px-6 py-3 rounded-full text-sm transition-colors duration-300 ${
                    selectedHome === home
                      ? 'bg-[#8A765F] text-white'
                      : 'bg-[#F7F5F0] text-[#171717] hover:bg-[#D8D0C4]'
                  }`}
                >
                  {home}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 text-center">
            <button className="bg-[#171717] text-white rounded-full px-8 py-4 font-semibold text-sm hover:bg-[#171717]/80 transition-colors duration-300 inline-flex items-center gap-2">
              Get My Estimate
              <span>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
