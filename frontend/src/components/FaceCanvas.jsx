import React, { useEffect, useRef } from "react";

export default function FaceCanvas({ landmarks, isCameraEnabled, expression }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!isCameraEnabled || !landmarks || landmarks.length === 0) {
      return;
    }

    const face = landmarks[0]; // first face
    const w = canvas.width;
    const h = canvas.height;

    // Draw facial mesh dots
    ctx.fillStyle = "rgba(0, 242, 254, 0.75)";
    ctx.strokeStyle = "rgba(0, 242, 254, 0.25)";
    ctx.lineWidth = 1;

    let minX = w, minY = h, maxX = 0, maxY = 0;

    face.forEach((pt) => {
      const x = pt.x * w;
      const y = pt.y * h;

      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;

      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Draw glowing bounding box
    const padding = 16;
    const bx = Math.max(0, minX - padding);
    const by = Math.max(0, minY - padding);
    const bw = Math.min(w - bx, (maxX - minX) + padding * 2);
    const bh = Math.min(h - by, (maxY - minY) + padding * 2);

    ctx.strokeStyle = "rgba(0, 242, 254, 0.9)";
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.strokeRect(bx, by, bw, bh);

    // Draw corner brackets
    ctx.setLineDash([]);
    ctx.strokeStyle = "#00F2FE";
    ctx.lineWidth = 3;

    const cornerLen = 14;
    // Top-left
    ctx.beginPath();
    ctx.moveTo(bx, by + cornerLen); ctx.lineTo(bx, by); ctx.lineTo(bx + cornerLen, by);
    ctx.stroke();
    // Top-right
    ctx.beginPath();
    ctx.moveTo(bx + bw - cornerLen, by); ctx.lineTo(bx + bw, by); ctx.lineTo(bx + bw, by + cornerLen);
    ctx.stroke();
    // Bottom-left
    ctx.beginPath();
    ctx.moveTo(bx, by + bh - cornerLen); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + cornerLen, by + bh);
    ctx.stroke();
    // Bottom-right
    ctx.beginPath();
    ctx.moveTo(bx + bw - cornerLen, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw, by + bh - cornerLen);
    ctx.stroke();

    // Expression label tag
    if (expression && expression !== "Not Detected") {
      ctx.fillStyle = "rgba(0, 242, 254, 0.9)";
      ctx.font = "bold 13px Inter, sans-serif";
      const tagText = ` MOOD: ${expression.toUpperCase()} `;
      const textWidth = ctx.measureText(tagText).width;

      ctx.fillRect(bx, by - 24, textWidth + 10, 22);
      ctx.fillStyle = "#000000";
      ctx.fillText(tagText, bx + 5, by - 8);
    }
  }, [landmarks, isCameraEnabled, expression]);

  return (
    <canvas
      ref={canvasRef}
      className="face-canvas-overlay"
      width={640}
      height={480}
    />
  );
}
