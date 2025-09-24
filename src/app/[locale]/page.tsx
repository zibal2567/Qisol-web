"use client";

import { useEffect, useState, useMemo, useCallback, use } from "react";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { landingConfig } from "@/config/landing.config";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const ProductSection = dynamic(() => import("@/components/ProductSection"), { ssr: false });
const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"), { ssr: false });
const TechnologySection = dynamic(() => import("@/components/TechnologySection"), { ssr: false });
const ResearchSection = dynamic(() => import("@/components/ResearchSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default function Home({ params }: HomeProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Unwrap params using React.use()
  const resolvedParams = use(params);
  
  // Use locale directly from URL (now in full format)
  const currentLocale = resolvedParams.locale as "th-TH" | "en-US" | "ja-JP" || 'th-TH';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Language change handler with URL navigation
  const handleLanguageChange = useCallback((newLang: "th-TH" | "en-US" | "ja-JP") => {
    // Navigate to the new locale URL (using full locale format)
    const currentPath = pathname.split('/').slice(2).join('/'); // Remove /[locale] part
    router.push(`/${newLang}/${currentPath}`);
    
    // Save to localStorage and cookie
    if (typeof window !== "undefined") {
      localStorage.setItem("qisol-language", newLang);
      document.cookie = `qisol-language=${newLang}; path=/; max-age=${365 * 24 * 60 * 60}`;
    }
  }, [router, pathname]);

  const config = useMemo(() => {
    return landingConfig[currentLocale] || landingConfig["th-TH"];
  }, [currentLocale]);

  const handleScroll = useCallback(() => {
    setShowScrollToTop(window.scrollY > 300);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted, handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {!mounted ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar lang={currentLocale} setLang={handleLanguageChange} />
          <main className="relative min-h-screen">
            <HeroSection hero={config.hero} />
            <ProductSection product={config.product} features={config.features} />
            <BenefitsSection benefits={config.benefits} />
            <TechnologySection technology={config.technology} />
            <ResearchSection research={config.research} />
            <ContactSection />

            {/* Scroll-to-Top Button */}
            <AnimatePresence>
              {showScrollToTop && (
                <motion.button
                  className="animate-bounce fixed bottom-8 right-8 bg-[#439b83] text-white p-3 rounded-full shadow-lg hover:bg-[#367268] focus:outline-none focus:ring-2 focus:ring-[#367268] focus:ring-opacity-75 z-50 cursor-pointer"
                  onClick={scrollToTop}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  aria-label="Scroll to top"
                >
                  <ChevronUp size={24} />
                </motion.button>
              )}
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
