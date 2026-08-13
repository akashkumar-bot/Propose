import { useEffect, useMemo, useState } from "react";
import { Heart } from "lucide-react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import StartScreen from "./components/StartScreen";
import BootScreen from "./components/BootScreen";
import MessageScene from "./components/MessageScene";
import CodeScene from "./components/CodeScene";
import PersonalScene from "./components/PersonalScene";
import HeartbeatScene from "./components/HeartbeatScene";
import FinalScene from "./components/FinalScene";
import Accepted from "./components/Accepted";
import TakeTime from "./components/TakeTime";
import { bootLines, TOTAL_SCENES } from "./constants";

// Convert a URL such as /scene/3 into the scene number used by the app.
const sceneFromPath = (pathname) => {
  if (pathname === "/accepted" || pathname === "/take-time") return 6;
  const match = pathname.match(/\/scene\/(\d+)/);
  return match ? Math.min(5, Math.max(1, Number(match[1]))) : 1;
};

function App() {
  const initialChoice = new URLSearchParams(window.location.search).get(
    "choice",
  );
  const [started, setStarted] = useState(
    () => window.location.pathname !== "/",
  );
  const [booted, setBooted] = useState(
    () =>
      window.location.pathname.startsWith("/scene/") ||
      window.location.pathname === "/accepted" ||
      window.location.pathname === "/take-time",
  );
  const [line, setLine] = useState(0);
  const [scene, setScene] = useState(() =>
    sceneFromPath(window.location.pathname),
  );
  const [answer, setAnswer] = useState(() =>
    window.location.pathname === "/accepted"
      ? "yes"
      : window.location.pathname === "/take-time"
        ? "time"
        : null,
  );
  const [timeChoice, setTimeChoice] = useState(initialChoice);
  const startExperience = () => {
    setStarted(true);
    window.history.pushState({}, "", "/boot");
    document.documentElement.requestFullscreen?.().catch(() => {});
  };
  useEffect(() => {
    if (!started) return;
    if (line < bootLines.length) {
      const timer = setTimeout(
        () => setLine((value) => value + 1),
        line === 0 ? 700 : 900,
      );
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setBooted(true);
      window.history.replaceState({}, "", "/scene/1");
    }, 1100);
    return () => clearTimeout(timer);
  }, [line, started]);
  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname;
      if (path === "/accepted") {
        setAnswer("yes");
        setScene(6);
      } else if (path === "/take-time") {
        setAnswer("time");
        setTimeChoice(
          new URLSearchParams(window.location.search).get("choice"),
        );
        setScene(6);
      } else if (path.startsWith("/scene/")) {
        setAnswer(null);
        setScene(sceneFromPath(path));
      } else if (path === "/boot") {
        setAnswer(null);
        setStarted(true);
        setBooted(false);
        setLine(0);
      } else if (path === "/") {
        setAnswer(null);
        setStarted(false);
        setBooted(false);
        setLine(0);
        setScene(1);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  const go = (next) => {
    setAnswer(null);
    setScene(next);
    window.history.pushState({}, "", `/scene/${next}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const answerProposal = (value, choice = null) => {
    setAnswer(value);
    setTimeChoice(choice);
    setScene(6);
    window.history.pushState(
      {},
      "",
      value === "yes"
        ? "/accepted"
        : `/take-time${choice ? `?choice=${encodeURIComponent(choice)}` : ""}`,
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const stars = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        top: `${(i * 67) % 100}%`,
        delay: `${(i % 8) * 0.6}s`,
        size: i % 5 === 0 ? 2 : 1,
      })),
    [],
  );
  if (!started) return <StartScreen onStart={startExperience} />;
  if (!booted) return <BootScreen line={line} />;
  return (
    <main
      className={`${answer ? "app answer-mode" : "app"} relative min-h-screen w-full overflow-x-hidden`}
    >
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />
      <div className="petals" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i}>♥</span>
        ))}
      </div>
      <div className="heart-bubbles" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i}>♥</span>
        ))}
      </div>
      <div className="background-decor" aria-hidden="true">
        <div className="moon-glow" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="horizon-glow" />
        <div className="light-leak" />
        <div className="bloom bloom-left" />
        <div className="bloom bloom-right" />
      </div>
      <div className="stars pointer-events-none absolute inset-0">
        {stars.map((star, i) => (
          <i
            key={i}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>
      <header className="topbar relative z-10 flex items-center justify-between px-[6.5vw] py-7">
        <div className="brand">
          <span className="brand-mark">
            <Heart size={13} fill="currentColor" />
          </span>
          <span>HeartOS</span>
          <small>/ 01</small>
        </div>
      </header>
      <div
        className="progress-dots relative z-10 mt-5 ml-[6.5vw] flex w-max items-center gap-2 rounded-full px-3 py-2 backdrop-blur-md"
        aria-label={`Scene ${scene} of ${TOTAL_SCENES}`}
      >
        {Array.from({ length: TOTAL_SCENES }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              type="button"
              disabled={number === 6}
              className={scene >= number ? "active" : ""}
              onClick={() => !answer && number < 6 && go(number)}
            >
              {String(number).padStart(2, "0")}
            </button>
          ),
        )}
      </div>
      <section className="scene-wrap relative z-[2] mx-auto flex min-h-[calc(100svh-155px)] w-full max-w-6xl items-center px-[6vw] py-[5vh]">
        {!answer && scene === 1 && <MessageScene onNext={() => go(2)} />}
        {!answer && scene === 2 && <CodeScene onNext={() => go(3)} />}
        {!answer && scene === 3 && <PersonalScene onNext={() => go(4)} />}
        {!answer && scene === 4 && <HeartbeatScene onNext={() => go(5)} />}
        {!answer && scene === 5 && <FinalScene onAnswer={answerProposal} />}
        {answer === "yes" && <Accepted />}
        {answer === "time" && (
          <TakeTime
            selectedChoice={timeChoice}
            onBack={() => {
              setAnswer(null);
              setTimeChoice(null);
              setScene(5);
            }}
          />
        )}
      </section>
      <footer className="footer absolute bottom-5 left-[6.5vw] right-[6.5vw] z-10 flex items-center gap-3 text-[9px] uppercase tracking-[.16em]">
        <span>made with intention</span>
        <span className="footer-line" />
        <span>∞</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
