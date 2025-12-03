"use client";

import { motion } from "framer-motion";
import { FileText, Car, ShieldCheck, PenTool } from "lucide-react";

const services = [
    {
        title: "Notary Services",
        description: "Quick and easy notarization for all your legal documents.",
        icon: PenTool,
    },
    {
        title: "Title Transfers",
        description: "Fast title transfers for vehicles, boats, and more.",
        icon: FileText,
    },
    {
        title: "Registration",
        description: "Instant registration renewals and license plate services.",
        icon: Car,
    },
    {
        title: "Insurance",
        description: "Affordable insurance quotes for auto, home, and business.",
        icon: ShieldCheck,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-brand-gray">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-black mb-4 uppercase italic">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We handle the paperwork so you can get back to your day!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-brand-yellow hover:border-black transition-colors cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mb-6 mx-auto text-black">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3 text-center">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-center">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
