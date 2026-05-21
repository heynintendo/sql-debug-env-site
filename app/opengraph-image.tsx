import { ImageResponse } from "next/og";

export const alt =
  "sql-debug-env — an RL environment for training agents to debug SQL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          background:
            "radial-gradient(circle at 80% 10%, rgba(245,165,36,0.18), transparent 50%), #0A0A0B",
          color: "#F5F5F4",
          padding: "72px 80px",
          fontFamily:
            "Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            fontSize: 28,
            letterSpacing: "0.04em",
            color: "#F5F5F4",
          }}
        >
          <span style={{ color: "#F5A524", fontWeight: 700 }}>{"=>"}</span>
          <span>sql-debug-env</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            maxWidth: 980,
          }}
        >
          <p
            style={{
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#A1A1AA",
              margin: 0,
            }}
          >
            Meta PyTorch × Scaler · OpenEnv Hackathon
          </p>
          <h1
            style={{
              fontSize: 84,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              fontWeight: 500,
              margin: 0,
              color: "#F5F5F4",
            }}
          >
            An RL environment for training agents to{" "}
            <span style={{ color: "#F5A524" }}>debug SQL</span>.
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            fontSize: 20,
            color: "#A1A1AA",
          }}
        >
          <span>33 tasks</span>
          <span style={{ color: "#3F3F46" }}>·</span>
          <span>5 grading dimensions</span>
          <span style={{ color: "#3F3F46" }}>·</span>
          <span>OpenEnv 1.0 on FastAPI</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
