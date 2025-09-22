"use client";

import { motion, type Variants } from "framer-motion";
import { Activity, Sparkles, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function LoadingScreen() {
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const pulseVariants: Variants = {
    initial: { scale: 0.8, opacity: 0.6 },
    animate: { 
      scale: [0.8, 1.2, 0.8],
      opacity: [0.6, 1, 0.6],
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1]
      }
    }
  };

  const floatingIcons = [
    { Icon: Activity, delay: 0, x: -100, y: -50 },
    { Icon: Sparkles, delay: 0.5, x: 100, y: -80 },
    { Icon: Shield, delay: 1, x: -120, y: 80 },
    { Icon: Zap, delay: 1.5, x: 150, y: 60 }
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#439b83] via-[#367268] to-[#2d5e53] flex flex-col items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='6' cy='6' r='2'/%3E%3Ccircle cx='54' cy='54' r='2'/%3E%3Ccircle cx='6' cy='54' r='2'/%3E%3Ccircle cx='54' cy='6' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-white/10"
          initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            x: [0, x, 0],
            y: [0, y, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: delay,
            ease: [0.4, 0, 0.6, 1]
          }}
        >
          <Icon size={80} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with Pulse Effect */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8"
        >
          <motion.div
            variants={pulseVariants}
            className="absolute inset-0 bg-white/20 rounded-full blur-xl"
          />
          <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <Image
              src="/Image/LOGO.png"
              alt="QiSol Logo"
              width={160}
              height={45}
              className="w-40 h-auto drop-shadow-lg"
              priority
            />
          </div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          variants={itemVariants}
          className="relative mb-6"
        >
          {/* Outer Ring */}
          <motion.div
            className="w-24 h-24 border-4 border-white/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Inner Ring */}
          <motion.div
            className="absolute inset-2 w-20 h-20 border-4 border-t-white border-r-white/50 border-b-white/30 border-l-white/70 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Center Dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1]
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.h2
            className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-wide"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1]
            }}
          >
            กำลังโหลด QiSol
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg font-medium mb-4"
          >
            นวัตกรรมการรักษาแผลแห่งอนาคต
          </motion.p>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: [0.4, 0, 0.6, 1]
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-12 text-center"
        >
          <p className="text-white/60 text-sm tracking-wide">
            แผ่นฟิล์มไฮโดรเจลผสานสารสกัดปูดเบญกานี
          </p>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-white/60" />
            </motion.div>
            <span className="text-white/60 text-xs">รักษาแผลเรื้อรังอย่างมีประสิทธิภาพ</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
