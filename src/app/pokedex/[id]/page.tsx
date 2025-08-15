import { getPokemonDetails } from "@/lib/api";
import Image from "next/image";
import StatsBars from "./StatsBars";
import { typeColors } from "@/utils/stats";
import { Stats } from "@/models/pokemon";

export const revalidate = 86400;

interface PageProps {
  params: { id: string };
}

export default async function PokemonDetailsPage({ params }: PageProps) {
  const pokemon = await getPokemonDetails(params.id);

  return (
    <main className="flex justify-center m-6 animate-fade-slide-up">
      <div
        className={`max-w-2xl lg:max-w-3xl bg-gray-300 text-gray-800 rounded-xl shadow-lg p-6`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-48 h-48 flex-shrink-0">
            <Image
              src={pokemon.front_default}
              alt={pokemon.name}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold capitalize mb-2">
              #{pokemon.id} {pokemon.name}
            </h1>
            <div className="flex gap-2 my-4">
              {pokemon.types.map((type) => {
                const [bg, text] = typeColors[type].split(" ");
                return (
                  <span
                    key={type}
                    className={`rounded-full capitalize font-semibold text-xs py-1 w-16 text-center border-2 border-white/50 ${bg} ${text} bg-opacity-70 backdrop-brightness-200 shadow-lg`}
                  >
                    {type}
                  </span>
                );
              })}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
              <div>
                <span className="font-semibold">Height:</span>{" "}
                {(pokemon.height / 10).toFixed(1)} m
              </div>
              <div>
                <span className="font-semibold">Weight:</span>{" "}
                {(pokemon.weight / 10).toFixed(1)} kg
              </div>
              <div className="capitalize">
                <span className="font-semibold">Gender:</span>{" "}
                {pokemon.genders.join(", ")}
              </div>
              <div>
                <span className="font-semibold">Category:</span> Seed
              </div>
              <div className="whitespace-nowrap capitalize">
                <span className="font-semibold">Abilities:</span>{" "}
                {pokemon.abilities.join(", ")}
              </div>
            </div>
          </div>
        </div>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Stats</h2>
          <div className="space-y-3">
            {pokemon.stats.map((s: Stats) => (
              <StatsBars key={s.stat.name} stat={s} />
            ))}
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-6">Evolutions</h2>
          <div className="flex flex-col md:flex-row  items:center justify-center">
            {pokemon.evolutions.map((evo, index) => (
              <div key={index} className="flex sm:flex-col md:flex-row">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src={evo.species}
                      alt={`Evolution ${index + 1}`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                </div>
                {index < pokemon.evolutions.length - 1 && (
                  <div className="flex items-center justify-center md:mx-2 my-2 md:my-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:rotate-0 rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-6">Weaknesses</h2>
          <div className="flex gap-2 flex-wrap">
            {pokemon.weakenesses.map((weakeness) => {
              const [bg, text] = typeColors[weakeness].split(" ");
              return (
                <span
                  key={weakeness}
                  className={`rounded-full capitalize font-semibold text-xs py-1 w-16 text-center border-2 border-white/50 ${bg} ${text} bg-opacity-70 backdrop-brightness-200 shadow-lg`}
                >
                  {weakeness}
                </span>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
