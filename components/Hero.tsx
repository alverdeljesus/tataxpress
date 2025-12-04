"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('hero');

    return (
        <section className="relative bg-white overflow-hidden py-12 lg:py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-yellow rounded-full opacity-10 blur-3xl" />
                <div className="absolute bottom-0 -left-20 w-72 h-72 bg-brand-yellow rounded-full opacity-10 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
                            {/* Decorative circle background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/5 rounded-full transform -rotate-12" />

                            {/* Image container with clip path */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                <Image
                                    src="/tataexpress.jpg"
                                    alt="Tata Express Services"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                            {t('title')}
                        </h1>

                        {/* Subtitle/Description */}
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            {t('tagline')}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="tel:+15701234567"
                                className="flex items-center justify-center gap-2 bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
                            >
                                <Phone size={24} />
                                {t('callNow')}
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#locations"
                                className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg"
                            >
                                <MapPin size={24} />
                                {t('getDirections')}
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
