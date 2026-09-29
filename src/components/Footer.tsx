'use client';

import Link from 'next/link';
import Image from 'next/image';
import { business } from '@/data/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f2322] text-[#e5e5e5] pt-24 pb-12 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          {/* Left Column: Newsletter */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <h3 className="text-xl text-[#d2baa0] mb-8 font-medium">Sign up to get inspiring design stories</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border border-gray-600 rounded p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#d2baa0] transition-colors"
                required
              />
              <label className="flex items-start gap-4 text-sm text-gray-400 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input type="checkbox" className="appearance-none w-5 h-5 border border-gray-600 rounded bg-transparent checked:bg-[#d2baa0] checked:border-[#d2baa0] transition-colors cursor-pointer" required />
                  <svg className="absolute w-3 h-3 text-[#1f2322] pointer-events-none opacity-0 check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="leading-relaxed group-hover:text-gray-300 transition-colors">
                  I have read and agree to the <Link href="/privacy" className="underline hover:text-white">privacy policy</Link> and would like to be contacted by Avora Kitchens with news and updates.
                </span>
              </label>
              <button 
                type="submit" 
                className="bg-[#F7F5F0] hover:bg-white text-[#171717] px-10 py-3.5 rounded-full font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            
            {/* What we do */}
            <div>
              <h4 className="text-sm text-white mb-6 font-medium">What we do</h4>
              <ul className="space-y-4">
                <li><Link href="#kitchens" className="text-[#d2baa0] hover:text-white transition-colors text-base">Kitchens</Link></li>
                <li><Link href="#projects" className="text-[#d2baa0] hover:text-white transition-colors text-base">Projects</Link></li>
                <li><Link href="#materials" className="text-[#d2baa0] hover:text-white transition-colors text-base">Materials</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm text-white mb-6 font-medium">Support</h4>
              <ul className="space-y-4">
                <li><Link href="#contact" className="text-[#d2baa0] hover:text-white transition-colors text-base">Contact</Link></li>
                <li><Link href="#faq" className="text-[#d2baa0] hover:text-white transition-colors text-base">FAQs</Link></li>
                <li><Link href="#about" className="text-[#d2baa0] hover:text-white transition-colors text-base">About</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm text-white mb-6 font-medium">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${business.email}`} className="text-[#d2baa0] hover:text-white transition-colors text-base block">
                    {business.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${business.phone}`} className="text-[#d2baa0] hover:text-white transition-colors text-base block mb-6">
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[#d2baa0] hover:text-white transition-colors text-base block">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={business.social.pinterest} target="_blank" rel="noopener noreferrer" className="text-[#d2baa0] hover:text-white transition-colors text-base block">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[#d2baa0] hover:text-white transition-colors text-base block">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-block relative w-fit">
            <Image src="/logo.png" alt="Avora Kitchens Logo" width={100} height={30} className="object-contain h-auto max-h-10 w-auto brightness-0 invert opacity-90" />
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-gray-500 pt-8 border-t border-gray-700/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <p>© {currentYear} Avora Kitchens. All rights reserved.</p>
              <div className="flex gap-4 sm:gap-6">
                <Link href="/terms" className="hover:text-gray-300 transition-colors underline decoration-gray-700 underline-offset-4">Terms & Conditions</Link>
                <Link href="/privacy" className="hover:text-gray-300 transition-colors underline decoration-gray-700 underline-offset-4">Privacy Policy</Link>
              </div>
            </div>
            
            <p className="text-gray-500">
              Design by <a href="#" className="hover:text-gray-300 transition-colors underline decoration-gray-700 underline-offset-4">Avora Studio</a>
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        input[type="checkbox"]:checked + svg.check-icon {
          opacity: 1;
        }
      `}</style>
    </footer>
  );
}
