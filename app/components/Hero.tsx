'use client';

import { useInView } from '@/app/hooks/useInView';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  translations: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      experience: string;
      countries: string;
      operations: string;
    };
  };
}

export default function Hero({ translations }: HeroProps) {
  const { ref, isInView } = useInView({ margin: '0px 0px -100px 0px' });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-2">
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-[#7ab1e5]/20 to-[#1760a2]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-tr from-[#1760a2]/10 to-[#7ab1e5]/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(122,177,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(122,177,229,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#7ab1e5]/10 to-[#1760a2]/10 rounded-full border border-[#7ab1e5]/20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-2 h-2 bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] rounded-full animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#1760a2] to-[#7ab1e5] bg-clip-text text-transparent">
                International Trade Excellence
              </span>
            </div>

            {/* Main Title */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
              <span className="text-gray-900">{translations.title.split(' ').slice(0, -2).join(' ')}</span>
              {' '}
              <span className="bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] bg-clip-text text-transparent">
                {translations.title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
              {translations.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
              <div className="w-2 h-2 bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] rounded-full animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#1760a2] to-[#7ab1e5] bg-clip-text text-transparent">
                International Trade Excellence
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">{translations.title.split(' ').slice(0, -2).join(' ')}</span>
              {' '}
              <span className="bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] bg-clip-text text-transparent">
                {translations.title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {translations.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
              <Link
                href="#contacto"
                className="group relative px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] rounded-lg overflow-hidden shadow-lg shadow-[#7ab1e5]/25 hover:shadow-xl hover:shadow-[#7ab1e5]/35 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>{translations.ctaPrimary}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1760a2] to-[#7ab1e5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="#servicios"
                className="group px-8 py-4 text-base font-semibold text-[#1760a2] bg-white border-2 border-[#7ab1e5] rounded-lg hover:bg-gradient-to-r hover:from-[#7ab1e5]/5 hover:to-[#1760a2]/5 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>{translations.ctaSecondary}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 ${isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] bg-clip-text text-transparent">
                  98.7%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {translations.stats.experience}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] bg-clip-text text-transparent">
                  &lt;48h
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {translations.stats.countries}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {translations.stats.operations}
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative lg:h-[600px] h-[400px] ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {/* Main Image Container */}
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl shadow-[#7ab1e5]/20 -translate-y-6 lg:-translate-y-24">
              {/* Hero Image Placeholder - Ready for real image replacement */}
           <Image
              src="/autospuerto.png"
              alt="Global Trade Solutions"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />

              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-white/10 rounded-2xl pointer-events-none" />
            </div>

            {/* Static Badge: ISO 9001 - Top Left */}
            <div className="hidden lg:block absolute top-0 left-6 bg-white rounded-lg shadow-lg shadow-[#7ab1e5]/10 p-3 transition-all duration-300 hover:scale-102 hover:shadow-md">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7ab1e5] to-[#1760a2] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium leading-tight">Certified</div>
                  <div className="text-sm font-bold text-gray-900 leading-tight">ISO 9001</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          className="w-full h-16 text-gray-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
