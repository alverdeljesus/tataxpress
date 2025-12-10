"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('contact');

    return (
        <section id="contact" className="py-20 bg-brand-gray">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-black mb-4 uppercase italic">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="flex justify-center max-w-4xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-2xl"
                    >
                        <h3 className="text-2xl font-bold text-black mb-6 text-center">{t('sendMessage')}</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">{t('form.name')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/50 outline-none transition-all"
                                        placeholder={t('form.namePlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">{t('form.phone')}</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/50 outline-none transition-all"
                                        placeholder={t('form.phonePlaceholder')}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">{t('form.message')}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/50 outline-none transition-all"
                                    placeholder={t('form.messagePlaceholder')}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>{t('form.submit')}</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    <Send size={18} />
                                </motion.div>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
