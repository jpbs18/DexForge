"use client";

import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { Pokemon } from "@/models/pokemon";
import { LIMIT_PER_PAGE } from "@/lib/env.client";

export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  const [visibleCount, setVisibleCount] = useState(LIMIT_PER_PAGE);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setVisibleCount((prev) => Math.min(prev + LIMIT_PER_PAGE, pokemons.length));
    setLoading(false);
  };

  if (!pokemons || pokemons.length === 0) {
    return (
      <p className="text-gray-700 dark:text-gray-200 mb-6 mx-4 text-center sm:text-xl md:text-2xl">
        No Pokémon found
      </p>
    );
  }

  return (
    <div>
      <ul className="grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pokemons.slice(0, visibleCount).map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
      {visibleCount < pokemons.length && (
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="bg-[#be0000] hover:bg-[#f80101] text-white px-4 py-2 mt-8 rounded-md block mx-auto transition-colors"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
