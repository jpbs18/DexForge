"use client"

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full shadow-lg overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#be0000] via-[#d00000] to-[#ff0000] z-0" />

      {/* Poké Ball Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('/pokeball.png')", // Add a small transparent pokeball png in public folder
          backgroundSize: "80px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="absolute -top-2 left-0 w-[200px] h-[200px] z-5 animate-slideInLeft">
        <Image
          src="/blastoise.png" // Swap with your Pokémon image
          alt="Blastoise Peek"
          fill
          sizes="200px"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Pokémon Right */}
      <div className="absolute -top-6 right-0 w-[220px] h-[220px] z-5 animate-slideInRight">
        <Image
          src="/charizard.webp"
          alt="Charizard Peek"
          fill
          sizes="220px"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center h-28">
          <Link href="/" className="relative w-[240px] h-[130px]">
            <Image
              src="/logo.png"
              alt="Pokémon Official Logo"
              fill
              sizes="(max-width: 768px) 100vw, 240px"
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 0 8px #ffde00)",
              }}
              loading="eager"
              priority
            />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
