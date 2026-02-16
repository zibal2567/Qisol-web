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
              <div className="absolute inset-0 bg-[#439b83]/10 rounded-full blur-[60px] -z-10 scale-125" />

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
                    className="object-contain drop-shadow-[0_8px_18px_rgba(67,155,131,0.12)]"
                    priority
                  />
                </motion.div>
              </ImageZoom>

              {/* IP Badge */}
              <div
                className="absolute -top-10 -right-4 bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md cursor-pointer hover:bg-green-600 transition-all hover:scale-105 z-20 whitespace-nowrap"
                onClick={handlePatentClick}
              >
                IP Number: 2503000774
              </div>

              {/* Botanical Badge */}
              <div
                className="absolute -bottom-4 -left-4 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md cursor-pointer hover:bg-green-700 transition-all hover:scale-105 z-20 whitespace-nowrap"
                onClick={handlePatentClick}
              >
                Quercus infectoria
              </div>
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
