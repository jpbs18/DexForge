import LinkButton from "@/components/UI/LinkButton";
import Image from "next/image";

export const metadata = {
  title: "Official DexForge Website | DexForge.com",
};

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow animate-fade-slide-up">
      <div className="max-w-7xl flex flex-col lg:flex-row items-center gap-8 px-6 py-12 relative">
        <div className="absolute top-10 left-10">
          <Image src="/pokeball.webp" alt="Pokéball" width={40} height={40} unoptimized/>
        </div>
        <div className="absolute bottom-16 right-12">
          <Image src="/pokeball.webp" alt="Pokéball" width={50} height={50} unoptimized/>
        </div>
        <div className="relative w-[240px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[480px] lg:h-[400px]">
          <Image
            src="/articuno.webp"
            alt="Articuno"
            priority
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="md:text-left max-w-md z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
            Welcome to DexForge!
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Discover, build, and battle with your perfect Pokémon team!
          </p>
          <LinkButton href="/games">Start playing!</LinkButton>
        </div>
      </div>
    </main>
  );
}
