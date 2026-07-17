import { useEffect, useState } from "react";
import { loadFaceLandmarker } from "../utils/mediapipe";
import { detectExpression } from "../utils/expression";

export default function useFaceDetection(videoRef) {
  const [expression, setExpression] = useState("Loading...");

  useEffect(() => {
    let detector;

    async function init() {
      detector = await loadFaceLandmarker();
      detect();
    }

    function detect() {
      const video = videoRef.current;

      if (
        !video ||
        !detector ||
        video.readyState < 2 ||
        video.videoWidth === 0 ||
        video.videoHeight === 0
      ) {
        requestAnimationFrame(detect);
        return;
      }

      const result = detector.detectForVideo(video, performance.now());

      if (result.faceBlendshapes.length > 0) {
        const exp = detectExpression(result.faceBlendshapes[0].categories);

        setExpression(exp);
      }

      requestAnimationFrame(detect);
    }

    init();
  }, []);

  return expression;
}
