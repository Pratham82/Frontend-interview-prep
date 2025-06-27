// AnimatedBackground.tsx
import { useEffect, useRef, useState } from "react";

const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
const color = "#88888825";

function polarToCartesian(x = 0, y = 0, r = 0, theta = 0): [number, number] {
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy];
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [size, setSize] = useState<{ width: number; height: number }>(() => {
    if (typeof window !== "undefined") {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    return { width: 800, height: 600 };
  });

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);

    const dpr = window.devicePixelRatio || 1;
    canvas.style.width = `${size.width}px`;
    canvas.style.height = `${size.height}px`;
    canvas.width = size.width * dpr;
    canvas.height = size.height * dpr;
    ctx.scale(dpr, dpr);

    let steps: Array<() => void> = [];
    let prevSteps: Array<() => void> = [];
    let stopped = false;
    let len = 6;
    const MIN_BRANCH = 30;
    const { random } = Math;

    const step = (
      x: number,
      y: number,
      rad: number,
      counter = { value: 0 }
    ) => {
      const length = random() * len;
      counter.value++;

      const [nx, ny] = polarToCartesian(x, y, length, rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      const rad1 = rad + random() * r15;
      const rad2 = rad - random() * r15;

      if (
        nx < -100 ||
        nx > size.width + 100 ||
        ny < -100 ||
        ny > size.height + 100
      )
        return;

      const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

      if (random() < rate) steps.push(() => step(nx, ny, rad1, counter));
      if (random() < rate) steps.push(() => step(nx, ny, rad2, counter));
    };

    const randomMiddle = () => random() * 0.6 + 0.2;

    const start = () => {
      ctx.clearRect(0, 0, size.width, size.height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;

      prevSteps = [];
      steps = [
        () => step(randomMiddle() * size.width, -5, r90),
        () => step(randomMiddle() * size.width, size.height + 5, -r90),
        () => step(-5, randomMiddle() * size.height, 0),
        () => step(size.width + 5, randomMiddle() * size.height, r180),
      ];
      if (size.width < 500) steps = steps.slice(0, 2);
      stopped = false;
    };

    start();

    let lastTime = performance.now();
    const interval = 1000 / 40;

    function animate() {
      if (stopped) return;
      requestAnimationFrame(animate);
      const now = performance.now();
      if (now - lastTime < interval) return;
      lastTime = now;

      prevSteps = steps;
      steps = [];
      if (!prevSteps.length) {
        stopped = true;
        return;
      }

      prevSteps.forEach((fn) => {
        if (random() < 0.5) steps.push(fn);
        else fn();
      });
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      stopped = true;
    };
  }, [size.width, size.height]);

  const mask = "radial-gradient(circle, transparent, black)";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        pointerEvents: "none",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default AnimatedBackground;
