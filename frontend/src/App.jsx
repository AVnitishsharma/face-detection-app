import { useState, useRef, useEffect } from "react";
import WebcamView from "./components/WebcamView";
import ExpressionBox from "./components/ExpressionBox";
import YouTubePlayer from "./components/YouTubePlayer";
import YouTubeSearch from "./components/YouTubeSearch";
import MoodHistory from "./components/MoodHistory";
import useFaceDetection from "./hooks/useFaceDetection";
import { MOOD_DETAILS, moodMusicDb, getSongsByMood } from "./utils/moodMusicDb";

function App() {
  const videoRef = useRef(null);

  // States
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [selectedMood, setSelectedMood] = useState("happy");
  const [manualMood, setManualMood] = useState("");
  const [activeTab, setActiveTab] = useState("playlist"); // "playlist" | "favorites" | "history"
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Music Player States
  const [currentSong, setCurrentSong] = useState(moodMusicDb[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("moodtune_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem("moodtune_history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Face Detection Hook
  const {
    expression,
    landmarks,
    facialMetrics,
    isAutoScanning,
    setIsAutoScanning,
    checkExpression,
    detectorLoaded,
  } = useFaceDetection(videoRef, cameraEnabled);

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

  const currentMoodKey = normalizeMood(manualMood || expression);
  const resolvedExpression = moodKeyMap[currentMoodKey] || expression;
  const moodDetails = MOOD_DETAILS[resolvedExpression] || MOOD_DETAILS["😐 Neutral"];

  // Available tracks for current mood
  const currentMoodSongs = getSongsByMood(resolvedExpression, searchQuery);

  // Auto-switch track on new detected face expression if not currently playing custom track
  const prevExpressionRef = useRef(resolvedExpression);
  useEffect(() => {
    if (prevExpressionRef.current !== resolvedExpression) {
      prevExpressionRef.current = resolvedExpression;

      // Add entry to history
      const newEntry = {
        id: Date.now().toString(),
        mood: resolvedExpression,
        timestamp: new Date().toISOString(),
        confidence: 96,
      };

      setHistory((prev) => {
        const updated = [newEntry, ...prev.slice(0, 19)];
        try {
          localStorage.setItem("moodtune_history", JSON.stringify(updated));
        } catch (e) {}
        return updated;
      });

      // Pick top track for new mood and auto-play
      const moodTracks = getSongsByMood(resolvedExpression);
      if (moodTracks.length > 0) {
        setCurrentSong(moodTracks[0]);
        setIsPlaying(true);
      }
    }
  }, [resolvedExpression]);

  // Persist favorites to localStorage & backend
  const toggleFavorite = (song) => {
    setFavorites((prev) => {
      const isFav = prev.some((item) => item.id === song.id);
      let updated;
      if (isFav) {
        updated = prev.filter((item) => item.id !== song.id);
      } else {
        updated = [...prev, song];
      }
      try {
        localStorage.setItem("moodtune_favorites", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    // Optional call to backend API
    fetch("http://localhost:3000/api/music/favorites/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ song }),
    }).catch(() => {});
  };

  // Play next track in current playlist
  const handleNextTrack = () => {
    const list = activeTab === "favorites" ? favorites : currentMoodSongs;
    if (list.length === 0) return;
    const currentIndex = list.findIndex((s) => s.id === currentSong?.id);
    const nextIndex = (currentIndex + 1) % list.length;
    setCurrentSong(list[nextIndex]);
    setIsPlaying(true);
  };

  // Play previous track in current playlist
  const handlePreviousTrack = () => {
    const list = activeTab === "favorites" ? favorites : currentMoodSongs;
    if (list.length === 0) return;
    const currentIndex = list.findIndex((s) => s.id === currentSong?.id);
    const prevIndex = (currentIndex - 1 + list.length) % list.length;
    setCurrentSong(list[prevIndex]);
    setIsPlaying(true);
  };

  const handlePlaySong = (song) => {
    if (currentSong?.id === song.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const handleApplyManualMood = () => {
    if (!selectedMood) return;
    setManualMood(selectedMood);
  };

  const handleResetAutoMood = () => {
    setManualMood("");
  };

  const moodClass = moodDetails.themeClass || "mood-neutral";

  return (
    <div className={`app ${moodClass}`}>
      <main className="main-content">
        {/* Header Bar */}
        <header className="header">
          <div className="brand-section">
            <div className="brand-logo">♫</div>
            <div>
              <h1 className="brand-title">MoodTune</h1>
              <p className="brand-subtitle">AI Face Expression YouTube Player</p>
            </div>
          </div>

          <div className="header-status-group">
            <div className="status-chip-glow">
              <span className="pulse-dot green" />
              <span>Face Detector: {detectorLoaded ? "Ready" : "Loading AI..."}</span>
            </div>

            <button
              className="btn btn-search-yt"
              onClick={() => setIsSearchModalOpen(true)}
            >
              🔍 Search YouTube Song
            </button>
          </div>
        </header>

        {/* Main Grid */}
        <section className="dashboard-grid">
          {/* Left Column: Live Scanner & Controls */}
          <div className="glass-panel">
            <div className="panel-header-row">
              <div>
                <p className="eyebrow">Live Face Scanner</p>
                <h2 className="panel-title">Camera & Landmark Mesh</h2>
              </div>
              <span className={`status-chip ${cameraEnabled ? "active" : ""}`}>
                {cameraEnabled ? "Live Feed" : "Camera Off"}
              </span>
            </div>

            {/* Webcam Container */}
            <div className={`webcam-container ${cameraEnabled ? "scanning" : ""}`}>
              <WebcamView
                videoRef={videoRef}
                isCameraEnabled={cameraEnabled}
                landmarks={landmarks}
                expression={resolvedExpression}
              />
              <button
                className={`camera-toggle-btn ${cameraEnabled ? "active" : ""}`}
                onClick={() => setCameraEnabled((prev) => !prev)}
              >
                {cameraEnabled ? "⏹ Stop Camera" : "▶ Allow Camera Access"}
              </button>
            </div>

            {/* Controls */}
            <div className="scanner-controls">
              <button
                className="btn btn-primary"
                onClick={checkExpression}
                disabled={!cameraEnabled}
              >
                ⚡ Detect Expression Now
              </button>
              <button
                className={`btn ${isAutoScanning ? "btn-active-scan" : "btn-secondary"}`}
                onClick={() => setIsAutoScanning((prev) => !prev)}
                disabled={!cameraEnabled}
              >
                {isAutoScanning ? "🔄 Auto-Scan: ON" : "⏸ Auto-Scan: OFF"}
              </button>
            </div>
          </div>

          {/* Right Column: Emotion Snapshot & Playlist */}
          <div className="glass-panel">
            <div className="panel-header-row">
              <div>
                <p className="eyebrow">Realtime Emotion Analysis</p>
                <h2 className="panel-title">Face Snapshot</h2>
              </div>
            </div>

            {/* Expression Metrics Card */}
            <ExpressionBox
              expression={resolvedExpression}
              manualMood={manualMood}
              moodName={moodDetails.name}
              metrics={facialMetrics}
              isScanning={cameraEnabled && isAutoScanning}
            />

            {/* Manual Mood Override Selector */}
            <div className="manual-mood-inline">
              <div className="manual-mood-inline-info">
                <span className="manual-mood-inline-label">Manual Override</span>
                <span className="manual-mood-inline-value">
                  {manualMood ? `Active: ${moodDetails.name}` : "Auto Live Mode"}
                </span>
              </div>
              <div className="manual-mood-inline-actions">
                <select
                  className="manual-mood-select compact"
                  value={selectedMood}
                  onChange={(e) => setSelectedMood(e.target.value)}
                >
                  <option value="happy">Happy 😊</option>
                  <option value="sad">Sad 😢</option>
                  <option value="angry">Angry 😠</option>
                  <option value="surprise">Surprise 😲</option>
                  <option value="neutral">Neutral 😐</option>
                  <option value="sleepy">Sleepy 😴</option>
                </select>
                <button className="btn btn-secondary" onClick={handleApplyManualMood}>
                  Set Mood
                </button>
                {manualMood && (
                  <button className="btn btn-outline" onClick={handleResetAutoMood}>
                    Reset to Live
                  </button>
                )}
              </div>
            </div>

            {/* Song Tabs & Recommendations */}
            <div className="song-preview-card">
              <div className="tab-header">
                <div className="tabs">
                  <button
                    className={`tab-btn ${activeTab === "playlist" ? "active" : ""}`}
                    onClick={() => setActiveTab("playlist")}
                  >
                    🎵 {moodDetails.name} Playlist ({currentMoodSongs.length})
                  </button>
                  <button
                    className={`tab-btn ${activeTab === "favorites" ? "active" : ""}`}
                    onClick={() => setActiveTab("favorites")}
                  >
                    ⭐ Favorites ({favorites.length})
                  </button>
                  <button
                    className={`tab-btn ${activeTab === "history" ? "active" : ""}`}
                    onClick={() => setActiveTab("history")}
                  >
                    📜 Mood History
                  </button>
                </div>

                {activeTab === "playlist" && (
                  <input
                    type="text"
                    placeholder="Filter tracks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="filter-input"
                  />
                )}
              </div>

              {/* Tab Content 1: Mood Playlist */}
              {activeTab === "playlist" && (
                <div className="song-suggestions-list">
                  {currentMoodSongs.length === 0 ? (
                    <p className="no-tracks-msg">No tracks found for filter "{searchQuery}".</p>
                  ) : (
                    currentMoodSongs.map((song) => {
                      const isSelected = currentSong?.id === song.id;
                      const isFav = favorites.some((f) => f.id === song.id);

                      return (
                        <div
                          className={`song-suggestion-item ${isSelected ? "playing-active" : ""}`}
                          key={song.id}
                          onClick={() => handlePlaySong(song)}
                        >
                          <img src={song.cover} alt={song.title} className="song-suggestion-cover" />
                          <div className="song-suggestion-info">
                            <h4>
                              {isSelected && isPlaying && <span className="now-playing-dot">▶ </span>}
                              {song.title}
                            </h4>
                            <p>{song.artist} • <span className="genre-tag">{song.genre || "Pop"}</span></p>
                          </div>

                          <div className="song-actions">
                            <span className="song-suggestion-duration">{song.duration}</span>
                            <button
                              className={`btn-heart ${isFav ? "active" : ""}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(song);
                              }}
                              title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                            >
                              {isFav ? "❤️" : "🤍"}
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* Tab Content 2: Favorites */}
              {activeTab === "favorites" && (
                <div className="song-suggestions-list">
                  {favorites.length === 0 ? (
                    <div className="history-empty">
                      <p>No favorite YouTube songs saved yet.</p>
                      <span className="sub">Click 🤍 on any track to save it here!</span>
                    </div>
                  ) : (
                    favorites.map((song) => {
                      const isSelected = currentSong?.id === song.id;
                      return (
                        <div
                          className={`song-suggestion-item ${isSelected ? "playing-active" : ""}`}
                          key={song.id}
                          onClick={() => handlePlaySong(song)}
                        >
                          <img src={song.cover} alt={song.title} className="song-suggestion-cover" />
                          <div className="song-suggestion-info">
                            <h4>{song.title}</h4>
                            <p>{song.artist} • {song.mood}</p>
                          </div>

                          <div className="song-actions">
                            <span className="song-suggestion-duration">{song.duration}</span>
                            <button
                              className="btn-heart active"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(song);
                              }}
                              title="Remove Favorite"
                            >
                              ❤️
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* Tab Content 3: Mood History Timeline */}
              {activeTab === "history" && (
                <MoodHistory
                  history={history}
                  onSelectMood={(m) => {
                    const matchedKey = normalizeMood(m);
                    setManualMood(matchedKey);
                    setActiveTab("playlist");
                  }}
                />
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Docked YouTube Player Bar */}
      <YouTubePlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onNext={handleNextTrack}
        onPrevious={handlePreviousTrack}
        onSongEnd={handleNextTrack}
        moodName={moodDetails.name}
      />

      {/* Custom YouTube Link / Search Modal */}
      <YouTubeSearch
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onPlayCustomSong={(customSong) => {
          handlePlaySong(customSong);
          setActiveTab("playlist");
        }}
      />
    </div>
  );
}

export default App;