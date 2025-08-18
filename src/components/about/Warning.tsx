export default async function Warning() {
  return (
    <section className="mb-8 sm:mb-10 bg-gray-900 p-4 sm:p-6 rounded-lg shadow-sm text-white">
      <p className="italic text-sm sm:text-base">
        <span className="text-yellow-300">Warning:</span> This site is an
        unofficial fan project. Pokémon and Pokémon character names are
        trademarks of Nintendo, Game Freak, and The Pokémon Company. Data and
        sprites are provided by PokéAPI and other community resources
      </p>
    </section>
  );
}
