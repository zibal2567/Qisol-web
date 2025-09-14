'use client';

interface ContactSectionProps {
  cta: {
    text: string;
    button: string;
  };
}

export default function ContactSection({ cta }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            {cta.text}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            เรายินดีที่จะร่วมงานกับองค์กรที่มีวิสัยทัศน์ในการพัฒนาเทคโนโลยีทางการแพทย์เพื่อคนไทย
          </p>
          <button className="bg-white text-blue-700 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            {cta.button}
          </button>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Research Partnership */}
          <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-6">🔬</div>
            <h3 className="text-xl font-bold mb-4">ความร่วมมือด้านวิจัย</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              ร่วมพัฒนาและทดสอบเทคโนโลยี QiSol ในสภาพแวดล้อมทางคลินิก
            </p>
            <div className="text-sm text-blue-200">
              • การทดสอบทางคลินิก<br/>
              • การพัฒนาร่วม<br/>
              • การวิจัยเปรียบเทียบ
            </div>
          </div>

          {/* Business Partnership */}
          <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-6">🤝</div>
            <h3 className="text-xl font-bold mb-4">พาร์ทเนอร์ทางธุรกิจ</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              ร่วมลงทุนและขยายธุรกิจ QiSol ในตลาดไทยและต่างประเทศ
            </p>
            <div className="text-sm text-blue-200">
              • การลงทุน<br/>
              • การจัดจำหน่าย<br/>
              • การขยายตลาด
            </div>
          </div>

          {/* Academic Collaboration */}
          <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-6">🎓</div>
            <h3 className="text-xl font-bold mb-4">ความร่วมมือทางวิชาการ</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              ร่วมกับสถาบันการศึกษาในการพัฒนาและถ่ายทอดเทคโนโลยี
            </p>
            <div className="text-sm text-blue-200">
              • โครงการนักศึกษา<br/>
              • การฝึกอบรม<br/>
              • การถ่ายทอดเทคโนโลยี
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">ติดต่อเรา</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <span className="text-2xl mr-3">📧</span>
                  <span className="text-lg">อีเมล</span>
                </div>
                <p className="text-blue-100">research@qisol.com</p>
                <p className="text-blue-100">partnership@qisol.com</p>
              </div>
              
              <div>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <span className="text-2xl mr-3">📱</span>
                  <span className="text-lg">โทรศัพท์</span>
                </div>
                <p className="text-blue-100">+66 (0) 2-xxx-xxxx</p>
                <p className="text-blue-100">+66 (0) 8x-xxx-xxxx</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white border-opacity-20">
              <p className="text-blue-200">
                เรามุ่งมั่นที่จะตอบกลับภายใน 24 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
