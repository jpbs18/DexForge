"use client";

import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { Pokemon } from "@/models/pokemon";

export default function PokemonList({ initialData }: { initialData: Pokemon[] }) {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, initialData.length));
  };
  
  return (
    <div>
      <ul className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {initialData.slice(0, visibleCount).map((pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </ul>
      {visibleCount < initialData.length && (
        <button onClick={handleLoadMore} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Load More
        </button>
      )}
    </div>
  );
}
