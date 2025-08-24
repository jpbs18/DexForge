"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/utils/links";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex justify-center gap-6 h-14 items-center">
          {navLinks.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-2 rounded-md font-medium transition-colors flex gap-2 items-center ${
                pathName === path
                  ? "bg-gray-700 text-yellow-400"
                  : "hover:bg-gray-800"
              }`}
            >
              {Icon && <Icon className="text-lg" />}
              {label}
            </Link>
          ))}
        </div>
        <div className="flex justify-around items-center h-14 md:flex lg:hidden w-full">
          {navLinks.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className={`flex flex-col items-center justify-center text-sm transition-colors ${
                pathName === path ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              {Icon && <Icon className="text-xl" />}
              <span className="text-xs">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
