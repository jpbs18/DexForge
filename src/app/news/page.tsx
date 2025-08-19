"use client";

import { useState, useEffect } from "react";
import { Article } from "@/models/news";
import { fetchPokemonNews } from "@/lib/api";
import NewsCard from "@/components/news/NewsCard";
import Button from "@/components/UI/Button";

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadNews(page);
  }, [page]);

  const loadNews = async (pageNumber: number) => {
    setLoading(true);
    const newArticles = await fetchPokemonNews(pageNumber);

    if (!newArticles || newArticles.length === 0) {
      setHasMore(false);
    } else {
      setNewsItems((prev) => [...prev, ...newArticles]);
    }

    setLoading(false);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadNews(nextPage);
  };

  return (
    <div className="container mx-auto p-4 animate-fade-slide-up">
      <h1 className="text-3xl md:text-4xl text-center font-bold my-8 text-yellow-300 ">Latest Pokémon News</h1>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <li
            key={`${index}-item.description`}
            className="animate-fade-slide-up"
          >
            <NewsCard article={item} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <div className="flex justify-center mt-6">
          <Button onClick={handleLoadMore} disabled={loading}>
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
