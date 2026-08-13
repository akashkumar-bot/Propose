import { useEffect, useState } from "react";
import { Next } from "./Shared";

export default function HeartbeatScene({ onNext }) {
  const [beat, setBeat] = useState(0);
  useEffect(() => {
    const first = setTimeout(() => setBeat(1), 700);
    const second = setTimeout(() => setBeat(2), 1800);
    return () => {
      clearTimeout(first);
      clearTimeout(second);
    };
  }, []);
  return (
    <div
      className={`scene heartbeat fade-up mx-auto flex min-h-[500px] w-full max-w-3xl flex-col items-center justify-center gap-8 max-[700px]:min-h-[400px] ${beat === 1 ? "beating" : ""}`}
    >
      <div className="heartbeat-code w-full max-w-[480px] rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-8 py-7 [font-family:'JetBrains_Mono',monospace] text-sm leading-[2.2] text-[var(--text-secondary)] shadow-[0_20px_60px_rgba(0,0,0,.35),0_0_40px_var(--romantic-glow)] backdrop-blur-lg transition duration-300 hover:border-[rgba(242,213,196,.46)] hover:shadow-[0_30px_90px_rgba(0,0,0,.42),0_0_58px_rgba(255,91,135,.28),inset_0_1px_rgba(255,255,255,.18)] max-sm:px-[17px] max-sm:py-[22px]">
        <span className="text-[var(--soft)]">heart.status</span> ={" "}
        <b className="font-normal text-[var(--champagne)]">"nervous"</b>;
        {beat > 0 && (
          <>
            <br />
            <span className="text-[var(--soft)]">heart.beat</span>++;
          </>
        )}
        {beat > 1 && (
          <>
            <br />
            <br />
            <em className="block font-serif text-[40px] leading-[1.15] text-[var(--soft)]">
              Okay...
              <br />
              ab seedha bolta hoon.
            </em>
          </>
        )}
      </div>
      {beat > 1 && <Next onClick={onNext}>Continue</Next>}
    </div>
  );
}
