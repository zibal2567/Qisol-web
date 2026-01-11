'use client';

import { memo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Settings, Beaker, Zap, CheckCircle, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { useSectionTracking } from '@/hooks/useScrollTracking';
import { trackButtonClick } from '@/lib/analytics';
import { ImageZoom } from '@/components/ui/ImageZoom';

interface TechnologySectionProps {
  technology: {
    title: string;
    desc: string;
    items: Array<{ title: string; desc: string }>;
    process: {
      title: string;
      icon: string;
      content: Array<{ title: string; desc: string }>;
    };
    materials: {
      title: string;
      icon: string;
      content: Array<{ title: string; desc: string }>;
    };
  };
}

const iconMap: Record<string, LucideIcon> = { Settings, Beaker, Zap, CheckCircle };

const TechnologySection = memo(function TechnologySection({ technology }: TechnologySectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState<'process' | 'materials'>('process');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'th';

  // Track section view
  const sectionRef = useSectionTracking({
    sectionName: 'Technology Section',
    pagePath: pathname,
    language: locale
  });

  const techTabs = {
    process: {
      title: technology.process.title,
      icon: iconMap[technology.process.icon],
      content: technology.process.content,
    },
    materials: {
      title: technology.materials.title,
      icon: iconMap[technology.materials.icon],
      content: technology.materials.content,
    },
  };

  const handleTabClick = (tab: 'process' | 'materials') => {
    setActiveTab(tab);
    trackButtonClick({
      button_name: `Technology Tab - ${tab}`,
      button_location: 'Technology Section',
      page_path: pathname,
      language: locale
    });
  };

  const handleStepClick = (step: number) => {
    setActiveStep(step);
    trackButtonClick({
      button_name: `Technology Step - ${step + 1}`,
      button_location: 'Technology Section',
      page_path: pathname,
      language: locale
    });
  };

  return (
    <section ref={sectionRef} id="technology" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
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
            {technology.desc}
          </p>
          <div className="flex justify-center">
            <ImageZoom>
              <Image src="/Image/Core_Technology.png" alt="Core_Technology" width={1200} height={675} className="object-contain drop-shadow-2xl w-full h-auto max-w-4xl" />
            </ImageZoom>
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
                  onClick={() => handleTabClick(key as 'process' | 'materials')}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl font-semibold transition-all duration-300 transform border-2 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer ${isActive ? 'bg-gradient-to-r from-[#439b83] to-[#439b83]/50 text-white border-[#439b83] shadow-[#439b83]/30' : 'bg-white text-gray-700 border-gray-200 hover:border-[#439b83]/50 hover:text-[#439b83]'
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
          {activeTab === 'process' && (
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-[#439b83]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-[#439b83]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{technology.process.title}</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#439b83]/10 via-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Step {activeStep + 1}</h4>
                      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <CheckCircle className="w-10 h-10 text-[#439b83]" />
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                      <h5 className="font-bold text-lg text-gray-900 mb-3">{technology.process.content[activeStep]?.title}</h5>
                      <p className="text-gray-600 leading-relaxed">{technology.process.content[activeStep]?.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {technology.process.content.map((step, index) => (
                    <div
                      key={index}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${activeStep === index ? 'bg-gradient-to-r from-[#439b83]/10 to-purple-50 border-[#439b83] shadow-lg' : 'bg-white border-gray-200 hover:border-[#439b83]/50 hover:shadow-md'
                        }`}
                      onClick={() => handleStepClick(index)}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${activeStep === index ? 'bg-[#439b83] text-white shadow-lg' : 'bg-gray-100 text-gray-600'
                            }`}
                        >
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

          {activeTab === 'materials' && (
            <div className="p-8">
              <div className="text-center ">
                <div className="w-16 h-16 bg-[#439b83]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Beaker className="w-8 h-8 text-[#439b83]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{technology.materials.title}</h3>
              </div>
              <div className="flex justify-center my-5"> 
                <ImageZoom>
                  <Image src="/Image/Innovation.png" alt="QI-SOL-Innovation" width={1200} height={675} className="object-contain drop-shadow-2xl w-full h-auto max-w-4xl" />
                </ImageZoom>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default TechnologySection;
