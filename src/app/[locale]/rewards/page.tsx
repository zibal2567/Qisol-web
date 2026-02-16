
'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { awardsConfig } from '@/config/awards.config';
import { Award, Star, ShieldCheck, Trophy } from 'lucide-react';
import { ImageZoom } from '@/components/ui/ImageZoom';

export default function RewardsPage() {
    const t = useTranslations('rewards');

    const featuredAward = awardsConfig[0];
    const otherAwards = awardsConfig.slice(1);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100
            }
        }
    };

    return (
        <main className="min-h-screen pb-16 bg-gradient-to-b from-[#439b83] to-white">
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#439b83]/10 to-transparent blur-3xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#439b83]/20 shadow-sm mb-6"
                    >
                        <Trophy className="w-5 h-5 text-[#439b83]" />
                        <span className="text-sm font-semibold text-[#367268] uppercase tracking-wider">
                            Our Achievements
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-50 mb-6 leading-tight"
                    >
                        {t('title')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-emerald-50 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 pb-24 max-w-6xl">
                {/* Featured Award (Latest) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-emerald-50 group">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#439b83]/5 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#439b83]/10 rounded-full blur-3xl group-hover:bg-[#439b83]/20 transition-colors duration-500" />

                        <div className="flex flex-col lg:flex-row">
                            {/* Image Section - Large & Prominent */}
                            <div className="lg:w-3/5 relative min-h-[300px] lg:min-h-[450px] overflow-hidden bg-gray-50 border-r border-gray-100">
                                <ImageZoom
                                    className="absolute inset-0 w-full h-full"
                                    zoomImg={{
                                        src: featuredAward.image,
                                        alt: t(`items.${featuredAward.translationKey}.title`)
                                    }}
                                >
                                    <Image
                                        src={featuredAward.image}
                                        alt={t(`items.${featuredAward.translationKey}.title`)}
                                        fill
                                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </ImageZoom>
                                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-sm font-extrabold text-[#367268] shadow-lg flex items-center gap-2">
                                    Latest Award {featuredAward.year}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center relative">
                                <div className="mb-6">
                                    <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-[#439b83] transition-colors">
                                        {t(`items.${featuredAward.translationKey}.title`)}
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        {t(`items.${featuredAward.translationKey}.description`)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section Divider */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-gray-200 flex-1" />
                    <span className="text-emerald-50 font-medium text-sm uppercase tracking-widest">More Achievements</span>
                    <div className="h-px bg-gray-200 flex-1" />
                </div>

                {/* Other Awards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {otherAwards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            variants={itemVariants}
                            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col sm:flex-row h-full"
                        >
                            {/* Image Section - Left (or Top on mobile) */}
                            <div className="relative w-full sm:w-2/5 min-h-[200px] sm:min-h-full overflow-hidden bg-gray-50">
                                <ImageZoom
                                    className="absolute inset-0 w-full h-full"
                                    zoomImg={{
                                        src: award.image,
                                        alt: t(`items.${award.translationKey}.title`)
                                    }}
                                >
                                    <Image
                                        src={award.image}
                                        alt={t(`items.${award.translationKey}.title`)}
                                        fill
                                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </ImageZoom>
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-[#367268] shadow-sm">
                                    {award.year}
                                </div>
                            </div>

                            {/* Content Section - Right */}
                            <div className="flex-1 p-6 flex flex-col justify-center relative">
                                <div className="absolute top-0 right-0 p-4 opacity-50 text-[#439b83]/20">
                                    {index % 3 === 0 && <ShieldCheck className="w-12 h-12" />}
                                    {index % 3 === 1 && <Award className="w-12 h-12" />}
                                    {index % 3 === 2 && <Star className="w-12 h-12" />}
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#439b83] transition-colors line-clamp-2">
                                        {t(`items.${award.translationKey}.title`)}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                                        {t(`items.${award.translationKey}.description`)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
