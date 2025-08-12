import PokemonList from "@/components/pokemon/PokemonList";
import PokedexHeaderSection from "./PokedexHeaderSection";
import SearchAndFilterSection from "./SearchAndFilterSection";
import { Pokemon } from "@/models/pokemon";
import { GetBaseUrl } from "@/utils/environment";

export const revalidate = 86400;
export const metadata = {
  title: "Pokédex | DexForge.com",
};

async function fetchAllPokemons(): Promise<Pokemon[]>{
  const totalPokemons = 1025;
  const limit = 200;
  const totalPages = Math.ceil(totalPokemons / limit);
  const BASE_URL = GetBaseUrl();

  const fetchPromises = Array.from({ length: totalPages }, (_, i) =>
    fetch(`${BASE_URL}/pokemons?page=${i + 1}&limit=${200}`, 
      { next: { revalidate: 86400 }})
      .then(r => r.json())
  );

  const pages = await Promise.all(fetchPromises);
  return pages.flatMap(page => page.data);
}

export default async function PokedexPage() {
  const pokemons = await fetchAllPokemons();

  return (
    <main className="max-w-8xl mx-auto p-4">
      <PokedexHeaderSection />
      <SearchAndFilterSection />
      <PokemonList initialData={pokemons}/>
    </main>
  );
}
