import Image from "next/image";

export default async function PokemonEvolutions({ evolutions }: { evolutions: string[] }) {
  return (
    <section className="mt-6 sm:mt-8 md:mt-6">
      <h2 className="text-2xl font-semibold mb-4 capitalize text-center md:text-left mx-auto md:mx-0">
        Evolutions
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {evolutions.map((evo, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src={evo}
                  alt={`Evolution ${index + 1}`}
                  width={120}
                  height={120}
                  unoptimized
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            {index < evolutions.length - 1 && (
              <div className="flex items-center justify-center mt-1 mb-1 md:mx-2 md:my-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-90 md:rotate-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
