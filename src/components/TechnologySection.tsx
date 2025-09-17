'use client';

import { memo, useState } from 'react';
import { Settings, Beaker, Lightbulb, Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface TechnologySectionProps {
  technology: {
    title: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
}

const TechnologySection = memo(function TechnologySection({ technology }: TechnologySectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState('process');

  const techTabs = {
    process: {
      title: 'กระบวนการผลิต',
      icon: Settings,
      content: technology.items
    },
    materials: {
      title: 'วัสดุและสารประกอบ',
      icon: Beaker,
      content: [
        { title: 'Polyvinyl Alcohol (PVA)', desc: 'วัสดุหลักที่ปลอดภัย ไม่เป็นพิษ และย่อยสลายได้ตามธรรมชาติ' },
        { title: 'Chitosan', desc: 'สารธรรมชาติจากเปลือกกุ้ง ช่วยในการรักษาแผลและต้านเชื้อแบคทีเรีย' },
        { title: 'Silver Nanoparticles', desc: 'อนุภาคนาโนเงินที่มีคุณสมบัติต้านเชื้อโรคอย่างมีประสิทธิภาพ' },
        { title: 'Hyaluronic Acid', desc: 'ช่วยในการรักษาความชุ่มชื้นและเร่งการสร้างเนื้อเยื่อใหม่' }
      ]
    },
    innovation: {
      title: 'นวัตกรรมเทคโนโลยี',
      icon: Lightbulb,
      content: [
        { title: 'Electrospinning Technology', desc: 'เทคโนโลยีการปั่นไฟฟ้าเพื่อสร้างเส้นใยนาโนที่มีขนาดเล็กมาก' },
        { title: 'Controlled Release System', desc: 'ระบบการปลดปล่อยยาอย่างควบคุมเพื่อประสิทธิภาพสูงสุด' },
        { title: 'Biodegradable Matrix', desc: 'โครงสร้างที่ย่อยสลายได้เองโดยไม่ต้องผ่าตัดเอาออก' },
        { title: 'Smart Material Integration', desc: 'การผสานวัสดุอัจฉริยะที่ตอบสนองต่อสภาพแวดล้อมของแผล' }
      ]
    }
  };

  return (
    <section id="technology" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#439b83]/20 to-emerald-100 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <Settings className="w-4 h-4 text-[#439b83]" />
            <span className="text-sm font-medium text-gray-700">Core Technologies</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-950 via-[#439b83] to-[#439b83] bg-clip-text text-transparent">
              {technology.title}
            </span>
          </h2>

          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto -mt-5">
            สำรวจเทคโนโลยีชั้นนำที่อยู่เบื้องหลังการพัฒนา QI-SOL Hydrogel Film
          </p>

          {/* Core_Technology Image */}
          <div className="flex justify-center">
            <Image
              src="/Image/Core_Technology.png"
              alt="QI-SOL-Core_Technology"
              width={1200}
              height={675}
              className="object-contain drop-shadow-2xl w-full h-auto max-w-4xl"
            />
          </div>
        </div>

        {/* Technology Tabs */}
        <div className="mb-10 -mt-15">
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            {Object.entries(techTabs).map(([key, tab]) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl font-semibold transition-all duration-300 transform border-2 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer ${isActive
                    ? "bg-gradient-to-r from-[#439b83] to-[#439b83]/50 text-white border-[#439b83] shadow-[#439b83]/30"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#439b83]/50 hover:text-[#439b83]"
                    }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="hidden sm:block">{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Technology Content */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden -mt-5">

          {/* Process Tab */}
          {activeTab === 'process' && (
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-[#439b83]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-[#439b83]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">กระบวนการผลิต Electrospinning</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  เทคโนโลยีการปั่นไฟฟ้าที่ทันสมัยเพื่อสร้างเส้นใยนาโนที่มีคุณสมบัติพิเศษ
                </p>
              </div>

              {/* Interactive Process Steps */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Process Visualization */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#439b83]/10 via-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">ขั้นตอนที่ {activeStep + 1}</h4>
                      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        {activeStep === 0 && <Beaker className="w-10 h-10 text-[#439b83]" />}
                        {activeStep === 1 && <Zap className="w-10 h-10 text-[#439b83]" />}
                        {activeStep === 2 && <Settings className="w-10 h-10 text-[#439b83]" />}
                        {activeStep >= 3 && <CheckCircle className="w-10 h-10 text-[#439b83]" />}
                      </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                      <h5 className="font-bold text-lg text-gray-900 mb-3">
                        {techTabs.process.content[activeStep]?.title}
                      </h5>
                      <p className="text-gray-600 leading-relaxed">
                        {techTabs.process.content[activeStep]?.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Process Steps List */}
                <div className="space-y-4">
                  {techTabs.process.content.map((step, index) => (
                    <div
                      key={index}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${activeStep === index
                        ? "bg-gradient-to-r from-[#439b83]/10 to-purple-50 border-[#439b83] shadow-lg"
                        : "bg-white border-gray-200 hover:border-[#439b83]/50 hover:shadow-md"
                        }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${activeStep === index
                          ? "bg-[#439b83] text-white shadow-lg"
                          : "bg-gray-100 text-gray-600"
                          }`}>
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-2">{step.title}</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Materials Tab */}
          {activeTab === 'materials' && (
            <div className="p-8">
              <div className="text-center ">
                <div className="w-16 h-16 bg-[#439b83]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Beaker className="w-8 h-8 text-[#439b83]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Work process</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  วัสดุคุณภาพสูงที่ผ่านการคัดสรรเพื่อความปลอดภัยและประสิทธิภาพสูงสุด
                </p>
              </div>
              {/* Innovation Image */}
              <div className="flex justify-center my-5">
                <Image
                  src="/Image/Innovation.png"
                  alt="QI-SOL-Innovation"
                  width={1200}
                  height={675}
                  className="object-contain drop-shadow-2xl w-full h-auto max-w-4xl"
                />
              </div>
            </div>
          )}

          {/* Innovation Tab */}
          {activeTab === 'innovation' && (
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-[#439b83]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-[#439b83]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">นวัตกรรมเทคโนโลยี</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  การผสานเทคโนโลยีชั้นนำเพื่อสร้างสรรค์ผลิตภัณฑ์ที่เหนือชั้น
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {techTabs.innovation.content.map((innovation, index) => (
                  <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100 transition-all duration-500">

                    {/* Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#439b83]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#439b83] to-[#439b83]/50 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300">
                          <Lightbulb className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{innovation.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{innovation.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default TechnologySection;
