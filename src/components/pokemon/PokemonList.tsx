"use client";

import { useCallback, useState } from "react";;
import { PokemonCard } from "./PokemonCard";
import { PokeData, Pokemon } from "@/models/pokemon";

const fetchNextPokemonOffset = async (offset: number, limit: number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await res.json();

    return await Promise.all(
        data.results.map(async (pokemon: PokeData) => {
            const res = await fetch(pokemon.url);
            return await res.json();
        })
    );
}

export default function PokemonList({ initialData }: { initialData: Pokemon[] }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>(initialData);
  const [offset, setOffset] = useState(12);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    const remaining = 1025 - pokemons.length;
    if (remaining == 0) {
      setHasMore(false);
      return;
    }

    const limit = Math.min(12, remaining);
    setLoading(true);

    const pokemonsList = await fetchNextPokemonOffset(offset, limit);
    if (remaining === 0) {
      setHasMore(false);
    } else {
      setPokemons((prev) => [...prev, ...pokemonsList]);
      setOffset((prev) => Math.min(prev + 12, 1025));
    }

    setLoading(false);
  }, [loading, hasMore, offset, pokemons.length]);

  return (
    <div>
      <ul className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </ul>
      <div className="flex justify-center mt-6">
        <button
          onClick={loadMore}
          disabled={loading || !hasMore}
          className={`bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded mt-2 cursor-pointer
            ${loading || !hasMore ? "opacity-50 cursor-not-allowed hover:bg-indigo-500" : ""}`}
          >
          {loading ? "Loading..." : hasMore ? "Load More" : "No more Pokémon"}
        </button>
      </div>
    </div>
  );
}
