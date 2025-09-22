'use client';

import Image from 'next/image';
import { Search } from 'lucide-react';

interface ResearchSectionProps {
  research: {
    title: string;
    details: string[];
  };
}

export default function ResearchSection({ research }: ResearchSectionProps) {
  const overview = {
    title: 'การพัฒนาฟิล์มไฮโดรเจลสำหรับการรักษาแผล',
    description:
      'นวัตกรรมการแพทย์ที่ใช้เทคโนโลยี Electrospinning ในการสร้างฟิล์มบาง ที่สามารถช่วยในการรักษาแผลได้อย่างมีประสิทธิภาพ',
    stats: [
      { label: 'ประสิทธิภาพ', value: '95%', color: 'emerald' },
      { label: 'ความปลอดภัย', value: '100%', color: 'blue' },
      { label: 'ความพึงพอใจ', value: '98%', color: 'purple' },
    ],
  };

  const methodology = {
    title: 'กระบวนการผลิตและทดสอบ',
    description:
      'ใช้เทคนิค Electrospinning ร่วมกับ Polyvinyl alcohol เพื่อสร้างฟิล์มที่มีคุณสมบัติพิเศษ',
    methods: [
      { step: '01', title: 'การเตรียมสารละลาย', desc: 'ผสม PVA กับสารช่วยเพื่อความเหมาะสม' },
      { step: '02', title: 'Electrospinning Process', desc: 'สร้างเส้นใยนาโนผ่านกระบวนการไฟฟ้า' },
      { step: '03', title: 'การทดสอบคุณสมบัติ', desc: 'ทดสอบความแข็งแรงและการย่อยสลาย' },
      { step: '04', title: 'การประเมินผล', desc: 'ทดสอบการใช้งานจริงกับแผลต่างๆ' },
    ],
  };

  return (
    <section
      id="research"
      className="relative py-24 bg-gradient-to-br from-[#439b83]/15 via-[#367268]/10 to-[#2d5e53]/10 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <Search className="w-4 h-4 text-[#439b83]" />
            <span className="text-sm font-semibold text-gray-700">Research</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-snug">
            <span className="bg-gradient-to-r from-[#439b83] via-[#367268] to-[#2d5e53] bg-clip-text text-transparent">
              {research.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            การวิจัยและพัฒนาที่ใช้เทคโนโลยีขั้นสูง เพื่อสร้างนวัตกรรมทางการแพทย์ที่ปลอดภัยและมีประสิทธิภาพ
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5">
          {/* Overview */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#439b83]/20 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {overview.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {overview.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {overview.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
                    >
                      <div
                        className={`text-2xl sm:text-3xl font-extrabold mb-1 ${
                          stat.color === 'emerald'
                            ? 'text-emerald-600'
                            : stat.color === 'blue'
                            ? 'text-blue-600'
                            : 'text-purple-600'
                        }`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Research Details */}
                <div className="space-y-4">
                  {research.details.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#439b83]/5 to-transparent hover:from-[#439b83]/10 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-[#439b83] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  <Image
                    src="/Image/Research.png"
                    alt="Research Visual"
                    width={420}
                    height={420}
                    className="rounded-2xl shadow-lg object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#439b83]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="transition-all duration-500 p-8 lg:p-12">
            <div className="text-center mb-5">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{methodology.title}</h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {methodology.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {methodology.methods.map((method, i) => (
                <div key={i} className="relative">
                  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#439b83] to-[#367268] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {method.step}
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{method.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
