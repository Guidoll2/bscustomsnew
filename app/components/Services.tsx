'use client';

import { useInView } from '@/app/hooks/useInView';

interface ServicesProps {
  translations: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export default function Services({ translations }: ServicesProps) {
  const { ref, isInView } = useInView({ margin: '0px 0px -100px 0px' });
  const serviceImages = [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80', // Customs/Documents
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80', // Consulting/Business
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80', // Heavy Machinery/Logistics
    '/certificado.jpg', // Certificates/Quality
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', // Risk Management/Analytics
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', // Real-time Tracking/Dashboard
  ];

  return (
    <section ref={ref} id="servicios" className="relative py-24 lg:py-32 bg-white">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Editorial Style */}
        <div className={`max-w-3xl mb-20 lg:mb-28 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="w-16 h-1 bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] mb-8" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {translations.subtitle}
          </p>
        </div>

        {/* Services - Full Width Editorial Modules */}
        <div className="space-y-20 lg:space-y-32">
          {translations.items.map((service, index) => (
            <div
              key={index}
              className={`group relative ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              } ${isInView ? (index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image Side */}
                <div
                  className={`relative overflow-hidden rounded-2xl aspect-[16/9] bg-gray-100 ${
                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Image Container */}
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
                    <img
                      src={serviceImages[index]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1760a2]/10 via-transparent to-[#7ab1e5]/10 opacity-60" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] bg-clip-text text-transparent">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#7ab1e5]/20 via-transparent to-transparent" />
                </div>

                {/* Content Side */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 0 ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'
                  }`}
                >
                  {/* Service Title */}
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#7ab1e5] to-[#1760a2]" />
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    {service.description}
                  </p>

                  {/* Subtle Learn More Link */}
                  <div className="pt-4">
                    <a
                      href="#contacto"
                      className="inline-flex items-center space-x-2 text-[#1760a2] font-semibold hover:gap-3 transition-all duration-300 group/link"
                    >
                      <span>Consultar servicio</span>
                      <svg
                        className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider Line - Subtle */}
              {index < translations.items.length - 1 && (
                <div className="absolute -bottom-10 lg:-bottom-16 left-0 right-0 flex justify-center">
                  <div className="w-px h-12 lg:h-20 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA - Minimalist */}
        <div className="mt-32 pt-16 border-t border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Necesita una solución personalizada?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro equipo está disponible para evaluar sus necesidades específicas y diseñar una estrategia a medida.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a
                href="#contacto"
                className="group relative inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-[#7ab1e5]/25 hover:shadow-2xl hover:shadow-[#7ab1e5]/40 transition-all duration-300"
              >
                <span className="relative z-10">Iniciar consulta</span>
                <svg
                  className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#1760a2] to-[#7ab1e5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
