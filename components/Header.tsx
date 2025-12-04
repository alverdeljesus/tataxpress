"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('header');

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: t('services'), href: "#services" },
        { name: t('locations'), href: "#locations" },
        { name: t('contact'), href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-brand-yellow shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logotata.png"
                        alt="Tata Express Services"
                        width={150}
                        height={50}
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-black font-semibold hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <LanguageSwitcher />
                    <a
                        href="tel:+15704557777"
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-gray-800 transition-transform hover:scale-105"
                    >
                        <Phone size={18} />
                        <span>{t('callNow')}</span>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-brand-yellow border-t border-black/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-black font-semibold text-lg"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-2">
                                <LanguageSwitcher />
                                <a
                                    href="tel:+15704557777"
                                    className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-full font-bold flex-1"
                                >
                                    <Phone size={18} />
                                    <span>{t('callNow')}</span>
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
