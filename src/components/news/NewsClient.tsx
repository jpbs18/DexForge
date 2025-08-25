"use client";

import NewsCard from "@/components/news/NewsCard";
import Button from "@/components/UI/Button";
import { useNews } from "@/context/NewsContext";
import { useNewsPagination } from "@/hooks/useNewsPagination";

export default function NewsClient() {
  const { news } = useNews();
  const { newsItems, loadMore, loading, hasMore } = useNewsPagination(news);

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
