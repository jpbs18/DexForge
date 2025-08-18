import { typeColors } from "@/utils/stats";

export default async function PokemonWeaknesses({
  weaknesses,
}: {
  weaknesses: string[];
}) {
  return (
    <section className="mt-6 sm:mt-8 md:mt-6">
      <h2 className="text-2xl font-semibold mb-4 capitalize text-center md:text-left mx-auto md:mx-0">
        Weaknesses
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {weaknesses.map((weakness) => {
          const [bg, text] = typeColors[weakness].split(" ");
          return (
            <span
              key={weakness}
              className={`rounded-full capitalize font-semibold text-xs py-1 w-16 border text-center ${bg} ${text} backdrop-brightness-200 shadow-lg`}
            >
              {weakness}
            </span>
          );
        })}
      </div>
    </section>
  );
}
