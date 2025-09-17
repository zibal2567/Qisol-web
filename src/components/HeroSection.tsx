'use client';

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function HeroSection({ hero }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  // Memoize floating particles to prevent re-rendering
  const floatingParticles = useMemo(() => {
    return [...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-3 h-3 bg-white/20 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      />
    ));
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#439b83] via-[#367268] to-[#2d5e53]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16 sm:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Floating medical particles */}
      <div className="absolute inset-0">
        {floatingParticles}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative text-center lg:text-left">
            {/* Logo ซ้อนทับ */}
            <div className="absolute -top-25 sm:-top-70 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-48 h-48 sm:w-128 sm:h-128 opacity-90">
              <Image
                src="/Image/LOGO.png"
                alt="QiSol Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>

            {/* Title */}
            <h2 className="pt-15 text-xl sm:text-3xl lg:text-4xl font-bold text-white">
              {hero.title.split(" – ")[1]}
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>
          </div>

          {/* Medical Product Showcase */}
          <motion.div
            className="relative w-full max-w-sm mx-auto mt-20 sm:mt-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0 }}
          >
            {/* กรอบการ์ด */}
            <div className="bg-emerald-900/40 rounded-2xl p-6 pt-50 sm:-top-32 -top-0 shadow-lg w-128 h-72 sm:-ml-10">
            </div>

            {/* รูปสินค้า */}
            <div className="absolute sm:-top-32 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-128 sm:h-128">
              <Image
                src="/Image/Demo.png"
                alt="QI-SOL Product"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
