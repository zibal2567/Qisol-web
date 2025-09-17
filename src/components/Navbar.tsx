"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { landingConfig } from "@/config/landing.config"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface NavbarProps {
  lang?: "th" | "en"
  setLang?: (lang: "th" | "en") => void
}

export default function Navbar({ lang = "en", setLang }: NavbarProps) {
  const safeSetLang = typeof setLang === "function" ? setLang : () => { }
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const safeLang = landingConfig[lang] ? lang : "en"
  const config = landingConfig[safeLang]

  const navItems = useMemo(() => config?.navbar?.links || [], [config?.navbar?.links])

  // Sticky style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scrollspy
  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace("#", ""))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.2, rootMargin: "-10% 0px -10% 0px" }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [navItems])

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (!href.startsWith("#")) return
    e?.preventDefault()
    const el = document.getElementById(href.substring(1))
    if (el) {
      const offset = 80
      const pos = el.offsetTop - offset
      window.scrollTo({ top: pos, behavior: "smooth" })
      el.setAttribute("tabindex", "-1")
        ; (el as HTMLElement).focus({ preventScroll: true })
    }
    setIsSheetOpen(false) // ปิด Drawer หลังคลิก
  }

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
            const id = item.href.replace("#", "")
            const isActive = activeSection === id
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={[
                  "text-lg whitespace-nowrap transition-colors relative",
                  isActive
                    ? scrolled
                      ? "text-[#439b83] font-semibold"
                      : "text-white font-semibold"
                    : scrolled
                      ? "text-gray-700 hover:text-[#439b83]"
                      : "text-white/90 hover:text-white",
                ].join(" ")}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#439b83] rounded" />
                )}
              </Link>
            )
          })}

          {/* Lang */}
          <select
            value={lang}
            onChange={(e) => safeSetLang(e.target.value as "th" | "en")}
            className={[
              "px-4 py-2 rounded-lg border text-sm font-semibold transition-all cursor-pointer shadow-sm",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#439b83]",
              "border-[#439b83] text-[#439b83] bg-white",
            ].join(" ")}
          >
            <option value="th">TH</option>
            <option value="en">EN</option>
          </select>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          {/* Lang */}
          <select
            value={lang}
            onChange={(e) => safeSetLang(e.target.value as "th" | "en")}
            className={[
              "px-4 py-2 rounded-lg border text-sm font-semibold transition-all cursor-pointer shadow-sm",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#439b83]",
              "border-[#439b83] text-[#439b83] bg-white",
            ].join(" ")}
          >
            <option value="th">TH</option>
            <option value="en">EN</option>
          </select>

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

            {/* Drawer: on top of everything */}
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
                  const id = item.href.replace("#", "")
                  const isActive = activeSection === id
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className={[
                        "px-2 py-1 rounded-md text-lg font-medium transition-colors",
                        isActive
                          ? "text-[#439b83] bg-green-50 border-r-4 border-[#439b83] font-semibold"
                          : "text-gray-700 hover:text-[#439b83] hover:bg-green-50",
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
