"use client";

import { useTranslations } from 'next-intl';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, UserCheck, FileText, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Lock,
  Eye,
  UserCheck,
  FileText
};

interface Section {
  icon: string;
  title: string;
  content: string[];
}

export default function PrivacyPage() {
  const t = useTranslations('privacy');
  const sections: Section[] = t.raw('sections');

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#439b83] to-[#367268] rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              {t('hero.subtitle')}
            </p>
            <p className="text-sm text-gray-500">
              {t('hero.lastUpdated')}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = iconMap[section.icon] || Shield;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#439b83]/10 to-[#367268]/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#439b83]" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-2">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3 ml-16">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-700 leading-relaxed flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-[#439b83] rounded-full mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Footer Notice */}
          <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl">
            <p className="text-gray-700 text-center leading-relaxed">
              {t('footer')}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
