"use client";

export default function Footer() {
  return (
    <footer className="py-6 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-700">
          © {new Date().getFullYear()} DexForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
