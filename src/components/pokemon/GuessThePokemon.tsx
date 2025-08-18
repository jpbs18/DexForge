"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Pokemon } from "@/models/pokemon";
import { AnimatePresence, motion } from "framer-motion";

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function GuessThePokemon({ pokemons }: { pokemons: Pokemon[] }) {
  const ROUNDS = 15;
  const [rounds, setRounds] = useState<Pokemon[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState(false);
  const isLastRound = currentRound === ROUNDS - 1;

  useEffect(() => {
    const shuffled = shuffleArray(pokemons).slice(0, ROUNDS);
    setRounds(shuffled);
  }, [pokemons]);

  useEffect(() => {
    if (rounds.length === 0) return;
    const pokemon = rounds[currentRound];
    setCurrentPokemon(pokemon);

    const wrongOptions = shuffleArray(
      pokemons.filter((p) => p.name !== pokemon.name).map((p) => p.name)
    ).slice(0, 3);

    setOptions(shuffleArray([pokemon.name, ...wrongOptions]));
    setSelected("");
    setShowAnswer(false);
  }, [rounds, currentRound, pokemons]);

  const handleSelect = (option: string) => {
    setSelected(option);
    setShowAnswer(true);
  };

  const handleReset = () => {
    setShowAnswer(false);
    setTimeout(() => {
      const shuffled = shuffleArray(pokemons).slice(0, ROUNDS);
      setRounds(shuffled);
      setCurrentRound(0);
    }, 200);
  };

  const handleNextRound = () => {
    setTimeout(() => {
      setCurrentRound((prev) => prev + 1);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 mt-4 animate-fade-slide-up">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 text-blue-400 dark:text-yellow-300 drop-shadow-lg">
        Who&apos;s This Pokémon?
      </h1>
      <div className="relative w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-60 lg:h-60 mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPokemon?.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            {currentPokemon?.front_default && (
              <Image
                src={currentPokemon.front_default}
                alt={currentPokemon.name}
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                className={`transition-all duration-500 ${
                  showAnswer ? "brightness-100" : "brightness-0"
                }`}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="h-10 sm:h-12 md:h-14 mb-4 text-center text-base sm:text-lg md:text-xl font-bold flex items-center justify-center">
        {showAnswer && selected && (
          <span
            className={
              isLastRound
                ? "text-yellow-500"
                : selected === currentPokemon?.name
                ? "text-green-500 animate-bounce"
                : "text-red-500 animate-shake"
            }
          >
            {isLastRound
              ? "🎉 Game Over!"
              : selected === currentPokemon?.name
              ? "Correct! 🎉"
              : `Wrong! It's ${currentPokemon?.name}`}
          </span>
        )}
      </div>
      <div className="w-6/12 sm:w-full max-w-md mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = option === currentPokemon?.name;

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={showAnswer}
              className={`py-2 sm:py-3 px-3 sm:px-4 rounded font-semibold text-white transition 
                ${
                  showAnswer && isSelected
                    ? isCorrect
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } capitalize text-sm sm:text-base`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <>
          {!isLastRound ? (
            <button
              onClick={handleNextRound}
              className="py-2 sm:py-3 px-5 sm:px-6 bg-yellow-500 rounded font-bold hover:bg-yellow-600 transition text-sm sm:text-base"
            >
              Next Pokémon
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="py-2 sm:py-3 px-5 sm:px-6 bg-green-500 rounded font-bold hover:bg-green-600 transition text-sm sm:text-base"
            >
              Play Again 🔄
            </button>
          )}
        </>
      )}
    </div>
  );
}
