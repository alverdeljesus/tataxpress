"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslations } from 'next-intl';

const reviews = [
    { id: 1, textKey: "review1", authorKey: "author1" },
    { id: 2, textKey: "review2", authorKey: "author2" },
    { id: 3, textKey: "review3", authorKey: "author3" },
    { id: 4, textKey: "review4", authorKey: "author4" },
];

export default function Reviews() {
    const t = useTranslations('reviews');

    return (
        <section className="py-20 bg-brand-gray relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-black mb-4 uppercase italic">
                        {t('title')}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={24} className="text-brand-yellow fill-brand-yellow" />
                        ))}
                    </div>
                    <p className="text-xl text-gray-600 font-medium">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100"
                        >
                            <div className="mb-4 text-brand-yellow">
                                <Quote size={32} className="rotate-180" />
                            </div>

                            <p className="text-gray-700 mb-6 flex-grow italic leading-relaxed">
                                "{t(review.textKey)}"
                            </p>

                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center text-brand-yellow font-bold text-sm">
                                    {t(review.authorKey).charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-black text-sm">{t(review.authorKey)}</p>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={12} className="text-brand-yellow fill-brand-yellow" />
                                        ))}
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                        alt="Google"
                                        className="w-5 h-5 opacity-70"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
