export default function ExpressionBox({ expression }) {
  return (
    <div className="expression-box">
      <p className="expression-title">Current Expression</p>
      <h2 className="expression">{expression}</h2>
    </div>
  );
}