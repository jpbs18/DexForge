import PokemonList from "@/components/pokemon/PokemonList";
import { PokeData, Pokemon } from "@/models/pokemon";
import { pokemonTypes } from "@/utils/type-colors";


export const metadata = {
  title: "Pokédex | DexForge.com",
};

export default async function PokedexPage() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12`, { next: { revalidate: 86400 }});
  const data = await res.json();

  const pokemons: Pokemon[] = await Promise.all(
    data.results.map(async (data: PokeData) => {
        const res = await fetch(data.url, { next: { revalidate: 86400 }});
        return res.json();
    })
  )

  return (
    <main className="max-w-8xl mx-auto p-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text p-2">
        Complete Pokédex
      </h1>
      <section className="rounded-2xl p-4 mb-8 shadow-lg text-center flex flex-col gap-2 bg-[#2d323d] dark:bg-[#dee7ee]"> 
        <p className="text-lg md:text-xl text-gray-200 dark:text-gray-700 leading-relaxed">
          This is a full list of every Pokémon from all 9 generations of the Pokémon series.
        </p>
        <p className="text-lg md:text-xl text-gray-200 dark:text-gray-700 leading-relaxed">
          You can search for a Pokémon by <span className="font-semibold text-pink-600">name</span> or <span className="font-semibold text-green-600">type</span>.
        </p>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
      <div className="relative w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search Pokémon by name..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 pl-10 text-gray-800 focus:outline-none focus:ring-4 focus:ring-pink-500 shadow-sm"
        />
        <svg
          className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
          />
        </svg>
      </div>
      <select className="w-full md:w-1/4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-500 shadow-sm">
        <option value="">Filter by Type</option>
          {pokemonTypes.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
        ))}
      </select>
    </div>
      <PokemonList initialData={pokemons}/>
    </main>
  );
}
