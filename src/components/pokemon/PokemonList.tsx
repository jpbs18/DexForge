"use client";

import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { Pokemon } from "@/models/pokemon";
import { LIMIT_PER_PAGE } from "@/lib/env.client";

export default function PokemonList({
  initialData,
}: {
  initialData: Pokemon[];
}) {
  const [visibleCount, setVisibleCount] = useState(LIMIT_PER_PAGE);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setVisibleCount((prev) =>
      Math.min(prev + LIMIT_PER_PAGE, initialData.length)
    );
    setLoading(false);
  };

  return (
    <div>
      <ul className="grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {initialData.slice(0, visibleCount).map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
      {visibleCount < initialData.length && (
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
