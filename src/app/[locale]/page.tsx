"use client";

import { useEffect, useState, useMemo, useCallback, use } from "react";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { landingConfig } from "@/config/landing.config";
import { ChevronUp } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import { trackPageView, trackLanguageChange } from "@/lib/analytics";
import { useScrollDepthTracking, useTimeTracking } from "@/hooks/useScrollTracking";
import { setLanguageCookie } from "@/lib/cookies";

const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const ProductSection = dynamic(() => import("@/components/ProductSection"), { ssr: false });
const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"), { ssr: false });
const TechnologySection = dynamic(() => import("@/components/TechnologySection"), { ssr: false });
const ResearchSection = dynamic(() => import("@/components/ResearchSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });

interface HomeProps {
  params: Promise<{ locale: string }>;
}

const localeMap: Record<string, "th-TH" | "en-US" | "ja-JP"> = {
  'th': 'th-TH',
  'en': 'en-US',
  'ja': 'ja-JP'
}

export default function Home({ params }: HomeProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - progress);

  const resolvedParams = use(params);

  const currentLocale = localeMap[resolvedParams.locale] || 'th-TH';

  useEffect(() => {
    setMounted(true);

    if (typeof window !== 'undefined') {
      trackPageView({
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
        language: currentLocale,
      });
    }
  }, [pathname, currentLocale]);

  useScrollDepthTracking(pathname, currentLocale);
  useTimeTracking();

  const handleLanguageChange = useCallback((newLang: "th-TH" | "en-US" | "ja-JP") => {
    trackLanguageChange(currentLocale, newLang);

    const reverseMap: Record<"th-TH" | "en-US" | "ja-JP", string> = {
      'th-TH': 'th',
      'en-US': 'en',
      'ja-JP': 'ja'
    }
    const shortLocale = reverseMap[newLang]

    const currentPath = pathname.split('/').slice(2).join('/'); 
    router.push(`/${shortLocale}/${currentPath}`);

    if (typeof window !== "undefined") {
      setLanguageCookie(newLang);
    }
  }, [router, pathname, currentLocale]);

  const config = useMemo(() => {
    return landingConfig[currentLocale] || landingConfig["th-TH"];
  }, [currentLocale]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(p);
      setShow(scrollTop > 200);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            <button
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`cursor-pointer fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 
                    transition-all duration-300 
                    ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
              <span className="relative grid place-items-center w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-[#2d5e53] hover:shadow-xl">
                {/* วงแหวน progress */}
                <svg className="absolute inset-0 -rotate-90" width="56" height="56">
                  <circle cx="28" cy="28" r={radius} stroke="#e2e8f0" strokeWidth="4" fill="none" />
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    stroke="url(#gradientStroke)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashoffset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 120ms linear' }}
                  />
                  {/* bg-gradient-to-br from-[#439b83] via-[#367268] to-[#2d5e53] */}
                  <defs>
                    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#439b83" /> {/* sky-400 */}
                      <stop offset="100%" stopColor="#367268" /> {/* sky-600 */}
                    </linearGradient>
                  </defs>
                </svg>

                <ChevronUp className="w-6 h-6 text-[#2d5e53] relative z-10" />
              </span>
            </button>
          </main>
          <Footer />

          {/* Cookie Consent Banner */}
          <CookieConsent locale={currentLocale} />
        </>
      )}
    </>
  );
}
