export default function DimensionBar({
  label,
  score,
  weight,
}: {
  label: string;
  score: number;
  weight?: number;
}) {
  const clamped = Math.max(0, Math.min(1, score));
  const pct = clamped * 100;

  const fillTone =
    clamped >= 0.8
      ? "bg-success"
      : clamped >= 0.4
        ? "bg-accent"
        : "bg-error";

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <p className="text-foreground">{label}</p>
        <div className="flex items-baseline gap-3 font-mono text-xs">
          {weight !== undefined && (
            <span className="text-muted">weight {weight.toFixed(2)}</span>
          )}
          <span className="text-foreground tabular-nums">
            {clamped.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-border">
        <div
          className={`h-full rounded-full transition-[width] duration-500 ease-out ${fillTone}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
