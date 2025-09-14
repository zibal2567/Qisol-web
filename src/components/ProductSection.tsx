'use client';

import { memo } from 'react';
import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import { landingConfig } from "@/config/landing.config";

interface ProductSectionProps {
      product: {
            title: string;
            description: string;
      };
      features: {
            title: string;
            items: string[];
      };
}

const ProductSection = memo(function ProductSection({ product, features }: ProductSectionProps) {
      return (
            <section id="product" className="py-20 relative min-h-screen flex items-center overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Product Visual */}
                                    <div className="flex justify-center lg:justify-center">
                                          <div className="relative">
                                                {/* Main product representation */}
                                                <div className="w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-[#439b83] via-[#367268] to-[#2d5e53] rounded-3xl flex items-center justify-center shadow-2xl">
                                                      <div className="absolute align-center w-64 h-64 sm:w-96 sm:h-96">
                                                            <Image
                                                                  src="/Image/Product.png"
                                                                  alt="QiSol-Logo"
                                                                  fill
                                                                  className="object-contain drop-shadow-lg"
                                                                  priority
                                                            />
                                                      </div>
                                                </div>
                                                {/* Feature highlights around the main visual */}
                                                <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                                      หมายเลขคำขอ 2503000774
                                                </div>
                                                <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                                      สารสกัดปูดเบญกานี
                                                </div>
                                                <div className="absolute top-1/2 -right-8 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-12">
                                                      ใช้ง่าย
                                                </div>
                                          </div>
                                    </div>

                                    {/* Product Content */}
                                    <div className="space-y-6">
                                          <div className="relative text-center lg:text-left">
                                                {/* Logo แบบลอย แต่ยังอยู่ติด Title */}
                                                <div className="absolute sm:-top-15 -top-15 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-48 h-48 sm:w-48 sm:h-48">
                                                      <Image
                                                            src="/Image/LOGO.png"
                                                            alt="QiSol-Logo"
                                                            fill
                                                            className="object-contain drop-shadow-lg"
                                                            priority
                                                      />
                                                </div>

                                                {/* Title + Description (เว้น padding เผื่อโลโก้) */}
                                                <div className="pt-18">
                                                      <p
                                                            className="inline-block px-4 py-2 text-base lg:text-lg font-medium text-white 
             bg-gradient-to-br from-[#439b83] via-[#367268] to-[#2d5e53] 
             rounded-lg shadow-md"
                                                      >
                                                            {product.description}
                                                      </p>
                                                      {/* Features Section */}
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
                                                                  <div
                                                                        key={index}
                                                                        className="flex items-start space-x-4 bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500"
                                                                  >
                                                                        <CheckCircle className="text-green-600 flex-shrink-0 mt-0" size={24} />
                                                                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{feature}</p>
                                                                  </div>
                                                            ))
                                                      ) : (
                                                            <p className="text-gray-500 col-span-2 text-center">
                                                                  ไม่มีข้อมูลสรรพคุณเด่น
                                                            </p>
                                                      )}

                                                </div>
                                          </div>
                                          <div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  );
});

                  export default ProductSection;
