'use client';

import { memo } from 'react';

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
  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {technology.title}
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {technology.items.map((tech, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
              
              {/* Technology Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? '💧' : '🌿'}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {tech.desc}
                </p>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #8b5cf6, #6366f1) border-box',
                border: '2px solid transparent'
              }}></div>
            </div>
          ))}
        </div>

        {/* Technology Process Flow */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-12 rounded-3xl shadow-2xl text-white">
            <h3 className="text-3xl font-bold text-center mb-12">กระบวนการทำงานของ QiSol</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  1️⃣
                </div>
                <h4 className="text-xl font-semibold mb-3">ติดบนแผล</h4>
                <p className="text-purple-100">วางแผ่นฟิล์ม QiSol บนแผลโดยตรง</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <div className="text-4xl animate-pulse">➡️</div>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  2️⃣
                </div>
                <h4 className="text-xl font-semibold mb-3">ละลายตัว</h4>
                <p className="text-purple-100">แผ่นฟิล์มละลายเมื่อสัมผัสน้ำเหลือง</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <div className="text-4xl animate-pulse">➡️</div>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  3️⃣
                </div>
                <h4 className="text-xl font-semibold mb-3">รักษาแผล</h4>
                <p className="text-purple-100">สารสกัดช่วยลดการติดเชื้อและฟื้นฟูเนื้อเยื่อ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TechnologySection;
