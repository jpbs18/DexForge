import { getPokemonDetails } from "@/lib/api";
import PokemonStats from "@/components/details/PokemonStats";
import PokemonEvolutions from "@/components/details/PokemonEvolutions";
import PokemonTypes from "@/components/details/PokemonTypes";
import PokemonWeaknesses from "@/components/details/PokemonWeaknesses";
import PokemonMainInfo from "@/components/details/PokemonMainInfo";
import NavigationArrows from "@/components/details/NavigationArrows";

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await getPokemonDetails(id);
  return {
    title: pokemon
      ? `${pokemon.name} | DexForge.com`
      : "Pokémon | DexForge.com",
  };
}

export default async function PokemonDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await getPokemonDetails(id);

  if (!pokemon) {
    return (
      <main className="flex justify-center items-center flex-grow">
        <p className="text-2xl font-semibold">Pokémon not found.</p>
      </main>
    );
  }

  return (
    <main className="flex justify-center m-6 animate-fade-slide-up relative">
      <div className="relative w-full max-w-2xl lg:max-w-3xl bg-gray-300 text-gray-800 rounded-xl shadow-lg p-6">
        <NavigationArrows id={id} />
        <PokemonMainInfo details={pokemon} />
        <PokemonStats stats={pokemon.stats} />
        <PokemonEvolutions evolutions={pokemon.evolutions} />
        <PokemonTypes types={pokemon.types} />
        <PokemonWeaknesses weaknesses={pokemon.weaknesses} />
      </div>
    </main>
  );
}
