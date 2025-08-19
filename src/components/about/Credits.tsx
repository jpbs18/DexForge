import Link from "next/link";

export default async function Credits() {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Credits</h2>
      <ul className="list-disc space-y-1 pl-4 text-sm sm:text-base">
        <li>
          Pokémon data from{" "}
          <a
            href="https://pokeapi.co/"
            className="hover:underline text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokéAPI
          </a>
        </li>
        <li>Sprites and artwork from official Pokémon resources</li>
        <li>
          Pokémon series created by Nintendo, Game Freak, and The Pokémon
          Company
        </li>
        <li>
          UI and design inspired by{" "}
          <Link
            href="https://www.pokemon.com"
            className="hover:underline text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            the official Pokémon website
          </Link>{" "}
          and{" "}
          <Link
            href="https://pokemondb.net/"
            className="hover:underline text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pokémon Database
          </Link>
        </li>
      </ul>
    </section>
  );
}
