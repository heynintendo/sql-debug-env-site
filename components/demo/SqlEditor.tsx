"use client";

import dynamic from "next/dynamic";
import type { OnMount } from "@monaco-editor/react";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <EditorSkeleton />,
});

function EditorSkeleton() {
  return (
    <div className="flex h-[250px] flex-col gap-3 bg-background px-4 py-5">
      <div className="h-3 w-3/4 animate-pulse rounded bg-border" />
      <div className="h-3 w-1/2 animate-pulse rounded bg-border" />
      <div className="h-3 w-2/3 animate-pulse rounded bg-border" />
      <div className="h-3 w-1/3 animate-pulse rounded bg-border" />
      <p className="mt-auto font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        loading editor…
      </p>
    </div>
  );
}

export default function SqlEditor({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (next: string) => void;
  disabled?: boolean;
}) {
  const handleMount: OnMount = (editor, monaco) => {
    monaco.editor.defineTheme("sql-debug-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", foreground: "F5F5F4", background: "141416" },
        { token: "keyword.sql", foreground: "A1A1AA", fontStyle: "bold" },
        { token: "operator.sql", foreground: "F5A524" },
        { token: "predefined.sql", foreground: "F5A524" },
        { token: "string.sql", foreground: "4ADE80" },
        { token: "number.sql", foreground: "F5A524" },
        { token: "comment", foreground: "525258", fontStyle: "italic" },
      ],
      colors: {
        "editor.background": "#141416",
        "editor.foreground": "#F5F5F4",
        "editor.lineHighlightBackground": "#1A1A1D",
        "editorLineNumber.foreground": "#3F3F46",
        "editorLineNumber.activeForeground": "#A1A1AA",
        "editor.selectionBackground": "#F5A52433",
        "editorCursor.foreground": "#F5A524",
        "editorGutter.background": "#141416",
      },
    });
    monaco.editor.setTheme("sql-debug-dark");
    editor.updateOptions({ readOnly: disabled });
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          SQL editor
        </div>
        <span className="font-mono text-[10px] text-muted">edit & submit</span>
      </div>
      <Editor
        height="250px"
        defaultLanguage="sql"
        theme="sql-debug-dark"
        value={value}
        onChange={(v) => onChange(v ?? "")}
        onMount={handleMount}
        options={{
          fontFamily:
            "var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace",
          fontSize: 13,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          padding: { top: 16, bottom: 16 },
          renderLineHighlight: "all",
          readOnly: disabled,
          wordWrap: "on",
          tabSize: 2,
          lineNumbersMinChars: 3,
          folding: false,
          overviewRulerBorder: false,
          overviewRulerLanes: 0,
          scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
        }}
      />
    </div>
  );
}
