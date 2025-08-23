import { PokemonDetails } from "@/models/pokemon";
import Image from "next/image";

export default async function PokemonMainInfo({
  details,
}: {
  details: PokemonDetails;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
      <div className="relative w-48 h-48 flex-shrink-0">
        <Image
          src={details.image}
          alt={details.name}
          sizes="(max-width: 768px) 192px, 192px"
          fill
          className="object-contain"
          unoptimized
          priority
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-8 text-center md:text-left mx-auto md:mx-0">
          #{details.id} {details.name}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Height:</span>{" "}
            {(details.height / 10).toFixed(1)} m
          </div>
          <div>
            <span className="font-semibold">Weight:</span>{" "}
            {(details.weight / 10).toFixed(1)} kg
          </div>
          <div>
            <span className="font-semibold">Gender:</span>{" "}
            {details.genders
              .map((g) =>
                g.toLowerCase() === "male"
                  ? "♂"
                  : g.toLowerCase() === "female"
                  ? "♀"
                  : g
              )
              .join(" / ")}
          </div>
          <div>
            <span className="font-semibold">Category:</span>{" "}
            {details.category.split(" ")[0]}
          </div>
          <div className="whitespace-nowrap capitalize">
            <span className="font-semibold">Abilities:</span>{" "}
            {details.abilities.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}
