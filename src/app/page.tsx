
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Eye,
  Network,
  Layers3,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import ClarityEngine from "./component/ClarityEngine";
import Contact from "./component/contact";
import AnalyticsTracker from "./component/AnalyticsTracker";
import { trackEvent } from "@/lib/analytics";

import { profile } from "@/data/properyies";

export default function Home() {
  const [activeExperience, setActiveExperience] =
    useState(0);

  const active = profile.experiences[activeExperience];

  return (
    <main className="signal-bg min-h-screen bg-[#090a0c] text-[#f4f1eb]">
      <AnalyticsTracker />
      {/* NAVIGATION */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#090a0c]/95 text-[#f4f1eb] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#" className="text-lg font-bold tracking-widest">
            THE<span className="text-[#ff914d]">.</span>SIGNAL
          </a>

          <div className="hidden gap-8 text-sm text-neutral-400 md:flex">
            <a href="#thinking" className="hover:text-white">Thinking</a>
            <a href="#network" className="hover:text-white">Journey</a>
            <a href="#contact" className="hover:text-white">Connect</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-[#ff914d]/50 px-5 py-2 text-sm transition hover:bg-[#ff914d] hover:text-black"
          >
            Start a conversation ↗
          </a>

        </div>
      </nav>

      {/* HERO */}

      <section
  id="hero"
  className="signal-grid relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div className="relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3 text-xs tracking-[0.3em] text-[#ff914d]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff914d]" />
              AN EXPLORATION OF THINKING & LEADERSHIP
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-[clamp(2.8rem,4.6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.045em] text-[#f4f1eb]"
            >
              I NOTICE
              <br />
              WHAT OTHERS
              <br />
              <span className="text-[#ff914d]">DON&apos;T.</span>
            </motion.h1>
            <div className="mt-6 border-l-2 border-[#ff914d] pl-4">
  <h2 className="text-xl font-semibold text-[#f4f1eb]">
    Sonia S
  </h2>

  <p className="mt-1 text-sm tracking-wide text-neutral-400">
    Marketing Strategist · CMO · Business Advisor
  </p>
</div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-400"
            >
              {profile.introduction}
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#thinking"
                className="flex items-center gap-3 rounded-full bg-[#ff914d] px-7 py-4 font-semibold text-black transition hover:scale-105"
              >
                Explore the thinking
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#network"
                className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-white transition hover:border-[#ff914d]"
              >
                Discover the journey
                <ArrowDown size={17} />
              </a>

            </div>

          </div>

          {/* INTERACTIVE VISUAL */}

          <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[540px]">

            <div className="absolute h-[320px] w-[320px] rounded-full border border-[#ff914d]/20 sm:h-[420px] sm:w-[420px]" />

            <div className="absolute h-[240px] w-[240px] rounded-full border border-white/10 sm:h-[320px] sm:w-[320px]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[370px] w-[370px] rounded-full border border-dashed border-[#ff914d]/30 sm:h-[490px] sm:w-[490px]"
            />

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="orange-glow relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-[#ff914d]/60 bg-[#ff914d]/10 backdrop-blur-xl sm:h-48 sm:w-48"
            >
              <div className="text-center">
                <Sparkles className="mx-auto mb-3 text-[#ff914d]" size={30} />
                <p className="text-xs tracking-[0.3em] text-[#ff914d]">
                  CLARITY
                </p>
              </div>
            </motion.div>

            <div className="absolute left-2 top-20 rounded-xl border border-white/10 bg-[#131518]/80 p-4 backdrop-blur-xl sm:left-0">
              <Eye className="mb-2 text-[#ff914d]" />
              <p className="text-xs text-neutral-400">OBSERVE</p>
            </div>

            <div className="absolute right-0 top-32 rounded-xl border border-white/10 bg-[#131518]/80 p-4 backdrop-blur-xl">
              <Network className="mb-2 text-[#ff914d]" />
              <p className="text-xs text-neutral-400">CONNECT</p>
            </div>

            <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-xl border border-[#ff914d]/20 bg-[#131518] p-4 backdrop-blur-xl">
              <Layers3 className="mb-2 text-[#ff914d]" />
              <p className="text-xs text-neutral-400">SIMPLIFY</p>
            </div>

          </div>

        </div>

      </section>

      {/* PHILOSOPHY */}

      <section id="thinking" className="px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-sm tracking-[0.3em] text-[#ff914d]">
            01 / THE THINKING
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-6xl">
            Complexity is easy.
            <span className="text-neutral-500">
              {" "}Clarity takes understanding.
            </span>
          </h2>

          <div className="mt-20 grid gap-5 md:grid-cols-3">

            {profile.philosophy.map((item, index) => {

              const icons = [Eye, Network, Layers3];
              const Icon = icons[index];

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-white/10 bg-[#131518] p-8 transition hover:border-[#ff914d]/50"
                >

                  <Icon
                    size={35}
                    className="mb-12 text-[#ff914d]"
                  />

                  <p className="mb-4 text-xs tracking-widest text-neutral-500">
                    0{index + 1}
                  </p>

                  <h3 className="mb-4 text-3xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-neutral-400">
                    {item.description}
                  </p>

                  <MoveUpRight
                    className="mt-8 text-neutral-600 transition group-hover:text-[#ff914d]"
                  />

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>
      <ClarityEngine />

      {/* CAREER NETWORK */}

      <section id="network" className="border-y border-white/10 bg-[#0d0f11] px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-sm tracking-[0.3em] text-[#ff914d]">
            02 / THE JOURNEY
          </p>

          <h2 className="text-4xl font-bold sm:text-6xl">
            Different worlds.
            <br />
            <span className="text-neutral-500">
              Connected thinking.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-neutral-400">
            A career across marketing, consulting, product strategy
            and business operations.
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">

            <div className="flex flex-col gap-3">

              {profile.experiences.map((experience, index) => (

                <button
                  key={`${experience.company}-${index}`}
                  onClick={() => {
  setActiveExperience(index);

  void trackEvent("experience_click", {
    company: experience.company,
  });
}}
                  className={`rounded-xl border p-5 text-left transition ${
                    activeExperience === index
                      ? "border-[#ff914d] bg-[#ff914d]/10"
                      : "border-white/10 bg-[#131518] hover:border-white/30"
                  }`}
                >

                  <div className="flex items-center justify-between gap-3">

                    <span className="font-semibold">
                      {experience.company}
                    </span>

                    <span className="text-xs text-[#ff914d]">
                      {activeExperience === index ? "ACTIVE ↗" : "EXPLORE"}
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-neutral-500">
                    {experience.role}
                  </p>

                </button>

              ))}

            </div>

            <motion.div
              key={activeExperience}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex min-h-[380px] flex-col justify-center self-start rounded-2xl border border-[#ff914d]/30 bg-[#131518] p-8 sm:p-12 lg:sticky lg:top-28"
            >

              <p className="text-xs tracking-widest text-[#ff914d]">
                SELECTED EXPERIENCE
              </p>

              <h3 className="mt-8 text-3xl font-bold">
                {active.company}
              </h3>

              <p className="mt-3 text-lg text-neutral-300">
                {active.role}
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                {active.period}
              </p>

              <div className="my-8 h-px bg-white/10" />

              <p className="leading-relaxed text-neutral-400">
                {active.description}
              </p>

            </motion.div>

          </div>

        </div>
      </section>

     {/* CONTACT */}

<Contact />

{/* FOOTER */}

<footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-5 border-t border-white/10 px-6 py-8 text-sm text-neutral-500">

  <span>THE SIGNAL © 2026</span>

  <span>OBSERVE. CONNECT. SIMPLIFY.</span>

  <a href="#" className="hover:text-[#ff914d]">
    Back to top ↑
  </a>
  <p className="w-full text-xs leading-relaxed text-neutral-500">
  This website uses session-based engagement analytics
  to understand visitor interactions. Contact details
  are stored when you submit an enquiry.
</p>

</footer>

    </main>
  );
}
