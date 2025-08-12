"use client";

import {  useState } from "react";;
import { PokemonCard } from "./PokemonCard";
import { Pokemon } from "@/models/pokemon";

export default function PokemonList({ initialData }: { initialData: Pokemon[] }) {
  const [pokemons] = useState<Pokemon[]>(initialData);
  
  return (
    <div>
      <ul className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </ul>
    </div>
  );
}
