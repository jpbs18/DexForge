import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Not Found | DexForge.com",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow">
      <div className="mb-4 mx-8 relative w-[312px] h-[277px]">
        <Image src="/charizard.webp" alt="Charizard" priority fill sizes="(max-width: 768px) 100vw, 312px" style={{ objectFit: "contain" }}/>
      </div>
      <p className="text-gray-700 mb-6 mx-4 text-center sm:text-xl md:text-2xl">
        Oops! Don&apos;t worry... Charizard will take you back home!
      </p>
      <Link href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition-colors">
        Go back home
      </Link>
    </main>
  );
}
