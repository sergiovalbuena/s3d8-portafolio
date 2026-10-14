"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiGithub, FiRefreshCw } from "react-icons/fi";
import { sketches } from "../lib/sketches";

const REPO_URL = "https://github.com/sergiovalbuena/javascript_art/tree/master";

const GenerativeArt = () => {
  return (
    <section className="overflow-hidden bg-slate-900 px-4 py-16">
      <div className="mx-auto max-w-8xl lg:px-10">
        <div className="mb-8">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl text-slate-100">
            Creative coding <span className="text-indigo-500">with canvas</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Generative sketches written in vanilla JavaScript and the Canvas
            API. They run live here; regenerate them for a new variation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {sketches.map((sketch) => (
            <SketchCard key={sketch.id} sketch={sketch} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SketchCard = ({ sketch }) => {
  const [seed, setSeed] = useState(0);

  return (
    <motion.article
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden rounded-2xl bg-slate-800 ring-1 ring-slate-700"
    >
      <SketchCanvas key={seed} sketch={sketch} />
      <div className="p-5 text-slate-100">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-semibold">{sketch.title}</h3>
          <div className="flex gap-1">
            <button
              onClick={() => setSeed((s) => s + 1)}
              aria-label={`Regenerate ${sketch.title}`}
              title="Regenerate"
              className="rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-indigo-400"
            >
              <FiRefreshCw />
            </button>
            <a
              href={`${REPO_URL}/${sketch.source}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Source code of ${sketch.title}`}
              title="Source code"
              className="rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-indigo-400"
            >
              <FiGithub />
            </a>
          </div>
        </div>
        <p className="mt-1 text-sm text-slate-400">
          {sketch.description}
        </p>
      </div>
    </motion.article>
  );
};

const SketchCanvas = ({ sketch }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let instance = null;
    let frameId = null;
    let visible = false;

    const render = (time) => {
      instance.draw(ctx, time, width, height);
      frameId =
        instance.animated && visible && !reducedMotion
          ? requestAnimationFrame(render)
          : null;
    };

    const start = () => {
      if (frameId === null && instance) render(performance.now());
    };

    const stop = () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      instance = sketch.create(width, height);
      stop();
      start();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    intersectionObserver.observe(canvas);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [sketch]);

  return (
    <canvas
      ref={canvasRef}
      className="block aspect-square w-full bg-black"
      aria-label={`${sketch.title}: ${sketch.description}`}
      role="img"
    />
  );
};

export default GenerativeArt;
