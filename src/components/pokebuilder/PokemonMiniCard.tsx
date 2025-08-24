import { Pokemon } from "@/models/pokemon";
import { typeColors } from "@/utils/stats";
import Image from "next/image";
import React from "react";

function PokemonMiniCard({
  pokemon,
  addPokemon,
}: {
  pokemon: Pokemon;
  addPokemon: () => void;
}) {
  return (
    <div
      className={`rounded-xl p-2 flex flex-col items-center cursor-pointer hover:shadow-lg ${
        typeColors[pokemon.types[0]]
      }`}
      onClick={addPokemon}
    >
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        width={96}
        height={96}
        unoptimized
        loading="lazy"
        className="object-contain mb-2"
      />
      <span className="capitalize text-white text-sm text-center">
        {pokemon.name}
      </span>
    </div>
  );
}

export default React.memo(PokemonMiniCard);
