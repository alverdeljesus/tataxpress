"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('hero');

    return (
        <section className="relative bg-white overflow-hidden py-20 lg:py-32">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-yellow rounded-full opacity-20 blur-3xl" />
                <div className="absolute top-40 -left-20 w-72 h-72 bg-brand-yellow rounded-full opacity-20 blur-3xl" />

                {/* Speed lines animation */}
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-30"
                />
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 }}
                    className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-30"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Animated Logo */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="mb-8 flex justify-center"
                    >
                        <Image
                            src="/logotata.png"
                            alt="Tata Express Services Logo"
                            width={200}
                            height={200}
                            className="w-48 h-auto object-contain drop-shadow-xl"
                            priority
                        />
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold text-black mb-6 tracking-tight leading-tight"
                    >
                        {t('title')} <br />
                        <span className="text-brand-yellow bg-black px-4 transform -skew-x-6 inline-block mt-2">{t('subtitle')}</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 mb-10 font-medium"
                    >
                        {t('tagline')}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="tel:+15701234567"
                            className="flex items-center justify-center gap-2 bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-transform hover:scale-105 shadow-lg"
                        >
                            <Phone size={24} />
                            {t('callNow')}
                        </a>
                        <a
                            href="#locations"
                            className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg"
                        >
                            <MapPin size={24} />
                            {t('getDirections')}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
