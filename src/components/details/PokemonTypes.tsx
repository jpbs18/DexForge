import { typeColors } from "@/utils/stats";

export default function PokemonTypes({ types }: { types: string[] }) {
  return (
    <section className="mt-6 sm:mt-8 md:mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center md:text-left mx-auto md:mx-0">
        Types
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {types.map((type) => {
          const [bg, text] = typeColors[type].split(" ");
          return (
            <span
              key={type}
              className={`rounded-full capitalize font-semibold text-xs py-1 w-16 text-center border ${bg} ${text} backdrop-brightness-200 shadow-lg`}
            >
              {type}
            </span>
          );
        })}
      </div>
    </section>
  );
}
