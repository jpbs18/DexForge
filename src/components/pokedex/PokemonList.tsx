"use client";

import { useState } from "react";
import { Pokemon } from "@/models/pokemon";
import { LIMIT_PER_PAGE } from "@/lib/env.client";
import Button from "@/components/UI/Button";
import { PokemonCard } from "@/components/pokedex/PokemonCard";

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
      <p className="text-gray-200 mb-6 mx-4 text-center sm:text-xl md:text-2xl">
        No Pokémon matched your search
      </p>
    );
  }

  return (
    <div>
      <ul className="grid grid-cols-1 justify-items-center sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
        {pokemons.slice(0, visibleCount).map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
      {visibleCount < pokemons.length && (
        <Button
          onClick={handleLoadMore}
          disabled={loading}
          className="mt-8 rounded block mx-auto"
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
}
