"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield, BarChart3, Settings } from "lucide-react";
import { getCookieConsent, setCookieConsent } from "@/lib/cookies";

interface CookieConsentProps {
      locale: "th-TH" | "en-US" | "ja-JP";
}

const translations = {
      "th-TH": {
            title: "🍪 นโยบายคุกกี้และความเป็นส่วนตัว",
            description: "เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ วิเคราะห์การใช้งานเว็บไซต์ และแสดงเนื้อหาที่เหมาะสม ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)",
            necessary: "คุกกี้ที่จำเป็น",
            necessaryDesc: "จำเป็นสำหรับการทำงานพื้นฐานของเว็บไซต์ เช่น การเข้าสู่ระบบและความปลอดภัย",
            analytics: "คุกกี้เพื่อการวิเคราะห์",
            analyticsDesc: "ช่วยให้เราเข้าใจว่าผู้เยี่ยมชมใช้งานเว็บไซต์อย่างไร เพื่อปรับปรุงการให้บริการ (Google Analytics)",
            marketing: "คุกกี้เพื่อการตลาด",
            marketingDesc: "ใช้เพื่อแสดงโฆษณาที่เกี่ยวข้องกับคุณ และวัดประสิทธิภาพแคมเปญโฆษณา",
            acceptAll: "ยอมรับทั้งหมด",
            acceptNecessary: "จำเป็นเท่านั้น",
            customize: "ตั้งค่า",
            savePreferences: "บันทึกการตั้งค่า",
            privacyPolicy: "นโยบายความเป็นส่วนตัว",
            learnMore: "เรียนรู้เพิ่มเติม",
      },
      "en-US": {
            title: "🍪 Cookie & Privacy Policy",
            description: "We use cookies to improve your experience, analyze website usage, and display relevant content. In accordance with the Personal Data Protection Act (PDPA) of Thailand.",
            necessary: "Necessary Cookies",
            necessaryDesc: "Essential for basic website functions like login and security.",
            analytics: "Analytics Cookies",
            analyticsDesc: "Help us understand how visitors use our website to improve our services (Google Analytics).",
            marketing: "Marketing Cookies",
            marketingDesc: "Used to show you relevant advertisements and measure campaign effectiveness.",
            acceptAll: "Accept All",
            acceptNecessary: "Necessary Only",
            customize: "Customize",
            savePreferences: "Save Preferences",
            privacyPolicy: "Privacy Policy",
            learnMore: "Learn More",
      },
      "ja-JP": {
            title: "🍪 クッキーとプライバシーポリシー",
            description: "お客様の体験を向上させ、ウェブサイトの使用状況を分析し、関連コンテンツを表示するためにクッキーを使用します。タイの個人データ保護法（PDPA）に準拠しています。",
            necessary: "必須Cookie",
            necessaryDesc: "ログインやセキュリティなど、基本的なウェブサイト機能に不可欠です。",
            analytics: "分析Cookie",
            analyticsDesc: "訪問者がウェブサイトをどのように使用しているかを理解し、サービスを改善するのに役立ちます（Google Analytics）。",
            marketing: "マーケティングCookie",
            marketingDesc: "関連する広告を表示し、キャンペーンの効果を測定するために使用されます。",
            acceptAll: "すべて受け入れる",
            acceptNecessary: "必須のみ",
            customize: "カスタマイズ",
            savePreferences: "設定を保存",
            privacyPolicy: "プライバシーポリシー",
            learnMore: "詳細を見る",
      },
};

export default function CookieConsent({ locale }: CookieConsentProps) {
      const [showBanner, setShowBanner] = useState(false);
      const [showSettings, setShowSettings] = useState(false);
      const [showFloatingButton, setShowFloatingButton] = useState(false);
      const [preferences, setPreferences] = useState({
            necessary: true, // Always true, can't be disabled
            analytics: false,
            marketing: false,
      });

      const t = translations[locale];

      const initializeAnalytics = () => {
            // Initialize Google Analytics or other tracking
            if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("consent", "update", {
                        analytics_storage: "granted",
                        ad_storage: preferences.marketing ? "granted" : "denied",
                  });
            }
      };

      useEffect(() => {
            // Check if user has already made a choice from cookie
            const consent = getCookieConsent();
            if (!consent) {
                  // Show banner after 1 second delay
                  setTimeout(() => setShowBanner(true), 1000);
                  setShowFloatingButton(false);
            } else {
                  // Load saved preferences from cookie and show floating button
                  setShowFloatingButton(true);
                  setPreferences(consent);
                  // Initialize analytics if user consented
                  if (consent.analytics) {
                        initializeAnalytics();
                  }
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const saveConsent = (prefs: typeof preferences) => {
            // Save to cookie (single source of truth)
            setCookieConsent(prefs);
            setPreferences(prefs);
            setShowBanner(false);
            setShowSettings(false);
            setShowFloatingButton(true);

            // Initialize analytics if consented
            if (prefs.analytics) {
                  initializeAnalytics();
            }
      };

      const handleAcceptAll = () => {
            saveConsent({
                  necessary: true,
                  analytics: true,
                  marketing: true,
            });
      };

      const handleAcceptNecessary = () => {
            saveConsent({
                  necessary: true,
                  analytics: false,
                  marketing: false,
            });
      };

      const handleSavePreferences = () => {
            saveConsent(preferences);
      };

      return (
            <>
                  {/* Cookie Banner */}
                  <AnimatePresence>
                        {showBanner && !showSettings && (
                              <motion.div
                                    className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 100, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                              >
                                    <div className="mx-auto max-w-6xl bg-white rounded-2xl shadow-2xl border-2 border-[#439b83]/20 overflow-hidden">
                                          <div className="p-6 md:p-8">
                                                <div className="flex items-start gap-4">
                                                      <div className="flex-shrink-0">
                                                            <div className="w-12 h-12 bg-gradient-to-br from-[#439b83] to-[#367268] rounded-xl flex items-center justify-center">
                                                                  <Cookie className="w-6 h-6 text-white" />
                                                            </div>
                                                      </div>

                                                      <div className="flex-1">
                                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                                                  {t.title}
                                                            </h3>
                                                            <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                                                                  {t.description}
                                                            </p>

                                                            {/* Quick Options */}
                                                            <div className="flex flex-wrap gap-3">
                                                                  <button
                                                                        onClick={handleAcceptAll}
                                                                        className="cursor-pointer px-6 py-3 bg-gradient-to-r from-[#439b83] to-[#367268] text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                                                                  >
                                                                        {t.acceptAll}
                                                                  </button>
                                                                  <button
                                                                        onClick={handleAcceptNecessary}
                                                                        className="cursor-pointer px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
                                                                  >
                                                                        {t.acceptNecessary}
                                                                  </button>
                                                                  <button
                                                                        onClick={() => setShowSettings(true)}
                                                                        className="cursor-pointer px-6 py-3 border-2 border-[#439b83] text-[#439b83] rounded-xl font-semibold hover:bg-[#439b83] hover:text-white transition-all duration-200 flex items-center gap-2"
                                                                  >
                                                                        <Settings className="w-4 h-4" />
                                                                        {t.customize}
                                                                  </button>
                                                            </div>

                                                            {/* Privacy Policy Link */}
                                                            <p className="mt-4 text-sm text-gray-500">
                                                                  <a
                                                                        href={`/${locale === "th-TH" ? "th" : locale === "en-US" ? "en" : "ja"}/privacy`}
                                                                        className="text-[#439b83] hover:underline font-medium"
                                                                  >
                                                                        {t.privacyPolicy}
                                                                  </a>
                                                                  {" • "}
                                                                  <span>{t.learnMore}</span>
                                                            </p>
                                                      </div>

                                                      <button
                                                            onClick={() => setShowBanner(false)}
                                                            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                                            aria-label="Close"
                                                      >
                                                            <X className="w-5 h-5 text-gray-400" />
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>

                  {/* Cookie Settings Modal */}
                  <AnimatePresence>
                        {showSettings && (
                              <motion.div
                                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setShowSettings(false)}
                              >
                                    <motion.div
                                          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                                          initial={{ scale: 0.9, y: 20 }}
                                          animate={{ scale: 1, y: 0 }}
                                          exit={{ scale: 0.9, y: 20 }}
                                          onClick={(e) => e.stopPropagation()}
                                    >
                                          <div className="p-6 md:p-8">
                                                {/* Header */}
                                                <div className="flex items-center justify-between mb-6">
                                                      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                                            <Settings className="w-7 h-7 text-[#439b83]" />
                                                            {t.customize}
                                                      </h2>
                                                      <button
                                                            onClick={() => setShowSettings(false)}
                                                            className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                                      >
                                                            <X className="w-5 h-5 text-gray-400" />
                                                      </button>
                                                </div>

                                                {/* Cookie Categories */}
                                                <div className="space-y-6">
                                                      {/* Necessary Cookies */}
                                                      <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                                            <div className="flex items-start justify-between mb-2">
                                                                  <div className="flex items-center gap-3">
                                                                        <Shield className="w-5 h-5 text-[#439b83]" />
                                                                        <h3 className="font-semibold text-gray-900">{t.necessary}</h3>
                                                                  </div>
                                                                  <div className="flex items-center">
                                                                        <span className="text-sm text-gray-500 mr-2">
                                                                              {locale === "th-TH" ? "เปิดอยู่เสมอ" : locale === "en-US" ? "Always On" : "常にオン"}
                                                                        </span>
                                                                        <input
                                                                              type="checkbox"
                                                                              checked={true}
                                                                              disabled
                                                                              className="w-5 h-5 text-[#439b83] rounded cursor-not-allowed opacity-50"
                                                                        />
                                                                  </div>
                                                            </div>
                                                            <p className="text-sm text-gray-600">{t.necessaryDesc}</p>
                                                      </div>

                                                      {/* Analytics Cookies */}
                                                      <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-xl border-2 border-green-200">
                                                            <div className="flex items-start justify-between mb-2">
                                                                  <div className="flex items-center gap-3">
                                                                        <BarChart3 className="w-5 h-5 text-green-600" />
                                                                        <h3 className="font-semibold text-gray-900">{t.analytics}</h3>
                                                                  </div>
                                                                  <label className="relative inline-flex items-center cursor-pointer">
                                                                        <input
                                                                              type="checkbox"
                                                                              checked={preferences.analytics}
                                                                              onChange={(e) =>
                                                                                    setPreferences({ ...preferences, analytics: e.target.checked })
                                                                              }
                                                                              className="sr-only peer"
                                                                        />
                                                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#439b83]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#439b83]"></div>
                                                                  </label>
                                                            </div>
                                                            <p className="text-sm text-gray-600">{t.analyticsDesc}</p>
                                                      </div>

                                                      {/* Marketing Cookies */}
                                                      <div className="p-4 bg-gradient-to-br from-green-100 to-white rounded-xl border-2 border-green-200">
                                                            <div className="flex items-start justify-between mb-2">
                                                                  <div className="flex items-center gap-3">
                                                                        <Cookie className="w-5 h-5 text-green-800" />
                                                                        <h3 className="font-semibold text-gray-900">{t.marketing}</h3>
                                                                  </div>
                                                                  <label className="relative inline-flex items-center cursor-pointer">
                                                                        <input
                                                                              type="checkbox"
                                                                              checked={preferences.marketing}
                                                                              onChange={(e) =>
                                                                                    setPreferences({ ...preferences, marketing: e.target.checked })
                                                                              }
                                                                              className="sr-only peer"
                                                                        />
                                                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#439b83]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#439b83]"></div>
                                                                  </label>
                                                            </div>
                                                            <p className="text-sm text-gray-600">{t.marketingDesc}</p>
                                                      </div>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                                      <button
                                                            onClick={handleSavePreferences}
                                                            className="cursor-pointer flex-1 px-6 py-3 bg-gradient-to-r from-[#439b83] to-[#367268] text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                                                      >
                                                            {t.savePreferences}
                                                      </button>
                                                      <button
                                                            onClick={handleAcceptAll}
                                                            className="cursor-pointer flex-1 px-6 py-3 border-2 border-[#439b83] text-[#439b83] rounded-xl font-semibold hover:bg-[#439b83] hover:text-white transition-all duration-200"
                                                      >
                                                            {t.acceptAll}
                                                      </button>
                                                </div>

                                                {/* PDPA Notice */}
                                                <div className="mt-6 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl">
                                                      <p className="text-xs text-amber-900">
                                                            {locale === "th-TH" && (
                                                                  <>
                                                                        <strong>หมายเหตุ PDPA:</strong> เราเคารพสิทธิของคุณตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
                                                                        คุณสามารถเปลี่ยนการตั้งค่าได้ทุกเมื่อ หรือขอให้ลบข้อมูลของคุณได้
                                                                  </>
                                                            )}
                                                            {locale === "en-US" && (
                                                                  <>
                                                                        <strong>PDPA Notice:</strong> We respect your rights under Thailand&apos;s Personal Data Protection Act 2019.
                                                                        You can change your preferences anytime or request deletion of your data.
                                                                  </>
                                                            )}
                                                            {locale === "ja-JP" && (
                                                                  <>
                                                                        <strong>PDPA通知:</strong> タイ個人データ保護法2019に基づくお客様の権利を尊重します。
                                                                        いつでも設定を変更したり、データの削除を要求したりできます。
                                                                  </>
                                                            )}
                                                      </p>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-500">
                                                      <a
                                                            href={`/${locale === "th-TH" ? "th" : locale === "en-US" ? "en" : "ja"}/privacy`}
                                                            className="text-[#439b83] hover:underline font-medium"
                                                      >
                                                            {t.privacyPolicy}
                                                      </a>
                                                      {" • "}
                                                      <span>{t.learnMore}</span>
                                                </p>
                                          </div>
                                    </motion.div>
                              </motion.div>
                        )}
                  </AnimatePresence>

                  {/* Floating Cookie Settings Button */}
                  <AnimatePresence>
                        {showFloatingButton && !showBanner && !showSettings && (
                              <motion.button
                                    onClick={() => setShowSettings(true)}
                                    className="cursor-pointer fixed bottom-6 left-6 z-[9998] bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-full shadow-lg border-2 border-[#439b83]/20 hover:border-[#439b83] transition-all duration-200 flex items-center gap-2 group"
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -100, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                              >
                                    <div className="w-8 h-8 bg-gradient-to-br from-[#439b83] to-[#367268] rounded-full flex items-center justify-center">
                                          <Cookie className="w-4 h-4 text-white" />
                                    </div>
                              </motion.button>
                        )}
                  </AnimatePresence>
            </>
      );
}

// Add TypeScript declaration for gtag
declare global {
      interface Window {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            gtag?: (command: string, ...args: any[]) => void;
      }
}
