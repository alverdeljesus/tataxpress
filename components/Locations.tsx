"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from "next/image";

const locations = [
    {
        nameKey: "hazleton",
        hoursKey: "hazletonHours",
        address: "26 W Diamond Ave, Hazleton, PA 18201",
        phone: "570-455-7777",
        phoneLink: "tel:+15704557777",
        mapLink: "https://www.google.com/maps/search/?api=1&query=26+W+Diamond+Ave,+Hazleton,+PA+18201",
        image: "/tatadiamond.JPG",
    },
    {
        nameKey: "hazleTownship",
        hoursKey: "hazleTownshipHours",
        address: "620 Hillside Dr, Hazle Township, PA 18202",
        phone: "272-333-1015",
        phoneLink: "tel:+12723331015",
        mapLink: "https://www.google.com/maps/search/?api=1&query=620+Hillside+Dr,+Hazle+Township,+PA+18202",
        image: "/tatahillside.JPG",
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location.nameKey}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={location.image}
                                    alt={t(location.nameKey)}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Yellow overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Location icon badge */}
                                <div className="absolute top-4 right-4 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg">
                                    <MapPin size={24} className="text-black" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-black mb-3">
                                    {t(location.nameKey)}
                                </h3>

                                {/* Phone Number */}
                                <a
                                    href={location.phoneLink}
                                    className="flex items-center gap-2 text-black hover:text-brand-yellow font-bold text-lg mb-3 transition-colors"
                                >
                                    <Phone size={20} className="text-brand-yellow" />
                                    {location.phone}
                                </a>

                                {/* Hours */}
                                <p className="text-gray-600 font-medium mb-3 text-lg flex items-start gap-2">
                                    <Clock size={20} className="text-brand-yellow shrink-0 mt-1" />
                                    {t(location.hoursKey)}
                                </p>

                                <p className="text-gray-600 font-medium mb-6 text-lg flex items-start gap-2">
                                    <MapPin size={20} className="text-brand-yellow shrink-0 mt-1" />
                                    {location.address}
                                </p>

                                <a
                                    href={location.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-brand-yellow text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-md w-full justify-center"
                                >
                                    <Navigation size={18} />
                                    {t('openInMaps')}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
