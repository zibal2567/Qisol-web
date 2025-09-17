'use client';

import { memo, useState } from 'react';
import { Mail, Phone, MapPin, Users, Clock, CheckCircle, Send, Facebook, Twitter, Linkedin, Youtube, Microscope, Handshake, GraduationCap } from 'lucide-react';

interface ContactSectionProps {
  cta: {
    text: string;
    button: string;
  };
}

const ContactSection = memo(function ContactSection({ cta }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'research'
  });

  const contactTypes = [
    {
      id: 'research',
      title: 'ความร่วมมือด้านวิจัย',
      icon: Microscope,
      description: 'ร่วมพัฒนาและทดสอบเทคโนโลยี QiSol ในสภาพแวดล้อมทางคลินิก',
      features: ['การทดสอบทางคลินิก', 'การพัฒนาร่วม', 'การวิจัยเปรียบเทียบ'],
      color: 'from-[#439b83] to-blue-600'
    },
    {
      id: 'business',
      title: 'พาร์ทเนอร์ทางธุรกิจ',
      icon: Handshake,
      description: 'ร่วมลงทุนและขยายธุรกิจ QiSol ในตลาดไทยและต่างประเทศ',
      features: ['การลงทุน', 'การจัดจำหน่าย', 'การขยายตลาด'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'academic',
      title: 'ความร่วมมือทางวิชาการ',
      icon: GraduationCap,
      description: 'ร่วมกับสถาบันการศึกษาในการพัฒนาและถ่ายทอดเทคโนโลยี',
      features: ['โครงการนักศึกษา', 'การฝึกอบรม', 'การถ่ายทอดเทคโนโลยี'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-[#439b83]/10">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-[#439b83]/20 to-blue-100 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-100 to-red-100 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <Users className="w-4 h-4 text-[#439b83]" />
            <span className="text-sm font-medium text-gray-700">ติดต่อเรา</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#439b83] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {cta.text}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            เรายินดีที่จะร่วมงานกับองค์กรที่มีวิสัยทัศน์ในการพัฒนาเทคโนโลยีทางการแพทย์เพื่อคนไทย 
            ร่วมสร้างอนาคตของการรักษาพยาบาลไปด้วยกัน
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {contactTypes.map((type) => {
            const IconComponent = type.icon;
            const isSelected = formData.type === type.id;
            
            return (
              <div
                key={type.id}
                className={`group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg border-2 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2 ${
                  isSelected ? "border-[#439b83] shadow-[#439b83]/20" : "border-gray-200 hover:border-[#439b83]/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, type: type.id }))}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${type.color}`}></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${type.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        isSelected ? "text-[#439b83]" : "text-gray-900 group-hover:text-[#439b83]"
                      }`}>
                        {type.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  
                  <div className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#439b83] rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#439b83] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-md p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#439b83]/10 rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-[#439b83]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">ส่งข้อความถึงเรา</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">ประเภทความร่วมมือ</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#439b83] focus:outline-none transition-colors bg-white"
                >
                  {contactTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.title}</option>
                  ))}
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อ-นามสกุล</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#439b83] focus:outline-none transition-colors"
                    placeholder="กรอกชื่อของคุณ"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">อีเมล</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#439b83] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">องค์กร/บริษัท</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#439b83] focus:outline-none transition-colors"
                  placeholder="ชื่อองค์กรของคุณ"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">ข้อความ</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#439b83] focus:outline-none transition-colors resize-none"
                  placeholder="รายละเอียดเพิ่มเติมเกี่ยวกับความสนใจของคุณ..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#439b83] to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-[#367268] hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                {cta.button}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-[#439b83] via-[#367268] to-[#2d5e53] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='m0 40l40-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">ติดต่อโดยตรง</h3>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">อีเมล</h4>
                      <p className="text-white/90 text-sm mb-1">research@qisol.com</p>
                      <p className="text-white/90 text-sm">partnership@qisol.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">โทรศัพท์</h4>
                      <p className="text-white/90 text-sm mb-1">+66 (0) 2-xxx-xxxx</p>
                      <p className="text-white/90 text-sm">+66 (0) 8x-xxx-xxxx</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">ที่อยู่</h4>
                      <p className="text-white/90 text-sm mb-1">ภาควิชาเคมี คณะวิทยาศาสตร์</p>
                      <p className="text-white/90 text-sm">มหาวิทยาลัยเกษตรศาสตร์ กรุงเทพฯ</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-white" />
                    <p className="text-center text-white/90 text-sm">
                      เรามุ่งมั่นที่จะตอบกลับภายใน 24 ชั่วโมง
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#439b83]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-[#439b83]" />
                </div>
                <div className="text-3xl font-bold text-[#439b83] mb-2">50+</div>
                <div className="text-sm text-gray-600">โครงการความร่วมมือ</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">เวลาตอบกลับเฉลี่ย</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 text-center">ติดตามเรา</h4>
              <div className="flex justify-center gap-4">
                <button className="w-12 h-12 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 flex items-center justify-center hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-all duration-300 flex items-center justify-center hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-all duration-300 flex items-center justify-center hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300 flex items-center justify-center hover:scale-110">
                  <Youtube className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
