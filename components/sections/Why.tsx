export default function Why() {
  return (
    <section id="why" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          The premise
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Why this exists
        </h2>

        <div className="mt-10 grid gap-10 text-base leading-relaxed text-muted md:grid-cols-3 md:gap-8">
          <p>
            Reinforcement learning environments for code-writing agents have
            settled into a familiar shape: a benchmark of problems, a pass/fail
            test, a sparse reward. That works for problems where the answer
            compiles or it doesn&rsquo;t. It collapses on problems where the
            answer is{" "}
            <span className="text-foreground">almost right</span> &mdash; which
            is most real bugs.
          </p>
          <p>
            <span className="text-foreground">sql-debug-env</span> hands the
            agent a working SQLite database, one broken query, and a one-line
            symptom like &ldquo;returns no rows, but rows exist.&rdquo; Before
            submitting a fix, the agent can describe tables, run read-only
            diagnostic SELECTs, and burn up to two oracle checks against a
            hidden expected output. Every action emits a reward.
          </p>
          <p>
            A five-dimension grader scores each submission independently: did
            it parse, did it pick the right columns, did the row count match,
            did the values match, did it order correctly. Difficulty-weighted,
            step-penalty discounted, clamped to{" "}
            <span className="text-foreground">(0.01, 0.99)</span>. An agent
            that fixes the join but misses a GROUP BY still gets a meaningful
            gradient &mdash; the kind a sparse pass/fail signal would never give
            it.
          </p>
        </div>
      </div>
    </section>
  );
}
