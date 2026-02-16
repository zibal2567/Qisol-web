"use client"

import { useEffect, useState, useMemo } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"

export default function SecondaryNavbar() {
  const [showNav, setShowNav] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const t = useTranslations()

  const sections = useMemo(() => [
    { id: "product", label: t('navbar.secondary.product') },
    { id: "benefits", label: t('navbar.secondary.benefits') },
    { id: "technology", label: t('navbar.secondary.technology') },
    { id: "research", label: t('navbar.secondary.research') },
  ], [t])

  // แสดง navbar เมื่อเลื่อนลงมา
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section')
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        setShowNav(window.scrollY > heroHeight * 0.3) // แสดงเมื่อเลื่อนผ่าน 30% ของ hero
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ตรวจจับ active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section) {
          const offsetTop = section.offsetTop
          const offsetBottom = offsetTop + section.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sections[i].id)
            return
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      const offset = 150 // offset for navbar height
      const pos = el.offsetTop - offset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="hidden md:block fixed top-25 inset-x-0 z-[899] px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="backdrop-blur-sm bg-white/60 border border-white/50 shadow-xl rounded-full p-1.5"
            >
              <div className="flex items-center justify-center gap-1">
                {sections.map((section) => {
                  const isActive = activeSection === section.id
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleScrollTo(section.id)}
                      className={[
                        "px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap text-sm font-medium",
                        isActive
                          ? "bg-[#439b83] text-white shadow-lg"
                          : "text-gray-700 hover:bg-white/40",
                      ].join(" ")}
                    >
                      {section.label}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
