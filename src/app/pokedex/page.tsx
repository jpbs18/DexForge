import PokemonSearchAndFilter from "@/components/pokedex/PokemonSearchAndFilter";
import PokedexInfo from "@/components/pokedex/PokedexInfo";
import PokemonList from "@/components/pokedex/PokemonList";

export const revalidate = 86400;

export const metadata = {
  title: "Pokédex | DexForge.com",
  description:
    "Browse the complete Pokédex on DexForge. Search, filter, and explore stats, types, evolutions, and weaknesses for all Pokémon.",
  alternates: {
    canonical: "https://dex-forge.vercel.app/pokedex",
  },
};

export default async function PokedexPage() {
  return (
    <main className="max-w-8xl mx-auto p-4 animate-fade-slide-up">
      <PokedexInfo />
      <PokemonSearchAndFilter />
      <PokemonList />
    </main>
  );
}
