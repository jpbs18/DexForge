"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../UI/Button";
import { usePokemonGame } from "@/hooks/usePokemonGame";
import { usePokemon } from "@/context/PokemonContext";

export default function GameClient() {
  const { pokemons } = usePokemon();

  const {
    currentPokemon,
    options,
    selected,
    showAnswer,
    isLastRound,
    handleSelect,
    handleNextRound,
    handleReset,
  } = usePokemonGame(pokemons);

  const feedbackMessage = () => {
    if (!showAnswer || !selected) return null;
    if (isLastRound) return "🎉 Game Over!";

    return selected === currentPokemon.name
      ? "Correct! 🎉"
      : `Wrong! It's ${currentPokemon.name}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 mt-4 animate-fade-slide-up">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-yellow-300 drop-shadow-lg">
        Who&apos;s This Pokémon?
      </h1>
      <div className="relative w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-60 lg:h-60 mb-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPokemon?.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            {currentPokemon?.image && (
              <Image
                src={currentPokemon.image}
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
                : selected === currentPokemon.name
                ? "text-green-500 animate-bounce"
                : "text-red-500 animate-shake"
            }
          >
            {feedbackMessage()}
          </span>
        )}
      </div>
      <div className="w-6/12 sm:w-full max-w-md mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = option === currentPokemon.name;

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={showAnswer}
              className={`py-2 sm:py-3 px-3 sm:px-4 rounded font-semibold text-white transition text-sm sm:text-base
                ${
                  showAnswer && isSelected
                    ? isCorrect
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <Button onClick={!isLastRound ? handleNextRound : handleReset}>
          {!isLastRound ? "Next Pokémon" : "Play Again 🔄"}
        </Button>
      )}
    </div>
  );
}
