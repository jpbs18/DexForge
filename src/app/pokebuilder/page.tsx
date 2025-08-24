import PokemonBuilderClient from "@/components/pokebuilder/PokemonBuilderClient";

export const metadata = {
  title: "PokéBuilder | DexForge.com",
  description: "Assemble your team and check its strengths and weaknesses!",
  alternates: {
    canonical: "https://dex-forge.vercel.app/pokebuilder",
  },
};

export default async function TeamBuilder() {
  return <PokemonBuilderClient />;
}
