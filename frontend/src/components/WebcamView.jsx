import { useEffect } from "react";
import FaceCanvas from "./FaceCanvas";

export default function WebcamView({ videoRef, isCameraEnabled, landmarks, expression }) {
  useEffect(() => {
    let stream;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: "user"
          },
        });

        const video = videoRef.current;
        if (!video) return;

        video.srcObject = stream;

        await new Promise((resolve, reject) => {
          video.onloadedmetadata = () => resolve();
          video.onerror = () => reject(new Error("Video failed to load"));
        });

        await video.play();
      } catch (error) {
        console.error("Camera access failed", error);
      }
    }

    async function stopCamera() {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }

    if (isCameraEnabled) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [isCameraEnabled, videoRef]);

  return (
    <div className="camera-stage">
      <video
        ref={videoRef}
        className="webcam-video"
        autoPlay
        playsInline
        muted
        width={640}
        height={480}
      />
      <FaceCanvas
        landmarks={landmarks}
        isCameraEnabled={isCameraEnabled}
        expression={expression}
      />
      {!isCameraEnabled && (
        <div className="camera-placeholder">
          <div className="placeholder-content">
            <span className="cam-icon">📷</span>
            <p>Camera is currently paused</p>
            <span className="subtext">Click 'Allow Camera Access' to enable live face scanning</span>
          </div>
        </div>
      )}
    </div>
  );
}
