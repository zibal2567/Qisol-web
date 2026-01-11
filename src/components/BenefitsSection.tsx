'use client';

import { memo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Shield, Zap, DollarSign, Atom } from 'lucide-react';
import Image from 'next/image';
import { useSectionTracking } from '@/hooks/useScrollTracking';
import { trackButtonClick } from '@/lib/analytics';
import { ImageZoom } from '@/components/ui/ImageZoom';

interface BenefitsSectionProps {
  benefits: {
    title: string;
    desc: string;
    metrics: {
      value: string;
      label: string;
      detail: string;
    }[];
  };
}

const BenefitsSection = memo(function BenefitsSection({ benefits }: BenefitsSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'th';

  // Track section view
  const sectionRef = useSectionTracking({
    sectionName: 'Benefits Section',
    pagePath: pathname,
    language: locale
  });

  // จับคู่ icon ให้ตามลำดับ metric
  const icons = [Shield, Zap, DollarSign];

  const handleBenefitClick = (benefitName: string) => {
    trackButtonClick({
      button_name: `Benefit Card - ${benefitName}`,
      button_location: 'Benefits Section',
      page_path: pathname,
      language: locale
    });
  };

  return (
    <section ref={sectionRef} id="benefits" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50">

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <Atom className="w-4 h-4 text-[#439b83]" />
            <span className="text-sm font-medium text-gray-700">Why QiSol?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-[#439b83] to-emerald-600 bg-clip-text text-transparent">
              {benefits.title}
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto -mt-5">
            {benefits.desc}
          </p>

          {/* Benefits Image */}
          <div className="flex justify-center my-10">
            <ImageZoom>
              <Image
                src="/Image/Benefits.png"
                alt="QI-SOL-Benefits"
                width={1200}
                height={675}
                className="object-contain drop-shadow-2xl w-full h-auto max-w-4xl"
              />
            </ImageZoom>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-5 -mt-15">
          {benefits.metrics.map((metric, index) => {
            const IconComponent = icons[index % icons.length];
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className={`group relative bg-white p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${isHovered
                  ? "border-[#439b83] shadow-2xl"
                  : "border-gray-200 shadow-lg hover:shadow-xl"
                  }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleBenefitClick(metric.label)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gray-50 to-[#439b83]/5`}
                ></div>

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 ${isHovered
                        ? "bg-[#439b83] text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 group-hover:bg-[#439b83]/10 group-hover:text-[#439b83]"
                        }`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {metric.label}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {metric.detail}
                    </p>

                    {/* Statistic */}
                    <div
                      className={`pt-4 border-t transition-colors duration-300 ${isHovered ? "border-[#439b83]/30" : "border-gray-200"
                        }`}
                    >
                      <div
                        className={`text-2xl font-bold transition-colors duration-300 ${isHovered ? "text-[#439b83]" : "text-gray-800"
                          }`}
                      >
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default BenefitsSection;
