import { useEffect, useRef } from "react";
export default function Particles({ theme }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current,
      ctx = canvas.getContext("2d");
    let W = 0,
      H = 0,
      parts = [],
      mouse = { x: -9999, y: -9999 },
      raf;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const palettes = {
      dark: {
        dots: ["#FFC978", "#5CE0D8", "#A9B4BE"],
        line: "rgba(255,201,120,0.55)",
      },
      light: {
        dots: ["#C97F1E", "#0E8B82", "#3A454C"],
        line: "rgba(150,90,20,0.35)",
      },
    };
    const rand = (a, b) => Math.random() * (b - a) + a;
    const resize = () => {
      W = canvas.width = innerWidth;
      H = canvas.height = innerHeight;
      const count = Math.max(45, Math.min(110, Math.round((W * H) / 16000)));
      parts = Array.from({ length: count }, () => ({
        x: rand(0, W),
        y: rand(0, H),
        vx: rand(-0.35, 0.35),
        vy: rand(-0.35, 0.35),
        r: rand(1.6, 3.4),
        i: Math.floor(rand(0, 3)),
      }));
    };
    const step = () => {
      const pal = palettes[theme];
      ctx.clearRect(0, 0, W, H);
      parts.forEach((p) => {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          const dx = p.x - mouse.x,
            dy = p.y - mouse.y,
            d = Math.hypot(dx, dy);
          if (d < 130) {
            const f = (130 - d) / 130;
            p.x += (dx / (d || 1)) * f * 3.2;
            p.y += (dy / (d || 1)) * f * 3.2;
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = pal.dots[p.i];
        ctx.shadowColor = pal.dots[p.i];
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      ctx.lineWidth = 1;
      for (let i = 0; i < parts.length; i++)
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i],
            b = parts[j],
            d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            ctx.globalAlpha = 1 - d / 140;
            ctx.strokeStyle = pal.line;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(step);
    };
    resize();
    addEventListener("resize", resize);
    addEventListener("mousemove", (e) => {
      mouse = { x: e.clientX, y: e.clientY };
    });
    addEventListener("mouseleave", () => {
      mouse = { x: -9999, y: -9999 };
    });
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
    };
  }, [theme]);
  return (
    <div id="particles-js">
      <canvas ref={ref} />
    </div>
  );
}
