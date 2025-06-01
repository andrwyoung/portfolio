"use client";

import { useEffect, useRef } from "react";

export default function GameCanvas({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const keys = useRef(new Set<string>());
  const player = useRef({ x: 50, y: 300, vx: 0, vy: 0, width: 32, height: 32 });

  const gravity = 0.5;
  const jumpStrength = -10;
  const moveSpeed = 3;
  const floorY = 400;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => keys.current.add(e.key);
    const handleKeyUp = (e: KeyboardEvent) => keys.current.delete(e.key);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    let last = performance.now();

    const loop = (now: number) => {
      const delta = now - last;
      last = now;

      const p = player.current;

      // Horizontal movement
      if (keys.current.has("ArrowLeft") || keys.current.has("a")) {
        p.vx = -moveSpeed;
      } else if (keys.current.has("ArrowRight") || keys.current.has("d")) {
        p.vx = moveSpeed;
      } else {
        p.vx = 0;
      }

      // Jump
      const isOnGround = p.y + p.height >= floorY;
      if (
        (keys.current.has("ArrowUp") ||
          keys.current.has("w") ||
          keys.current.has(" ")) &&
        isOnGround
      ) {
        p.vy = jumpStrength;
      }

      // Apply physics
      p.vy += gravity;
      p.x += p.vx;
      p.y += p.vy;

      // Floor collision
      if (p.y + p.height >= floorY) {
        p.y = floorY - p.height;
        p.vy = 0;
      }

      // Draw
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Floor
      ctx.fillStyle = "black";
      ctx.fillRect(0, floorY, ctx.canvas.width, 100);

      // Player
      ctx.fillStyle = "blue";
      ctx.fillRect(p.x, p.y, p.width, p.height);

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ width, height }}
      className=" bg-amber-50"
    />
  );
}
