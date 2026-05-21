const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  "https://anishkishore-sql-debug-env.hf.space";

export type GraderBreakdown = {
  syntax_valid: number;
  column_match: number;
  row_count_match: number;
  value_match: number;
  order_match: number;
  raw_score: number;
  step_penalty_factor: number;
  weights: Record<string, number>;
  error: string | null;
};

export type SqlDebugObservation = {
  task_id: string;
  difficulty: string;
  schema_sql: string;
  buggy_query: string;
  hint: string;
  query_result: string;
  check_result: string;
  diagnostic_result: string;
  action_type: string;
  is_error: boolean;
  last_action_error: string | null;
  steps_taken: number;
  max_steps: number;
  checks_remaining: number;
  grader_breakdown: GraderBreakdown | Record<string, never>;
  reward: number | null;
  done: boolean;
};

export type EnvResponse = {
  observation: SqlDebugObservation;
  reward: number | null;
  done: boolean;
};

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BACKEND_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`${path} returned ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function warmUp(): Promise<void> {
  try {
    await fetch(`${BACKEND_URL}/health`, { cache: "no-store" });
  } catch {
    // silent — warm-up is best-effort
  }
}

export function resetEpisode(taskId: string): Promise<EnvResponse> {
  return postJson<EnvResponse>("/reset", { task_id: taskId });
}

export function submitFix(query: string): Promise<EnvResponse> {
  return postJson<EnvResponse>("/step", {
    action: { action_type: "fix", query, table_name: "" },
  });
}

export async function gradeQuery(
  taskId: string,
  query: string,
): Promise<EnvResponse> {
  await resetEpisode(taskId);
  return submitFix(query);
}

export function hasBreakdown(
  gb: GraderBreakdown | Record<string, never> | undefined,
): gb is GraderBreakdown {
  return !!gb && typeof gb === "object" && "syntax_valid" in gb;
}
