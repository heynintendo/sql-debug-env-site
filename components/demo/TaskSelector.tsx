import type { DemoTask } from "@/lib/tasks";

export default function TaskSelector({
  tasks,
  selectedId,
  onSelect,
  disabled,
}: {
  tasks: DemoTask[];
  selectedId: string;
  onSelect: (id: string) => void;
  disabled?: boolean;
}) {
  return (
    <div
      role="tablist"
      aria-label="Demo task difficulty"
      className="grid grid-cols-1 gap-1.5 rounded-xl border border-border bg-surface p-1.5 sm:grid-cols-3"
    >
      {tasks.map((task) => {
        const active = task.id === selectedId;
        return (
          <button
            key={task.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(task.id)}
            disabled={disabled}
            className={
              "rounded-lg px-4 py-3 text-left transition disabled:cursor-not-allowed disabled:opacity-50 " +
              (active
                ? "bg-accent text-background"
                : "text-foreground hover:bg-background/40")
            }
          >
            <span
              className={
                "block font-mono text-[10px] uppercase tracking-[0.22em] " +
                (active ? "opacity-80" : "text-muted")
              }
            >
              {task.difficulty}
            </span>
            <span className="mt-1 block text-sm font-medium">
              {task.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}
