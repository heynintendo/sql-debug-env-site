import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Meta PyTorch &times; Scaler &nbsp;&middot;&nbsp; OpenEnv Hackathon
            </p>
            <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              An RL environment for training agents to{" "}
              <span className="text-accent">debug SQL</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Thirty-three broken queries, a five-dimension partial-credit
              grader, and an OpenEnv-compatible HTTP API for plugging in any
              agent.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:brightness-110"
              >
                Try a debugging task
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <a
                href="https://github.com/heynintendo/sql-debug-env"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-surface"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://huggingface.co/spaces/AnishKishore/sql-debug-env"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-surface"
              >
                HF&nbsp;Space
              </a>
            </div>
          </div>

          <HeroDemoCard />
        </div>
      </div>
    </section>
  );
}

function HeroDemoCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-3xl bg-accent-soft blur-3xl" />
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
        <div className="flex items-center gap-3 border-b border-border bg-background/40 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <span className="font-mono text-[11px] tracking-wide text-muted">
            hard_01_null_equality.sql
          </span>
        </div>

        <div className="space-y-5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
          <div>
            <p className="hero-line text-muted">-- buggy</p>
            <p className="hero-line mt-1" style={{ animationDelay: "0s" }}>
              <span className="text-muted">SELECT</span>{" "}
              <span className="text-foreground">full_name</span>{" "}
              <span className="text-muted">FROM</span>{" "}
              <span className="text-foreground">employees</span>
            </p>
            <p className="hero-line" style={{ animationDelay: "0.2s" }}>
              <span className="text-muted">WHERE</span>{" "}
              <span className="text-foreground">manager_id</span>{" "}
              <span className="hero-strike text-error">= NULL</span>
            </p>
            <p className="hero-line" style={{ animationDelay: "0.4s" }}>
              <span className="text-muted">ORDER&nbsp;BY</span>{" "}
              <span className="text-foreground">emp_id</span>;
            </p>
          </div>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px flex-1 bg-border" />
            <span>agent&nbsp;fix</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div>
            <p
              className="hero-line text-muted"
              style={{ animationDelay: "1.3s" }}
            >
              -- fix
            </p>
            <p
              className="hero-line mt-1"
              style={{ animationDelay: "1.3s" }}
            >
              <span className="text-muted">SELECT</span>{" "}
              <span className="text-foreground">full_name</span>{" "}
              <span className="text-muted">FROM</span>{" "}
              <span className="text-foreground">employees</span>
            </p>
            <p className="hero-line" style={{ animationDelay: "1.5s" }}>
              <span className="text-muted">WHERE</span>{" "}
              <span className="text-foreground">manager_id</span>{" "}
              <span className="rounded bg-accent-soft px-1 text-accent">
                IS NULL
              </span>
            </p>
            <p className="hero-line" style={{ animationDelay: "1.7s" }}>
              <span className="text-muted">ORDER&nbsp;BY</span>{" "}
              <span className="text-foreground">emp_id</span>;
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="hero-badge inline-flex items-center gap-1.5 rounded-md border border-success/30 bg-success/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              passed
            </span>
            <span className="hero-badge text-[11px] text-muted">
              reward <span className="text-success">0.98</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
