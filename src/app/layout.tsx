import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../globals.css'
import Navbar from "@/components/UI/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DexForge",
  description: "Build your perfect Pokémon team. Explore. Battle. Learn",
  icons: {
    icon: "/pokeball.png"
  },
  openGraph: {
    title: "DexForge",
    description: "Build your perfect Pokémon team. Explore. Battle. Learn",
    url: "https://yourdomain.com",
    siteName: "DexForge",
    images: [
      {
        url: "https://yourdomain.com/pokeball.png",
        width: 1200,
        height: 630,
        alt: "DexForge Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <Navbar/>
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
