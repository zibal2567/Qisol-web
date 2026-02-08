"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu, Globe } from "lucide-react"

export default function Navbar() {
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  
  const [scrolled, setScrolled] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const navItems = useMemo(() => {
    const links = t.raw('navbar.links') || []
    return links as Array<{ label: string; href: string }>
  }, [t])

  // Language options
  const languages = [
    { code: "th" as const, name: "ไทย", flag: "🇹🇭" },
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "ja" as const, name: "日本語", flag: "🇯🇵" },
  ]

  const currentLang = languages.find((l) => l.code === locale) || languages[0]
  
  const handleLanguageChange = (newLocale: "th" | "en" | "ja") => {
    // เก็บ scroll position ปัจจุบัน
    const currentScrollY = window.scrollY
    sessionStorage.setItem('scrollPosition', currentScrollY.toString())
    
    router.replace(pathname, { locale: newLocale })
    setIsLangOpen(false)
  }

  // Restore scroll position หลังเปลี่ยนภาษา
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('scrollPosition')
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY, 10))
      sessionStorage.removeItem('scrollPosition')
    }
  }, [locale])

  // Close dropdown on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLangOpen(false)
    }
    if (isLangOpen) {
      window.addEventListener("keydown", handleEsc)
      return () => window.removeEventListener("keydown", handleEsc)
    }
  }, [isLangOpen])

  // Sticky style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-[900]",
        "transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-black/10 h-20"
          : "bg-transparent sm:h-24 h-16",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "text-lg whitespace-nowrap transition-all duration-300 relative px-3 py-2",
                  isActive
                    ? scrolled
                      ? " text-[#439b83] font-bold"
                      : "text-white font-bold"
                    : scrolled
                      ? "text-gray-700 hover:text-[#439b83]"
                      : "text-white/90 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            )
          })}

          {/* Language Selector - Desktop */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={[
                "cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 group border-2",
                scrolled
                  ? "bg-white border-gray-200 hover:border-[#439b83] text-gray-700"
                  : "bg-white/90 backdrop-blur-sm border-white/20 hover:border-[#439b83] text-gray-700",
              ].join(" ")}
            >
              <Globe className="w-4 h-4 text-[#439b83]" />
              <span className="font-medium">{currentLang.flag}</span>
              <span className="hidden lg:inline font-medium">
                {currentLang.name}
              </span>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  isLangOpen ? "rotate-180" : ""
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
            <AnimatePresence>
              {isLangOpen && (
                <>
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border-2 border-gray-100 overflow-hidden z-[1000]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={[
                          "cursor-pointer w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors",
                          locale === language.code
                            ? "bg-[#439b83]/10 text-[#439b83] font-semibold"
                            : "text-gray-700",
                        ].join(" ")}
                      >
                        <span className="text-2xl">{language.flag}</span>
                        <span>{language.name}</span>
                        {locale === language.code && (
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

                  {/* Overlay to close dropdown */}
                  <div
                    className="fixed inset-0 z-[999]"
                    onClick={() => setIsLangOpen(false)}
                  />
                </>
              )}
            </AnimatePresence>
          </div>
        </div>        
        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          {/* Language Selector - Mobile */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-white border-2 border-gray-200 hover:border-[#439b83] rounded-xl transition-all duration-200"
            >
              <Globe className="w-4 h-4 text-[#439b83]" />
              <span className="font-medium text-gray-700">{currentLang.flag}</span>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  isLangOpen ? "rotate-180" : ""
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

            {/* Language Dropdown - Mobile */}
            <AnimatePresence>
              {isLangOpen && (
                <>
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border-2 border-gray-100 overflow-hidden z-[1100]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={[
                          "cursor-pointer w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors",
                          locale === language.code
                            ? "bg-[#439b83]/10 text-[#439b83] font-semibold"
                            : "text-gray-700",
                        ].join(" ")}
                      >
                        <span className="text-2xl">{language.flag}</span>
                        <span>{language.name}</span>
                        {locale === language.code && (
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

                  {/* Overlay to close dropdown */}
                  <div
                    className="fixed inset-0 z-[1099]"
                    onClick={() => setIsLangOpen(false)}
                  />
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button
                className={[
                  "p-2 rounded-md transition-colors",
                  scrolled
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/10",
                ].join(" ")}
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="top-0 h-screen w-72 bg-white p-6 shadow-xl z-[1200]"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>

              <div className="relative">
                <Image
                  src="/Image/LOGO.png"
                  alt="QiSol Logo"
                  width={726}
                  height={204}
                  className="w-32 sm:w-32 lg:w-32 h-auto drop-shadow-md"
                  priority
                />
              </div>

              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsSheetOpen(false)}
                      className={[
                        "px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 block",
                        isActive
                          ? "text-white bg-[#439b83] font-bold shadow-lg border-l-4 border-[#367268]"
                          : "text-gray-700 hover:text-[#439b83] hover:bg-green-50 hover:border-l-4 hover:border-[#439b83]/30",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
