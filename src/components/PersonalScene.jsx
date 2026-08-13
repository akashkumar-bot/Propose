import { Next, SceneLabel } from "./Shared";

export default function PersonalScene({ onNext }) {
  return (
    <div className="scene personal fade-up mx-auto w-full max-w-4xl">
      <SceneLabel number="03" title="the little things" />
      <div className="personal-center mx-auto my-[50px] max-w-3xl rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] px-[25px] py-[62px] text-center shadow-[0_20px_60px_rgba(0,0,0,.35),0_0_40px_var(--romantic-glow)] backdrop-blur-lg transition duration-300 hover:border-[rgba(242,213,196,.46)] hover:shadow-[0_30px_90px_rgba(0,0,0,.42),0_0_58px_rgba(255,91,135,.28),inset_0_1px_rgba(255,255,255,.18)] max-sm:my-[35px] max-sm:px-[18px] max-sm:py-[38px]">
        <div className="quote-mark font-serif text-7xl text-[var(--champagne)]">
          “
        </div>
        <h2 className="mx-auto mt-5 mb-7 max-w-2xl font-serif text-[clamp(44px,7vw,78px)] leading-[1.02] font-medium tracking-tight text-[var(--text-primary)] [text-shadow:0_0_25px_rgba(255,130,160,.25)]">
          Aapse baat karna
          <br />
          mere din ka{" "}
          <em className="italic text-[var(--champagne)]">favourite</em>
          <br />
          part ban gaya hai.
        </h2>
        <div className="thin-line mx-auto my-[30px] h-px w-[46px] bg-[var(--champagne)] opacity-65" />
        <p className="text-sm leading-[1.7] text-[var(--text-secondary)]">
          Sometimes it's not about finding someone perfect.
          <br />
          <br />
          It's about finding someone whose presence
          <br />
          makes ordinary moments feel special.
        </p>
      </div>
      <div className="scene-bottom mt-[42px] flex items-center justify-between border-t border-[#d8b47a18] pt-[18px] font-mono text-[10px] tracking-widest text-[var(--muted)] max-[700px]:mt-[26px]">
        <span>03 / 06</span>
        <Next onClick={onNext}>One last thing</Next>
      </div>
    </div>
  );
}
