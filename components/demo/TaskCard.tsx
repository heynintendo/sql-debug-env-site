import type { DemoTask } from "@/lib/tasks";

const difficultyBadge: Record<DemoTask["difficulty"], string> = {
  easy: "bg-success/10 text-success border-success/30",
  medium: "bg-accent-soft text-accent border-accent/30",
  hard: "bg-error/10 text-error border-error/30",
};

export default function TaskCard({ task }: { task: DemoTask }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span
          className={`rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] ${difficultyBadge[task.difficulty]}`}
        >
          {task.difficulty}
        </span>
        <span className="font-mono text-xs text-muted">{task.id}</span>
      </div>

      <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">
        {task.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-foreground">
        {task.problem}
      </p>
      <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-muted">
        <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-error" />
        <span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            symptom
          </span>{" "}
          <span className="text-foreground">{task.symptom}</span>
        </span>
      </p>

      <div className="mt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Schema
        </p>
        <pre className="mt-2 overflow-x-auto rounded-md border border-border bg-background p-4 font-mono text-xs leading-relaxed text-muted">
          {task.schemaPreview}
        </pre>
      </div>
    </div>
  );
}
