"use client";
import { useEffect, useRef, useState } from "react";
import GameCanvas from "@/components/game-canvas";

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 1920, height: 1080 });

  // maintain
  useEffect(() => {
    const resizeCanvas = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const { clientWidth: w, clientHeight: h } = wrapper;

      let width = w;
      let height = (w * 9) / 16;
      if (height > h) {
        height = h;
        width = (h * 16) / 9;
      }

      setCanvasSize({ width, height });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-screen h-screen flex items-center justify-center bg-gray-300"
    >
      <GameCanvas width={canvasSize.width} height={canvasSize.height} />
    </div>
  );
}
