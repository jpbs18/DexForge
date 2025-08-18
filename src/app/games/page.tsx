import GuessThePokemon from "@/components/pokemon/GuessThePokemon";
import { fetchAllPokemons } from "@/lib/api";

export const metadata = {
  title: "Games | DexForge.com",
};

export default async function GamePage() {
  const pokemons = await fetchAllPokemons();

  return <GuessThePokemon pokemons={pokemons}/>;
}
