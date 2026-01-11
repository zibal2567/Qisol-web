"use client";

import { useEffect, useState, useMemo, useCallback, use } from "react";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { landingConfig } from "@/config/landing.config";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import { trackPageView, trackLanguageChange } from "@/lib/analytics";
import { useScrollDepthTracking, useTimeTracking } from "@/hooks/useScrollTracking";

const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const ProductSection = dynamic(() => import("@/components/ProductSection"), { ssr: false });
const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"), { ssr: false });
const TechnologySection = dynamic(() => import("@/components/TechnologySection"), { ssr: false });
const ResearchSection = dynamic(() => import("@/components/ResearchSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });

interface HomeProps {
  params: Promise<{ locale: string }>;
}

// Locale mapping from URL to config
const localeMap: Record<string, "th-TH" | "en-US" | "ja-JP"> = {
  'th': 'th-TH',
  'en': 'en-US',
  'ja': 'ja-JP'
}

export default function Home({ params }: HomeProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Unwrap params using React.use()
  const resolvedParams = use(params);
  
  // Convert short URL locale to full config locale
  const currentLocale = localeMap[resolvedParams.locale] || 'th-TH';

  useEffect(() => {
    setMounted(true);
    
    // Track page view when component mounts
    if (typeof window !== 'undefined') {
      trackPageView({
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
        language: currentLocale,
      });
    }
  }, [pathname, currentLocale]);

  // Track scroll depth and time on page
  useScrollDepthTracking(pathname, currentLocale);
  useTimeTracking();

  // Language change handler with URL navigation
  const handleLanguageChange = useCallback((newLang: "th-TH" | "en-US" | "ja-JP") => {
    // Track language change
    trackLanguageChange(currentLocale, newLang);
    
    // Convert full locale to short URL format
    const reverseMap: Record<"th-TH" | "en-US" | "ja-JP", string> = {
      'th-TH': 'th',
      'en-US': 'en',
      'ja-JP': 'ja'
    }
    const shortLocale = reverseMap[newLang]
    
    // Navigate to the new locale URL
    const currentPath = pathname.split('/').slice(2).join('/'); // Remove /[locale] part
    router.push(`/${shortLocale}/${currentPath}`);
    
    // Save to localStorage and cookie
    if (typeof window !== "undefined") {
      localStorage.setItem("qisol-language", newLang);
      document.cookie = `qisol-language=${newLang}; path=/; max-age=${365 * 24 * 60 * 60}`;
    }
  }, [router, pathname, currentLocale]);

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

  // Structured Data for SEO (Organization + MedicalBusiness)
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QiSol Health",
    "alternateName": currentLocale === 'th-TH' 
      ? "QiSol - แผ่นฟิล์มไฮโดรเจลรักษาแผล" 
      : currentLocale === 'en-US'
      ? "QiSol - Hydrogel Wound Healing Film"
      : "QiSol - ハイドロゲル創傷治癒フィルム",
    "url": "https://qisolhealth.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://qisolhealth.com/Image/LOGO.png",
      "width": 512,
      "height": 512
    },
    "description": currentLocale === 'th-TH' 
      ? "นวัตกรรมแผ่นฟิล์มไฮโดรเจลรักษาแผลจากสารสกัดปูดเบญกานี ลดการติดเชื้อ ฟื้นฟูแผลเร็วขึ้น" 
      : currentLocale === 'en-US'
      ? "Innovative Hydrogel Wound Healing Film with Quercus Infectoria Extract - Reduces infection, accelerates healing"
      : "ハイドロゲル創傷治癒フィルムの革新的な医療技術 - 感染を減少させ、治癒を促進",
    "sameAs": [
      "https://www.facebook.com/qisolhealth",
      "https://www.linkedin.com/company/qisolhealth",
      "https://twitter.com/qisolhealth"
    ]
  };

  const medicalBusinessData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "QiSol Health",
    "description": currentLocale === 'th-TH' 
      ? "นวัตกรรมแผ่นฟิล์มไฮโดรเจลรักษาแผลจากสารสกัดปูดเบญกานี" 
      : currentLocale === 'en-US'
      ? "Innovative Hydrogel Wound Healing Film with Quercus Infectoria Extract"
      : "ハイドロゲル創傷治癒フィルムの革新的な医療技術",
    "url": "https://qisolhealth.com",
    "logo": "https://qisolhealth.com/Image/LOGO.png",
    "image": "https://qisolhealth.com/Image/LOGO.png",
    "medicalSpecialty": "Wound Care",
    "priceRange": "$$",
    "inLanguage": [currentLocale === 'th-TH' ? 'th' : currentLocale === 'en-US' ? 'en' : 'ja'],
    "availableLanguage": ["th", "en", "ja"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalDevice",
            "name": "QiSol Hydrogel Wound Film",
            "description": currentLocale === 'th-TH'
              ? "แผ่นฟิล์มไฮโดรเจลรักษาแผลสูตรพิเศษ"
              : currentLocale === 'en-US'
              ? "Advanced Hydrogel Wound Healing Film"
              : "高度なハイドロゲル創傷治癒フィルム",
            "category": "Wound Care",
            "medicalSpecialty": "Dermatology"
          }
        }
      ]
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": currentLocale === 'th-TH' 
      ? "QiSol - แผ่นฟิล์มไฮโดรเจลรักษาแผล" 
      : currentLocale === 'en-US'
      ? "QiSol - Hydrogel Wound Healing Film"
      : "QiSol - ハイドロゲル創傷治癒フィルム",
    "url": "https://qisolhealth.com",
    "description": currentLocale === 'th-TH' 
      ? "นวัตกรรมการรักษาแผลด้วยฟิล์มไฮโดรเจลละลายได้" 
      : currentLocale === 'en-US'
      ? "Advanced wound healing innovation with dissolving hydrogel film"
      : "溶解性ハイドロゲルフィルムによる先進的な創傷治癒イノベーション",
    "inLanguage": currentLocale === 'th-TH' ? 'th' : currentLocale === 'en-US' ? 'en' : 'ja',
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://qisolhealth.com?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* Structured Data for SEO - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      
      {/* Structured Data for SEO - Medical Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessData) }}
      />
      
      {/* Structured Data for SEO - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />

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
          
          {/* Cookie Consent Banner */}
          <CookieConsent locale={currentLocale} />
        </>
      )}
    </>
  );
}
