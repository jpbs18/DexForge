import React from "react";
import Image from "next/image";
import { Pokemon } from "@/models/pokemon";

function PokemonTeamMember({
  pokemon,
  removePokemon,
}: {
  pokemon: Pokemon;
  removePokemon: () => void;
}) {
  return (
    <>
      <button
        className="absolute top-0 right-0 text-red-500 font-bold"
        onClick={removePokemon}
      >
        ×
      </button>
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        width={96}
        height={96}
        unoptimized
        loading="lazy"
        className="mb-2 object-contain"
      />
      <span className="capitalize text-gray-600 text-sm text-center">
        {pokemon.name}
      </span>
    </>
  );
}

export default React.memo(PokemonTeamMember);
