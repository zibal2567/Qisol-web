'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { productsConfig } from '@/config/products.config';
import {
    Droplets,
    ShieldCheck,
    Leaf,
    BadgeDollarSign,
    Microscope,
    ArrowRight,
    Zap
} from 'lucide-react';
import { ImageZoom } from '@/components/ui/ImageZoom';

const iconMap: Record<string, React.ElementType> = {
    dissolvable: Droplets,
    healing: Zap,
    antimicrobial: ShieldCheck,
    natural: Leaf,
    safe: Microscope,
    affordable: BadgeDollarSign
};

export default function ProductsPage() {
    const t = useTranslations('products');

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
            transition: { duration: 0.5 }
        }
    };

    return (
        <main className="min-h-screen pb-24 bg-gradient-to-b from-[#439b83] to-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#439b83]/10 to-transparent">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-6">

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl lg:text-7xl font-extrabold text-emerald-50 leading-tight"
                            >
                                {t('hero.title')}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-white/50 leading-relaxed max-w-xl"
                            >
                                {t('hero.description')}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <button className="bg-[#439b83] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#367268] transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
                                    {t('hero.cta')}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-[#439b83]/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                                <ImageZoom
                                    className="w-full relative z-10"
                                    zoomImg={{
                                        src: productsConfig.image,
                                        alt: t('hero.title')
                                    }}
                                >
                                    <motion.div
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Image
                                            src={productsConfig.image}
                                            alt={t('hero.title')}
                                            width={800}
                                            height={800}
                                            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(67,155,131,0.3)]"
                                            priority
                                        />
                                    </motion.div>
                                </ImageZoom>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-extrabold text-gray-900 mb-6"
                        >
                            {t('main.title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            {t('main.description')}
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {productsConfig.features.map((featureKey) => {
                            const Icon = iconMap[featureKey];
                            return (
                                <motion.div
                                    key={featureKey}
                                    variants={itemVariants}
                                    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 bg-[#439b83]/10 rounded-2xl flex items-center justify-center mb-6 text-[#439b83] group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {t(`main.features.${featureKey}.title`)}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t(`main.features.${featureKey}.desc`)}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* How to Use Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <ImageZoom
                                    zoomImg={{
                                        src: "/Image/Demo.png",
                                        alt: "QiSol Usage"
                                    }}
                                >
                                    <Image
                                        src="/Image/Demo.png"
                                        alt="QiSol Usage"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </ImageZoom>
                            </div>
                        </motion.div>

                        <div className="lg:w-1/2 space-y-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl font-extrabold text-gray-900"
                            >
                                {t('usage.title')}
                            </motion.h2>

                            <div className="space-y-6">
                                {t.raw('usage.steps').map((step: string, index: number) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-[#439b83] text-white rounded-full flex items-center justify-center font-black flex-shrink-0 shadow-lg">
                                            {index + 1}
                                        </div>
                                        <p className="text-lg text-gray-700 font-medium pt-2">
                                            {step}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology & Patent Section */}
            <section className="py-24 bg-[#367268] text-white rounded-[4rem] mx-4 lg:mx-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 text-white/90 font-bold text-sm"
                            >
                                <Microscope className="w-4 h-4" />
                                {t('tech.patent')}
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl lg:text-5xl font-extrabold leading-tight"
                            >
                                {t('tech.title')}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-white/80 leading-relaxed"
                            >
                                {t('tech.description')}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-3xl">
                                <ImageZoom
                                    zoomImg={{
                                        src: "/Image/Core_Technology.png",
                                        alt: "Electrospinning Technology"
                                    }}
                                >
                                    <Image
                                        src="/Image/Core_Technology.png"
                                        alt="Electrospinning Technology"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity bg-white"
                                    />
                                </ImageZoom>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
