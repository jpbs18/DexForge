"use client";

import React from "react";
import { Article } from "@/models/news";
import Link from "next/link";

function NewsCard({ article }: { article: Article }) {
  return (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow overflow-hidden flex flex-col h-full"
    >
      {article.urlToImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-48 w-full object-cover border-b-4 border-yellow-400"
          loading="lazy"
        />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
          {article.title}
        </h2>
        <p className="text-gray-600 flex-1 mb-3 line-clamp-3">
          {article.description}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="font-medium">{article.source.name}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(NewsCard);
