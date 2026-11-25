
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Network, RotateCcw, ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
const particles = Array.from({ length: 48 }, (_, i) => {
  const angle = i * 2.399;
  const radius = 30 + ((i * 37) % 180);

  const targetAngle = (i / 48) * Math.PI * 2;
  const targetRadius = 50 + (i % 3) * 55;

  return {
    id: i,
    x: 250 + Math.cos(angle) * radius,
    y: 250 + Math.sin(angle) * radius,
    targetX: 250 + Math.cos(targetAngle) * targetRadius,
    targetY: 250 + Math.sin(targetAngle) * targetRadius,
  };
});

export default function ClarityEngine() {
  const [clarity, setClarity] = useState(0);
  const reduceMotion = useReducedMotion();

  const progress = clarity / 100;

  const status =
    clarity === 100
      ? "Clarity achieved"
      : clarity >= 65
      ? "Connecting the dots"
      : clarity >= 30
      ? "Recognising patterns"
      : "Fragmented information";

  return (
    <section
      id="clarity"
      className="border-y border-white/10 bg-[#0d0f11] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-5 text-xs tracking-[0.3em] text-[#ff914d]">
          INTERACTIVE EXPERIENCE / THE CLARITY ENGINE
        </p>

        <h2 className="text-4xl font-bold sm:text-6xl">
          From chaos
          <span className="text-[#ff914d]"> to clarity.</span>
        </h2>

        <p className="mt-6 max-w-2xl leading-relaxed text-neutral-400">
          Disconnected ideas. Fragmented teams. Hidden
          opportunities. Explore how observing patterns
          and connecting information can transform complexity
          into clarity.
        </p>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">

          {/* Visualisation */}

          <div className="signal-grid relative overflow-hidden rounded-3xl border border-white/10 bg-[#090a0c]">

            <div className="absolute left-5 top-5 flex items-center gap-2 text-xs tracking-widest text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-[#ff914d]" />
              LIVE VISUALISATION
            </div>

            <svg
              viewBox="0 0 500 500"
              className="mx-auto w-full max-w-[520px]"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="clarityGlow">
                  <stop
                    offset="0%"
                    stopColor="#ff914d"
                    stopOpacity="0.25"
                  />
                  <stop
                    offset="100%"
                    stopColor="#ff914d"
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>

              <circle
                cx="250"
                cy="250"
                r="210"
                fill="url(#clarityGlow)"
                opacity={progress}
              />

              {[70, 125, 180].map((radius) => (
                <circle
                  key={radius}
                  cx="250"
                  cy="250"
                  r={radius}
                  fill="none"
                  stroke="#ff914d"
                  strokeWidth="0.6"
                  opacity={progress * 0.25}
                />
              ))}

              {particles.map((particle) => {
                const x =
                  particle.x +
                  (particle.targetX - particle.x) * progress;

                const y =
                  particle.y +
                  (particle.targetY - particle.y) * progress;

                return (
                  <motion.g key={particle.id}>

                    <motion.line
                      x1={250}
                      y1={250}
                      animate={{
                        x2: x,
                        y2: y,
                        opacity: progress * 0.4,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.4,
                      }}
                      stroke="#ff914d"
                      strokeWidth="0.8"
                    />

                    <motion.circle
                      animate={{
                        cx: x,
                        cy: y,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.4,
                      }}
                      r={particle.id % 4 === 0 ? 4 : 2.5}
                      fill={
                        particle.id % 3 === 0
                          ? "#ff914d"
                          : "#a1a1aa"
                      }
                    />

                  </motion.g>
                );
              })}

              <motion.circle
                cx="250"
                cy="250"
                animate={{
                  r: 15 + progress * 22,
                  opacity: 0.2 + progress * 0.8,
                }}
                fill="#ff914d"
              />

              {clarity >= 80 && (
                <text
                  x="250"
                  y="254"
                  fill="#090a0c"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  CLARITY
                </text>
              )}

            </svg>

            <div className="absolute bottom-5 left-5 text-xs text-neutral-500">
              48 SIGNAL NODES
            </div>

          </div>

          {/* Controls */}

          <div className="rounded-3xl border border-white/10 bg-[#131518] p-6 sm:p-10">

            <Network
              size={32}
              className="mb-6 text-[#ff914d]"
            />

            <p className="text-xs tracking-widest text-neutral-400">
              SYSTEM ALIGNMENT
            </p>

            <div className="mt-4 flex items-end gap-3">

              <span className="text-7xl font-bold text-[#ff914d]">
                {clarity}%
              </span>

            </div>

            <p
              aria-live="polite"
              className="mt-4 text-lg text-[#f4f1eb]"
            >
              {status}
            </p>

            <div className="my-8 h-px bg-white/10" />

            <div className="mb-4 flex justify-between text-xs tracking-widest text-neutral-400">
              <span>CHAOS</span>
              <span>CLARITY</span>
            </div>

          <input
  type="range"
  min="0"
  max="100"
  value={clarity}
  aria-label="System alignment"
  onChange={(event) =>
    setClarity(Number(event.target.value))
  }
  onPointerUp={(event) => {
    void trackEvent("clarity_interaction", {
      value: Number(event.currentTarget.value),
    });
  }}
  onKeyUp={(event) => {
    if (
      [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
      ].includes(event.key)
    ) {
      void trackEvent("clarity_interaction", {
        value: Number(event.currentTarget.value),
      });
    }
  }}
  className="w-full cursor-pointer accent-[#ff914d]"
/>

          <button
  onClick={() => {
    const nextValue = clarity === 100 ? 0 : 100;

    setClarity(nextValue);

    void trackEvent("clarity_interaction", {
      value: nextValue,
    });
  }}
  className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#ff914d] px-6 py-4 font-semibold text-black transition hover:bg-[#ffad79]"
>
  {clarity === 100 ? (
    <>
      <RotateCcw size={18} />
      Reset experience
    </>
  ) : (
    <>
      Connect the dots
      <ArrowUpRight size={18} />
    </>
  )}
</button>

            <p className="mt-6 text-sm leading-relaxed text-neutral-400">
              Inspired by Sonia's approach to bringing clarity,
              connecting the dots and aligning people,
              strategy and execution.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
