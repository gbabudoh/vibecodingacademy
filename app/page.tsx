"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Rocket,
  Sparkles,
  Workflow,
  CheckCircle2,
} from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const learnCards = [
  {
    title: "AI Product Development",
    text: "Turn ideas into real apps, design UI, and control AI-generated code.",
  },
  {
    title: "Software Engineering",
    text: "Learn GitHub, structure projects, and deploy your app live.",
  },
];

const outcomes = [
  "Build a working web app",
  "Understand your code",
  "Use AI tools confidently",
  "Deploy your app live",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-28 left-[-7rem] h-[22rem] w-[22rem] rounded-full bg-cyan-500/25 blur-3xl"
          animate={{ x: [0, 55, 0], y: [0, 28, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-7rem] top-40 h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={{ x: [0, -48, 0], y: [0, -34, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute top-6 left-6 z-20">
        <Image
          src="/logo.png"
          alt="Vibe Coding Academy logo"
          width={96}
          height={96}
          className="rounded-xl"
          priority
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 py-20 md:px-10 lg:px-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.section
          variants={item}
          className="mx-auto max-w-4xl text-center py-10"
        >
          <motion.div
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-4 w-4" />
            Premium live training for builders
          </motion.div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Build Real Apps with AI
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Not Just Prompts
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Join VibeCoding Academy and learn how to turn ideas into real
            products using AI tools — with structure, control, and real-world
            development skills.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-lg"
            >
              <Rocket className="h-5 w-5" />
              Join the Next Cohort
            </a>
          </div>
        </motion.section>

        <motion.section id="learn" variants={item} className="mt-20">
          <h2 className="text-center text-3xl font-semibold">
            What You&apos;ll Learn
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {learnCards.map(({ title, text }) => (
              <motion.article
                key={title}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_0_45px_rgba(255,255,255,0.03)] backdrop-blur-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-cyan-300/15 p-2 text-cyan-200">
                  <Workflow className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-white/70">{text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="mt-20 mx-auto max-w-2xl w-full">
          <h2 className="text-center text-3xl font-semibold">
            What You&apos;ll Achieve
          </h2>
          <ul className="mt-8 grid gap-3 text-white/80 md:grid-cols-2">
            {outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
                {outcome}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="pricing"
          variants={item}
          className="mx-auto mt-24 mb-20 w-full max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold">Join the Program</h2>
          <p className="mt-4 text-white/70 font-medium">
            4 Weeks Live Training — 12 sessions, 2 hours each
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-8 rounded-2xl border border-white/20 bg-gradient-to-b from-white/12 to-white/5 p-10 shadow-[0_16px_60px_rgba(32,233,255,0.12)] backdrop-blur-xl"
          >
            <h3 className="mt-3 text-5xl font-bold">£150</h3>
            <p className="mt-4 text-white/80">
              **Full 4-week programme — all live sessions, recordings, and
              community support included**
            </p>
            <a
              href="https://buy.stripe.com/4gM5kDb9v7xzaFz2U14gg00"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-black transition hover:-translate-y-0.5 shadow-lg"
            >
              <Sparkles className="h-5 w-5" />
              Enroll Now
            </a>
          </motion.div>
        </motion.section>
      </motion.div>
    </main>
  );
}
