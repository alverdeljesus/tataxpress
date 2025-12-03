import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tata Express Services | Fast & Friendly Multiservice",
  description: "Notary, Title Transfers, Registration, and Insurance services in Hazleton, PA. Fast, friendly, and fun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
