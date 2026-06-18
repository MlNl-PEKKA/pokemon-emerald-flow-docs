export const Introduction = () => {
  return (
    <section
      id="introduction"
      className="mx-auto flex w-full max-w-4xl flex-col gap-24 py-32"
    >
      <section id="welcome" className="scroll-mt-16">
        <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>

        <div className="text-muted-foreground mt-8 space-y-4 text-lg leading-8">
          <p>
            Pokemon Emerald Flow is an enhancement project built on top of and
            for Pokémon Emerald.
          </p>

          <p>
            Its purpose is simple: preserve the original experience while
            removing unnecessary friction.
          </p>

          <p>
            Every feature is designed to feel natural, optional, and faithful to
            the spirit of Hoenn.
          </p>

          <p>Classic Emerald. Better Flow.</p>
        </div>
      </section>

      <section id="goals" className="scroll-mt-16">
        <h1 className="text-4xl font-bold tracking-tight">Goals</h1>

        <ul className="text-muted-foreground mt-8 ml-6 list-disc space-y-4 text-lg leading-8">
          <li>Respect player choice.</li>
          <li>Reduce friction.</li>
          <li>Modernize when necessary.</li>
          <li>Retain the core experience.</li>
        </ul>
      </section>
    </section>
  );
};
