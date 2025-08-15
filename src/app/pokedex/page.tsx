import { fetchAllPokemons } from "@/lib/api";
import PokedexHeaderSection from "./PokedexHeaderSection";
import SearchAndListSection from "./SearchAndListSection";

export const revalidate = 86400;
export const metadata = {
  title: "Pokédex | DexForge.com",
};

export default async function PokedexPage() {
  const pokemons = await fetchAllPokemons();

  return (
    <main className="max-w-8xl mx-auto p-4">
      <PokedexHeaderSection />
      <SearchAndListSection pokemons={pokemons} />
    </main>
  );
}
