"use client";

import { useState } from "react";
import Image from "next/image";
import { usePokemon } from "@/context/PokemonContext";
import { typeChart, typeColors } from "@/utils/stats";
import { Pokemon } from "@/models/pokemon";
import Button from "@/components/UI/Button";
import PokemonSearchAndFilter from "@/components/pokedex/PokemonSearchAndFilter";
import { LIMIT_PER_PAGE } from "@/lib/env/env.client";
import TeamBuilderInfo from "@/components/pokebuilder/BuilderInfo";

export default function TeamBuilder() {
  const { filteredPokemons } = usePokemon();
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [visibleCount, setVisibleCount] = useState(LIMIT_PER_PAGE);
  const [loading, setLoading] = useState(false);

  const addPokemon = (pokemon: Pokemon) => {
    if (team.length >= 6) return;
    if (!team.find((p) => p.id === pokemon.id)) setTeam([...team, pokemon]);
  };

  const removePokemon = (id: number) => {
    setTeam(team.filter((p) => p.id !== id));
  };

  const handleLoadMore = () => {
    setLoading(true);
    setVisibleCount((prev) =>
      Math.min(prev + LIMIT_PER_PAGE, filteredPokemons.length)
    );
    setLoading(false);
  };

  const calculateTeamWeaknesses = () => {
    const allWeak: string[] = [];
    const allResist: string[] = [];
    const allImmune: string[] = [];

    team.forEach((p) => {
      p.types.forEach((t) => {
        const typeInfo = typeChart[t];
        allWeak.push(...typeInfo.weakTo);
        allResist.push(...typeInfo.resistantTo);
        allImmune.push(...typeInfo.immuneTo);
      });
    });

    const weakCount = allWeak.reduce(
      (acc, w) => ((acc[w] = (acc[w] || 0) + 1), acc),
      {} as Record<string, number>
    );
    const resistCount = allResist.reduce(
      (acc, r) => ((acc[r] = (acc[r] || 0) + 1), acc),
      {} as Record<string, number>
    );
    const immuneCount = allImmune.reduce(
      (acc, i) => ((acc[i] = (acc[i] || 0) + 1), acc),
      {} as Record<string, number>
    );

    return { weakCount, resistCount, immuneCount };
  };

  const { weakCount, resistCount, immuneCount } = calculateTeamWeaknesses();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-6 animate-fade-slide-up">
      <section>
        <TeamBuilderInfo />
        <h2 className="text-xl font-semibold mb-4">Your Team</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {team.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 border rounded-xl p-2 flex flex-col items-center relative bg-gray-200 w-[120px] animate-fade-slide-up"
            >
              <button
                className="absolute top-0 right-0 text-red-500 font-bold"
                onClick={() => removePokemon(p.id)}
              >
                ×
              </button>
              <Image
                src={p.image}
                alt={p.name}
                width={96}
                height={96}
                className="mb-2 object-contain"
              />
              <span className="capitalize text-gray-600 text-sm text-center">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Team Weaknesses & Resistances
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 max-w-full justify-items-center">
          {Object.entries(weakCount).map(([t, count]) => (
            <span
              key={t}
              className="px-2 py-1 bg-red-400 rounded capitalize text-xs text-center overflow-hidden text-ellipsis whitespace-nowrap animate-fade-slide-up"
            >
              {t} ×{count}
            </span>
          ))}
          {Object.entries(resistCount).map(([t, count]) => (
            <span
              key={t}
              className="px-2 py-1 bg-green-400 rounded capitalize text-xs text-center overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {t} ×{count}
            </span>
          ))}
          {Object.entries(immuneCount).map(([t, count]) => (
            <span
              key={t}
              className="px-2 py-1 bg-yellow-400 rounded capitalize text-xs text-center overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {t} ×{count}
            </span>
          ))}
        </div>
      </section>
      <PokemonSearchAndFilter />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {filteredPokemons.slice(0, visibleCount).map((p) => (
          <div
            key={p.id}
            className={`rounded-xl p-2 flex flex-col items-center cursor-pointer hover:shadow-lg ${
              typeColors[p.types[0]]
            }`}
            onClick={() => addPokemon(p)}
          >
            <Image
              src={p.image}
              alt={p.name}
              width={96}
              height={96}
              className="object-contain mb-2"
            />
            <span className="capitalize text-white text-sm text-center">
              {p.name}
            </span>
          </div>
        ))}
      </div>
      {visibleCount < filteredPokemons.length && (
        <Button
          onClick={handleLoadMore}
          disabled={loading}
          className="mx-auto mt-4"
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </main>
  );
}
