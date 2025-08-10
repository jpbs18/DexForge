"use client";

import { navLinks } from "@/utils/links";
import { getLinkClasses } from "@/utils/styles";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 bg-opacity-100 z-50" style={{ backgroundColor: "#dee7ee" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div style={{width: "220px", height: "120px" }}>
            <Link href="/" className="flex items-center relative h-[120px]">
              <Image
                src="/logo.png"
                alt="Pokémon official Logo"
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                style={{ objectFit: "contain" }}
                loading="eager"
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            {navLinks.map(({ label, path, icon }) => (
              <Link
                key={path}
                href={path}
                className={`${getLinkClasses(path, pathName)} flex items-center gap-2`}
              >
                {icon}
                {label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden flex items-center p-2 rounded-md text-indigo-700 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden overflow-hidden shadow-md z-50"
            style={{ backgroundColor: "#dee7ee" }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              {navLinks.map(({ label, path, icon }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setMenuOpen(false)}
                  className={getLinkClasses(path, pathName, true)}
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
