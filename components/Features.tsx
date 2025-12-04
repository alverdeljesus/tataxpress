"use client";

import { motion } from "framer-motion";
import { Clock, Languages, Zap, LayoutGrid } from "lucide-react";
import { useTranslations } from 'next-intl';

const features = [
    {
        id: 1,
        icon: LayoutGrid,
        titleKey: "feature1Title",
        descKey: "feature1Desc",
        color: "bg-blue-100 text-blue-600",
    },
    {
        id: 2,
        icon: Clock,
        titleKey: "feature2Title",
        descKey: "feature2Desc",
        color: "bg-green-100 text-green-600",
    },
    {
        id: 3,
        icon: Languages,
        titleKey: "feature3Title",
        descKey: "feature3Desc",
        color: "bg-purple-100 text-purple-600",
    },
    {
        id: 4,
        icon: Zap,
        titleKey: "feature4Title",
        descKey: "feature4Desc",
        color: "bg-brand-yellow/20 text-yellow-700",
    },
];

export default function Features() {
    const t = useTranslations('features');

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-black mb-4 uppercase italic">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`w-20 h-20 rounded-3xl ${feature.color} flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                                <feature.icon size={40} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-black mb-3">
                                {t(feature.titleKey)}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {t(feature.descKey)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
