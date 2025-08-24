import NewsClient from "@/components/news/NewsClient";

export const revalidate = 28800;

export const metadata = {
  title: "News | DexForge.com",
  description: "Get access to the latest news about the Pokémon world!",
  alternates: {
    canonical: "https://dex-forge.vercel.app/news",
  },
};

export default async function NewsPage() {
  return (
    <div className="container mx-auto p-4 animate-fade-slide-up">
      <NewsClient />
    </div>
  );
}
