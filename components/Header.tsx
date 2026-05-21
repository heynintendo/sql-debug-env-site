import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-accent">{"=>"}</span>
          <span className="text-foreground">sql-debug-env</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <a
            href="#demo"
            className="rounded-md px-3 py-1.5 text-muted transition hover:text-foreground"
          >
            Demo
          </a>
          <a
            href="https://github.com/heynintendo/sql-debug-env"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted transition hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://huggingface.co/spaces/AnishKishore/sql-debug-env"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted transition hover:text-foreground"
          >
            <span className="hidden sm:inline">HF Space</span>
            <span className="sm:hidden">HF</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </nav>
      </div>
    </header>
  );
}
