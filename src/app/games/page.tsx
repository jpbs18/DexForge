import GuessThePokemon from "@/components/games/GuessThePokemon";
import { fetchAllPokemons } from "@/lib/api";

export const metadata = {
  title: "Games | DexForge.com",
  description:
    "Play fun Pokémon games on DexForge, including Guess The Pokémon. Test your knowledge and discover all the Pokémon!",
  alternates: {
    canonical: "https://dex-forge.vercel.app/games",
  },
};

export default async function GamePage() {
  const pokemons = await fetchAllPokemons();

  return <GuessThePokemon pokemons={pokemons} />;
}
