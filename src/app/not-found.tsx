import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Not Found | DexForge.com",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow">
      <div className="mb-4 mx-8 relative w-[240px] h-[185px] md:w-[360px] md:h-[277px] lg:w-[480px] lg:h-[370px]">
        <Image 
          src="/lapras.webp" 
          alt="Lapras" 
          priority 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px" 
          style={{ objectFit: "contain" }}
      />
      </div>
      <p className="text-gray-700 dark:text-gray-200 mb-6 mx-4 text-center sm:text-xl md:text-2xl">
        Oops! Don&apos;t worry... Lapras will take you back home!
      </p>
      <Link href="/" className="bg-[#be0000] hover:bg-[#f80101] text-white px-4 py-2 rounded-md transition-colors">
        Go back home
      </Link>
    </main>
  );
}
