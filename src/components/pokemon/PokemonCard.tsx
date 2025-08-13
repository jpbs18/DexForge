import { Pokemon } from "@/models/pokemon";
import { typeColors } from "@/utils/type-colors";
import Image from "next/image";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const primaryType = pokemon.types[0];
  const cardBgClass = typeColors[primaryType] || "bg-gray-200";

  return (
    <li
      className={`rounded-xl shadow-md overflow-hidden flex flex-col items-center mx-auto transform transition-all duration-300 
    hover:-translate-y-2 hover:rotate-[5deg] hover:shadow-2xl hover:shadow-black/40 dark:hover:shadow-white/20 bg-white dark:bg-gray-800 border-2 border-indigo-100 cursor-pointer max-w-[250px] w-full`}
    >
      <div className="w-full bg-gray-800 text-white px-4 py-2 font-bold uppercase tracking-wide flex justify-between items-center">
        <span className="capitalize text-sm sm:text-base">
          {pokemon.name.length >= 12
            ? pokemon.name.split("-")[0]
            : pokemon.name}
        </span>
        <span className="text-xs sm:text-sm">
          #{pokemon.id.toString().padStart(3, "0")}
        </span>
      </div>
      <div
        className={`relative p-6 flex flex-col items-center w-full ${cardBgClass}`}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('/pokeball-bg.svg')] bg-center bg-no-repeat bg-contain" />
        <div className="w-40 h-40 relative mb-4 z-10">
          <Image
            src={pokemon.front_default}
            alt={pokemon.name}
            fill
            style={{ objectFit: "contain" }}
            sizes="160px"
            loading="lazy"
          />
        </div>
        <div className="flex gap-2 z-10">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`text-xs font-semibold px-2 py-1 rounded border-2 border-white/50 ${typeColors[type]}`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
