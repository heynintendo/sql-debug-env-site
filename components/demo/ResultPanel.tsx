import { hasBreakdown, type EnvResponse } from "@/lib/api";
import DimensionBar from "./DimensionBar";

const DIMENSIONS = [
  { key: "syntax_valid", label: "Syntax" },
  { key: "column_match", label: "Columns" },
  { key: "row_count_match", label: "Row count" },
  { key: "value_match", label: "Values" },
  { key: "order_match", label: "Order" },
] as const;

export default function ResultPanel({
  response,
  error,
}: {
  response: EnvResponse | null;
  error: string | null;
}) {
  if (error) {
    return (
      <div className="rounded-xl border border-error/40 bg-error/5 p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-error">
          Request failed
        </p>
        <p className="mt-2 font-mono text-sm text-foreground">{error}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The Hugging Face Space may be sleeping or rate-limiting. Wait a few
          seconds and try again. If it keeps failing, the backend logs are on
          the linked Space.
        </p>
      </div>
    );
  }

  if (!response) return null;

  const obs = response.observation;
  const score = response.reward ?? 0;

  const tone =
    score >= 0.8
      ? {
          number: "text-success",
          badgeText: "PASSED",
          badge:
            "bg-success/10 border-success/30 text-success",
        }
      : score >= 0.4
        ? {
            number: "text-accent",
            badgeText: "PARTIAL",
            badge: "bg-accent-soft border-accent/30 text-accent",
          }
        : {
            number: "text-error",
            badgeText: "FAILED",
            badge: "bg-error/10 border-error/30 text-error",
          };

  const breakdown = obs.grader_breakdown;
  const hasGrader = hasBreakdown(breakdown);

  return (
    <div className="space-y-6 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Reward
          </p>
          <p
            className={`mt-2 font-mono text-6xl font-medium leading-none tracking-tight tabular-nums ${tone.number}`}
          >
            {score.toFixed(2)}
          </p>
          <p className="mt-2 font-mono text-[11px] text-muted">
            clamp range (0.01, 0.99)
          </p>
        </div>
        <span
          className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${tone.badge}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {tone.badgeText}
        </span>
      </div>

      {hasGrader && (
        <div className="space-y-4 border-t border-border pt-6">
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Breakdown
            </p>
            <p className="font-mono text-[11px] text-muted">
              raw {breakdown.raw_score.toFixed(2)} &times; step penalty{" "}
              {breakdown.step_penalty_factor.toFixed(2)}
            </p>
          </div>
          {DIMENSIONS.map((dim) => (
            <DimensionBar
              key={dim.key}
              label={dim.label}
              score={breakdown[dim.key] ?? 0}
              weight={breakdown.weights?.[dim.key]}
            />
          ))}
        </div>
      )}

      {obs.is_error && obs.last_action_error && (
        <div className="rounded-md border border-error/30 bg-error/5 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-error">
            Execution error
          </p>
          <p className="mt-1 font-mono text-xs text-foreground">
            {obs.last_action_error}
          </p>
        </div>
      )}

      {obs.query_result && (
        <details className="group border-t border-border pt-6">
          <summary className="flex cursor-pointer items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted hover:text-foreground">
            <span>Query result</span>
            <span className="transition group-open:rotate-90">›</span>
          </summary>
          <pre className="mt-4 max-h-64 overflow-auto rounded-md border border-border bg-background p-4 font-mono text-xs leading-relaxed text-muted">
            {obs.query_result}
          </pre>
        </details>
      )}

      <details className="group border-t border-border pt-6">
        <summary className="flex cursor-pointer items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted hover:text-foreground">
          <span>View raw response</span>
          <span className="transition group-open:rotate-90">›</span>
        </summary>
        <pre className="mt-4 max-h-80 overflow-auto rounded-md border border-border bg-background p-4 font-mono text-[11px] leading-relaxed text-muted">
          {JSON.stringify(response, null, 2)}
        </pre>
      </details>
    </div>
  );
}
