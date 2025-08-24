import { Article } from "@/models/news";
import { BASE_URL } from "../env/env.server";

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