export default function PokedexInfo() {
  return (
    <section className="max-w-3xl mx-auto rounded-2xl p-4 mb-8 shadow-lg text-center flex flex-col gap-2 bg-gray-900">
      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
        This is a full list of every Pokémon from all 9 generations of the
        Pokémon series.
      </p>
      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
        You can search for a Pokémon by{" "}
        <span className="font-semibold text-pink-600">name</span> or{" "}
        <span className="font-semibold text-green-600">type</span>.
      </p>
    </section>
  );
}
