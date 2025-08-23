import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/UI/Navbar";
import { PokemonProvider } from "@/context/PokemonContext";
import { fetchAllPokemons, fetchPokemonNews } from "@/lib/api";
import { NewsProvider } from "@/context/NewsContext";

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
    icon: "/pokeball.png",
    shortcut: "/pokeball.png",
    apple: "/pokeball.png",
  },
  openGraph: {
    title: "DexForge",
    description: "Build your perfect Pokémon team. Explore. Battle. Learn",
    url: "https://dex-forge.vercel.app",
    siteName: "DexForge",
    images: [
      {
        url: "https://dex-forge.vercel.app/pokeball.png",
        width: 1200,
        height: 630,
        alt: "DexForge Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://dex-forge.vercel.app",
  },
  keywords: [
    "Pokémon",
    "Pokédex",
    "Pokémon team builder",
    "Pokémon battle",
    "DexForge",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pokemons = await fetchAllPokemons();
  const news = await fetchPokemonNews(1);

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable}`}
      >
        <PokemonProvider initialPokemons={pokemons || []}>
          <NewsProvider initialNews={news || []}>
            <Header />
            <Navbar />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
          </NewsProvider>
        </PokemonProvider>
      </body>
    </html>
  );
}
