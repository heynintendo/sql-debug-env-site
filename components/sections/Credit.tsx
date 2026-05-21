import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const links: Array<{ label: string; href: string; icon: "github" | "ext" }> = [
  {
    label: "Backend repo",
    href: "https://github.com/heynintendo/sql-debug-env",
    icon: "github",
  },
  {
    label: "Hugging Face Space",
    href: "https://huggingface.co/spaces/AnishKishore/sql-debug-env",
    icon: "ext",
  },
  {
    label: "OpenEnv spec",
    href: "https://github.com/meta-pytorch/OpenEnv",
    icon: "ext",
  },
];

export default function Credit() {
  return (
    <section id="credit" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Built for
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          The Meta PyTorch &times; Scaler OpenEnv Hackathon
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Implements the OpenEnv 1.0 protocol over FastAPI and ships on Hugging
          Face Spaces. Designed to drop into any RL training loop that speaks
          the spec.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              {link.icon === "github" ? (
                <GithubIcon className="h-4 w-4" />
              ) : (
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
