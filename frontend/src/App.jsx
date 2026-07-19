import { useRef, useState } from "react";
import WebcamView from "./components/WebcamView";
import ExpressionBox from "./components/ExpressionBox";
import useFaceDetection from "./hooks/useFaceDetection";
import { MOOD_DETAILS, moodMusicDb } from "./utils/moodMusicDb";

function App() {
  const videoRef = useRef();
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [cameraButtonHovered, setCameraButtonHovered] = useState(false);
  const [selectedMood, setSelectedMood] = useState("happy");
  const [manualMood, setManualMood] = useState("");

  const { expression, checkExpression } = useFaceDetection(videoRef);

  const moodKeyMap = {
    happy: "😊 Happy",
    sad: "😢 Sad",
    angry: "😠 Angry",
    surprise: "😲 Surprise",
    neutral: "😐 Neutral",
    sleepy: "😴 Sleepy",
  };

  const normalizeMood = (value) => {
    const normalized = (value || "").toLowerCase();
    if (normalized.includes("happy")) return "happy";
    if (normalized.includes("sad")) return "sad";
    if (normalized.includes("angry")) return "angry";
    if (normalized.includes("surprise")) return "surprise";
    if (normalized.includes("sleepy")) return "sleepy";
    return "neutral";
  };

  const currentMood = normalizeMood(manualMood || expression);
  const resolvedExpression = moodKeyMap[currentMood] || expression;
  const moodDetails = MOOD_DETAILS[resolvedExpression] || MOOD_DETAILS["😐 Neutral"];
  const suggestedSongs = moodMusicDb
    .filter((song) => song.mood === resolvedExpression)
    .slice(0, 4);

  const moodClass = (() => {
    if (currentMood === "happy") return "happy";
    if (currentMood === "sad") return "sad";
    if (currentMood === "angry") return "angry";
    if (currentMood === "surprise") return "surprise";
    if (currentMood === "sleepy") return "sleepy";
    return "neutral";
  })();

  const handleApplyManualMood = () => {
    if (!selectedMood) return;
    setManualMood(selectedMood);
  };

  const handleResetAutoMood = () => {
    setManualMood("");
  };

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


            <div className={`webcam-container ${cameraEnabled ? "scanning" : ""}`}>
              <WebcamView videoRef={videoRef} isCameraEnabled={cameraEnabled} />
              <button
                className={`camera-toggle-btn ${cameraEnabled ? "active" : ""}`}
                onClick={() => setCameraEnabled((prev) => !prev)}
                onMouseEnter={() => setCameraButtonHovered(true)}
                onMouseLeave={() => setCameraButtonHovered(false)}
              >
                {cameraEnabled ? (cameraButtonHovered ? "Stop Camera" : "Camera Live") : "Allow Camera Access"}
              </button>
              {cameraEnabled && <div className="laser-line" />}
              <div className="scanner-hud">
                <div className="hud-corner hud-tl" />
                <div className="hud-corner hud-tr" />
                <div className="hud-corner hud-bl" />
                <div className="hud-corner hud-br" />
              </div>
              <div className="scanner-status">
                <span className="scanner-pulse" />
                {cameraEnabled ? "Streaming" : "Paused"}
              </div>
            </div>

            <div className="scanner-controls">
              <button
                className="btn btn-primary"
                onClick={checkExpression}
                disabled={!cameraEnabled}
              >
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

            <ExpressionBox
              expression={resolvedExpression}
              manualMood={manualMood}
              moodName={moodDetails.name}
            />

            <div className="manual-mood-inline">
              <div className="manual-mood-inline-info">
                <span className="manual-mood-inline-label">Manual mood</span>
                <span className="manual-mood-inline-value">{moodDetails.name}</span>
              </div>
              <div className="manual-mood-inline-actions">
                <select
                  className="manual-mood-select compact"
                  value={selectedMood}
                  onChange={(event) => setSelectedMood(event.target.value)}
                >
                  <option value="happy">Happy</option>
                  <option value="sad">Sad</option>
                  <option value="angry">Angry</option>
                  <option value="surprise">Surprise</option>
                  <option value="neutral">Neutral</option>
                  <option value="sleepy">Sleepy</option>
                </select>
                <button className="btn btn-secondary" onClick={handleApplyManualMood}>
                  Set Mood
                </button>
              </div>
            </div>

            <div className="insight-card">
              <h3>What this means</h3>
              <p>
                {manualMood
                  ? `Manual mood override active: ${manualMood}. You can still switch back to live detection anytime.`
                  : `Your detected expression is shaping the mood profile for the next experience. ${moodDetails.description}`}
              </p>
            </div>

            <div className="song-preview-card">
              <div className="song-preview-header">
                <span>🎵</span>
                <h3>Song Suggestions</h3>
              </div>
              <p>
                Fresh tracks picked for your current vibe: {moodDetails.name}
              </p>
              <div className="song-suggestions-list">
                {suggestedSongs.map((song) => (
                  <div className="song-suggestion-item" key={song.id}>
                    <img src={song.cover} alt={song.title} className="song-suggestion-cover" />
                    <div className="song-suggestion-info">
                      <h4>{song.title}</h4>
                      <p>{song.artist}</p>
                    </div>
                    <span className="song-suggestion-duration">{song.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;