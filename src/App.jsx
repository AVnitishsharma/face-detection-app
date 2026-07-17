import { useRef } from "react";
import WebcamView from "./components/WebcamView";
import ExpressionBox from "./components/ExpressionBox";
import useFaceDetection from "./hooks/useFaceDetection";
import "./index.css";

function App() {
  const videoRef = useRef(null);
  const expression = useFaceDetection(videoRef);

  return (
    <div className="app">
      <h1 className="title">Face Expression Detection</h1>

      <div className="video-container">
        <WebcamView videoRef={videoRef} />
      </div>

      <ExpressionBox expression={expression} />
    </div>
  );
}

export default App;