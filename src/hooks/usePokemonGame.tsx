import { useEffect, useMemo, useState } from "react";
import { Pokemon } from "@/models/pokemon";
import { shuffleArray } from "@/utils/methods";

export function usePokemonGame(pokemons: Pokemon[], roundsCount: number = 15) {
  const [rounds, setRounds] = useState<Pokemon[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState(false);

  const isLastRound = currentIndex === roundsCount - 1;
  const currentPokemon = rounds[currentIndex];
  const pokemonNames = pokemons.map((p) => p.name);

  const options = useMemo(() => {
    if (!currentPokemon) return [];

    const wrongOptions = shuffleArray(
      pokemonNames.filter((name) => name !== currentPokemon.name)
    ).slice(0, 3);

    return shuffleArray([currentPokemon.name, ...wrongOptions]);
  }, [currentPokemon]);

  useEffect(() => {
    const shuffled = shuffleArray(pokemons).slice(0, roundsCount);
    setRounds(shuffled);
  }, []);

  const handleSelect = (pokemonName: string) => {
    setSelected(pokemonName);
    setShowAnswer(true);
  };

  const handleNextRound = () => {
    setShowAnswer(false);
    setSelected("");
    setTimeout(() => setCurrentIndex((prev) => prev + 1), 200);
  };

  const handleReset = () => {
    setShowAnswer(false);
    setSelected("");
    setTimeout(() => {
      const shuffled = shuffleArray(pokemons).slice(0, roundsCount);
      setRounds(shuffled);
      setCurrentIndex(0);
    }, 200);
  };

  return {
    currentPokemon,
    options,
    selected,
    showAnswer,
    isLastRound,
    handleSelect,
    handleNextRound,
    handleReset,
  };
}
