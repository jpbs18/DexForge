"use client";

import { usePokemon } from "@/context/PokemonContext";
import { LIMIT_PER_PAGE } from "@/lib/env/env.client";
import { Pokemon } from "@/models/pokemon";
import { useCallback, useMemo, useState } from "react";
import TeamBuilderInfo from "./BuilderInfo";
import PokemonTeamMember from "./PokemonTeamMember";
import PokemonSearchAndFilter from "../pokedex/PokemonSearchAndFilter";
import PokemonMiniCard from "./PokemonMiniCard";
import Button from "../UI/Button";
import { typeChart } from "@/utils/stats";

export default function PokemonBuilderClient() {
  const { filteredPokemons } = usePokemon();
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [visibleCount, setVisibleCount] = useState(LIMIT_PER_PAGE);
  const [loading, setLoading] = useState(false);

  const addPokemon = useCallback(
    (pokemon: Pokemon) => {
      if (team.length >= 6) return;
      if (!team.find((p) => p.id === pokemon.id)) setTeam([...team, pokemon]);
    },
    [team]
  );

  const removePokemon = useCallback((id: number) => {
    setTeam((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const handleLoadMore = () => {
    setLoading(true);
    setVisibleCount((prev) =>
      Math.min(prev + LIMIT_PER_PAGE, filteredPokemons.length)
    );
    setLoading(false);
  };

  const { weakCount, resistCount, immuneCount } = useMemo(() => {
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
  }, [team]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-6 animate-fade-slide-up">
      <section>
        <TeamBuilderInfo />
        <h2 className="text-xl font-semibold mb-4">Your Team</h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {team.map((p) => (
            <li
              key={p.id}
              className="flex-shrink-0 border rounded-xl p-2 flex flex-col items-center relative bg-gray-200 w-[120px] animate-fade-slide-up"
            >
              <PokemonTeamMember
                pokemon={p}
                removePokemon={() => removePokemon(p.id)}
              />
            </li>
          ))}
        </ul>
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
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {filteredPokemons.slice(0, visibleCount).map((p) => (
          <li key={p.id}>
            <PokemonMiniCard pokemon={p} addPokemon={() => addPokemon(p)} />
          </li>
        ))}
      </ul>
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
