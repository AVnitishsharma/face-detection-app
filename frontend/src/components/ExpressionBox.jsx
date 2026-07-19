export default function ExpressionBox({ expression, manualMood, moodName }) {
  const displayExpression = expression || "Not Detected";
  const isManual = Boolean(manualMood);

  return (
    <div className="expression-box">
      <div className="expression-badge">{isManual ? "Manual Mood" : "Live Result"}</div>
      <p className="expression-title">Current Expression</p>
      <h2 className="expression">{displayExpression}</h2>
      {isManual && (
        <p className="expression-manual">Manual input: {moodName}</p>
      )}
      <p className="expression-subtext">
        Your mood profile is ready for a personalized soundtrack.
      </p>
    </div>
  );
}