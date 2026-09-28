'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Kitchens', href: '#kitchens' },
  { name: 'Projects', href: '#projects' },
  { name: 'Materials', href: '#materials' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#F7F5F0]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 group">
            <Image src="/logo.png" alt="Avora Kitchens Logo" width={140} height={40} className="object-contain group-hover:opacity-80 transition-opacity h-auto max-h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-sans font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact"
              className="bg-[#8A765F] hover:bg-[#726250] text-white px-6 py-2.5 rounded text-sm font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#F7F5F0] z-40 flex flex-col justify-center items-center h-screen"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  key={link.name}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl text-primary hover:text-[#8A765F] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="pt-8"
              >
                <Link 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#8A765F] text-white px-8 py-4 rounded text-lg font-medium"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
