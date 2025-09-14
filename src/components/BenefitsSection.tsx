'use client';

import { memo, useMemo } from 'react';

interface BenefitsSectionProps {
  benefits: {
    title: string;
    items: string[];
  };
}

const BenefitsSection = memo(function BenefitsSection({ benefits }: BenefitsSectionProps) {
  const benefitIcons = useMemo(() => ['🛡️', '🔬', '👍', '💚'], []);
  
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {benefits.title}
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.items.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-200"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {benefitIcons[index]}
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {benefit}
                </h3>
                
                {/* Decorative element */}
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-2xl shadow-xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              พร้อมที่จะเปลี่ยนแปลงการรักษาแผลแล้วหรือยัง?
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              QiSol นำเสนอโซลูชันที่ปลอดภัย มีประสิทธิภาพ และเข้าถึงได้สำหรับทุกคน
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              ติดต่อเรา
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default BenefitsSection;
