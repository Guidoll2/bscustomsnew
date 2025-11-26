'use client';

import React from 'react';
import { useInView } from '@/app/hooks/useInView';

interface FooterProps {
  locale?: string;
}

export default function Footer(_props: FooterProps) {
  const { ref, isInView } = useInView({ margin: '0px 0px -50px 0px' });
  
  // Contact details (update these if you have real values)
  const phone = '+54 9 11 1234 5678';
  const email = 'info@bscustoms.com';
  const whatsappLink = `https://wa.me/5491112345678`;

  return (
    <footer ref={ref} className="mt-12 border-t border-gray-100 bg-gradient-to-b from-white via-[#cfe0f4] to-[#e6f0fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between py-8 gap-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className={`flex-1 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-sm font-semibold text-gray-800">BS Customs</h3>
            <p className="text-sm text-gray-600 mt-2">Formosa 419 — Ezeiza, Buenos Aires, Argentina</p>
          </div>

          <div className={`flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className={`flex items-center space-x-3 ${isInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center text-sm text-gray-700 hover:text-[#1760a2] transition-colors">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.68l.7 2.2a1 1 0 01-.24 1.02L7.1 9.9a11 11 0 005 5l2.99-1.86a1 1 0 011.02-.24l2.2.7a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V6a1 1 0 01.0-.16L3 5z" />
                </svg>
                <span>{phone}</span>
              </a>
            </div>

            <div className={`flex items-center space-x-3 ${isInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
              <a href={`mailto:${email}`} className="flex items-center text-sm text-gray-700 hover:text-[#1760a2] transition-colors">
                <svg className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>{email}</span>
              </a>
            </div>

            <div className={`flex items-center space-x-3 ${isInView ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center text-sm text-gray-700 hover:text-[#1760a2] transition-colors">
                <img src="/wp.webp" alt="WhatsApp" className="w-8 h-8 mr-2 flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`py-4 border-t border-gray-100 ${isInView ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
          <p className="text-xs text-gray-500 text-center">© {new Date().getFullYear()} BS Customs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
