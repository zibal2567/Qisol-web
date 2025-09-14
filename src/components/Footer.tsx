import { Phone } from "lucide-react"
import Image from "next/image"
import { contectConfig } from "@/config/contect"

export default function Footer() {
      return (
            <footer className="bg-gradient-to-br from-[#439b83] via-[#367268] to-[#2d5e53] text-white text-sm">
                  {/* Main Footer */}
                  <div className="container mx-auto px-4 py-12 flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
                              {/* Left: Logo + Info */}
                              <div className="sm:ml-15 m:0 space-y-4 text-center md:text-left">
                                    <div className="relative w-48 h-16 mx-auto md:mx-0">
                                          <Image
                                                src="/Image/LOGO.png"
                                                alt="QiSol Logo"
                                                fill
                                                className="object-contain"
                                                priority
                                          />
                                    </div>
                                    <div className="space-y-2 text-center md:text-left">
                                          <p className="text-gray-200 -mt-2">
                                                ชื่อบริษัท
                                          </p>
                                          <div className="flex items-center justify-center md:justify-start gap-2 sm:text-2xl text-lg font-semibold">
                                                <Phone className="w-5 h-5 text-white" />
                                                <span>${contectConfig.tel}</span>
                                          </div>
                                    </div>

                              </div>

                              {/* Right: Contact Info */}
                              <div className="space-y-6 text-center md:text-left">
                                    <h4 className="font-semibold text-lg text-white flex items-center justify-center md:justify-start gap-3">
                                          ติดต่อ/สั่งซื้อสินค้า
                                          <span className="hidden md:inline-block w-20 border-t border-white/40" />
                                    </h4>
                                    <ul className="space-y-3 text-gray-200">
                                          <li>Email : ${contectConfig.email}</li>
                                          <li>Facebook : ${contectConfig.facebook}</li>
                                          <li>Line : ${contectConfig.line}</li>
                                          <li>TikTok : ${contectConfig.tiktok}</li>
                                    </ul>
                              </div>
                        </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="border-t border-white/20">
                        <div className="container mx-auto px-4 py-4">
                              <div className="text-gray-200 text-center text-sm sm:text-base">
                                    © 2025 Qisol. สงวนลิขสิทธิ์.
                              </div>
                        </div>
                  </div>
            </footer>
      )
}
