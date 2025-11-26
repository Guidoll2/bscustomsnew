'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  locale: string;
  translations: {
    nav: {
      about: string;
      services: string;
      process: string;
      contact: string;
    };
    cta: string;
  };
  onLocaleChange: (locale: string) => void;
}

export default function Header({ locale, translations, onLocaleChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const menuWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click or Escape
  useEffect(() => {
    if (!isMenuMounted) return;

    const onDocClick = (e: MouseEvent) => {
      if (!menuWrapperRef.current) return;
      if (!menuWrapperRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setTimeout(() => setIsMenuMounted(false), 220);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setTimeout(() => setIsMenuMounted(false), 220);
      }
    };

    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [isMenuMounted]);

  const navItems = [
    { name: translations.nav.about, href: '#nosotros' },
    { name: translations.nav.services, href: '#servicios' },
    { name: translations.nav.contact, href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-[#7ab1e5]/5'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7ab1e5] to-[#1760a2] rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-[#7ab1e5] to-[#1760a2] p-2.5 rounded-lg">
                     <Image
                src="/isologo.png"
                alt="BS Customs Logo"
                width={500}
                height={500}
                className='w-10 h-10 object-contain'
              />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-[#1760a2] to-[#7ab1e5] bg-clip-text text-transparent">
                BS Customs
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase ml-0.5">
                Comercio Exterior
              </span>
            </div>
          </Link>

          {/* CTA visible from MD and a menu toggle available for all sizes */}
          <div className="flex items-center space-x-4">
            <Link
              href="#contacto"
              className="hidden md:inline-flex relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] rounded-lg overflow-hidden group"
            >
              <span className="relative z-10">{translations.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1760a2] to-[#7ab1e5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <div className="relative" ref={menuWrapperRef}>
              <button
                onClick={() => {
                  if (!isMenuOpen) {
                    setIsMenuMounted(true);
                    requestAnimationFrame(() => setIsMenuOpen(true));
                  } else {
                    setIsMenuOpen(false);
                    setTimeout(() => setIsMenuMounted(false), 220);
                  }
                }}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
              </button>

              {/* Dropdown Menu (mounted separately to allow fade animation) */}
              {isMenuMounted && (
                <div
                  className={`absolute right-0 top-full mt-2 w-64 bg-white border md:rounded-md py-3 z-50 transform transition-all duration-200 ease-out ${
                    isMenuOpen
                      ? 'opacity-100 translate-y-0 ring-2 ring-[#7ab1e5]/30 shadow-[0_8px_30px_rgba(26,115,232,0.12)]'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="px-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setTimeout(() => setIsMenuMounted(false), 220);
                        }}
                        className="block px-2 py-2 text-sm font-medium text-gray-700 hover:text-[#1760a2] rounded-md transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}

                    <div className="pt-3 pb-2 mt-2">
                      <p className="text-xs text-gray-500 mb-2 font-medium">Idioma / Language</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            onLocaleChange('es');
                            setIsMenuOpen(false);
                            setTimeout(() => setIsMenuMounted(false), 220);
                          }}
                          className={`flex-1 px-3 py-2 text-sm font-semibold rounded-md transition-all duration-150 ${
                            locale === 'es'
                              ? 'bg-[#1760a2] text-white border border-transparent'
                              : 'border border-gray-200 text-gray-700 bg-transparent'
                          }`}
                        >
                          Español
                        </button>
                        <button
                          onClick={() => {
                            onLocaleChange('en');
                            setIsMenuOpen(false);
                            setTimeout(() => setIsMenuMounted(false), 220);
                          }}
                          className={`flex-1 px-3 py-2 text-sm font-semibold rounded-md transition-all duration-150 ${
                            locale === 'en'
                              ? 'bg-[#1760a2] text-white border border-transparent'
                              : 'border border-gray-200 text-gray-700 bg-transparent'
                          }`}
                        >
                          English
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 md:hidden px-1">
                      <Link
                        href="#contacto"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setTimeout(() => setIsMenuMounted(false), 220);
                        }}
                        className="w-full block px-4 py-2 text-sm font-semibold text-white bg-[#1760a2] rounded-md text-center"
                      >
                        {translations.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        
      </nav>
    </header>
  );
}
