'use client';

import { memo } from 'react';
import { Mail, Phone, Linkedin, User } from 'lucide-react';
import Image from 'next/image';


const ContactSection = memo(function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-100 via-slate-50 to-emerald-50"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <User className="w-4 h-4 text-[#439b83]" />
            <span className="text-sm font-medium text-gray-700">Our Teams</span>
          </div>
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-green-950 via-[#439b83] to-[#439b83] bg-clip-text text-transparent px-5 pb-10 text-center">
          Our Teams
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {/* Left: Profile */}
          <div className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-slate-200">
            <Image
              src="/Image/PANG.png"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-3xl shadow-xl object-cover"
            />
            <div className="mt-8 text-center">
              <h1 className="text-6xl font-extrabold tracking-tight text-emerald-700">
                PANG
              </h1>
              <h2 className="sm:text-4xl text-3xl font-extrabold tracking-tight text-slate-700">
                NIAFFAN MUHA
              </h2>
              <p className="mt-3 text-xl font-semibold text-slate-500">CEO</p>
            </div>
          </div>

          {/* Right: Skills + Contact */}
          <div className="flex flex-col justify-between space-y-5 h-full">
            {/* Skills */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Personal Skills
              </h3>
              <ul className="space-y-4">
                {['Creative', 'Leader', 'Growth Mindset', 'Teamwork', 'English'].map(
                  (skill, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between text-slate-700 font-medium"
                    >
                      <span>{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <div
                            key={j}
                            className={`w-3 h-3 rounded-full ${j < 4 ? 'bg-emerald-500' : 'bg-gray-300'
                              }`}
                          ></div>
                        ))}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 p-8 rounded-3xl text-white shadow-2xl space-y-4">
              <h3 className="text-2xl font-bold mb-6">Contact</h3>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-emerald-300" />
                <span>0611830764</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-emerald-300" />
                <span>mr.niaffan.muha@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-emerald-300" />
                <span>Niaffan Muha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
