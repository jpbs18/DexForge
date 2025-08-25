import { useCallback, useEffect, useMemo, useState } from "react";
import { Pokemon } from "@/models/pokemon";
import { shuffleArray } from "@/utils/methods";

export function usePokemonGame(pokemons: Pokemon[], roundsCount: number = 15) {
  const [rounds, setRounds] = useState<Pokemon[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState(false);

  const isLastRound = currentIndex === roundsCount - 1;

  useEffect(() => {
    const shuffled = shuffleArray(pokemons).slice(0, roundsCount);
    setRounds(shuffled);
  }, [pokemons, roundsCount]);

  useEffect(() => {
    if (rounds.length === 0) return;
    setSelected("");
    setShowAnswer(false);
  }, [rounds, currentIndex]);

  const currentPokemon = useMemo(() => rounds[currentIndex], [rounds, currentIndex]);

  const pokemonNames = useMemo(() => pokemons.map(p => p.name), [pokemons]);

  const options = useMemo(() => {
    if (!currentPokemon) return [];
    const wrongOptions = shuffleArray(
      pokemonNames.filter(name => name !== currentPokemon.name)
    ).slice(0, 3);
    return shuffleArray([currentPokemon.name, ...wrongOptions]);
  }, [pokemonNames, currentPokemon]);

  const handleSelect = useCallback((option: string) => {
    setSelected(option);
    setShowAnswer(true);
  }, []);

  const handleNextRound = useCallback(() => {
    setTimeout(() => setCurrentIndex(prev => prev + 1), 200);
  }, []);

  const handleReset = useCallback(() => {
    setShowAnswer(false);
    setTimeout(() => {
      const shuffled = shuffleArray(pokemons).slice(0, roundsCount);
      setRounds(shuffled);
      setCurrentIndex(0);
    }, 200);
  }, [pokemons, roundsCount]);

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
