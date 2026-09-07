import React from "react";

export default function AudioVisualizer({ isPlaying = false, barCount = 12 }) {
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div className={`audio-visualizer ${isPlaying ? "active" : "paused"}`}>
      {bars.map((bar) => {
        const randomDelay = (bar * 0.12).toFixed(2);
        const randomDuration = (0.4 + (bar % 5) * 0.15).toFixed(2);

        return (
          <span
            key={bar}
            className="v-bar"
            style={{
              animationDelay: `${randomDelay}s`,
              animationDuration: `${randomDuration}s`,
            }}
          />
        );
      })}
    </div>
  );
}
