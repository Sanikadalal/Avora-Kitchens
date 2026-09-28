'use client';

import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { business } from '@/data/business';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="17" y2="22" />
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in getting a modular kitchen. I'd like to know more.")}`;

  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-4xl tracking-tight">AVORA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              {business.description}
            </p>
            <div className="flex items-center space-x-4">
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-primary transition-colors text-gray-300">
                <InstagramIcon />
              </a>
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-primary transition-colors text-gray-300">
                <FacebookIcon />
              </a>
              <a href={business.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-primary transition-colors text-gray-300">
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold mb-6">What We Do</h4>
            <ul className="space-y-4">
              <li><Link href="#kitchens" className="text-gray-300 hover:text-white transition-colors text-sm">Kitchens</Link></li>
              <li><Link href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm">Projects</Link></li>
              <li><Link href="#materials" className="text-gray-300 hover:text-white transition-colors text-sm">Materials</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link href="#process" className="text-gray-300 hover:text-white transition-colors text-sm">Process</Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${business.phone}`} className="text-gray-300 hover:text-white transition-colors flex items-center gap-3 text-sm">
                  <Phone size={16} />
                  <span>{business.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="text-gray-300 hover:text-white transition-colors flex items-center gap-3 text-sm">
                  <Mail size={16} />
                  <span>{business.email}</span>
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-3 text-sm group">
                  <span>Message on WhatsApp</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Avora Kitchens. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
