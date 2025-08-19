import { Pokemon } from "@/models/pokemon";
import { typeColors } from "@/utils/stats";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const primaryType = pokemon.types[0];

  return (
    <Link href={`/pokedex/${pokemon.id}`} className="w-full max-w-[250px]">
      <div className="w-full bg-gray-800 text-white px-4 py-2 font-bold uppercase tracking-wide flex justify-between items-center">
        <span className="capitalize text-sm sm:text-base">{pokemon.name}</span>
        <span className="text-xs sm:text-sm">
          #{pokemon.id.toString().padStart(3, "0")}
        </span>
      </div>
      <div
        className={`relative p-6 flex flex-col items-center w-full ${typeColors[primaryType]}`}
      >
        <div className="w-40 h-40 relative mb-4 z-10">
          <Image
            src={pokemon.front_default}
            alt={pokemon.name}
            fill
            unoptimized
            style={{ objectFit: "contain" }}
            sizes="160px"
            loading="lazy"
          />
        </div>
        <div className="flex gap-2 z-10">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`rounded-full capitalize font-semibold text-xs py-1 w-16 border text-center ${typeColors[type]} bg-opacity-70 backdrop-brightness-200 shadow-lg`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default React.memo(PokemonCard);
