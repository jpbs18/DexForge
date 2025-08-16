import { getPokemonDetails } from "@/lib/api";
import Image from "next/image";
import StatsBars from "./StatsBars";
import { typeColors } from "@/utils/stats";
import { Stats } from "@/models/pokemon";
import Link from "next/link";

export const revalidate = 86400;

export default async function PokemonDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const pokemon = await getPokemonDetails(id);

  const pokemonId = parseInt(id, 10);
  const prevId = pokemonId > 1 ? pokemonId - 1 : null;
  const nextId = pokemonId < 1025 ? pokemonId + 1 : null;

  return (
    <main className="flex justify-center m-6 animate-fade-slide-up relative">
      <div className="relative w-full max-w-2xl lg:max-w-3xl bg-gray-800 text-gray-300 dark:bg-gray-300 dark:text-gray-800 rounded-xl shadow-lg p-6">
        {prevId ? (
          <Link
            href={`/pokedex/${prevId}`}
            className="absolute top-2 left-2 sm:top-3 sm:left-3 z-50 text-gray-800 hover:text-gray-900 text-2xl sm:text-3xl leading-none"
          >
            ←
          </Link>
        ) : (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 z-50 text-gray-500 text-2xl sm:text-3xl leading-none cursor-not-allowed">
            ←
          </span>
        )}
        {nextId ? (
          <Link
            href={`/pokedex/${nextId}`}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-50 text-gray-800 hover:text-gray-900 text-2xl sm:text-3xl leading-none"
          >
            →
          </Link>
        ) : (
          <span className="absolute top-2 right-2 sm:top-3 sm:right-3 z-50 text-gray-500 text-2xl sm:text-3xl leading-none cursor-not-allowed">
            →
          </span>
        )}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <div className="relative w-48 h-48 flex-shrink-0">
            <Image
              src={pokemon.front_default}
              alt={pokemon.name}
              sizes="(max-width: 768px) 192px, 192px"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold capitalize mb-8 text-center md:text-left mx-auto md:mx-0">
              #{pokemon.id}{" "}
              {pokemon.name.length >= 12
                ? pokemon.name.split("-")[0]
                : pokemon.name}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm dark:text-gray-700">
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
                {pokemon.genders
                  .map((g) =>
                    g.toLowerCase() === "male"
                      ? "♂"
                      : g.toLowerCase() === "female"
                      ? "♀"
                      : g
                  )
                  .join(" / ")}
              </div>
              <div>
                <span className="font-semibold">Category:</span>{" "}
                {pokemon.category.split(" ")[0]}
              </div>
              <div className="whitespace-nowrap capitalize">
                <span className="font-semibold">Abilities:</span>{" "}
                {pokemon.abilities.join(", ")}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className="mt-6 sm:mt-8 md:mt-6">
          <h2 className="text-2xl font-semibold mb-4 capitalize text-center md:text-left mx-auto md:mx-0">
            Stats
          </h2>
          <div className="space-y-3">
            {pokemon.stats.map((s: Stats) => (
              <StatsBars key={s.stat.name} stat={s} />
            ))}
          </div>
        </section>

        {/* Evolutions */}
        <section className="mt-6 sm:mt-8 md:mt-6">
          <h2 className="text-2xl font-semibold mb-4 capitalize text-center md:text-left mx-auto md:mx-0">
            Evolutions
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            {pokemon.evolutions.map((evo, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src={evo.species}
                      alt={`Evolution ${index + 1}`}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>

                {index < pokemon.evolutions.length - 1 && (
                  <div className="flex items-center justify-center mt-1 mb-1 md:mx-2 md:my-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transform rotate-90 md:rotate-0"
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

        {/* Types */}
        <section className="mt-6 sm:mt-8 md:mt-6">
          <h2 className="text-2xl font-semibold mb-4 capitalize text-center md:text-left mx-auto md:mx-0">
            Types
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {pokemon.types.map((type) => {
              const [bg, text] = typeColors[type].split(" ");
              return (
                <span
                  key={type}
                  className={`rounded-full capitalize font-semibold text-xs py-1 w-16 text-center border ${bg} ${text} backdrop-brightness-200 shadow-lg`}
                >
                  {type}
                </span>
              );
            })}
          </div>
        </section>

        {/* Weaknesses */}
        <section className="mt-6 sm:mt-8 md:mt-6">
          <h2 className="text-2xl font-semibold mb-4 capitalize text-center md:text-left mx-auto md:mx-0">
            Weaknesses
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {pokemon.weakenesses.map((weakeness) => {
              const [bg, text] = typeColors[weakeness].split(" ");
              return (
                <span
                  key={weakeness}
                  className={`rounded-full capitalize font-semibold text-xs py-1 w-16 border text-center ${bg} ${text} backdrop-brightness-200 shadow-lg`}
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
