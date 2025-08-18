"use client";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-gray-100 animate-fade-slide-up">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        About{" "}
        <span className="text-yellow-300">DexForge</span>
      </h1>

      <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
        Welcome, Trainer! 🧢 This is your ultimate Pokémon companion — browse
        every Pokémon, explore their stats, discover evolutions, and build your
        dream team. Whether you’re just starting your journey or aiming to
        complete your Pokédex, DexForge is here to help you on your adventure.
      </p>

      <section className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong>Pokédex Search</strong> – Find Pokémon by name, type,
            generation, or base stats.
          </li>
          <li>
            <strong>Team Builder</strong> – Create and save your ideal battle
            team.
          </li>
          <li>
            <strong>Type Checker</strong> – Instantly see type advantages and
            weaknesses.
          </li>
          <li>
            <strong>Guess the Pokémon</strong> – Test your knowledge with fun
            sprite challenges.
          </li>
          <li>
            <strong>Leaderboards</strong> – Compete with Trainers worldwide for
            the highest scores.
          </li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-10 bg-gray-900 p-4 sm:p-6 rounded-lg shadow-sm text-white">
        <p className="italic text-sm sm:text-base">
          This site is an unofficial fan project. Pokémon and Pokémon character
          names are trademarks of Nintendo, Game Freak, and The Pokémon Company.
          Data and sprites are provided by PokéAPI and other community resources
        </p>
      </section>

      <section className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Behind the Pokédex
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          DexForge is a passion project by <strong>João Santos</strong>, a
          full-stack developer and lifelong Pokémon fan. Built with{" "}
          <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
          <strong>MongoDB</strong>, it fetches Pokémon data from public APIs to
          deliver a smooth and feature-rich experience for every Trainer.
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Credits</h2>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>
            Pokémon data from{" "}
            <a
              href="https://pokeapi.co/"
              className="hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              PokéAPI
            </a>
          </li>
          <li>Sprites and artwork from official Pokémon resources</li>
          <li>
            Pokémon series created by Nintendo, Game Freak, and The Pokémon
            Company
          </li>
          <li>
            UI and design inspired by{" "}
            <a
              href="https://www.pokemon.com"
              className="hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              the official Pokémon website
            </a>{" "}
            and{" "}
            <a
              href="https://pokemondb.net/"
              className="hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pokémon Database
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Connect with Me
        </h2>
        <p className="text-sm sm:text-base mb-4">
          Got feedback, ideas, or just want to talk Pokémon? Let’s connect!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-santos21/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0a66c2] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.447-2.137 2.939v5.667H9.004V9.5h3.112v1.493h.043c.434-.82 1.494-1.685 3.073-1.685 3.29 0 3.898 2.165 3.898 4.981v6.163zM5.337 8.008a1.804 1.804 0 110-3.609 1.804 1.804 0 010 3.609zM6.955 20.452H3.72V9.5h3.235v10.952zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.208 24 24 23.23 24 22.277V1.723C24 .77 23.208 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="https://github.com/jpbs18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.73.084-.73 
                1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 
                1.305 3.492.998.107-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 
                0-1.31.467-2.38 1.235-3.22-.123-.304-.535-1.527.117-3.176 
                0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.018.005 
                2.042.138 3.003.404 2.292-1.552 3.298-1.23 
                3.298-1.23.653 1.649.242 2.872.12 3.176.77.84 
                1.233 1.91 1.233 3.22 0 4.61-2.803 5.624-5.475 
                5.92.43.372.823 1.102.823 2.222 0 1.604-.015 
                2.896-.015 3.286 0 .319.216.694.825.576C20.565 
                22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
