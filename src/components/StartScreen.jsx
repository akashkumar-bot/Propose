import { Gem, Heart } from "lucide-react";

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-romance" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i}>♥</span>
        ))}
      </div>
      <div className="start-orbit" />
      <div className="start-content fade-up mx-auto flex w-[min(760px,calc(100%-36px))] flex-col items-center text-center">
        <div className="start-kicker">
          <span className="brand-mark">
            <Heart size={14} fill="currentColor" />
          </span>{" "}
          A PRIVATE NOTE / 01
        </div>
        <div className="start-symbol">
          <Gem size={24} />
        </div>
        <p className="start-overline">
          for the person who makes ordinary days feel different
        </p>
        <h1 className="tracking-tight">
          Something special
          <br />
          <em>is waiting...</em>
        </h1>
        <p className="start-description">
          Take a breath. Press enter when you’re ready
          <br />
          to read something I’ve been meaning to say.
        </p>
        <button
          className="start-button inline-flex items-center justify-center gap-2"
          onClick={onStart}
        >
          Open your note <Heart size={15} fill="currentColor" />
        </button>
        <small>sound begins after you enter</small>
      </div>
    </div>
  );
}
