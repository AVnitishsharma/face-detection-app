import { useEffect } from "react";

export default function WebcamView({ videoRef }) {
  useEffect(() => {
    async function startCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      const video = videoRef.current;
      video.srcObject = stream;

      // Wait until video metadata is loaded
      await new Promise((resolve) => {
        video.onloadedmetadata = () => {
          resolve();
        };
      });

      await video.play();

      console.log("Video Ready");
      console.log(video.videoWidth, video.videoHeight);
    }

    startCamera();
  }, []);

  return (
    <video
      ref={videoRef}
      className="webcam-video"
      autoPlay
      playsInline
      muted
      width={640}
      height={480}
    />
  );
}
