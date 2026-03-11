import { useEffect, useRef } from "react";

const HeroGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const gridSize = 60;
      const cols = Math.ceil(w / gridSize) + 1;
      const rows = Math.ceil(h / gridSize) + 1;

      // Draw grid lines with fade
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize;
        const distFromCenter = Math.abs(x - w / 2) / (w / 2);
        const opacity = Math.max(0, 0.06 - distFromCenter * 0.05);

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      for (let j = 0; j < rows; j++) {
        const y = j * gridSize;
        const distFromCenter = Math.abs(y - h / 2) / (h / 2);
        const opacity = Math.max(0, 0.06 - distFromCenter * 0.05);

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Animated intersection glow dots
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          const distFromCenter = Math.sqrt(
            Math.pow((x - w / 2) / (w / 2), 2) +
            Math.pow((y - h / 2) / (h / 2), 2)
          );

          if (distFromCenter > 1.2) continue;

          const pulse = Math.sin(time * 0.8 + i * 0.5 + j * 0.3) * 0.5 + 0.5;
          const baseOpacity = Math.max(0, 0.15 - distFromCenter * 0.12);
          const opacity = baseOpacity * (0.4 + pulse * 0.6);
          const radius = 1 + pulse * 0.8;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 217, 255, ${opacity})`;
          ctx.fill();
        }
      }

      // Animated beam (horizontal)
      const beamY = ((time * 30) % (h + 200)) - 100;
      const beamGradient = ctx.createLinearGradient(0, beamY - 40, 0, beamY + 40);
      beamGradient.addColorStop(0, "rgba(0, 217, 255, 0)");
      beamGradient.addColorStop(0.5, "rgba(0, 217, 255, 0.04)");
      beamGradient.addColorStop(1, "rgba(0, 217, 255, 0)");
      ctx.fillStyle = beamGradient;
      ctx.fillRect(0, beamY - 40, w, 80);

      time += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.8,
      }}
    />
  );
};

export default HeroGrid;
