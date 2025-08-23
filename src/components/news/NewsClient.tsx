"use client";

import { useState } from "react";
import { fetchPokemonNews } from "@/lib/api";
import { Article } from "@/models/news";
import NewsCard from "@/components/news/NewsCard";
import Button from "@/components/UI/Button";
import { useNews } from "@/context/NewsContext";


export default function NewsClient() {
  const { news } = useNews();
  const [newsItems, setNewsItems] = useState<Article[]>(news);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setLoading(true);
    const newArticles = await fetchPokemonNews(page);

    if (!newArticles || newArticles.length === 0) {
      setHasMore(false);
    } else {
      setNewsItems((prev) => [...prev, ...newArticles]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 animate-fade-slide-up">
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <li key={item.url} className="animate-fade-slide-up">
            <NewsCard article={item} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}

      {!hasMore && (
        <p className="text-center text-gray-500 mt-6">
          No more news available.
        </p>
      )}
    </div>
  );
}
