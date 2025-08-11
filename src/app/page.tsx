import Image from "next/image";

export const metadata = {
  title: "Official DexForge Website | DexForge.com",
};

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow">
      <div className="max-w-8xl flex flex-col lg:flex-row items-center gap-6 px-6">
        <div className="relative w-[240px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[480px] lg:h-[400px]">
          <Image
            src="/articuno.png"
            alt="Articuno"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="md:text-left max-w-md">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
            style={{ color: "#FFDE00", WebkitTextStroke: "1.3px #3B4CCA" }}
          >
            Welcome to DexForge!
          </h1>
          <p className="text-lg md:text-xl text-gray-800">
            Discover, build, and battle with your perfect Pokémon team!
          </p>
        </div>
      </div>
    </main>
  );
}
