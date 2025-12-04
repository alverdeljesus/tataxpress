import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Tata Express Services | Fast & Friendly Multiservice",
    description: "Notary, Title Transfers, Registration, and Insurance services in Hazleton, PA. Fast, friendly, and fun!",
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body
                className={`${outfit.variable} antialiased bg-white text-black`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
