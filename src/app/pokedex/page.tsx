import PokemonList from "@/components/pokemon/PokemonList";
import { PokeData, Pokemon } from "@/models/pokemon";
import PokedexHeaderSection from "./PokedexHeaderSection";
import SearchAndFilterSection from "./SearchAndFilterSection";

export const metadata = {
  title: "Pokédex | DexForge.com",
};

export default async function PokedexPage() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=15`, { next: { revalidate: 86400 }});
  const data = await res.json();

  const pokemons: Pokemon[] = await Promise.all(
    data.results.map(async (data: PokeData) => {
        const res = await fetch(data.url, { next: { revalidate: 86400 }});
        return res.json();
    })
  )

  return (
    <main className="max-w-8xl mx-auto p-4">
      <PokedexHeaderSection />
      <SearchAndFilterSection />
      <PokemonList initialData={pokemons}/>
    </main>
  );
}
