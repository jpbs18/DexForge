import { Pokemon } from "@/models/pokemon";
import PokemonTeamMember from "./PokemonTeamMember";

export default function TeamSection({
  team,
  removePokemon,
}: {
  team: Pokemon[];
  removePokemon: (id: number) => void;
}) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Your Team</h2>
      <ul className="flex flex-wrap justify-center gap-2">
        {team.map((p) => (
          <li
            key={p.id}
            className="flex-shrink-0 border rounded-xl p-2 flex flex-col items-center relative bg-gray-200 w-[120px] animate-fade-slide-up"
          >
            <PokemonTeamMember
              pokemon={p}
              removePokemon={() => removePokemon(p.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
