"use client";

import PokemonList from "@/components/pokedex/PokemonList";
import PokemonSearchAndFilter from "@/components/pokedex/PokemonSearchAndFilter";
import { Pokemon } from "@/models/pokemon";
import { useState } from "react";

export default function PokemonSearchAndListSection({
  pokemons,
}: {
  pokemons: Pokemon[];
}) {
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const handleSearch = (term: string, type: string) => {
    if (!type && !term) {
      setFilteredPokemons(pokemons);
      return;
    }

    setFilteredPokemons(
      pokemons.filter(
        (p) =>
          p.name.toLowerCase().includes(term.toLowerCase()) &&
          (!type || p.types.includes(type.toLowerCase()))
      )
    );
  };

  return (
    <>
      <PokemonSearchAndFilter onSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </>
  );
}
