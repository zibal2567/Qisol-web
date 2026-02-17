'use client';

import { Facebook, Instagram, Linkedin, Phone, Mail, } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { contectConfig } from "@/config/contect"
import { useTranslations } from 'next-intl';


// Custom SVG for Line and TikTok
const LineIcon = ({ className }: { className?: string }) => (
      <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="currentColor"
      >
            <title>LINE</title>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
);

export default function Footer() {
      const t = useTranslations('footer');
      const navT = useTranslations('navbar');

      const mainMenu = navT.raw('links') as { label: string; href: string }[];

      return (
            <footer className="bg-[#439b83] text-white pt-16 pb-8">
                  <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                              {/* Column 1: Logo */}
                              <div className="flex flex-col items-center md:items-start">
                                    <div className="relative flex items-center justify-center mb-6 overflow-hidden">
                                          <Image
                                                src="/Image/LOGO.png"
                                                alt="QiSol Logo"
                                                width={200}
                                                height={200}
                                                className="object-contain"
                                                priority
                                          />
                                    </div>
                                    <p className="text-emerald-50 text-center md:text-left text-sm max-w-xs leading-relaxed">
                                          {t('subtitle')}
                                    </p>
                              </div>

                              {/* Column 2: Main Menu */}
                              <div className="flex flex-col items-center md:items-start">
                                    <h4 className="font-bold text-xl mb-6 text-white uppercase tracking-wider">{t('menuTitle')}</h4>
                                    <ul className="space-y-3">
                                          {mainMenu.map((item) => (
                                                <li key={item.label}>
                                                      <Link
                                                            href={item.href}
                                                            className="text-white/80 hover:text-white transition-colors duration-200 flex items-center justify-center md:justify-start group"
                                                      >
                                                            <span className="hidden md:block w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all"></span>
                                                            {item.label}
                                                      </Link>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              {/* Column 3: Contact Info */}
                              <div className="flex flex-col items-center md:items-start">
                                    <h4 className="font-bold text-xl mb-6 text-white uppercase tracking-wider">{t('contactTitle')}</h4>
                                    <div className="space-y-4 text-white/90">
                                          <div className="flex items-center justify-center md:justify-start gap-4">
                                                <Phone className="w-5 h-5 flex-shrink-0 text-white" />
                                                <a href={`tel:${contectConfig.tel}`} className="hover:text-white transition-colors">
                                                      Call Center : {contectConfig.tel}
                                                </a>
                                          </div>

                                          <div className="flex items-center justify-center md:justify-start gap-4">
                                                <Mail className="w-5 h-5 flex-shrink-0 text-white" />
                                                <a href={`mailto:${contectConfig.email}`} className="hover:text-white transition-colors">
                                                      Email : {contectConfig.email}
                                                </a>
                                          </div>

                                          <div className="flex items-center justify-center md:justify-start gap-4">
                                                <Facebook className="w-5 h-5 flex-shrink-0 text-white" />
                                                <a href="https://facebook.com/affan.muha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                                      Facebook : {contectConfig.facebook}
                                                </a>
                                          </div>

                                          <div className="flex items-center justify-center md:justify-start gap-4">
                                                <LineIcon className="w-5 h-5 flex-shrink-0 text-white" />
                                                <a href={`https://line.me/ti/p/${contectConfig.line}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                                      Line : @{contectConfig.line}
                                                </a>
                                          </div>

                                          {/* Social Icons Row */}
                                          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                                                <a href="https://facebook.com/affan.muha" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all">
                                                      <Facebook className="w-5 h-5" />
                                                </a>
                                                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all">
                                                      <Instagram className="w-5 h-5" />
                                                </a>
                                                <a href={`https://line.me/ti/p/${contectConfig.line}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all">
                                                      <LineIcon className="w-5 h-5" />
                                                </a>
                                                <a href="https://www.linkedin.com/qisolhealth" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all">
                                                      <Linkedin className="w-5 h-5" />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
                              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                                    <p>{t('copyright')}</p>
                                    <p>(
                                          {t('madeBy')}{" "}
                                          <a
                                                href="https://dl-lutfee.vercel.app/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-gray-200 transition-colors font-medium"
                                          >
                                                Lutfee
                                          </a>
                                          )
                                    </p>
                              </div>
                              <div className="flex gap-8">
                                    <Link href="/privacy" className="hover:text-white transition-colors">{t('privacy')}</Link>
                              </div>

                        </div>
                  </div>
            </footer>
      );
}
