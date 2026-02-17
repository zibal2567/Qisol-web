'use client';

import { memo } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionTracking } from '@/hooks/useScrollTracking';
import { trackButtonClick } from '@/lib/analytics';
import { ImageZoom } from '@/components/ui/ImageZoom';

const ProductSection = memo(function ProductSection() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('home');

  const product = t.raw('product') as { title: string; description: string };
  const features = t.raw('features') as { title: string; items: string[] };
  const badges = t.raw('badges') as {
    patent: { label: string; value: string };
    botanical: { label: string; value: string };
  };

  // Track section view
  const sectionRef = useSectionTracking({
    sectionName: 'Product Section',
    pagePath: pathname,
    language: locale
  });

  const handlePatentClick = () => {
    trackButtonClick({
      button_name: 'Patent Badge',
      button_location: 'Product Section',
      page_path: pathname,
      language: locale
    });
  };

  return (
    <section
      ref={sectionRef}
      id="product"
      className="py-20 relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Visual */}
          <motion.div
            className="relative lg:w-full flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[500px] lg:max-w-none">
              <div className="absolute inset-0 bg-[#439b83]/10 rounded-full blur-[60px] -z-10" />

              <ImageZoom
                className="w-full relative z-10"
                zoomImg={{
                  src: "/Image/Product.png",
                  alt: "QiSol Product"
                }}
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full aspect-square"
                >
                  <Image
                    src="/Image/Product.png"
                    alt="QiSol Product"
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(67,155,131,0.2)]"
                    priority
                  />
                </motion.div>
              </ImageZoom>

              {/* IP Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-4 lg:-right-8 z-20 group"
              >
                <div
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-white/40 p-3 rounded-2xl shadow-xl cursor-pointer hover:bg-white transition-all duration-300 "
                  onClick={handlePatentClick}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white shadow-lg transition-transform duration-300">
                    <CheckCircle size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-green-700 uppercase tracking-wider leading-none mb-1">
                      {badges.patent.label}
                    </p>
                    <p className="text-sm font-bold text-gray-800 tabular-nums">
                      {badges.patent.value}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Botanical Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-4 lg:-left-8 z-20 group"
              >
                <div
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-white/40 p-3 rounded-2xl shadow-xl cursor-pointer hover:bg-white transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-lg transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-leaf"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider leading-none mb-1">
                      {badges.botanical.label}
                    </p>
                    <p className="text-sm font-bold text-gray-800">
                      {badges.botanical.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Product Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}   // ขวา
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative text-center lg:text-left">
              <div className="absolute sm:-top-2 -top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                <Image
                  src="/Image/LOGO.png"
                  alt="QiSol-Logo"
                  width={726}
                  height={204}
                  className="w-48 sm:w-56 lg:w-64 h-auto drop-shadow-lg"
                  priority
                />
              </div>

              <div className="pt-18">
                <p
                  className="inline-block px-4 py-2 text-base lg:text-lg font-medium text-white 
                    bg-gradient-to-br from-[#439b83] via-[#367268] to-[#2d5e53] 
                    rounded-lg shadow-md"
                >
                  {product.description}
                </p>
                <div className="flex items-center gap-3 mt-4 max-w-2xl mx-auto lg:mx-0">
                  <h2 className="text-2xl text-black whitespace-nowrap">
                    {features.title}
                  </h2>
                  <div className="flex-1 h-[1px] bg-[#439b83] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Key features */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                {features?.items?.length ? (
                  features.items.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500"
                    >
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0" size={24} />
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {feature}
                      </p>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-500 col-span-2 text-center">
                    ไม่มีข้อมูลสรรพคุณเด่น
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div >
    </section >
  );
});

export default ProductSection;
