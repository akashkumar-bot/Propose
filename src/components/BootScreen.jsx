import { Heart } from "lucide-react";
import { bootLines } from "../constants";

export default function BootScreen({ line }) {
  return (
    <div className="boot flex min-h-screen items-center justify-center px-4">
      <div className="boot-grid" />
      <div className="boot-content mx-auto w-full max-w-3xl">
        <div className="boot-brand">
          <span className="brand-mark">
            <Heart size={15} fill="currentColor" />
          </span>{" "}
          HEARTOS <span className="boot-version">v1.0.0</span>
        </div>
        <div className="terminal overflow-hidden rounded-2xl p-6 shadow-2xl md:p-8">
          {bootLines.slice(0, line).map((text, i) => (
            <div
              className={
                text.includes("Match") ? "terminal-line match" : "terminal-line"
              }
              key={text}
            >
              <span className="prompt">{i === 0 ? ">" : "·"}</span>
              {text}
            </div>
          ))}
          {line < bootLines.length ? (
            <div className="terminal-line typing">
              <span className="prompt">·</span>
              <span className="cursor" />{" "}
            </div>
          ) : (
            <div className="terminal-line loaded">
              <span className="prompt">✓</span>100% — Feelings successfully
              loaded.
            </div>
          )}
        </div>
        <div className="boot-progress">
          <div>
            <span>feelings.load</span>
            <span>
              {Math.min(100, Math.round((line / bootLines.length) * 100))}%
            </span>
          </div>
          <div className="bar">
            <b
              style={{
                width: `${Math.min(100, (line / bootLines.length) * 100)}%`,
              }}
            />
          </div>
        </div>
        <p className="boot-note">a small message, for someone extraordinary</p>
      </div>
    </div>
  );
}
