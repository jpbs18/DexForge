"use client";

import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function LinkButton({ href, children, className }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg border-2 border-white hover:scale-105 transition-transform inline-block ${className}`}
    >
      {children}
    </Link>
  );
}
