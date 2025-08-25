import { useEffect, useState } from "react";
import { Pokemon } from "@/models/pokemon";
import { shuffleArray } from "@/utils/methods";

export function usePokemonGame(pokemons: Pokemon[], roundsCount: number = 15) {
  const [rounds, setRounds] = useState<Pokemon[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [options, setOptions] = useState<string[]>([]);

  const isLastRound = currentIndex === roundsCount - 1;
  const currentPokemon = rounds[currentIndex];
  const pokemonNames = pokemons.map((p) => p.name);

  useEffect(() => {
    if (!currentPokemon) return;

    const wrongOptions = shuffleArray(
      pokemonNames.filter((name) => name !== currentPokemon.name)
    ).slice(0, 3);

    setOptions(shuffleArray([currentPokemon.name, ...wrongOptions]));
  }, [currentIndex, rounds]);

  useEffect(() => {
    const shuffled = shuffleArray(pokemons).slice(0, roundsCount);
    setRounds(shuffled);
  }, [pokemons, roundsCount]);

  useEffect(() => {
    if (rounds.length === 0) return;

    setSelected("");
    setShowAnswer(false);
  }, [rounds, currentIndex]);

  const handleSelect = (option: string) => {
    setSelected(option);
    setShowAnswer(true);
  };

  const handleNextRound = () => {
    setTimeout(() => setCurrentIndex((prev) => prev + 1), 200);
  };

  const handleReset = () => {
    setShowAnswer(false);
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
