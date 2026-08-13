import { useState } from "react";
import { ChevronDown, Heart } from "lucide-react";

export default function TakeTime({ onBack, selectedChoice }) {
  const [selected, setSelected] = useState(selectedChoice);
  const choose = (value) => {
    setSelected(value);
    window.history.replaceState(
      {},
      "",
      `/take-time?choice=${encodeURIComponent(value)}`,
    );
  };
  const chooseAnother = () => {
    setSelected(null);
    window.history.replaceState({}, "", "/take-time");
  };
  const messages = {
    later: [
      "Aap mujhe pasand hain, bas thoda samay dijiye",
      <>
        Bilkul.
        <br />
        <em>Take your time.</em>
      </>,
      <>
        No pressure, no expectations.
        <br />
        Jab aap ready hon, tab baat karenge.
      </>,
    ],
    think: [
      "Main confuse hoon, thoda sochna chahti hoon",
      <>
        Take all the time
        <br />
        <em>you need.</em>
      </>,
      <>
        Kuch answers jaldi mein nahi diye jaate.
        <br />
        Main patiently wait karunga.
      </>,
    ],
    honest: [
      "Main abhi relationship ke liye ready nahi hoon",
      <>
        Thank you for
        <br />
        <em>being honest.</em>
      </>,
      <>
        Aapka answer jo bhi ho,
        <br />I respect it. Always.
      </>,
    ],
    slow: [
      "Kya hum pehle aur baat kar sakte hain?",
      <>
        Bilkul.
        <br />
        <em>We can go slow.</em>
      </>,
      <>
        Koi jaldi nahi hai.
        <br />
        Hum apni pace par ek-dusre ko jaanenge.
      </>,
    ],
    friends: [
      "Main sirf dosti rakhna chahti hoon",
      <>
        Of course.
        <br />
        <em>Friends first.</em>
      </>,
      <>
        Aapki comfort sabse important hai.
        <br />
        Main is baat ki respect karta hoon.
      </>,
    ],
    "not-sure": [
      "Mujhe lagta hai main same feel nahi karti",
      <>
        That’s okay.
        <br />
        <em>No pressure.</em>
      </>,
      <>
        Aapko abhi answer dena zaroori nahi.
        <br />
        Jab aap comfortable hon, tab baat karenge.
      </>,
    ],
  };
  const choices = [
    ["think", "Main confuse hoon, thoda sochna chahti hoon"],
    ["later", "Aap mujhe pasand hain, bas thoda samay dijiye"],
    ["honest", "Main abhi relationship ke liye ready nahi hoon"],
    ["slow", "Kya hum pehle aur baat kar sakte hain?"],
    ["friends", "Main sirf dosti rakhna chahti hoon"],
    ["not-sure", "Mujhe lagta hai main same feel nahi karti"],
  ];
  const note = selected ? messages[selected] : null;
  return (
    <div className="result time fade-up mx-auto w-full max-w-5xl sm:px-4">
      {!note ? (
        <div className="time-choice-panel mx-auto w-full max-w-3xl rounded-3xl p-6 shadow-2xl md:p-10">
          <div className="time-heading mx-auto max-w-2xl text-center">
            <div className="soft-heart">
              <Heart size={30} />
            </div>
            <div className="eyebrow">YOU CAN TAKE YOUR TIME</div>
            <h1 className="my-5 text-5xl leading-none md:text-7xl">
              It’s okay.
              <br />
              <em>There’s no rush.</em>
            </h1>
            <p className="mx-auto max-w-xl text-sm leading-7">
              Choose whatever feels closest to what you’re feeling.
            </p>
          </div>
          <div className="time-options mx-auto grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
            {choices.map(([value, label], index) => (
              <button
                className="option-card flex min-h-24 items-center justify-between gap-4 rounded-2xl border border-[rgba(255,215,225,.28)] bg-[linear-gradient(135deg,rgba(255,255,255,.14),rgba(255,255,255,.055))] p-5 text-left leading-6 text-[var(--no-text)] shadow-lg transition hover:-translate-y-1 hover:scale-[1.015] hover:border-[var(--champagne)] hover:bg-[linear-gradient(135deg,rgba(217,160,168,.25),rgba(157,35,76,.18))] hover:text-[var(--text-primary)]"
                key={value}
                onClick={() => choose(value)}
              >
                <small className="font-mono text-[10px] tracking-widest text-[var(--rose-gold)]">
                  0{index + 1}
                </small>
                <span className="option-label">{label}</span>
                <span className="option-heart grid size-8 shrink-0 place-items-center rounded-full border border-[rgba(242,213,196,.45)] text-lg text-[var(--champagne)]">
                  ♡
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="time-card mx-auto w-full max-w-2xl rounded-3xl p-8 text-center shadow-2xl md:p-12">
          <div className="soft-heart">
            <Heart size={30} />
          </div>
          <div className="eyebrow">{note[0]}</div>
          <h1>{note[1]}</h1>
          <div className="time-rule mx-auto my-6 h-px w-11 bg-[var(--champagne)]" />
          <p>{note[2]}</p>
          <span className="time-signature mt-6 block font-mono text-[10px] text-[var(--text-muted)]">
            — with all the time in the world
          </span>
        </div>
      )}
      <button
        className="back mt-7 inline-flex items-center gap-2 rounded-full border border-[rgba(216,180,122,.13)] px-4 py-2 text-[10px] text-[var(--champagne)] transition hover:-translate-y-0.5"
        onClick={note ? chooseAnother : onBack}
      >
        <ChevronDown size={15} /> {note ? "choose another" : "read it again"}
      </button>
    </div>
  );
}
