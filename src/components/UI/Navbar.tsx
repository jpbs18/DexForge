"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/utils/links";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex justify-center gap-8 h-14 items-center">
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

        <div className="flex justify-end items-center h-14 md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-1 pb-4 pt-2">
                {navLinks.map(({ label, path, icon: Icon }) => (
                  <Link
                    key={path}
                    href={path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
