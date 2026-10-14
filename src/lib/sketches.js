// Generative sketches ported from github.com/sergiovalbuena/javascript_art.
// Each sketch is a factory: (width, height) => { draw(ctx, time) }.
// `animated: false` sketches are drawn once per regenerate.
import { createNoise3D } from "simplex-noise";

const randomRange = (min, max) => Math.random() * (max - min) + min;
const degToRad = (deg) => (deg * Math.PI) / 180;

// first/ — a circle of randomly scaled bars and broken arcs
const radialBloom = () => {
  const num = 12;
  const slice = degToRad(360 / num);
  const bars = Array.from({ length: num }, () => ({
    scale: randomRange(0.1, 2.4),
    offset: randomRange(0, 0.5),
    lineWidth: randomRange(5, 20),
    radius: randomRange(0.7, 1.4),
    start: randomRange(1, -8),
    end: randomRange(1, -0.7),
  }));

  return {
    draw(ctx, _time, width, height) {
      const size = Math.min(width, height);
      const cx = width * 0.5;
      const cy = height * 0.5;
      const w = size * 0.01;
      const h = size * 0.1;
      const radius = size * 0.3;

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";

      bars.forEach((bar, i) => {
        const angle = slice * i;

        ctx.save();
        ctx.translate(cx + radius * Math.sin(angle), cy + radius * Math.cos(angle));
        ctx.rotate(-angle);
        ctx.scale(bar.scale, 1);
        ctx.beginPath();
        ctx.rect(-w * 0.5, bar.offset * h, w, h);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-angle);
        ctx.lineWidth = bar.lineWidth * (size / 1080);
        ctx.beginPath();
        ctx.arc(0, 0, radius * bar.radius, slice * bar.start, slice * bar.end);
        ctx.stroke();
        ctx.restore();
      });
    },
  };
};

// grid/ — a grid of lines, now rotated and scaled by simplex noise
const noiseGrid = () => {
  const noise3D = createNoise3D();
  const cols = 12;
  const rows = 12;

  return {
    animated: true,
    draw(ctx, time, width, height) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      const gridw = width * 0.8;
      const gridh = height * 0.8;
      const cellw = gridw / cols;
      const cellh = gridh / rows;
      const margx = (width - gridw) * 0.5;
      const margy = (height - gridh) * 0.5;

      ctx.strokeStyle = "white";
      ctx.lineCap = "round";

      for (let i = 0; i < cols * rows; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const n = noise3D(col * 0.12, row * 0.12, time * 0.0004);

        ctx.save();
        ctx.translate(margx + col * cellw + cellw * 0.5, margy + row * cellh + cellh * 0.5);
        ctx.rotate(n * Math.PI * 0.5);
        ctx.lineWidth = 1 + ((n + 1) / 2) * cellw * 0.12;
        ctx.beginPath();
        ctx.moveTo(cellw * -0.4, 0);
        ctx.lineTo(cellw * 0.4, 0);
        ctx.stroke();
        ctx.restore();
      }
    },
  };
};

// dots_lines_move/ — bouncing points linked when close to each other
const particleNetwork = (width, height) => {
  const count = Math.round(Math.min(60, Math.max(20, (width * height) / 9000)));
  const points = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: randomRange(-0.6, 0.6),
    vy: randomRange(-0.6, 0.6),
    radius: randomRange(2, 6),
  }));
  const linkDistance = Math.min(width, height) * 0.3;

  return {
    animated: true,
    draw(ctx, _time, w, h) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < linkDistance) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - distance / linkDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.strokeStyle = "lightblue";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    },
  };
};

// waves/ — blurred color waves, with the simplex noise restored
const noiseWaves = () => {
  const noise3D = createNoise3D();
  const colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];

  return {
    animated: true,
    draw(ctx, time, width, height) {
      const t = time * 0.0002;
      ctx.filter = "blur(10px)";
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.lineWidth = height * 0.12;

      colors.forEach((color, i) => {
        ctx.strokeStyle = color;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 5) {
          const y = noise3D(x / 800, 0.3 * i, t) * height * 0.25;
          ctx.lineTo(x, y + height * 0.5);
        }
        ctx.stroke();
      });
      ctx.filter = "none";
    },
  };
};

export const sketches = [
  {
    id: "radial-bloom",
    title: "Radial Bloom",
    description: "Bars and broken arcs placed around a circle with random scale.",
    source: "first",
    create: radialBloom,
  },
  {
    id: "noise-grid",
    title: "Noise Grid",
    description: "A line grid rotated by 3D simplex noise over time.",
    source: "grid",
    create: noiseGrid,
  },
  {
    id: "particle-network",
    title: "Particle Network",
    description: "Bouncing points that connect when they get close.",
    source: "dots_lines_move",
    create: particleNetwork,
  },
  {
    id: "noise-waves",
    title: "Noise Waves",
    description: "Blurred color waves driven by simplex noise.",
    source: "waves",
    create: noiseWaves,
  },
];
