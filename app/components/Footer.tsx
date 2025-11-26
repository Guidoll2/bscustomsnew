import React from 'react';

interface FooterProps {
  locale?: string;
}

export default function Footer(_props: FooterProps) {
  // Contact details (update these if you have real values)
  const phone = '+54 9 11 1234 5678';
  const email = 'info@bscustoms.com';
  const whatsappLink = `https://wa.me/5491112345678`;

  return (
    <footer className="mt-12 border-t border-gray-100 bg-gradient-to-b from-white via-[#cfe0f4] to-[#e6f0fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 gap-6">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800">BS Customs</h3>
            <p className="text-sm text-gray-600 mt-2">Formosa 419 — Ezeiza, Buenos Aires, Argentina</p>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6">
            <div className="flex items-center space-x-3">
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center text-sm text-gray-700 hover:text-[#1760a2] transition-colors">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.68l.7 2.2a1 1 0 01-.24 1.02L7.1 9.9a11 11 0 005 5l2.99-1.86a1 1 0 011.02-.24l2.2.7a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V6a1 1 0 01.0-.16L3 5z" />
                </svg>
                <span>{phone}</span>
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <a href={`mailto:${email}`} className="flex items-center text-sm text-gray-700 hover:text-[#1760a2] transition-colors">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                </svg>
                <span>{email}</span>
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center text-sm text-gray-700 hover:text-[#1760a2] transition-colors">
                <svg className="w-5 h-5 mr-2 text-green-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.48A11.87 11.87 0 0012.06.5c-6.53 0-11.84 5.31-11.84 11.84 0 2.09.55 4.02 1.5 5.73L.5 23.5l5.69-1.48a11.79 11.79 0 005.87 1.5c6.53 0 11.84-5.31 11.84-11.84a11.75 11.75 0 00-1.38-5.7zM12.06 20.5a8.31 8.31 0 01-4.25-1.16l-.3-.17-3.37.88.9-3.28-.2-.33A8.3 8.3 0 113.77 4.95 8.18 8.18 0 0112.06 20.5z" />
                  <path d="M17.1 14.1c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15s-.77.94-.95 1.13c-.17.19-.33.21-.61.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2 .17-.29.02-.45-.13-.6-.14-.14-.32-.37-.48-.56-.16-.19-.21-.33-.28-.54-.07-.21-.01-.39.06-.54.07-.15.67-1.62.92-2.23.24-.58.49-.5.67-.51.17 0 .37-.01.57-.01.19 0 .51-.07.78.58.27.65.92 2.24 1 2.4.07.14.12.3.02.47-.10.17-.15.27-.3.45-.15.19-.32.42-.46.56-.15.14-.31.29-.13.57.18.28 1.03 1.69 2.24 2.83 1.55 1.42 2.27 1.65 2.64 1.84.37.19.59.16.81.10.22-.06 1.71-.7 1.95-.98.24-.27.24-.5.17-.57-.07-.07-.27-.1-.56-.25z" fill="#fff"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="py-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">© {new Date().getFullYear()} BS Customs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
