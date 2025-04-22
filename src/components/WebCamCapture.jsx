
import React, { useRef, useState, useEffect } from "react";

export default function WebCamCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const sprinkleContainerRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setStreaming(true);
    } catch (err) {
      console.error("Error accessing webcam:", err);
    }
  };

  const triggerSprinkles = () => {
    const container = sprinkleContainerRef.current;
    if (!container) return;

    for (let i = 0; i < 25; i++) {
      const sprinkle = document.createElement("div");
      sprinkle.className = "sprinkle";
      sprinkle.style.left = `${50 + Math.random() * 20 - 10}%`;
      sprinkle.style.top = `${50 + Math.random() * 20 - 10}%`;
      container.appendChild(sprinkle);

      setTimeout(() => {
        sprinkle.remove();
      }, 1000);
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageUrl = canvas.toDataURL("image/png");
    setPhoto(imageUrl);

    // Trigger sprinkles
    triggerSprinkles();
  };

  const downloadPhoto = () => {
    if (!photo) return;
    const link = document.createElement("a");
    link.href = photo;
    link.download = "webcam_capture.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#1c1c2c] text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Sprinkle Container */}
      <div ref={sprinkleContainerRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 mb-10 text-center z-20">
        🎥 Webcam Capture
      </h1>

      {/* Camera and Photo */}
      <div className="flex flex-col md:flex-row items-center gap-10 z-20">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
          <video
            ref={videoRef}
            autoPlay
            className="w-[720px] h-auto bg-black rounded-2xl"
          />
          {streaming && (
            <button
              onClick={capturePhoto}
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-200"
            >
              Capture 📸
            </button>
          )}
        </div>

        {photo && (
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold">🖼️ Captured Photo</h2>
            <img
              src={photo}
              alt="Captured"
              className="w-[720px] h-auto rounded-2xl border border-neutral-800 shadow-lg"
            />
            <button
              onClick={downloadPhoto}
              className="bg-neutral-800 hover:bg-neutral-700 text-white px-5 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-200"
            >
              Download Photo ⬇️
            </button>
          </div>
        )}
      </div>

      {!streaming && (
        <button
          onClick={startCamera}
          className="mt-10 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition-all duration-300 z-20"
        >
          Start Camera 🎬
        </button>
      )}

      <canvas ref={canvasRef} className="hidden" />

      {/* Sprinkle Animation Styles */}
      
      <style>{`
        .sprinkle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, #fff, #f9a8d4, #ec4899);
          border-radius: 50%;
          animation: sprinkle-burst 1s ease-out forwards;
          opacity: 0.9;
          z-index: 30;
        }

        @keyframes sprinkle-burst {
          0% {
            transform: scale(0.5) translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: scale(1.2) translate(
              ${Math.random() * 100 - 50}px,
              ${Math.random() * 100 - 50}px
            );
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
