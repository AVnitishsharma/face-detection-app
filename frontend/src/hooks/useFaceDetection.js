import { useEffect, useRef, useState } from "react";
import { loadFaceLandmarker } from "../utils/mediapipe";
import { detectExpression } from "../utils/expression";

export default function useFaceDetection(videoRef, isCameraEnabled = false) {
  const [expression, setExpression] = useState("Not Detected");
  const [detector, setDetector] = useState(null);
  const [landmarks, setLandmarks] = useState([]);
  const [isAutoScanning, setIsAutoScanning] = useState(true);
  const [facialMetrics, setFacialMetrics] = useState({
    smileScore: 0,
    frownScore: 0,
    jawOpenScore: 0,
    blinkScore: 0,
  });

  const autoScanTimerRef = useRef(null);

  useEffect(() => {
    async function init() {
      try {
        const faceDetector = await loadFaceLandmarker();
        setDetector(faceDetector);
      } catch (err) {
        console.error("Failed to load FaceLandmarker", err);
      }
    }
    init();
  }, []);

  const checkExpression = () => {
    if (!detector || !videoRef.current) return null;

    const video = videoRef.current;
    if (
      video.readyState < 2 ||
      video.videoWidth === 0 ||
      video.videoHeight === 0
    ) {
      return null;
    }

    try {
      const result = detector.detectForVideo(video, performance.now());

      if (result.faceLandmarks && result.faceLandmarks.length > 0) {
        setLandmarks(result.faceLandmarks);
      } else {
        setLandmarks([]);
      }

      if (result.faceBlendshapes && result.faceBlendshapes.length > 0) {
        const categories = result.faceBlendshapes[0].categories;
        const exp = detectExpression(categories);
        setExpression(exp);

        const getScore = (name) => categories.find((c) => c.categoryName === name)?.score || 0;
        setFacialMetrics({
          smileScore: Math.round(((getScore("mouthSmileLeft") + getScore("mouthSmileRight")) / 2) * 100),
          frownScore: Math.round(((getScore("mouthFrownLeft") + getScore("mouthFrownRight")) / 2) * 100),
          jawOpenScore: Math.round(getScore("jawOpen") * 100),
          blinkScore: Math.round(((getScore("eyeBlinkLeft") + getScore("eyeBlinkRight")) / 2) * 100),
        });

        return exp;
      } else {
        setExpression("No Face Detected");
        setLandmarks([]);
        return "No Face Detected";
      }
    } catch (e) {
      console.warn("Face detection error:", e);
      return null;
    }
  };

  // Continuous auto scan when camera is enabled and auto scan is active
  useEffect(() => {
    if (isCameraEnabled && isAutoScanning && detector) {
      autoScanTimerRef.current = setInterval(() => {
        checkExpression();
      }, 700);
    } else {
      if (autoScanTimerRef.current) clearInterval(autoScanTimerRef.current);
    }

    return () => {
      if (autoScanTimerRef.current) clearInterval(autoScanTimerRef.current);
    };
  }, [isCameraEnabled, isAutoScanning, detector]);

  return {
    expression,
    landmarks,
    facialMetrics,
    isAutoScanning,
    setIsAutoScanning,
    checkExpression,
    detectorLoaded: Boolean(detector),
  };
}