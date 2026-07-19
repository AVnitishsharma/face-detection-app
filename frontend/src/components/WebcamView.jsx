import { useEffect } from "react";

export default function WebcamView({ videoRef, isCameraEnabled }) {
  useEffect(() => {
    let stream;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        const video = videoRef.current;
        if (!video) return;

        video.srcObject = stream;

        await new Promise((resolve, reject) => {
          video.onloadedmetadata = () => resolve();
          video.onerror = () => reject(new Error("Video failed to load"));
        });

        await video.play();
        console.log("Video Ready");
        console.log(video.videoWidth, video.videoHeight);
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
      {!isCameraEnabled && <div className="camera-placeholder">Camera paused</div>}
    </div>
  );
}
