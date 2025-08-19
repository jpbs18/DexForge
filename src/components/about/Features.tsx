export default async function Features() {
  return (
    <section className="mb-8 sm:mb-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Features</h2>
      <ul className="list-disc space-y-2 text-sm sm:text-base pl-4">
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
  );
}
