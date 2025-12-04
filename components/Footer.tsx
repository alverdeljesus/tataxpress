import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/logotata.png"
                                alt="Tata Express Services"
                                width={180}
                                height={60}
                                className="h-16 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 mb-4">
                            Fast, friendly, and fun multiservice office in Hazleton, PA.
                            We make paperwork easy!
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-brand-yellow hover:text-white transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-brand-yellow hover:text-white transition-colors">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold text-brand-yellow mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="#services" className="hover:text-brand-yellow transition-colors">Notary Services</Link></li>
                            <li><Link href="#services" className="hover:text-brand-yellow transition-colors">Title Transfers</Link></li>
                            <li><Link href="#services" className="hover:text-brand-yellow transition-colors">Registration</Link></li>
                            <li><Link href="#services" className="hover:text-brand-yellow transition-colors">Insurance</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold text-brand-yellow mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-yellow shrink-0" size={20} />
                                <span>
                                    26 W Diamond Ave, Hazleton, PA 18201<br />
                                    620 Hillside Dr, Hazle Township, PA 18202
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-brand-yellow shrink-0" size={20} />
                                <a href="tel:+15701234567" className="hover:text-brand-yellow">
                                    (570) 123-4567
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-brand-yellow shrink-0" size={20} />
                                <a href="mailto:info@tataexpress.com" className="hover:text-brand-yellow">
                                    info@tataexpress.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Tata Express Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
