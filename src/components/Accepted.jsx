import { useEffect, useState } from "react";
import { Check, Heart, ArrowRight } from "lucide-react";

export default function Accepted() {
  const [step, setStep] = useState(() =>
    Math.min(
      3,
      Math.max(
        0,
        Number(new URLSearchParams(window.location.search).get("step") || 0),
      ),
    ),
  );
  const [countdown, setCountdown] = useState(60);
  const [answer, setAnswer] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [saved, setSaved] = useState(false);
  const next = () => {
    const value = Math.min(3, step + 1);
    setStep(value);
    window.history.pushState({}, "", `/accepted?step=${value}`);
  };
  useEffect(() => {
    if (step !== 3 || countdown <= 0) return;
    const timer = setInterval(
      () => setCountdown((value) => Math.max(0, value - 1)),
      1000,
    );
    return () => clearInterval(timer);
  }, [step, countdown]);
  if (saved)
    return (
      <div className="result accepted fade-up accepted-step">
        <div className="accepted-card mx-auto flex min-h-[540px] max-w-4xl flex-col items-center justify-center rounded-3xl p-6 text-center shadow-2xl md:p-12">
          <div className="submitted-page">
            <div className="submitted-icon">
              <Check size={30} />
            </div>
            <div className="eyebrow">ANSWER RECEIVED</div>
            <h1>
              Thank you for
              <br />
              <em>sharing this.</em>
            </h1>
            <p>
              Your thoughts are safe with me.
              <br />
              I’m really looking forward to our beautiful beginning.
            </p>
            <div className="submitted-heart">
              <Heart size={18} fill="currentColor" />
            </div>
            <button className="qna-edit" onClick={() => setSaved(false)}>
              Edit your answers
            </button>
          </div>
        </div>
      </div>
    );
  const screens = [
    <>
      <div className="confetti" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <i key={i}>♥</i>
        ))}
      </div>
      <div className="result-icon">
        <Check size={28} />
      </div>
      <div className="eyebrow">STATUS: FEELINGS ACCEPTED</div>
      <h1>
        Wait... is this a <em>yes?</em>
      </h1>
      <p className="result-lead">Okay, I’m smiling way too much right now.</p>
    </>,
    <>
      <div className="result-icon heart-icon">
        <Heart size={28} fill="currentColor" />
      </div>
      <div className="eyebrow">A VERY IMPORTANT UPDATE</div>
      <h1>
        Okay... ye officially
        <br />
        meri life ka <em>favourite update</em> hai.
      </h1>
      <p className="result-lead">
        Thank you for giving this little story a chance.
      </p>
    </>,
    <>
      <div className="chapter chapter-large">
        <small>THE NEXT COMMIT</small>
        <h2>
          Welcome to
          <br />
          <em>Our Story.</em>
        </h2>
        <div className="result-heart">
          <Heart size={18} fill="currentColor" />
        </div>
        <p>
          Here’s to late-night conversations,
          <br />
          small surprises, and ordinary moments
          <br />
          that feel a little more special.
        </p>
      </div>
    </>,
    <>
      <div className="eyebrow">CHAPTER 01</div>
      <h1 className="beginning-title">
        The
        <br />
        <em>Beginning.</em>
      </h1>
      <div className="commit">
        git commit -m <span>"Started something beautiful ♥"</span>
      </div>
      <p className="result-lead">
        No rush. No perfect script.
        <br />
        Bas ek beautiful beginning.
      </p>
    </>,
  ];
  return (
    <div className="result accepted fade-up accepted-step">
      <div className="accepted-card mx-auto min-h-[560px] max-w-4xl rounded-3xl p-6 text-center shadow-2xl md:p-12">
        {screens[step]}
        {step === 3 && (
          <>
            <div className="qna-field mx-auto w-full max-w-2xl space-y-5 rounded-2xl p-5 text-left">
              <div className="qna-item">
                <label htmlFor="story-answer">
                  Aap humari story mein sabse pehle kya karna chahti hain?
                </label>
                <textarea
                  id="story-answer"
                  value={answer}
                  onChange={(event) => setAnswer(event.target.value)}
                  placeholder="Apna answer yahan likhiye..."
                  rows="3"
                />
              </div>
              <div className="qna-item">
                <label htmlFor="story-answer-two">
                  Aapko is journey mein sabse zyada kya achha lagta hai?
                </label>
                <textarea
                  id="story-answer-two"
                  value={answerTwo}
                  onChange={(event) => setAnswerTwo(event.target.value)}
                  placeholder="Apni baat yahan likhiye..."
                  rows="3"
                />
              </div>
              <button
                className="qna-submit inline-flex items-center gap-2 rounded-full px-5 py-3"
                disabled={!answer.trim() && !answerTwo.trim()}
                onClick={() => setSaved(true)}
              >
                Save your answers <Heart size={14} fill="currentColor" />
              </button>
            </div>
            <div className="story-timer">
              <strong>{String(countdown).padStart(2, "0")}</strong>
              <span>seconds into our story</span>
            </div>
          </>
        )}
        <div className="accepted-controls">
          <span>{String(step + 1).padStart(2, "0")} / 04</span>
          {step < 3 ? (
            <button
              className="next inline-flex items-center gap-2 border-b border-rose-200/30 bg-transparent py-3 font-mono text-[11px] font-medium uppercase tracking-widest text-[var(--champagne)] transition hover:-translate-y-0.5 hover:gap-4 hover:border-[var(--soft)] hover:text-[var(--soft)]"
              onClick={next}
            >
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <span className="done-mark">
              <Check size={14} /> story started
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
