"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { landingConfig } from "@/config/landing.config";

const ProductSection = dynamic(() => import('@/components/ProductSection'));
const ProblemSection = dynamic(() => import('@/components/ProblemSection'));
const BenefitsSection = dynamic(() => import('@/components/BenefitsSection'));
const TechnologySection = dynamic(() => import('@/components/TechnologySection'));
const ResearchSection = dynamic(() => import('@/components/ResearchSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));

export default function Home() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("qisol-language");
    if (savedLang && (savedLang === "th" || savedLang === "en")) {
      setLang(savedLang);
    }
  }, []);

  const handleLanguageChange = useCallback((newLang: "th" | "en") => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem("qisol-language", newLang);
    }
  }, []);

  const config = useMemo(() => {
    return landingConfig[lang] || landingConfig.th;
  }, [lang]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#439b83] via-[#367268] to-[#2d5e53] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar lang={lang} setLang={handleLanguageChange} />
      <main className="relative min-h-screen">
        <HeroSection hero={config.hero} />
        <ProductSection
          product={config.product}
          features={config.features}
        />
        <BenefitsSection benefits={config.benefits} />
        <TechnologySection technology={config.technology} />
        <ProblemSection problem={config.problem} />
        <ResearchSection research={config.research} />
        <ContactSection cta={config.cta} />
      </main>
      <Footer />
    </>
  );
}
