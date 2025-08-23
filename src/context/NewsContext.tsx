"use client";

import { Article } from "@/models/news";
import { createContext, useContext, useState, ReactNode } from "react";

interface NewsContextType {
  news: Article[];
  setNews: (news: Article[]) => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({
  children,
  initialNews,
}: {
  children: ReactNode;
  initialNews: Article[];
}) {
  const [news, setNews] = useState<Article[]>(initialNews);

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
}

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};
