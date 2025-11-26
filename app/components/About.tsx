'use client';

interface AboutProps {
  translations: {
    title: string;
    subtitle: string;
    description: string;
    values: Array<{
      title: string;
      description: string;
    }>;
  };
}

export default function About({ translations }: AboutProps) {
  return (
    <section id="nosotros" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10">
              {/* Replace this URL with your final image */}
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="BS Customs Operations"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1760a2]/20 via-transparent to-[#7ab1e5]/10" />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] bg-clip-text text-transparent">
                      98.7%
                    </div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">
                      Tasa de éxito
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] bg-clip-text text-transparent">
                      &lt;48h
                    </div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">
                      Despacho avg.
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">
                      Compliance
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#7ab1e5]/20 to-[#1760a2]/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[#1760a2]/20 to-[#7ab1e5]/20 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#7ab1e5]/10 to-[#1760a2]/10 rounded-full border border-[#7ab1e5]/20 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] rounded-full" />
                <span className="text-sm font-semibold bg-gradient-to-r from-[#1760a2] to-[#7ab1e5] bg-clip-text text-transparent">
                  {translations.subtitle}
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {translations.title}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                {translations.description}
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid gap-6 pt-4">
              {translations.values.map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:border-[#7ab1e5]/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#7ab1e5]/10 to-[#1760a2]/10 rounded-lg flex items-center justify-center group-hover:from-[#7ab1e5]/20 group-hover:to-[#1760a2]/20 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#1760a2]"
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

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#7ab1e5] to-[#1760a2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl" />
                </div>
              ))}
            </div>

            {/* Optional CTA */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center space-x-2 text-[#1760a2] font-semibold hover:gap-3 transition-all duration-300 group"
              >
                <span>Conocer más sobre nuestro equipo</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
      </div>
    </section>
  );
}
