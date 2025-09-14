'use client';

interface ResearchSectionProps {
  research: {
    title: string;
    details: string[];
  };
}

export default function ResearchSection({ research }: ResearchSectionProps) {
  return (
    <section id="research" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {research.title}
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Research Visual */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main research illustration */}
              <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-gray-700 font-bold text-xl mb-2">Research Data</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">TRL Level</span>
                        <span className="text-lg font-semibold text-blue-600">3</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Research badges */}
              <div className="absolute -top-6 -right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                🔬 งานวิจัย
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                📝 สิทธิบัตร
              </div>
              <div className="absolute top-1/2 -right-8 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse" style={{animationDelay: '2s'}}>
                ⚗️ Lab
              </div>
            </div>
          </div>

          {/* Research Content */}
          <div className="space-y-8">
            
            {/* Research Details */}
            <div className="space-y-6">
              {research.details.map((detail, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-500 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Research Methodology */}
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-3">🧪</span>
                วิธีการวิจัย
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔬 Electrospinning</h4>
                  <p className="text-gray-200 text-sm">เทคนิคการผลิตเส้นใยนาโนไฟเบอร์</p>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🧬 Polyvinyl alcohol</h4>
                  <p className="text-gray-200 text-sm">วัสดุพื้นฐานที่ปลอดภัยและย่อยสลายได้</p>
                </div>
              </div>
            </div>

            {/* Research Status */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">สถานะการวิจัยปัจจุบัน</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-blue-700">ระยะการพัฒนา</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    TRL 3 - Proof of Concept
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-700">สิทธิบัตร</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ยื่นแล้ว
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
