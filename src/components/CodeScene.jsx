import { Code2 } from "lucide-react";
import { Next, SceneLabel } from "./Shared";

export default function CodeScene({ onNext }) {
  return (
    <div className="scene fade-up mx-auto w-full max-w-4xl">
      <SceneLabel number="02" title="putting it simply" />
      <div className="code-intro mt-[45px] mb-7 max-w-[700px]">
        <h2 className="mb-5 font-serif text-[clamp(42px,5vw,66px)] leading-[1.05] font-medium tracking-tight text-[var(--text-primary)] [text-shadow:0_0_25px_rgba(255,130,160,.25)]">
          Some feelings are
          <br />
          <em className="italic text-[var(--champagne)]">best expressed</em> in
          code.
        </h2>
        <p className="text-sm text-[var(--text-secondary)]">
          Because apparently, this is the language I know best.
        </p>
      </div>
      <div className="editor mx-auto max-w-[760px] overflow-hidden rounded-[10px] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_20px_60px_rgba(0,0,0,.35),0_0_40px_var(--romantic-glow)] backdrop-blur-lg transition duration-300 hover:border-[rgba(242,213,196,.46)] hover:shadow-[0_30px_90px_rgba(0,0,0,.42),0_0_58px_rgba(255,91,135,.28),inset_0_1px_rgba(255,255,255,.18)]">
        <div className="editor-top flex h-[47px] items-center justify-between border-b border-[#d8b47a1b] bg-[#07070966] px-[17px] font-mono text-[10px] text-[var(--muted)]">
          <span className="dots flex gap-1">
            <i className="size-[7px] rounded-full bg-[#593340]" />
            <i className="size-[7px] rounded-full bg-[#856346]" />
            <i className="size-[7px] rounded-full bg-[#85526a]" />
          </span>
          <span className="file flex items-center gap-2 text-[var(--text-secondary)]">
            <Code2 size={13} /> feelings.js
          </span>
          <span className="lock text-[var(--champagne)]">private</span>
        </div>
        <pre className="m-0 overflow-auto bg-[linear-gradient(90deg,#0d0910,#120b11_52%,#0d0910)] px-[30px] py-7 [font-family:'JetBrains_Mono',monospace] text-[13px] leading-8 text-[var(--text-secondary)] max-sm:px-4 max-sm:py-5 max-sm:text-[10px]">
          <code>
            <span className="pink">const</span> myLife{" "}
            <span className="purple">=</span> {"{"}
            {`\n`} <span className="blue">happiness</span>:{" "}
            <span className="orange">true</span>,{`\n`}{" "}
            <span className="blue">favoritePerson</span>:{" "}
            <span className="green">"You ♥"</span>,{`\n`}{" "}
            <span className="blue">feelings</span>:{" "}
            <span className="green">"More than I expected"</span>
            {`\n`}
            {"}"};{`\n\n`}
            <span className="pink">if</span> (you{" "}
            <span className="purple">===</span>{" "}
            <span className="green">"comfortable"</span>) {"{"}
            {`\n`}{" "}
            <span className="yellow">maybeWeCanCreateSomethingBeautiful</span>
            ();{`\n`}
            {"}"}
          </code>
        </pre>
        <div className="editor-bottom flex h-9 items-center justify-between border-t border-[#d8b47a1b] bg-[#07070966] px-[17px] font-mono text-[9px] text-[var(--muted)]">
          <span className="text-[var(--champagne)]">
            ● running feelings.exe
          </span>
          <span>UTF—8</span>
        </div>
      </div>
      <div className="truth my-7 flex items-center gap-5 rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] px-[18px] py-4 font-mono text-[10px] tracking-widest text-[var(--muted)] shadow-[0_20px_60px_rgba(0,0,0,.35),0_0_40px_var(--romantic-glow)] backdrop-blur-lg transition duration-300 hover:border-[rgba(242,213,196,.46)]">
        <span>NO BUGS.</span>
        <strong className="text-[15px] leading-6 font-medium tracking-normal text-[var(--text-primary)]">
          No complicated logic.
          <br />
          <em className="font-serif text-lg text-[var(--soft)]">
            Bas ek simple truth...
          </em>
        </strong>
      </div>
      <div className="scene-bottom mt-[42px] flex items-center justify-between border-t border-[#d8b47a18] pt-[18px] font-mono text-[10px] tracking-widest text-[var(--muted)] max-[700px]:mt-[26px]">
        <span>02 / 05</span>
        <Next onClick={onNext}>There’s more</Next>
      </div>
    </div>
  );
}
