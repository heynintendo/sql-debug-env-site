import type { DemoTask } from "@/lib/tasks";

export default function MobileFallback({ task }: { task: DemoTask }) {
  const fixed = applyMockFix(task);
  return (
    <div className="space-y-5 rounded-xl border border-dashed border-border bg-surface p-6">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
        <p className="text-sm leading-relaxed text-foreground">
          The interactive demo is best on desktop. Tap below to view a static
          example, or open this page on a laptop to submit your own fix to the
          live grader.
        </p>
      </div>

      <details className="group rounded-lg border border-border bg-background">
        <summary className="flex cursor-pointer items-center justify-between px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted hover:text-foreground">
          <span>Static example &mdash; {task.id}</span>
          <span className="transition group-open:rotate-90">›</span>
        </summary>
        <div className="space-y-4 border-t border-border p-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Buggy
            </p>
            <pre className="mt-2 overflow-x-auto rounded-md border border-border bg-background p-3 font-mono text-[11px] leading-relaxed text-error">
              {task.buggyQuery}
            </pre>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Fixed
            </p>
            <pre className="mt-2 overflow-x-auto rounded-md border border-border bg-background p-3 font-mono text-[11px] leading-relaxed text-success">
              {fixed}
            </pre>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-3 text-[11px]">
            <span className="inline-flex items-center gap-1.5 rounded border border-success/30 bg-success/10 px-2 py-0.5 font-mono font-semibold uppercase tracking-wider text-success">
              <span className="h-1 w-1 rounded-full bg-success" />
              passed
            </span>
            <span className="font-mono text-muted">
              reward <span className="text-success">0.98</span>
            </span>
          </div>
        </div>
      </details>
    </div>
  );
}

function applyMockFix(task: DemoTask): string {
  switch (task.id) {
    case "easy_01_typo":
      return task.buggyQuery.replace("SELCT", "SELECT");
    case "medium_02_missing_group_by":
      return task.buggyQuery.replace(
        /FROM customers\s*$/m,
        "FROM customers\nGROUP BY country",
      );
    case "hard_01_null_equality":
      return task.buggyQuery.replace("= NULL", "IS NULL");
    default:
      return task.buggyQuery;
  }
}
