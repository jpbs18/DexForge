"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/utils/links";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Navbar() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const tabletVisibleCount = 5;
  const visibleLinksTablet = navLinks.slice(0, tabletVisibleCount);
  const moreLinksTablet = navLinks.slice(tabletVisibleCount);

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
        <div className="hidden md:flex lg:hidden justify-center gap-6 h-14 items-center relative">
          {visibleLinksTablet.map(({ label, path, icon: Icon }) => (
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
          {moreLinksTablet.length > 0 && (
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button className="px-3 py-2 rounded-md font-medium hover:bg-gray-800 flex items-center gap-1">
                <FiMoreHorizontal className="h-5 w-5" />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute right-0 mt-2 w-44 bg-gray-900 rounded-lg shadow-lg z-50"
                  >
                    <div className="flex flex-col py-2">
                      {moreLinksTablet.map(({ label, path, icon: Icon }) => (
                        <Link
                          key={path}
                          href={path}
                          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                            pathName === path
                              ? "bg-gray-700 text-yellow-400"
                              : "hover:bg-gray-700"
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
          )}
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
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
