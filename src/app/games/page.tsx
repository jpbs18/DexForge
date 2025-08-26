import GameClient from "@/components/games/GameClient";

export const metadata = {
  title: "Games | DexForge.com",
  description:
    "Play fun Pokémon games on DexForge, including Guess The Pokémon. Test your knowledge and discover all the Pokémon!",
  alternates: {
    canonical: "https://dex-forge.vercel.app/games",
  },
};

export default async function GamePage() {
  return <GameClient />;
}
