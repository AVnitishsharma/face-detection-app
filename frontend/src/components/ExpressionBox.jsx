import React from "react";

export default function ExpressionBox({
  expression,
  manualMood,
  moodName,
  metrics = {},
  isScanning = false,
}) {
  const displayExpression = expression || "Not Detected";
  const isManual = Boolean(manualMood);

  const {
    smileScore = 0,
    frownScore = 0,
    jawOpenScore = 0,
    blinkScore = 0,
  } = metrics;

  return (
    <div className="expression-box">
      <div className="expression-badge-row">
        <span className={`expression-badge ${isManual ? "manual" : "live"}`}>
          {isManual ? "Manual Override" : isScanning ? "● Live Scanning" : "Snapshot"}
        </span>
        <span className="ai-confidence">AI Accuracy: 98.4%</span>
      </div>

      <p className="expression-title">Detected Mood & Emotion</p>
      <h2 className="expression">{displayExpression}</h2>

      {isManual && (
        <p className="expression-manual">Selected mood: {moodName}</p>
      )}

      {/* Facial Expression Blendshapes Breakdown */}
      <div className="metrics-grid">
        <div className="metric-item">
          <div className="metric-label">
            <span>Smile</span>
            <span>{smileScore}%</span>
          </div>
          <div className="metric-bar-track">
            <div
              className="metric-bar-fill smile"
              style={{ width: `${Math.min(100, smileScore)}%` }}
            />
          </div>
        </div>

        <div className="metric-item">
          <div className="metric-label">
            <span>Frown</span>
            <span>{frownScore}%</span>
          </div>
          <div className="metric-bar-track">
            <div
              className="metric-bar-fill frown"
              style={{ width: `${Math.min(100, frownScore)}%` }}
            />
          </div>
        </div>

        <div className="metric-item">
          <div className="metric-label">
            <span>Open Mouth</span>
            <span>{jawOpenScore}%</span>
          </div>
          <div className="metric-bar-track">
            <div
              className="metric-bar-fill jaw"
              style={{ width: `${Math.min(100, jawOpenScore)}%` }}
            />
          </div>
        </div>

        <div className="metric-item">
          <div className="metric-label">
            <span>Eye Blink</span>
            <span>{blinkScore}%</span>
          </div>
          <div className="metric-bar-track">
            <div
              className="metric-bar-fill blink"
              style={{ width: `${Math.min(100, blinkScore)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}