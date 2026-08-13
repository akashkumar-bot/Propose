import { useState } from "react";
import { Heart } from "lucide-react";
import { proposalConfig } from "../config";
import { Next, SceneLabel } from "./Shared";

export default function MessageScene({ onNext }) {
  const [opened, setOpened] = useState(false);
  return (
    <div className="scene message-scene fade-up mx-auto w-full max-w-4xl">
      <SceneLabel number="01" title="a little something" />
      <div
        className={`letter-wrap mx-auto mt-12 mb-5 max-w-[700px] drop-shadow-[0_25px_50px_rgba(0,0,0,.6)] ${opened ? "is-open" : ""}`}
      >
        {!opened ? (
          <button
            className="envelope relative mx-auto block h-[330px] w-[min(560px,100%)] rounded-2xl border border-[#d8b47a55] bg-[#150b12] shadow-[0_30px_90px_rgba(0,0,0,.73)] transition duration-300 hover:-translate-y-[7px] hover:-rotate-1 max-sm:h-[270px]"
            onClick={() => setOpened(true)}
            aria-label="Open the envelope"
          >
            <span className="envelope-flap" />
            <span className="envelope-paper absolute inset-[32px_55px_46px] grid place-items-center bg-[#bca080] text-[#2a0b18] shadow-[0_0_30px_#d8b47a22] max-sm:inset-[28px_35px_40px]">
              <Heart size={19} fill="currentColor" />
            </span>
            <span className="envelope-front" />
            <span className="envelope-seal absolute top-1/2 left-1/2 grid size-[42px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--champagne)] bg-[var(--burgundy)] text-[var(--soft)]">
              <Heart size={15} fill="currentColor" />
            </span>
            <span className="envelope-label absolute bottom-6 left-7 text-left font-mono text-xs tracking-wider text-[var(--champagne)]">
              A little something
              <br />
              <em className="font-serif text-xl text-[var(--soft)]">for you</em>
            </span>
            <span className="envelope-hint absolute right-6 bottom-7 font-mono text-[9px] uppercase text-[var(--muted)]">
              click to open
            </span>
          </button>
        ) : (
          <div className="letter letter-reveal relative min-h-[420px] -rotate-1 rounded-[7px] border border-[var(--card-border)] bg-[var(--card-bg)] px-[34px] pt-7 pb-[34px] shadow-[0_20px_60px_rgba(0,0,0,.35),0_0_40px_var(--romantic-glow)] backdrop-blur-2xl transition duration-300 hover:border-[rgba(242,213,196,.46)] hover:shadow-[0_30px_90px_rgba(0,0,0,.42),0_0_58px_rgba(255,91,135,.28),inset_0_1px_rgba(255,255,255,.18)] max-sm:px-5 max-sm:pt-[23px] max-sm:pb-7">
            <div className="letter-top flex items-center justify-between border-b border-[#d8b47a22] pb-4 font-mono text-[10px] tracking-widest text-[var(--muted)]">
              <span>TO: {proposalConfig.recipientName.toUpperCase()}</span>
              <span className="text-base text-[var(--champagne)]">∞</span>
            </div>
            <div className="letter-body mx-auto max-w-[600px] pt-[38px]">
              <div className="eyebrow mb-3">Dear favourite person,</div>
              <h1 className="mt-6 mb-7 font-serif text-[clamp(46px,6vw,74px)] leading-none font-medium tracking-tight text-[var(--text-primary)] [text-shadow:0_0_25px_rgba(255,130,160,.25)] max-sm:text-[46px]">
                {proposalConfig.openingMessage.split("...")[0]}
                <br />
                <em className="italic text-[var(--champagne)]">kehni thi...</em>
              </h1>
              <div className="rule h-px w-11 bg-[var(--champagne)] opacity-65" />
              <p className="my-[22px] max-w-[550px] text-[15px] leading-7 text-[var(--text-secondary)] max-sm:text-[13px]">
                Honestly, mujhe nahi pata ki exactly kab hua...
              </p>
              <p className="my-[22px] max-w-[550px] text-[15px] leading-7 text-[var(--text-secondary)] max-sm:text-[13px]">
                Somewhere between random conversations,
                <br />
                small moments, aur aapki smile...
              </p>
              <p className="highlight my-[22px] flex w-fit max-w-[550px] items-center gap-2 border-l-2 border-[var(--rose)] bg-gradient-to-r from-[#c85c7a13] to-transparent px-3 py-2 text-[15px] font-semibold text-[var(--soft)]">
                Aap meri favourite person ban gayi hain.{" "}
                <Heart size={15} fill="currentColor" />
              </p>
              <div className="signature mt-7 font-mono text-[11px] tracking-wider text-[var(--champagne)]">
                — {proposalConfig.senderName}
              </div>
            </div>
            <div className="seal absolute right-7 bottom-6 text-[var(--rose)]">
              <Heart size={18} fill="currentColor" />
            </div>
          </div>
        )}
      </div>
      <div className="scene-bottom mt-[30px] flex items-center justify-between border-t border-[#d8b47a18] pt-[18px] font-mono text-[10px] tracking-widest text-[var(--muted)] max-[700px]:mt-[26px]">
        <span>01 / 06</span>
        {opened ? (
          <Next onClick={onNext}>Read on</Next>
        ) : (
          <span className="open-note text-[var(--muted)]">
            a message is waiting inside
          </span>
        )}
      </div>
    </div>
  );
}
