export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="font-mono text-sm text-muted">Hero — built in Phase 2</p>
        </div>
      </section>

      <section id="why" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="font-mono text-sm text-muted">
            Why this exists — built in Phase 2
          </p>
        </div>
      </section>

      <section id="numbers" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="font-mono text-sm text-muted">
            By the numbers — built in Phase 2
          </p>
        </div>
      </section>

      <section id="architecture" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="font-mono text-sm text-muted">
            Architecture — built in Phase 2
          </p>
        </div>
      </section>

      <section id="demo" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="rounded-2xl border border-border bg-surface p-10 text-center">
            <p className="font-mono text-sm text-muted">
              Interactive demo loading in Phase 3.
            </p>
          </div>
        </div>
      </section>

      <section id="credit" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="font-mono text-sm text-muted">
            Built for — finalized in Phase 2
          </p>
        </div>
      </section>
    </>
  );
}
