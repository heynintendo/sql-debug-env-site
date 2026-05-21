import { GithubIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          Built for the{" "}
          <span className="text-foreground">
            Meta PyTorch &times; Scaler OpenEnv Hackathon
          </span>
          .
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/heynintendo/sql-debug-env"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            Backend repo
          </a>
          <a
            href="https://huggingface.co/spaces/AnishKishore/sql-debug-env"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            HF Space
          </a>
        </div>
      </div>
    </footer>
  );
}
