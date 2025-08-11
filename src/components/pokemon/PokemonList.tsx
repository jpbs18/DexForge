"use client";

import { useEffect, useState } from "react";;
import { PokemonCard } from "./PokemonCard";
import { PokeData, Pokemon } from "@/models/pokemon";
import { get, set } from "idb-keyval";

export default function PokemonList({ initialData }: { initialData: Pokemon[] }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>(initialData);

  useEffect(() => {
    (async () => {
      try {
        const cached = await get<Pokemon[]>("fullPokemonList");
        if (cached && cached.length > 0) {
          setPokemons(cached);
          return;
        }

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025`);
        const data = await res.json();

        const fullList: Pokemon[] = await Promise.all(
          data.results.map(async (p: PokeData) => {
            const detailRes = await fetch(p.url);
            return detailRes.json();
          })
        );

        setPokemons(fullList);
        await set("fullPokemonList", fullList);
      } catch (err) {
        console.error("Error fetching all Pokémon:", err);
      }
    })();
  }, []);
  
  return (
    <div>
      <ul className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </ul>
    </div>
  );
}
