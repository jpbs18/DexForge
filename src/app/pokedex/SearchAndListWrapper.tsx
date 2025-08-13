"use client";

import PokemonList from "@/components/pokemon/PokemonList";
import PokemonSearchAndFilter from "@/components/pokemon/PokemonSearchAndFilter";
import { Pokemon } from "@/models/pokemon";
import { useState } from "react";

export default function SearchAndListWrapper({
  pokemons,
}: {
  pokemons: Pokemon[];
}) {
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const handleSearch = (term: string, type: string) =>{
    console.log(type, term)
    if(!type && !term){
      setFilteredPokemons(pokemons.slice(0, 12));
      return;
    }

    setFilteredPokemons(
      pokemons.filter(
        (p) =>
          p.name.toLowerCase().includes(term.toLowerCase()) &&
          (!type || p.types.includes(type.toLowerCase()))
      )
    );
  }

  return (
    <>
      <PokemonSearchAndFilter onSearch={handleSearch} />
      <PokemonList initialData={filteredPokemons} />
    </>
  );
}
