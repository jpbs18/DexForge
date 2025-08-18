import { fetchAllPokemons } from "@/lib/api";
import PokemonSearchAndListSection from "../../components/details/PokemonSearchAndListSection";
import PokedexInfo from "@/components/pokedex/PokedexInfo";

export const revalidate = 86400;
export const metadata = {
  title: "Pokédex | DexForge.com",
};

export default async function PokedexPage() {
  const pokemons = await fetchAllPokemons();

  return (
    <main className="max-w-8xl mx-auto p-4">
      <PokedexInfo />
      <PokemonSearchAndListSection pokemons={pokemons} />
    </main>
  );
}
