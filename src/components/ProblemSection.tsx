'use client';

import { useState } from 'react';
import { AlertTriangle, CheckCircle, TrendingDown, TrendingUp, Clock, DollarSign, Heart, Shield, Zap, Star } from 'lucide-react';

interface ProblemSectionProps {
  problem: {
    title: string;
    points: string[];
    solutionTitle: string;
    solution: string;
  };
}

export default function ProblemSection({ problem }: ProblemSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const problemData = [
    { icon: AlertTriangle, color: 'text-red-500', bgColor: 'bg-red-50', borderColor: 'border-red-200' },
    { icon: Clock, color: 'text-orange-500', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
    { icon: DollarSign, color: 'text-yellow-500', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' },
    { icon: TrendingDown, color: 'text-purple-500', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' }
  ];

  const solutionFeatures = [
    { icon: Shield, title: 'ป้องกันการติดเชื้อ', desc: 'สร้างสภาพแวดล้อมที่ปลอดภัย', color: 'text-blue-600' },
    { icon: Zap, title: 'รักษาเร็วขึ้น', desc: 'ลดเวลาในการหายของแผล', color: 'text-green-600' },
    { icon: Heart, title: 'ปลอดภัย 100%', desc: 'ไม่มีผลข้างเคียง', color: 'text-pink-600' },
    { icon: Star, title: 'ใช้งานง่าย', desc: 'ไม่ต้องเปลี่ยนบ่อย', color: 'text-indigo-600' }
  ];

  return (
    <section id="problem" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-100 to-orange-100 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full filter blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-gray-700">Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-red-700 to-orange-600 bg-clip-text text-transparent">
              {problem.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            การวิเคราะห์ปัญหาที่แท้จริงและการนำเสนอโซลูชันที่มีประสิทธิภาพสูง
          </p>
        </div>
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Problems Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">ปัญหาหลัก</h3>
                  <p className="text-sm text-gray-500">ที่ต้องแก้ไขอย่างเร่งด่วน</p>
                </div>
              </div>
              <div className="space-y-4">
                {problem.points.map((point, index) => {
                  const ProblemIcon = problemData[index]?.icon || AlertTriangle;
                  const isActive = activeIndex === index;
                  return (
                    <div 
                      key={index}
                      className={`group p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? `${problemData[index]?.bgColor} ${problemData[index]?.borderColor} shadow-md scale-[1.02]`
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                      }`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive ? 'bg-white shadow-sm' : 'bg-white/70'
                        }`}>
                          <ProblemIcon className={`w-5 h-5 ${isActive ? problemData[index]?.color : 'text-gray-600'}`} />
                        </div>
                        <p className={`text-sm leading-relaxed font-medium transition-colors duration-300 ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {point}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Statistics */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
                <TrendingDown className="w-5 h-5" />
                ผลกระทบที่เกิดขึ้น
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">70%</div>
                  <div className="text-red-100 text-xs leading-tight">แผลไม่หายตามเวลา</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">3x</div>
                  <div className="text-red-100 text-xs leading-tight">ค่าใช้จ่ายเพิ่มขึ้น</div>
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="lg:col-span-2 flex lg:flex-col items-center justify-center">
            <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="w-12 h-12 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center shadow-sm">
              <TrendingUp className="w-5 h-5 text-[#439b83]" />
            </div>
            <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          </div>
          {/* Solutions Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Solution */}
            <div className="bg-gradient-to-br from-[#439b83] to-[#2d5e53] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{problem.solutionTitle}</h3>
                    <p className="text-white/80 text-sm">โซลูชันที่มีประสิทธิภาพ</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  {problem.solution}
                </p>
                <button className="inline-flex items-center gap-2 bg-white text-[#439b83] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Star className="w-4 h-4" />
                  เรียนรู้เพิ่มเติม
                </button>
              </div>
            </div>
            {/* Solution Features */}
            <div className="grid grid-cols-2 gap-4">
              {solutionFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                        <FeatureIcon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <h5 className="font-bold text-gray-900 text-sm mb-2">{feature.title}</h5>
                      <p className="text-gray-600 text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Comparison */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h4 className="text-lg font-bold text-center mb-6 text-gray-900 flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#439b83]" />
                เปรียบเทียบผลลัพธ์
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="w-8 h-8 mx-auto mb-3 bg-red-100 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  </div>
                  <h5 className="font-semibold text-red-700 text-sm mb-3">วิธีเดิม</h5>
                  <div className="space-y-2 text-xs text-red-600">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>หายช้า 4-8 สัปดาห์</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>เปลี่ยนผ้าพันแผลบ่อย</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>เสี่ยงติดเชื้อสูง</span>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-8 h-8 mx-auto mb-3 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <h5 className="font-semibold text-green-700 text-sm mb-3">QI-SOL</h5>
                  <div className="space-y-2 text-xs text-green-600">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span>หายเร็ว 1-2 สัปดาห์</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span>ไม่ต้องเปลี่ยนบ่อย</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span>ปลอดภัย 100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
