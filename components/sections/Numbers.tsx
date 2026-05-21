const stats: Array<{ value: string; label: string; sub: string }> = [
  {
    value: "33",
    label: "tasks",
    sub: "across 5 difficulty tiers",
  },
  {
    value: "5",
    label: "grading dimensions",
    sub: "syntax · columns · rows · values · order",
  },
  {
    value: "8",
    label: "sandbox schemas",
    sub: "employees, orders, library, students, sales, ecommerce, hospital, projects",
  },
  {
    value: "0.774",
    label: "baseline score",
    sub: "average heuristic across all 33 tasks",
  },
];

export default function Numbers() {
  return (
    <section id="numbers" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          By the numbers
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          What&rsquo;s in the box
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface px-6 py-8 transition hover:bg-surface/60"
            >
              <p className="font-mono text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
