import Link from "next/link";

export default async function NavigationArrows({ id }: { id: string }) {
  const pokemonId = parseInt(id, 10);
  const prevId = pokemonId > 1 ? pokemonId - 1 : null;
  const nextId = pokemonId < 1025 ? pokemonId + 1 : null;

  return [
    {
      id: prevId,
      href: `/pokedex/${prevId}`,
      pos: "left-2 sm:left-3",
      symbol: "←",
    },
    {
      id: nextId,
      href: `/pokedex/${nextId}`,
      pos: "right-2 sm:right-3",
      symbol: "→",
    },
  ].map(({ id, href, pos, symbol }) =>
    id ? (
      <Link
        key={symbol}
        href={href}
        className={`absolute top-2 sm:top-3 ${pos} z-50                
                  text-gray-700 hover:text-gray-900
                   text-2xl sm:text-3xl leading-none`}
      >
        {symbol}
      </Link>
    ) : null
  );
}
