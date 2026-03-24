"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Rocket,
  Sparkles,
  CheckCircle2,
  Code2,
  Globe,
  Brain,
  Zap,
  ArrowRight,
  Calendar,
  Clock,
  Star,
  ChevronDown,
  Play,
  Layers,
  Monitor,
  Users,
  Mic,
  Video,
} from "lucide-react";

/* ── Animation variants ───────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ── Data ─────────────────────────────────────────────────────── */
const stats = [
  { label: "Live Sessions", value: "12", icon: Calendar },
  { label: "Weeks", value: "4", icon: Clock },
  { label: "Hours Training", value: "24+", icon: Zap },
];

const learnCards = [
  {
    icon: Brain,
    title: "AI Product Development",
    text: "Turn ideas into real apps — design UI, direct AI tools, and ship products that actually work.",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    accent: "text-cyan-300",
    ring: "bg-cyan-400/15",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    text: "Learn GitHub, structure codebases, write clean code, and deploy your app to production.",
    gradient: "from-violet-500/20 to-violet-500/5",
    accent: "text-violet-300",
    ring: "bg-violet-400/15",
  },
  {
    icon: Globe,
    title: "Live Deployment",
    text: "Go from localhost to the internet. Domain setup, hosting, and real-world publishing.",
    gradient: "from-fuchsia-500/20 to-fuchsia-500/5",
    accent: "text-fuchsia-300",
    ring: "bg-fuchsia-400/15",
  },
];

const curriculum = [
  {
    week: "Week 1",
    title: "AI-First Foundations",
    desc: "Tools, mindset, and your first working prototype — built entirely with AI guidance.",
    color: "bg-cyan-500/15 border-cyan-500/25 text-cyan-300",
  },
  {
    week: "Week 2",
    title: "Build Your Product",
    desc: "Structure your app, design UI/UX, and iterate fast using AI to accelerate every step.",
    color: "bg-violet-500/15 border-violet-500/25 text-violet-300",
  },
  {
    week: "Week 3",
    title: "Engineering & Code",
    desc: "GitHub, project structure, debugging techniques, and writing clean maintainable code.",
    color: "bg-fuchsia-500/15 border-fuchsia-500/25 text-fuchsia-300",
  },
  {
    week: "Week 4",
    title: "Deploy & Launch",
    desc: "Hosting, domains, environment setup, and shipping your finished app live to the world.",
    color: "bg-emerald-500/15 border-emerald-500/25 text-emerald-300",
  },
];

const outcomes = [
  "Build a complete working web app",
  "Understand and control AI-generated code",
  "Use GitHub for real version control",
  "Deploy your app live on the internet",
  "Use AI tools professionally and confidently",
  "Think and work like a software product builder",
];

const pricingFeatures = [
  "12 live 2-hour sessions (24 hrs total)",
  "All session recordings, forever",
  "Community & peer support channel",
  "Live project feedback & code review",
  "Certificate of completion",
];

/* ── Zoom session preview component ─────────────────────────── */
function ZoomPlaceholder() {
  return (
    <div className="relative w-full bg-[#1c1c1e]" style={{ aspectRatio: "16/9" }}>
      {/* Zoom-style top bar */}
      <div className="flex items-center justify-between bg-[#2a2a2d] px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[11px] font-medium text-white/40">VibeCoding Academy — Live Session</span>
        <div className="w-14" />
      </div>

      {/* Main content area */}
      <div className="flex h-full">
        {/* Screen share / main panel */}
        <div className="flex flex-1 flex-col items-center justify-center bg-[#141414] p-6">
          <Monitor className="mb-3 h-10 w-10 text-white/20" />
          <p className="text-sm font-semibold text-white/30">Screen Share — Live Code Review</p>
          <p className="mt-1 text-xs text-white/15">Drop your Zoom screenshot in /public/zoom-session.png</p>
          {/* Fake code lines */}
          <div className="mt-5 w-full max-w-xs space-y-2">
            {[80, 60, 75, 45, 65].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-5 text-right text-[10px] text-white/15">{i + 1}</span>
                <div className="h-2 rounded-sm bg-white/[0.06]" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>

        {/* Participant tiles */}
        <div className="hidden w-36 flex-col gap-1.5 bg-[#1c1c1e] p-2 sm:flex">
          {["Instructor", "Student 1", "Student 2", "Student 3"].map((name, i) => (
            <div key={name} className="relative flex flex-1 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/40 to-violet-500/40 text-xs font-bold text-white/70">
                {name[0]}
              </div>
              <p className="mt-1 text-[9px] text-white/35">{name}</p>
              {i === 0 && (
                <div className="absolute bottom-1.5 right-1.5 flex items-center gap-0.5 rounded bg-cyan-500/20 px-1 py-0.5">
                  <Mic className="h-2 w-2 text-cyan-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Zoom-style bottom toolbar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
        {[
          { icon: Mic, label: "Mute" },
          { icon: Video, label: "Stop Video" },
          { icon: Monitor, label: "Share Screen" },
        ].map(({ icon: Icon, label }) => (
          <button key={label} className="flex flex-col items-center gap-0.5 opacity-60 hover:opacity-100">
            <div className="rounded-lg bg-white/10 p-2">
              <Icon className="h-4 w-4 text-white" />
            </div>
            <span className="text-[9px] text-white/50">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020510] text-white">

      {/* Background dot grid */}
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-40" aria-hidden />

      {/* Aurora orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -left-48 -top-48 h-[40rem] w-[40rem] rounded-full bg-cyan-500/[0.11] blur-[130px]"
          animate={{ x: [0, 90, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-24 right-[-25%] h-[35rem] w-[35rem] rounded-full bg-violet-600/[0.11] blur-[110px]"
          animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[35%] top-[55%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/[0.07] blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-20 bottom-0 h-[22rem] w-[22rem] rounded-full bg-cyan-400/[0.07] blur-[90px]"
          animate={{ x: [0, 60, 0], y: [0, -35, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Sticky Navbar ── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="glass-nav fixed left-0 right-0 top-0 z-50"
      >
        <div className="flex w-full items-center justify-between px-5 py-3 md:px-8">
          <a href="#">
            <Image
              src="/logo.png"
              alt="VibeCoding Academy"
              width={100}
              height={100}
              className="rounded-xl"
              priority
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white/50 md:flex">
            <a href="#"           className="transition-colors duration-200 hover:text-white">Home</a>
            <a href="#learn"      className="transition-colors duration-200 hover:text-white">Learn</a>
            <a href="#curriculum" className="transition-colors duration-200 hover:text-white">Curriculum</a>
            <a href="#outcomes"   className="transition-colors duration-200 hover:text-white">Outcomes</a>
            <a href="#pricing"    className="transition-colors duration-200 hover:text-white">Pricing</a>
          </nav>

          <a
            href="https://buy.stripe.com/4gM5kDb9v7xzaFz2U14gg00"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Enroll Now</span>
          </a>
        </div>
      </motion.header>

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pb-16 pt-28 text-center md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Live badge */}
          <motion.div variants={fadeUp} className="mb-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-2 text-xs font-semibold text-cyan-200 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              VibeCoding Academy — Live Training for Real Product Builders
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-[clamp(2.6rem,7.5vw,5.2rem)] font-black leading-[1.08] tracking-tight"
          >
            Build Real Apps
            <br />
            <span className="text-gradient">Not Just Prompts</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/55 md:text-lg"
          >
            A 4-week live programme where you go from idea to a deployed
            product — using AI tools the right way, with real engineering skills.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href="https://buy.stripe.com/4gM5kDb9v7xzaFz2U14gg00"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white sm:w-auto"
            >
              <Rocket className="h-5 w-5" />
              Join the Next Cohort
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-7 py-4 text-base font-medium text-white/75 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.09] hover:text-white sm:w-auto"
            >
              <Play className="h-4 w-4" />
              See Curriculum
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="glass-card flex items-center gap-3 rounded-2xl px-5 py-3"
              >
                <div className="rounded-xl bg-cyan-400/[0.12] p-2">
                  <Icon className="h-4 w-4 text-cyan-300" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold leading-none">{value}</p>
                  <p className="mt-0.5 text-xs text-white/45">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Zoom session preview ── */}
          <motion.div
            variants={fadeUp}
            className="mt-14 w-full max-w-3xl px-0"
          >
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_0_80px_rgba(6,182,212,0.1),0_32px_80px_rgba(0,0,0,0.7)]">

              {/* Live badge */}
              <div className="absolute left-3 top-3 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
                Live Session
              </div>

              {/* Participant count badge */}
              <div className="absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                <Users className="h-3 w-3 text-cyan-300" />
                24 participants
              </div>

              {/* Try to load real screenshot; fallback to styled placeholder */}
              <ZoomPlaceholder />
            </div>

            <p className="mt-3 text-center text-xs text-white/30">
              A real VibeCoding Academy live session — replace{" "}
              <code className="text-white/50">/public/zoom-session.png</code> with your screenshot
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="animate-bob absolute bottom-8 left-1/2">
          <div className="flex flex-col items-center gap-1.5 text-white/25">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHAT YOU'LL LEARN
      ════════════════════════════════════════════════ */}
      <section id="learn" className="relative z-10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Curriculum Overview
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">What You&apos;ll Learn</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/45 md:text-base">
              Three core pillars designed to take you from zero to production-ready.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {learnCards.map(({ icon: Icon, title, text, accent, ring, gradient }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="glass-card glow-hover group relative cursor-default overflow-hidden rounded-2xl p-6"
              >
                {/* Corner gradient accent */}
                <div
                  className={`pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} blur-2xl opacity-60`}
                />
                <div className={`relative mb-5 inline-flex rounded-xl ${ring} p-3 ${accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative text-lg font-bold">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/50">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CURRICULUM
      ════════════════════════════════════════════════ */}
      <section id="curriculum" className="relative z-10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400">
              Programme Structure
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              4 Weeks.{" "}
              <span className="text-gradient">Real Results.</span>
            </h2>
          </motion.div>

          <div className="relative flex flex-col gap-4">
            {/* Timeline spine — desktop only */}
            <div className="timeline-line absolute bottom-6 left-[1.75rem] top-6 hidden w-[2px] md:block" aria-hidden />

            {curriculum.map(({ week, title, desc, color }, i) => (
              <motion.div
                key={week}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 md:gap-5"
              >
                {/* Node bubble */}
                <div className="glass-card relative z-10 hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-full md:flex">
                  <span className="text-sm font-bold text-white/60">{i + 1}</span>
                </div>

                <div className="glass-card glow-hover flex-1 rounded-2xl px-6 py-5">
                  <div className="mb-2 flex items-center gap-3">
                    <span className={`inline-flex rounded-full border px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${color}`}>
                      {week}
                    </span>
                  </div>
                  <h3 className="text-base font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          OUTCOMES
      ════════════════════════════════════════════════ */}
      <section id="outcomes" className="relative z-10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              What You Leave With
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">What You&apos;ll Achieve</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="glass-card rounded-3xl p-6 md:p-10"
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm text-white/75">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PRICING
      ════════════════════════════════════════════════ */}
      <section id="pricing" className="relative z-10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-fuchsia-400">
              Investment
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Simple, Clear Pricing</h2>
            <p className="mx-auto mt-4 max-w-sm text-sm text-white/45">
              One payment. Everything included. No surprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
            className="pricing-glow relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-3xl"
          >
            {/* Rainbow top bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500" />

            <div className="p-8 text-center md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-500/[0.1] to-violet-500/[0.1] px-4 py-1.5 text-xs font-semibold text-cyan-200">
                <Star className="h-3.5 w-3.5 fill-current" />
                Full Programme Access
              </div>

              <div className="mt-6 flex items-end justify-center gap-1">
                <span className="mb-2.5 text-2xl font-semibold text-white/40">£</span>
                <span className="text-[5.5rem] font-black leading-none tracking-tighter">150</span>
              </div>
              <p className="mt-1 text-sm text-white/40">one-time payment</p>

              <ul className="mt-8 space-y-3 text-left">
                {pricingFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/4gM5kDb9v7xzaFz2U14gg00"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white"
              >
                <Sparkles className="h-5 w-5" />
                Enroll Now — £150
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <p className="mt-4 text-xs text-white/25">
                Secure checkout via Stripe · Instant confirmation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════ */}
      <section id="cta" className="relative z-10 px-5 py-24 md:px-8 md:py-32">
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
          <div className="h-[30rem] w-[50rem] rounded-full bg-violet-600/[0.08] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.07] px-4 py-2 text-xs font-semibold text-violet-200">
              <Layers className="h-3.5 w-3.5" />
              Your first app is waiting to be built
            </div>

            <h2 className="text-[clamp(2rem,6vw,3.75rem)] font-black leading-tight tracking-tight">
              Stop learning.{" "}
              <span className="text-gradient">Start shipping.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
              Don&apos;t just learn prompts. Learn to build. Join a live cohort,
              ship a real product, and leave with skills that actually matter.
            </p>

            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://buy.stripe.com/4gM5kDb9v7xzaFz2U14gg00"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-9 py-4 text-base font-semibold text-white sm:w-auto"
              >
                <Rocket className="h-5 w-5" />
                Start Building Today
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-7 py-4 text-base font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.09] hover:text-white sm:w-auto"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
      <footer className="relative z-10 border-t border-white/[0.07] px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="VibeCoding Academy"
              width={42}
              height={42}
              className="rounded-xl"
            />
            <div>
              <p className="text-sm font-semibold">VibeCoding Academy</p>
              <p className="text-xs text-white/35">A product of Egobas Limited</p>
            </div>
          </div>

          <div className="text-center text-sm text-white/35 md:text-right">
            <p>
              <a
                href="mailto:godwin@egobas.com"
                className="text-cyan-400/80 transition-colors duration-200 hover:text-cyan-300"
              >
                godwin@egobas.com
              </a>
              {" · "}
              <a
                href="tel:+447814483083"
                className="text-cyan-400/80 transition-colors duration-200 hover:text-cyan-300"
              >
                +44 781 448 3083
              </a>
            </p>
            <p className="mt-1.5 text-xs text-white/25">
              © {new Date().getFullYear()} Egobas Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
