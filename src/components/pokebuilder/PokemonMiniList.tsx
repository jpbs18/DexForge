import { Pokemon } from "@/models/pokemon";
import PokemonMiniCard from "./PokemonMiniCard";

export default function PokemonMiniList({
  filteredPokemons,
  visibleCount,
  addPokemon,
}: {
  filteredPokemons: Pokemon[];
  visibleCount: number;
  addPokemon: (p: Pokemon) => void;
}) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
      {filteredPokemons.slice(0, visibleCount).map((p) => (
        <li key={p.id}>
          <PokemonMiniCard pokemon={p} addPokemon={() => addPokemon(p)} />
        </li>
      ))}
    </ul>
  );
}
