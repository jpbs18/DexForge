export default function TeamBuilderInfo() {
  return (
    <section className="max-w-3xl w-full mx-auto rounded-2xl p-6 my-8 shadow-lg flex flex-col gap-4 bg-gray-900 text-center">
      <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
        Build your perfect Pokémon team by selecting up to{" "}
        <span className="font-semibold">6 Pokémon</span> from the list below.
      </p>
      <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
        Click on a Pokémon to add it to your team. You can remove a Pokémon from
        your team by clicking the <span className="font-semibold">×</span>{" "}
        button on its card.
      </p>
      <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
        Your team’s <span className="font-semibold">weaknesses</span>,{" "}
        <span className="font-semibold">resistances</span>, and{" "}
        <span className="font-semibold">immunities</span> are calculated
        automatically based on the Pokémon types.
      </p>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        <span className="px-3 py-1 bg-red-400 rounded font-semibold text-sm sm:text-base">
          Weakness
        </span>
        <span className="px-3 py-1 bg-green-400 rounded font-semibold text-sm sm:text-base">
          Resistance
        </span>
        <span className="px-3 py-1 bg-yellow-400 rounded font-semibold text-sm sm:text-base">
          Immunity
        </span>
      </div>
    </section>
  );
}
