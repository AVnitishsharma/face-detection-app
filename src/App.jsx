import { useRef } from "react";
import WebcamView from "./components/WebcamView";
import ExpressionBox from "./components/ExpressionBox";
import useFaceDetection from "./hooks/useFaceDetection";

function App() {
  const videoRef = useRef();

  const {
    expression,
    checkExpression,
  } = useFaceDetection(videoRef);

  return (
    <div className="app">
      <WebcamView videoRef={videoRef} />

      <button
        className="detect-btn"
        onClick={checkExpression}
      >
        Detect Expression
      </button>

      <ExpressionBox expression={expression} />
    </div>
  );
}

export default App;