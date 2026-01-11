"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Image from "next/image"

interface PrivacyNavbarProps {
      currentLocale: "th-TH" | "en-US" | "ja-JP";
      onLanguageChange: (locale: "th-TH" | "en-US" | "ja-JP") => void;
}

const translations = {
      "th-TH": {
            home: "กลับหน้าหลัก",
            language: "ภาษา",
            thai: "ไทย",
            english: "English",
            japanese: "日本語",
      },
      "en-US": {
            home: "Back to Home",
            language: "Language",
            thai: "ไทย",
            english: "English",
            japanese: "日本語",
      },
      "ja-JP": {
            home: "ホームに戻る",
            language: "言語",
            thai: "ไทย",
            english: "English",
            japanese: "日本語",
      },
};

export default function PrivacyNavbar({ currentLocale, onLanguageChange }: PrivacyNavbarProps) {
      const [isLangOpen, setIsLangOpen] = useState(false);
      const t = translations[currentLocale];

      const languages = [
            { code: "th-TH" as const, name: t.thai, flag: "🇹🇭", url: "th" },
            { code: "en-US" as const, name: t.english, flag: "🇺🇸", url: "en" },
            { code: "ja-JP" as const, name: t.japanese, flag: "🇯🇵", url: "ja" },
      ];

      const currentLang = languages.find((l) => l.code === currentLocale) || languages[0];

      // Close dropdown on ESC key
      useEffect(() => {
            const handleEsc = (e: KeyboardEvent) => {
                  if (e.key === "Escape") setIsLangOpen(false);
            };
            if (isLangOpen) {
                  window.addEventListener("keydown", handleEsc);
                  return () => window.removeEventListener("keydown", handleEsc);
            }
      }, [isLangOpen]);

      return (
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                              {/* Logo & Title */}
                              {/* Logo */}
                              <Link href="/" className="flex items-center gap-3 group">
                                    <div className="relative">
                                          <Image
                                                src="/Image/LOGO.png"
                                                alt="QiSol Logo"
                                                width={726}
                                                height={204}
                                                className="w-28 sm:w-32 lg:w-32 h-auto drop-shadow-md"
                                                priority
                                          />
                                    </div>
                              </Link>

                              {/* Language Selector */}
                              <div className="relative">
                                    <button
                                          onClick={() => setIsLangOpen(!isLangOpen)}
                                          className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 hover:border-[#439b83] rounded-xl transition-all duration-200 group"
                                    >
                                          <Globe className="w-4 h-4 text-[#439b83]" />
                                          <span className="font-medium text-gray-700">{currentLang.flag}</span>
                                          <span className="hidden sm:inline font-medium text-gray-700">
                                                {currentLang.name}
                                          </span>
                                          <svg
                                                className={`w-4 h-4 text-gray-500 transition-transform ${isLangOpen ? "rotate-180" : ""
                                                      }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M19 9l-7 7-7-7"
                                                />
                                          </svg>
                                    </button>

                                    {/* Language Dropdown */}
                                    {isLangOpen && (
                                          <motion.div
                                                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border-2 border-gray-100 overflow-hidden"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                          >
                                                {languages.map((lang) => (
                                                      <button
                                                            key={lang.code}
                                                            onClick={() => {
                                                                  onLanguageChange(lang.code);
                                                                  setIsLangOpen(false);
                                                            }}
                                                            className={`cursor-pointer w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${currentLocale === lang.code
                                                                        ? "bg-[#439b83]/10 text-[#439b83] font-semibold"
                                                                        : "text-gray-700"
                                                                  }`}
                                                      >
                                                            <span className="text-2xl">{lang.flag}</span>
                                                            <span>{lang.name}</span>
                                                            {currentLocale === lang.code && (
                                                                  <svg
                                                                        className="w-5 h-5 ml-auto text-[#439b83]"
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                  >
                                                                        <path
                                                                              fillRule="evenodd"
                                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                              clipRule="evenodd"
                                                                        />
                                                                  </svg>
                                                            )}
                                                      </button>
                                                ))}
                                          </motion.div>
                                    )}
                              </div>
                        </div>
                  </div>

                  {/* Overlay to close dropdown */}
                  {isLangOpen && (
                        <div
                              className="fixed inset-0 z-40"
                              onClick={() => setIsLangOpen(false)}
                        />
                  )}
            </nav>
      );
}
