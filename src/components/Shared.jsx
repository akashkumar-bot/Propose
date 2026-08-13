import { ArrowRight } from "lucide-react";

export function SceneLabel({ number, title }) {
  return (
    <div className="scene-label flex w-max items-center gap-3 rounded-full border border-rose-200/10 bg-[#0d091066] px-[13px] py-[9px] font-mono text-[10px] uppercase tracking-[.2em] text-[var(--soft)] shadow-[0_10px_30px_#0006]">
      <span className="font-semibold text-[var(--champagne)]">{number}</span>
      <span>{title}</span>
      <i className="ml-1 h-px w-10 bg-gradient-to-r from-[var(--rose)] to-transparent" />
    </div>
  );
}

export function Next({ onClick, children = "Continue" }) {
  return (
    <button
      className="next inline-flex items-center gap-[10px] border-b border-rose-200/30 bg-transparent py-[11px] font-mono text-[11px] font-medium uppercase tracking-widest text-[var(--champagne)] transition hover:-translate-y-0.5 hover:gap-4 hover:border-[var(--soft)] hover:text-[var(--soft)]"
      onClick={onClick}
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}
