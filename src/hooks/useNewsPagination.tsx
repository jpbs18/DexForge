import { useState } from "react";
import { Article } from "@/models/news";
import { fetchPokemonNews } from "@/lib/api/news";

export function useNewsPagination(initialNews: Article[], initialPage = 2) {
  const [newsItems, setNewsItems] = useState<Article[]>(initialNews);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newArticles = await fetchPokemonNews(page);

      if (!newArticles || newArticles.length === 0) {
        setHasMore(false);
      } else {
        setNewsItems((prev) => [...prev, ...newArticles]);
        setPage((prev) => prev + 1);
      }
    } finally {
      setLoading(false);
    }
  };

  return { newsItems, loadMore, loading, hasMore };
}
