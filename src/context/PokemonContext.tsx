"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Pokemon } from "@/models/pokemon";

interface PokemonContextType {
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  setFilteredPokemons: (pokemons: Pokemon[]) => void;
  resetPokemons: () => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export function PokemonProvider({
  children,
  initialPokemons,
}: {
  children: ReactNode;
  initialPokemons: Pokemon[];
}) {
  const [pokemons] = useState<Pokemon[]>(initialPokemons);
  const [filteredPokemons, setFilteredPokemons] =
    useState<Pokemon[]>(initialPokemons);
  const resetPokemons = () => setFilteredPokemons(pokemons);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        filteredPokemons,
        setFilteredPokemons,
        resetPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }

  return context;
};
