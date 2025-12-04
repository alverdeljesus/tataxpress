"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { useTranslations } from 'next-intl';

const locations = [
    {
        nameKey: "hazleton",
        address: "26 W Diamond Ave, Hazleton, PA 18201",
        mapLink: "https://www.google.com/maps/search/?api=1&query=26+W+Diamond+Ave,+Hazleton,+PA+18201",
    },
    {
        nameKey: "hazleTownship",
        address: "620 Hillside Dr, Hazle Township, PA 18202",
        mapLink: "https://www.google.com/maps/search/?api=1&query=620+Hillside+Dr,+Hazle+Township,+PA+18202",
    },
];

export default function Locations() {
    const t = useTranslations('locations');

    return (
        <section id="locations" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-black mb-4 uppercase italic">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location.nameKey}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-brand-yellow p-8 rounded-3xl shadow-xl flex flex-col items-center text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />

                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-brand-yellow z-10">
                                <MapPin size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-black mb-2 z-10">
                                {t(location.nameKey)}
                            </h3>
                            <p className="text-black/80 font-medium mb-8 z-10 text-lg">
                                {location.address}
                            </p>

                            <a
                                href={location.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors z-10"
                            >
                                <Navigation size={18} />
                                {t('openInMaps')}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
