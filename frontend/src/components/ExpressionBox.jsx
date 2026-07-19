export default function ExpressionBox({ expression }) {
  const displayExpression = expression || "Not Detected";

  return (
    <div className="expression-box">
      <div className="expression-badge">Live Result</div>
      <p className="expression-title">Current Expression</p>
      <h2 className="expression">{displayExpression}</h2>
      <p className="expression-subtext">
        Your mood profile is ready for a personalized soundtrack.
      </p>
    </div>
  );
}