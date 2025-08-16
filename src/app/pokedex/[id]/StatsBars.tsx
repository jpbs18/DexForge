"use client";

import { Stats } from "@/models/pokemon";
import { maxStats } from "@/utils/stats";
import { useEffect, useState } from "react";

export default function StatBars({ stat }: { stat: Stats }) {
  const max = maxStats[stat.stat.name] || 100;
  const percentage = (stat.base_stat / max) * 100;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 50);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between mb-1 capitalize text-sm">
        <span>{stat.stat.name.replace("-", " ")}</span>
        <span>{stat.base_stat}</span>
      </div>
      <div className={`w-full h-3 bg-gray-600 rounded overflow-hidden`}>
        <div
          className={`h-3 rounded  bg-gray-300 transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
