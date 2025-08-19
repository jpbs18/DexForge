import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center flex-grow">
      <Image
        src="/pokeball.webp"
        alt="Loading Pokéball"
        width={64}
        height={64}
        className="animate-spin"
      />
      <p className="font-semibold text-2xl mt-4">Loading...</p>
    </div>
  );
}
