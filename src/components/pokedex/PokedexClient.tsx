"use client";

import { useEffect } from "react";
import { usePokemon } from "@/context/PokemonContext";
import PokedexInfo from "@/components/pokedex/PokedexInfo";
import PokemonSearchAndFilter from "@/components/pokedex/PokemonSearchAndFilter";
import PokemonList from "@/components/pokedex/PokemonList";

export default function PokedexClient() {
  const { pokemons, setFilteredPokemons } = usePokemon();

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons, setFilteredPokemons]);

  return (
    <main className="max-w-8xl mx-auto p-4 animate-fade-slide-up">
      <PokedexInfo />
      <PokemonSearchAndFilter />
      <PokemonList />
    </main>
  );
}
