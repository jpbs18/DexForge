import { Pokemon } from "@/models/pokemon";
import { typeColors } from "@/utils/type-colors";
import Image from "next/image";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const primaryType = pokemon.types[0];

  return (
    <li className="w-full max-w-[250px] mx-auto group">
      <div
        className="transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-2xl
         group-hover:shadow-black/40 dark:group-hover:shadow-white/20 overflow-hidden rounded-xl"
      >
        <div
          className={`rounded-xl shadow-md overflow-hidden flex flex-col items-center
          bg-white dark:bg-gray-800 border-2 border-indigo-100 cursor-pointer
          animate-fade-slide-up`}
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
            className={`relative p-6 flex flex-col items-center w-full ${typeColors[primaryType]}`}
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
                  className={`text-xs font-semibold px-2 py-1 w-16 text-center rounded border-2 border-white/50 ${typeColors[type]} bg-opacity-80 backdrop-brightness-200 shadow-lg`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
