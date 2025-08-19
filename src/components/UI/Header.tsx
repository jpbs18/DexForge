import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  return (
    <header className="relative w-full shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#be0000] via-[#d00000] to-[#ff0000] z-0" />
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('/pokeball.webp')",
          backgroundSize: "80px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute -top-2 left-0 w-[200px] h-[200px] z-5">
        <Image
          src="/blastoise.webp"
          alt="Blastoise Peek"
          fill
          unoptimized
          sizes="200px"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="absolute -top-6 right-0 w-[220px] h-[220px] z-5">
        <Image
          src="/charizard.webp"
          alt="Charizard Peek"
          fill
          unoptimized
          sizes="220px"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center h-28">
          <Link href="/" className="relative w-[240px] h-[130px]">
            <Image
              src="/logo.webp"
              alt="Pokémon Official Logo"
              fill
              unoptimized
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
    </header>
  );
}
