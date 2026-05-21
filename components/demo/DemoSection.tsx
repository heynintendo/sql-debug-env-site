"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { DEMO_TASKS } from "@/lib/tasks";
import { gradeQuery, warmUp, type EnvResponse } from "@/lib/api";
import TaskSelector from "./TaskSelector";
import TaskCard from "./TaskCard";
import SqlEditor from "./SqlEditor";
import ResultPanel from "./ResultPanel";

export default function DemoSection() {
  const [selectedId, setSelectedId] = useState(DEMO_TASKS[0].id);
  const selected = DEMO_TASKS.find((t) => t.id === selectedId) ?? DEMO_TASKS[0];

  const [query, setQuery] = useState(selected.buggyQuery);
  const [loading, setLoading] = useState(false);
  const [warming, setWarming] = useState(false);
  const [response, setResponse] = useState<EnvResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const lastTaskRef = useRef(selectedId);

  useEffect(() => {
    warmUp();
  }, []);

  useEffect(() => {
    if (lastTaskRef.current === selectedId) return;
    lastTaskRef.current = selectedId;
    setQuery(selected.buggyQuery);
    setResponse(null);
    setError(null);
  }, [selectedId, selected.buggyQuery]);

  async function handleSubmit() {
    setLoading(true);
    setError(null);
    setResponse(null);

    const warmTimer = setTimeout(() => setWarming(true), 3000);
    try {
      const result = await gradeQuery(selectedId, query);
      setResponse(result);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Unknown request error");
    } finally {
      clearTimeout(warmTimer);
      setWarming(false);
      setLoading(false);
    }
  }

  function handleReset() {
    setQuery(selected.buggyQuery);
    setResponse(null);
    setError(null);
  }

  const submitLabel = warming
    ? "Warming up the environment (this can take up to a minute on first load)…"
    : loading
      ? "Grading your fix…"
      : "Submit fix";

  return (
    <section id="demo" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Try it
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Submit a fix against the live grader
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Pick a task, edit the SQL, hit submit. Your fix goes to the live
          Hugging Face Space, runs against a real SQLite sandbox, and is scored
          on five dimensions. First request may be slow if the Space is asleep.
        </p>

        <div className="mt-10 space-y-6">
          <TaskSelector
            tasks={DEMO_TASKS}
            selectedId={selectedId}
            onSelect={setSelectedId}
            disabled={loading}
          />

          <TaskCard task={selected} />

          <SqlEditor value={query} onChange={setQuery} disabled={loading} />

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:brightness-110 disabled:cursor-not-allowed disabled:bg-accent/60 disabled:hover:brightness-100"
            >
              {submitLabel}
              {!loading && (
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  aria-hidden
                />
              )}
            </button>
            <button
              type="button"
              onClick={handleReset}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-50"
            >
              Reset to buggy
            </button>
            <span className="font-mono text-[11px] text-muted">
              POST <span className="text-foreground">/reset</span> &rarr;{" "}
              <span className="text-foreground">/step</span>
            </span>
          </div>

          <ResultPanel response={response} error={error} />
        </div>
      </div>
    </section>
  );
}
