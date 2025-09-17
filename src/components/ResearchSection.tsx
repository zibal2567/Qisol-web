'use client';

import { useState } from 'react';

interface ResearchSectionProps {
  research: {
    title: string;
    details: string[];
  };
}

export default function ResearchSection({ research }: ResearchSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const researchTabs = [
    {
      id: 'overview',
      title: 'ภาพรวมการวิจัย',
      icon: '🔬',
      content: {
        title: 'การพัฒนาฟิล์มไฮโดรเจลสำหรับการรักษาแผล',
        description: 'นวัตกรรมการแพทย์ที่ใช้เทคโนโลยี Electrospinning ในการสร้างฟิล์มบาง ที่สามารถช่วยในการรักษาแผลได้อย่างมีประสิทธิภาพ',
        stats: [
          { label: 'ประสิทธิภาพ', value: '95%', color: 'emerald' },
          { label: 'ความปลอดภัย', value: '100%', color: 'blue' },
          { label: 'ความพึงพอใจ', value: '98%', color: 'purple' }
        ]
      }
    },
    {
      id: 'methodology',
      title: 'วิธีการวิจัย',
      icon: '⚗️',
      content: {
        title: 'กระบวนการผลิตและทดสอบ',
        description: 'ใช้เทคนิค Electrospinning ร่วมกับ Polyvinyl alcohol เพื่อสร้างฟิล์มที่มีคุณสมบัติพิเศษ',
        methods: [
          { step: '01', title: 'การเตรียมสารละลาย', desc: 'ผสม PVA กับสารช่วยเพื่อความเหมาะสม' },
          { step: '02', title: 'Electrospinning Process', desc: 'สร้างเส้นใยนาโนผ่านกระบวนการไฟฟ้า' },
          { step: '03', title: 'การทดสอบคุณสมบัติ', desc: 'ทดสอบความแข็งแรงและการย่อยสลาย' },
          { step: '04', title: 'การประเมินผล', desc: 'ทดสอบการใช้งานจริงกับแผลต่างๆ' }
        ]
      }
    },
    {
      id: 'results',
      title: 'ผลการวิจัย',
      icon: '📊',
      content: {
        title: 'ผลลัพธ์และข้อค้นพบ',
        description: 'ผลการทดสอบแสดงให้เห็นถึงประสิทธิภาพที่ดีเยี่ยมในการรักษาแผล',
        achievements: [
          'ลดเวลาการรักษาแผลลง 40%',
          'ไม่ต้องเปลี่ยนผ้าพันแผลบ่อย',
          'ลดความเจ็บปวดระหว่างการรักษา',
          'ป้องกันการติดเชื้อได้ดี'
        ]
      }
    }
  ];

  return (
    <section id="research" className="relative py-20 bg-gradient-to-br from-[#439b83]/20 via-[#367268]/15 to-[#2d5e53]/10 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#439b83]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#367268]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#2d5e53]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#439b83]/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-[#439b83]/20 mb-6">
            <div className="w-3 h-3 bg-[#439b83] rounded-full animate-pulse"></div>
            <span className="text-[#439b83] font-semibold text-sm">งานวิจัยและพัฒนา</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#439b83] via-[#367268] to-[#2d5e53] bg-clip-text text-transparent">
              {research.title}
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            การวิจัยและพัฒนาที่ใช้เทคโนโลยีขั้นสูง เพื่อสร้างนวัตกรรมทางการแพทย์ที่ปลอดภัยและมีประสิทธิภาพ
          </p>
        </div>

        {/* Research Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {researchTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={[
                  "flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform",
                  "border-2 shadow-lg hover:shadow-xl hover:scale-105",
                  activeTab === index
                    ? "bg-gradient-to-r from-[#439b83] to-[#367268] text-white border-[#439b83] shadow-[#439b83]/30"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#439b83]/50 hover:text-[#439b83]"
                ].join(" ")}
              >
                <span className="text-2xl">{tab.icon}</span>
                <span className="hidden sm:block">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-[#439b83]/20 overflow-hidden">
          
          {/* Overview Tab */}
          {activeTab === 0 && (
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Content */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {researchTabs[0].content.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {researchTabs[0].content.description}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    {researchTabs[0].content?.stats?.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
                        <div className={`text-3xl font-bold mb-2 ${
                          stat.color === 'emerald' ? 'text-emerald-600' :
                          stat.color === 'blue' ? 'text-blue-600' :
                          stat.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                        }`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    )) || []}
                  </div>
                  
                  {/* Research Details */}
                  <div className="space-y-4">
                    {research.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#439b83]/5 to-transparent rounded-xl">
                        <div className="flex-shrink-0 w-6 h-6 bg-[#439b83] rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-[#439b83]/20 via-[#367268]/20 to-[#2d5e53]/20 rounded-3xl backdrop-blur-md border border-[#439b83]/30 shadow-2xl flex items-center justify-center relative overflow-hidden">
                      
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23439b83' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                      </div>
                      
                      <div className="text-center z-10">
                        <div className="text-6xl mb-6 animate-pulse">🧪</div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                          <div className="text-[#439b83] font-bold text-xl mb-2">QI-SOL Research</div>
                          <div className="text-gray-600 text-sm mb-4">Hydrogel Film Technology</div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-4/5 bg-gradient-to-r from-[#439b83] to-[#367268] rounded-full animate-pulse"></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">Research Progress: 80%</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating badges */}
                    <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                      สิทธิบัตร
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                      TRL 3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Methodology Tab */}
          {activeTab === 1 && (
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{researchTabs[1].content.title}</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{researchTabs[1].content.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchTabs[1].content?.methods?.map((method, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#439b83] to-[#367268] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {method.step}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{method.desc}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connection Line */}
                    {index < (researchTabs[1].content?.methods?.length || 0) - 1 && (
                      <div className="hidden md:block absolute top-full left-6 w-0.5 h-8 bg-gradient-to-b from-[#439b83] to-transparent"></div>
                    )}
                  </div>
                )) || []}
              </div>
            </div>
          )}

          {/* Results Tab */}
          {activeTab === 2 && (
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{researchTabs[2].content.title}</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{researchTabs[2].content.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchTabs[2].content?.achievements?.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#439b83]/5 via-transparent to-[#367268]/5 rounded-xl border border-[#439b83]/20">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium text-gray-800">{achievement}</p>
                  </div>
                )) || []}
              </div>
              
              {/* Call to Action */}
              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-[#439b83] to-[#367268] p-8 rounded-2xl shadow-xl">
                  <h4 className="text-2xl font-bold text-white mb-4">ผลการวิจัยที่โดดเด่น</h4>
                  <p className="text-white/90 text-lg mb-6">ความสำเร็จจากการวิจัยและพัฒนาที่จะนำไปสู่การผลิตจริง</p>
                  <button className="bg-white text-[#439b83] px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    ดาวน์โหลดรายงานการวิจัย
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
