'use client';

interface ProblemSectionProps {
  problem: {
    title: string;
    points: string[];
    solutionTitle: string;
    solution: string;
  };
}

export default function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section id="problem" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {problem.title}
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Problem Visual */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main problem illustration */}
              <div className="w-80 h-80 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚠️</div>
                  <div className="text-red-700 font-bold text-xl mb-2">Chronic Wounds</div>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-red-600 text-sm font-semibold">4-8 สัปดาห์+</div>
                    <div className="text-gray-600 text-xs">ยังไม่หาย</div>
                  </div>
                </div>
              </div>
              
              {/* Problem indicators */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                🦠
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-3 rounded-full shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                💊
              </div>
              <div className="absolute top-1/2 -right-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg animate-pulse" style={{animationDelay: '2s'}}>
                ⏰
              </div>
            </div>
          </div>

          {/* Problem Content */}
          <div className="space-y-8">
            
            {/* Problem Points */}
            <div className="space-y-4">
              {problem.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            {/* Solution Section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                {problem.solutionTitle}
              </h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                {problem.solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
