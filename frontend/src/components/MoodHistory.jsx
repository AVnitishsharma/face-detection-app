import React from "react";

export default function MoodHistory({ history = [], onSelectMood }) {
  if (history.length === 0) {
    return (
      <div className="history-empty">
        <p>No mood logs recorded yet.</p>
        <span className="sub">Turn on live detection or scan to record vibes!</span>
      </div>
    );
  }

  return (
    <div className="mood-history-list">
      {history.slice(0, 10).map((item, idx) => (
        <div
          key={item.id || idx}
          className="history-item-card"
          onClick={() => onSelectMood && onSelectMood(item.mood)}
        >
          <div className="history-item-header">
            <span className="history-mood-name">{item.mood}</span>
            <span className="history-time">
              {new Date(item.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </span>
          </div>

          <div className="history-item-meta">
            <span className="confidence-chip">Confidence: {item.confidence || 95}%</span>
            <span className="play-hint">Play Playlist ➔</span>
          </div>
        </div>
      ))}
    </div>
  );
}
