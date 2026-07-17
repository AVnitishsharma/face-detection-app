import { useEffect, useState } from "react";
import { loadFaceLandmarker } from "../utils/mediapipe";
import { detectExpression } from "../utils/expression";

export default function useFaceDetection(videoRef) {
  const [expression, setExpression] = useState("Not Detected");
  const [detector, setDetector] = useState(null);

  useEffect(() => {
    async function init() {
      const faceDetector = await loadFaceLandmarker();
      setDetector(faceDetector);
    }

    init();
  }, []);

  const checkExpression = () => {
    if (!detector || !videoRef.current) return;

    const video = videoRef.current;

    if (
      video.readyState < 2 ||
      video.videoWidth === 0 ||
      video.videoHeight === 0
    ) {
      alert("Camera is not ready");
      return;
    }

    const result = detector.detectForVideo(
      video,
      performance.now()
    );

    if (result.faceBlendshapes.length > 0) {
      const exp = detectExpression(
        result.faceBlendshapes[0].categories
      );

      setExpression(exp);
    } else {
      setExpression("No Face Detected");
    }
  };

  return {
    expression,
    checkExpression,
  };
}