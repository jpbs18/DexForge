import AboutDexForge from "@/components/about/AboutDexForge";
import BehindPokedex from "@/components/about/BehindPokedex";
import Credits from "@/components/about/Credits";
import Features from "@/components/about/Features";
import SocialMedia from "@/components/about/SocialMedia";
import Warning from "@/components/about/Warning";

export const metadata = {
  title: "About | DexForge.com",
};

export default async function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-gray-100 animate-fade-slide-up">
      <AboutDexForge />
      <Features />
      <Warning />
      <BehindPokedex />
      <Credits />
      <SocialMedia />
    </div>
  );
}
