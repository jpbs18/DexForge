
import { Pokemon } from "@/models/pokemon";
import { typeColors } from "@/utils/type-colors";
import Image from "next/image";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <li className="bg-white rounded-lg shadow-md p-10 flex flex-col items-center mx-auto transition-transform duration-500 ease-in-out 
        hover:scale-105 border-2 border-indigo-100 transition-colors hover:shadow-xl cursor-pointer">
      <div className="w-40 h-40 relative mb-4 z-10">
        {pokemon.sprites.other?.["official-artwork"]?.front_default ? (
          <Image
            src={pokemon.sprites.other?.["official-artwork"]?.front_default}
            alt={pokemon.name}
            fill
            style={{ objectFit: "contain" }}
            sizes="160px"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold capitalize text-gray-800 mb-1">
          {pokemon.name.length >= 12 ? pokemon.name.split("-")[0] : pokemon.name}
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          #{pokemon.id.toString().padStart(3, "0")}
        </p>

        <div className="flex gap-2">
          {pokemon.types.map(({ type }) => (
            <span
              key={type.name}
              className={`text-xs font-semibold px-2 py-1 rounded ${typeColors[type.name]}`}
            >
              {type.name}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}