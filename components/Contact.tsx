"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-brand-gray">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-black mb-4 uppercase italic">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions? We're here to help!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-lg">
                            <h3 className="text-2xl font-bold text-black mb-6">Contact Info</h3>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-black shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase">Phone</p>
                                        <a href="tel:+15701234567" className="text-xl font-bold text-black hover:text-brand-yellow transition-colors">
                                            (570) 123-4567
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-black shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase">Email</p>
                                        <a href="mailto:info@tataexpress.com" className="text-xl font-bold text-black hover:text-brand-yellow transition-colors">
                                            info@tataexpress.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-black shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase">Business Hours</p>
                                        <p className="text-lg font-medium text-black">Mon - Fri: 9:00 AM - 5:00 PM</p>
                                        <p className="text-lg font-medium text-black">Sat: 10:00 AM - 2:00 PM</p>
                                        <p className="text-lg font-medium text-black">Sun: Closed</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-black mb-6">Send a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/50 outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/50 outline-none transition-all"
                                        placeholder="Your Phone"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/50 outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>Send Message</span>
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
