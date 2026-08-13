import { Heart } from "lucide-react";
import { Next, SceneLabel } from "./Shared";
import { proposalConfig } from "../config";

export default function FinalScene({ onAnswer }) {
  return (
    <div className="scene final fade-up">
      <SceneLabel number="05" title="the honest part" />
      <div className="final-copy mx-auto max-w-4xl rounded-2xl p-8 shadow-2xl">
        <p>So, aaj bina kisi complicated code ke...</p>
        <p>Main bas honestly ye kehna chahta hoon...</p>
        <h1>
          {proposalConfig.finalMessage.split(" ").slice(0, -2).join(" ")}{" "}
          <em>pasand hain.</em>
          <Heart size={28} fill="currentColor" />
        </h1>
        <div className="final-question">
          Kya aap mujhe ek chance dengi ki hum
          <br />
          ek-dusre ko aur achhe se jaan sakein?
        </div>
        <div className="actions flex flex-wrap items-center gap-3">
          <button
            className="yes inline-flex items-center gap-2 rounded-full px-6 py-3"
            onClick={() => onAnswer("yes")}
          >
            Haan <Heart size={15} fill="currentColor" />
          </button>
          <button
            className="maybe inline-flex items-center gap-2 rounded-full px-6 py-3"
            onClick={() => onAnswer("time")}
          >
            Naa <span>☺</span>
          </button>
        </div>
      </div>
      <div className="scene-bottom mt-10 flex items-center justify-between gap-4 border-t border-[#d8b47a18] pt-4 font-mono text-[10px] tracking-widest text-[var(--muted)] max-sm:flex-col max-sm:items-start">
        <span>05 / 06</span>
        <span className="hint text-[var(--muted)] max-sm:leading-5">
          there’s no right answer — just your answer
        </span>
      </div>
    </div>
  );
}
