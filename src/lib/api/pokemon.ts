import { Pokemon, PokemonDetails } from "@/models/pokemon";
import { BASE_URL, PREFETCH_LIMIT_PER_PAGE, TOTAL_AMOUNT } from "../env/env.server";

export async function fetchAllPokemons(): Promise<Pokemon[]> {
  const totalPages = Math.ceil(TOTAL_AMOUNT / PREFETCH_LIMIT_PER_PAGE);

  const fetchPromises = Array.from({ length: totalPages }, (_, i) =>
    fetch(`${BASE_URL}/pokemons?page=${i + 1}&limit=${PREFETCH_LIMIT_PER_PAGE}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch page ${i + 1}: ${res.statusText}`);
        }
        const data = await res.json();
        return data as { data: Pokemon[] };
      })
      .catch((error) => {
        console.error(`❌ Error fetching Pokémons:`, error);
        return { data: [] };
      })
  );

  const pages = await Promise.all(fetchPromises);
  return pages.flatMap((page) => page.data);
}

export async function getPokemonDetails(
  id: string
): Promise<PokemonDetails | null> {
  try {
    const res = await fetch(`${BASE_URL}/pokemons/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch Pokémon ${id}: ${res.statusText}`);
    }

    return (await res.json()) as PokemonDetails;
  } catch (error) {
    console.error(`❌ Error fetching Pokémon details for id ${id}:`, error);
    return null;
  }
}