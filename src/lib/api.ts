import { Pokemon, PokemonDetails } from "@/models/pokemon";
import { BASE_URL, PREFETCH_LIMIT_PER_PAGE, TOTAL_AMOUNT } from "./env.server";
import { Article } from "@/models/news";
import { NEWS_API_KEY } from "./env.client";

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
  pageNumber: number
): Promise<Article[] | null> {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?qInTitle=pokemon&language=en&pageSize=12&page=${pageNumber}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`,
      {
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await res.json();

    return data.articles
      .filter((article: Article) => article.urlToImage)
      .map((article: Article) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        source: article.source,
      }));
  } catch (error) {
    console.error(`❌ Failed to fetch news:`, error);
    return null;
  }
}
