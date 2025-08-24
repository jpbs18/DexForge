"use client";

import { usePokemon } from "@/context/PokemonContext";
import { pokemonTypes } from "@/utils/stats";
import { useState } from "react";

enum Field {
  name,
  type,
}

export default function PokemonSearchAndFilter() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const { pokemons, setFilteredPokemons } = usePokemon();

  const handleChange =
    (field: Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.target.value;
      const newName = field === Field.name ? value : name;
      const newType = field === Field.type ? value : type;

      if (field === Field.name) setName(value);
      else setType(value);

      if (!newType && !newName) {
        setFilteredPokemons(pokemons);
      } else {
        setFilteredPokemons(
          pokemons.filter(
            (p) =>
              p.name.toLowerCase().includes(newName.toLowerCase()) &&
              (!newType || p.types.includes(newType.toLowerCase()))
          )
        );
      }
    };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
      <div className="relative">
        <input
          aria-label="Search Pokémon by name"
          type="text"
          placeholder="Search Pokémon by name..."
          onChange={handleChange(Field.name)}
          value={name}
          className="min-w-[250px] rounded-lg border border-slate-300 bg-white px-4 py-2 pl-10 text-gray-800 focus:outline-none focus:ring-4 focus:ring-pink-500 shadow-sm"
        />
        <svg
          className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
          />
        </svg>
      </div>
      <select
        aria-label="Search Pokémon by type"
        className="min-w-[180px] rounded-lg border border-slate-300 bg-white px-4 py-2 text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-500 shadow-sm"
        onChange={handleChange(Field.type)}
        value={type}
      >
        <option value="">Filter by Type</option>
        {pokemonTypes.map((type) => (
          <option key={type} value={type.toLowerCase()}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
