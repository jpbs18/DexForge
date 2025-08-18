"use client";

import { Stats } from "@/models/pokemon";
import { useEffect, useState } from "react";

export default function PokemonStatBars({ stat }: { stat: Stats }) {
  const percentage = (stat.base_stat / 255) * 100;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 50);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <>
      <div className="flex justify-between mb-1 capitalize text-sm">
        <span>{stat.stat.name.replace("-", " ")}</span>
        <span>{stat.base_stat}</span>
      </div>
      <div
        className={`w-full h-3 bg-gray-400 rounded overflow-hidden`}
      >
        <div
          className={`h-3 rounded bg-gray-700 transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </>
  );
}
