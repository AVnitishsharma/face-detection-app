import { useRef } from "react";
import WebcamView from "./components/WebcamView";
import ExpressionBox from "./components/ExpressionBox";
import useFaceDetection from "./hooks/useFaceDetection";

function App() {
  const videoRef = useRef();

  const { expression, checkExpression } = useFaceDetection(videoRef);

  const moodClass = (() => {
    const normalized = expression.toLowerCase();
    if (normalized.includes("happy")) return "happy";
    if (normalized.includes("sad")) return "sad";
    if (normalized.includes("angry")) return "angry";
    if (normalized.includes("surprise")) return "surprise";
    if (normalized.includes("sleepy")) return "sleepy";
    return "neutral";
  })();

  return (
    <div className={`app mood-${moodClass}`}>
      <main className="main-content">
        <header className="header">
          <div className="brand-section">
            <div className="brand-logo">♫</div>
            <div>
              <h1 className="brand-title">MoodTune</h1>
              <p className="brand-subtitle">Face-driven mood experience</p>
            </div>
          </div>

          <div className="header-actions">
            <button className="icon-btn" aria-label="Theme">
              ✨
            </button>
            <button className="icon-btn" aria-label="Music">
              🎵
            </button>
          </div>
        </header>

        <section className="dashboard-grid">
          <div className="glass-panel">
            <div className="panel-header-row">
              <div>
                <p className="eyebrow">Live scanner</p>
                <h2 className="panel-title">Face Mood Detector</h2>
              </div>
              <span className="status-chip">Live</span>
            </div>

            <div className={`webcam-container ${expression !== "Not Detected" ? "scanning" : ""}`}>
              <WebcamView videoRef={videoRef} />
              <div className="laser-line" />
              <div className="scanner-hud">
                <div className="hud-corner hud-tl" />
                <div className="hud-corner hud-tr" />
                <div className="hud-corner hud-bl" />
                <div className="hud-corner hud-br" />
              </div>
              <div className="scanner-status">
                <span className="scanner-pulse" />
                {expression === "Not Detected" ? "Waiting" : "Scanning"}
              </div>
            </div>

            <div className="scanner-controls">
              <button className="btn btn-primary" onClick={checkExpression}>
                Detect Expression
              </button>
              <button className="btn btn-secondary">Start Mood Scan</button>
            </div>
          </div>

          <div className="glass-panel">
            <div className="panel-header-row">
              <div>
                <p className="eyebrow">Your current vibe</p>
                <h2 className="panel-title">Emotion Snapshot</h2>
              </div>
            </div>

            <ExpressionBox expression={expression} />

            <div className="insight-card">
              <h3>What this means</h3>
              <p>
                Your detected expression is shaping the mood profile for the next
                experience. A richer music layer will be added here soon.
              </p>
            </div>

            <div className="song-preview-card">
              <div className="song-preview-header">
                <span>🎵</span>
                <h3>Song Suggestions</h3>
              </div>
              <p>
                This area is reserved for future song recommendations based on your
                detected mood.
              </p>
              <div className="song-placeholder">Coming soon</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;