import Image from "next/image";

export const metadata = {
  title: "Official DexForge Website | DexForge.com",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow">
      <div className="max-w-8xl flex flex-col lg:flex-row items-center gap-8 px-6">
        <div className="relative w-[312px] h-[277px]">
          <Image src="/charizard.webp" alt="Charizard" priority fill sizes="(max-width: 768px) 100vw, 312px" style={{ objectFit: "contain" }} 
          />
        </div>
        <div className="md:text-left max-w-md">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text py-2">
             Welcome to DexForge!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 px-2">
            Discover, build, and battle with your perfect Pokémon team. Whether you&apos;re a beginner or a pro, DexForge has something for everyone!
          </p>
        </div>
      </div>
    </main>
  );
}
