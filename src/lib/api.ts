import { Pokemon, PokemonDetails } from "@/models/pokemon";
import { BASE_URL, PREFETCH_LIMIT_PER_PAGE, TOTAL_AMOUNT } from "./env.server";
import { Article } from "@/models/news";

export async function fetchAllPokemons(): Promise<Pokemon[]> {
  const totalPages = Math.ceil(TOTAL_AMOUNT / PREFETCH_LIMIT_PER_PAGE);

  const fetchPromises = Array.from({ length: totalPages }, (_, i) =>
    fetch(
      `${BASE_URL}/pokemons?page=${i + 1}&limit=${PREFETCH_LIMIT_PER_PAGE}`,
      { next: { revalidate: 86400 } }
    )
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
    const res = await fetch(`${BASE_URL}/pokemons/${id}`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Pokémon ${id}: ${res.statusText}`);
    }

    return (await res.json()) as PokemonDetails;
  } catch (error) {
    console.error(`❌ Error fetching Pokémon details for id ${id}:`, error);
    return null;
  }
}

export async function fetchPokemonNews(
  page: number
): Promise<Article[] | null> {
  try {
    const res = await fetch(`${BASE_URL}/news?pageSize=9&page=${page}`, {
      next: { revalidate: 28800 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const { articles } = await res.json();
    return articles;
  } catch (error) {
    console.error(`❌ Failed to fetch news:`, error);
    return null;
  }
}
