'use client'

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { business } from '@/data/business';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in getting a modular kitchen. I'd like to know more.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
