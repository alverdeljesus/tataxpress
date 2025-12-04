"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'es' : 'en';
        // Replace the locale in the pathname
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPathname);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors"
            aria-label="Toggle language"
        >
            <Languages size={18} />
            <span className="uppercase">{locale === 'en' ? 'ES' : 'EN'}</span>
        </motion.button>
    );
}
