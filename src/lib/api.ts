import { Pokemon, PokemonDetails } from "@/models/pokemon";
import { BASE_URL, PREFETCH_LIMIT_PER_PAGE } from "./env.server";

export async function fetchAllPokemons(): Promise<Pokemon[]> {
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

export async function getPokemonDetails(id: string): Promise<PokemonDetails> {
  const res = await fetch(`${BASE_URL}/pokemons/${id}`);
  return await res.json();
}
