import { Pokemon } from "@/models/pokemon";
import { typeChart } from "@/utils/stats";
import { useMemo } from "react";

export default function TeamWeaknesses({ team }: { team: Pokemon[] }) {
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
  );
}
