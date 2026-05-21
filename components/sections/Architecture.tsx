export default function Architecture() {
  return (
    <section id="architecture" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Architecture
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Stateless on the wire, OpenEnv on both ends
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Any agent that speaks OpenEnv 1.0 can drive the environment over plain
          HTTP. Underneath, a FastAPI server holds a per-episode SQLite sandbox
          and a five-dimension grader.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-10">
          <svg
            viewBox="0 0 1000 360"
            className="h-auto w-full"
            role="img"
            aria-labelledby="arch-title"
          >
            <title id="arch-title">
              Architecture diagram: agent calls the OpenEnv HTTP API, which
              dispatches to a SQLite sandbox and grader, then returns
              observation and reward.
            </title>

            <defs>
              <marker
                id="arrowAccent"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 Z" fill="#F5A524" />
              </marker>
              <marker
                id="arrowMuted"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 Z" fill="#A1A1AA" />
              </marker>
            </defs>

            <g fontFamily="var(--font-mono, ui-monospace)">
              {/* Agent box */}
              <rect
                x="40"
                y="110"
                width="200"
                height="140"
                rx="14"
                fill="#0A0A0B"
                stroke="#26262A"
                strokeWidth="1.5"
              />
              <text
                x="140"
                y="155"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="11"
                letterSpacing="2"
              >
                LAYER 1
              </text>
              <text
                x="140"
                y="190"
                textAnchor="middle"
                fill="#F5F5F4"
                fontSize="20"
                fontWeight="500"
              >
                Agent
              </text>
              <text
                x="140"
                y="216"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="12"
              >
                any OpenEnv client
              </text>

              {/* FastAPI box */}
              <rect
                x="400"
                y="50"
                width="240"
                height="260"
                rx="14"
                fill="#141416"
                stroke="#F5A524"
                strokeWidth="1.5"
              />
              <text
                x="520"
                y="92"
                textAnchor="middle"
                fill="#F5A524"
                fontSize="11"
                letterSpacing="2"
              >
                LAYER 2
              </text>
              <text
                x="520"
                y="125"
                textAnchor="middle"
                fill="#F5F5F4"
                fontSize="20"
                fontWeight="500"
              >
                FastAPI server
              </text>
              <text
                x="520"
                y="148"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="12"
              >
                OpenEnv 1.0 over HTTP
              </text>
              <line
                x1="430"
                x2="610"
                y1="172"
                y2="172"
                stroke="#26262A"
                strokeWidth="1"
              />
              <text
                x="520"
                y="200"
                textAnchor="middle"
                fill="#F5F5F4"
                fontSize="13"
              >
                POST /reset
              </text>
              <text
                x="520"
                y="222"
                textAnchor="middle"
                fill="#F5F5F4"
                fontSize="13"
              >
                POST /step
              </text>
              <text
                x="520"
                y="244"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="13"
              >
                GET&nbsp;&nbsp;/tasks
              </text>
              <text
                x="520"
                y="266"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="13"
              >
                GET&nbsp;&nbsp;/health
              </text>

              {/* Sandbox + Grader box */}
              <rect
                x="800"
                y="60"
                width="160"
                height="110"
                rx="12"
                fill="#0A0A0B"
                stroke="#26262A"
                strokeWidth="1.5"
              />
              <text
                x="880"
                y="98"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="11"
                letterSpacing="2"
              >
                SANDBOX
              </text>
              <text
                x="880"
                y="122"
                textAnchor="middle"
                fill="#F5F5F4"
                fontSize="16"
                fontWeight="500"
              >
                SQLite
              </text>
              <text
                x="880"
                y="142"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="11"
              >
                per-episode DB
              </text>

              <rect
                x="800"
                y="190"
                width="160"
                height="110"
                rx="12"
                fill="#0A0A0B"
                stroke="#26262A"
                strokeWidth="1.5"
              />
              <text
                x="880"
                y="226"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="11"
                letterSpacing="2"
              >
                GRADER
              </text>
              <text
                x="880"
                y="250"
                textAnchor="middle"
                fill="#F5F5F4"
                fontSize="16"
                fontWeight="500"
              >
                5 dimensions
              </text>
              <text
                x="880"
                y="270"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="11"
              >
                weighted, clamped
              </text>

              {/* Arrows: Agent <-> API */}
              <line
                x1="245"
                x2="395"
                y1="160"
                y2="160"
                stroke="#F5A524"
                strokeWidth="1.5"
                markerEnd="url(#arrowAccent)"
              />
              <text
                x="320"
                y="148"
                textAnchor="middle"
                fill="#F5A524"
                fontSize="11"
              >
                action
              </text>

              <line
                x1="395"
                x2="245"
                y1="210"
                y2="210"
                stroke="#A1A1AA"
                strokeWidth="1.5"
                markerEnd="url(#arrowMuted)"
              />
              <text
                x="320"
                y="232"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="11"
              >
                observation, reward
              </text>

              {/* Arrows: API <-> Sandbox */}
              <line
                x1="645"
                x2="795"
                y1="115"
                y2="115"
                stroke="#A1A1AA"
                strokeWidth="1.5"
                markerEnd="url(#arrowMuted)"
              />
              <text
                x="720"
                y="105"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="11"
              >
                execute SQL
              </text>

              <line
                x1="645"
                x2="795"
                y1="245"
                y2="245"
                stroke="#A1A1AA"
                strokeWidth="1.5"
                markerEnd="url(#arrowMuted)"
              />
              <text
                x="720"
                y="237"
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="11"
              >
                grade output
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
