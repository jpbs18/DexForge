import PokedexHeaderSection from "./PokedexHeaderSection";
import { Pokemon } from "@/models/pokemon";
import { BASE_URL, PREFETCH_LIMIT_PER_PAGE } from "@/lib/env.server";
import SearchAndListSection from "./SearchAndListWrapper";

export const revalidate = 86400;
export const metadata = {
  title: "Pokédex | DexForge.com",
};

async function fetchAllPokemons(): Promise<Pokemon[]> {
  const totalPokemons = 1025;
  const totalPages = Math.ceil(totalPokemons / PREFETCH_LIMIT_PER_PAGE);

  const fetchPromises = Array.from({ length: totalPages }, (_, i) =>
    fetch(`${BASE_URL}/pokemons?page=${i + 1}&limit=${200}`, {
      next: { revalidate: 86400 },
    }).then((r) => r.json())
  );

  const pages = await Promise.all(fetchPromises);
  return pages.flatMap((page) => page.data);
}

export default async function PokedexPage() {
  const pokemons = await fetchAllPokemons();

  return (
    <main className="max-w-8xl mx-auto p-4">
      <PokedexHeaderSection />
      <SearchAndListSection pokemons={pokemons} />
    </main>
  );
}
