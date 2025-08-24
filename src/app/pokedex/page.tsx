import PokedexClient from "@/components/pokedex/PokedexClient";

export const revalidate = 86400;

export const metadata = {
  title: "Pokédex | DexForge.com",
  description:
    "Browse the complete Pokédex on DexForge. Search, filter, and explore stats, types, evolutions, and weaknesses for all Pokémon.",
  alternates: {
    canonical: "https://dex-forge.vercel.app/pokedex",
  },
};

export default async function PokedexPage() {
 return <PokedexClient />;
}
