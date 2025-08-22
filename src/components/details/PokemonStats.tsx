import { Stats } from "@/models/pokemon";
import PokemonStatsBars from "@/components/details/PokemonStatsBars";

export default async function PokemonStats({ stats }: { stats: Stats[] }) {
  return (
    <section className="mt-6 sm:mt-8 md:mt-6">
      <h2 className="text-2xl font-semibold mb-4 capitalize text-center md:text-left mx-auto md:mx-0">
        Stats
      </h2>
      <div className="space-y-3">
        {stats.map((stat: Stats) => (
          <PokemonStatsBars key={stat.name} stat={stat} />
        ))}
      </div>
    </section>
  );
}
