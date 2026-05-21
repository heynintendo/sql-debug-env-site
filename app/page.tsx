import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import Numbers from "@/components/sections/Numbers";
import Architecture from "@/components/sections/Architecture";
import Credit from "@/components/sections/Credit";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Numbers />
      <Architecture />

      <section id="demo" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Try it
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Interactive demo
          </h2>
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface p-12 text-center">
            <p className="font-mono text-sm text-muted">
              Interactive editor &amp; grader UI &mdash; built in Phase 3.
            </p>
          </div>
        </div>
      </section>

      <Credit />
    </>
  );
}
