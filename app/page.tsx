"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import { AsciiBloom } from "./components/ascii-bloom";
import { ArrowRight, ArrowUpRight, Github, XLogo } from "./components/icons";

const GITHUB_URL = "https://github.com/Saksham1387/Repeet";
const X_URL = "https://x.com/Saksham1184122";
const EASE: [number, number, number, number] = [0.22, 0.8, 0.2, 1];

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const bloomIn: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: EASE, delay: 0.2 },
  },
};

const buttonMotion = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.985 },
};

const steps = [
  {
    title: "Capture",
    description:
      "Every accepted LeetCode submission is saved automatically with its title, difficulty, and topic tags.",
  },
  {
    title: "Reflect",
    description:
      "Write the insight worth keeping: the pattern, the edge case, the complexity that made it click.",
  },
  {
    title: "Repeat",
    description:
      "SM-2 brings the problem back when it’s due. Reveal your note, rate recall, and move on.",
  },
];

const bloomLabels = [
  { label: "Seed", sub: "accepted", side: "left", position: "top-10" },
  { label: "Stem", sub: "reflection", side: "left", position: "top-[46%]" },
  { label: "Field", sub: "library", side: "left", position: "bottom-16" },
  { label: "Petal", sub: "review", side: "right", position: "top-16" },
  { label: "Red", sub: "memory", side: "right", position: "top-[44%]" },
  { label: "Letters", sub: "repeat", side: "right", position: "bottom-16" },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-[10px] focus:uppercase focus:tracking-[0.16em] focus:text-accent"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-[1400px] items-center justify-between gap-5 px-5 py-4 sm:px-8"
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/repeet-mark.png"
              alt=""
              width={128}
              height={128}
              priority
              className="h-7 w-7"
            />
            <span className="text-lg font-medium lowercase tracking-[-0.03em]">
              repeet
            </span>
          </Link>

          <div className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:flex">
            <a className="transition hover:text-accent" href="#process">
              Process
            </a>
            <a
              className="transition hover:text-accent"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ink px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition hover:border-accent hover:text-accent"
          >
            Install
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </nav>
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        />
      </header>

      <main id="main" className="flex-1">
        <section className="relative overflow-hidden border-b border-line">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/5 blur-[120px]"
          />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4 lg:pb-24 lg:pt-24">
            <motion.div
              className="relative z-10"
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  Repeet / DSA revision deck
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 text-[clamp(4.2rem,11vw,9rem)] font-medium lowercase leading-[0.82] tracking-[-0.07em]"
              >
                remember<span className="text-accent">.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-1 text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium lowercase leading-[0.95] tracking-[-0.05em] text-muted"
              >
                what you solve.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-md text-base leading-relaxed text-muted"
              >
                Repeet quietly captures every accepted LeetCode submission,
                keeps the reflection you write, and brings the problem back
                with SM-2 spacing until the pattern sticks.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <motion.a
                  {...buttonMotion}
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-ink bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-bg transition hover:border-accent hover:bg-accent hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Install from GitHub
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.a>
                <motion.a
                  {...buttonMotion}
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 border border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  How it works
                </motion.a>
              </motion.div>

              <motion.ul
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted"
              >
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-accent" />
                  Free and open source
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-accent" />
                  No account needed
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-accent" />
                  Local-first
                </li>
              </motion.ul>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[560px]"
              variants={bloomIn}
              initial="hidden"
              animate="show"
            >
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(204,90,59,0.14),transparent_58%)]"
                animate={
                  reduceMotion
                    ? undefined
                    : { opacity: [0.7, 1, 0.7], scale: [1, 1.03, 1] }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              />

              <div className="relative mx-auto flex w-full max-w-[440px] justify-center">
                <div className="flower-sway relative -top-6 z-auto">
                  <AsciiBloom />
                </div>

                {bloomLabels.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className={`absolute z-20 hidden w-20 sm:block ${
                      item.side === "left"
                        ? "left-0 text-left"
                        : "right-0 text-right"
                    } ${item.position}`}
                    initial={{
                      opacity: 0,
                      x: item.side === "left" ? -8 : 8,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.85 + index * 0.07,
                      ease: EASE,
                    }}
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                      {item.label}
                    </p>
                    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-dim">
                      {item.sub}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10 mt-5 flex items-center justify-between border-t border-line pt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-dim">
                <span>Fig. 01</span>
                <span>Memory, in bloom</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="process"
          className="scroll-mt-20 border-b border-line py-20 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <motion.p
              className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              <span className="text-accent">[01]</span>
              Process
              <span className="h-px w-12 bg-line" />
            </motion.p>
            <motion.h2
              className="mt-4 text-4xl font-medium lowercase leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              capture. reflect. repeat.
            </motion.h2>

            <motion.div
              className="mt-12 grid border-t border-line md:grid-cols-3"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {steps.map((step, index) => (
                <motion.article
                  key={step.title}
                  variants={fadeUp}
                  className="border-b border-line py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>

            <motion.p
              className="mt-8 font-mono text-[9px] uppercase tracking-[0.16em] text-dim"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              Everything stays in chrome.storage.local / no accounts / no server
            </motion.p>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 sm:py-32">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.6, 1, 0.6], scale: [0.97, 1.03, 0.97] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />

          <motion.div
            className="relative mx-auto max-w-[1400px] px-5 text-center sm:px-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent"
            >
              Ready when you are
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-6 text-[clamp(3rem,9vw,7rem)] font-medium lowercase leading-[0.85] tracking-[-0.06em]"
            >
              remember
              <br />
              <span className="text-accent">everything.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted"
            >
              Install Repeet, solve like you already do, and let the deck bring
              the right problem back at the right time.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <motion.a
                {...buttonMotion}
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-bg transition hover:border-accent hover:bg-accent hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Install from GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </motion.a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-dim"
            >
              Free / Open source / Chrome Manifest V3
            </motion.p>
          </motion.div>
        </section>
      </main>

      <footer className="mt-auto border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-8 font-mono text-[9px] uppercase tracking-[0.16em] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2">
            <span className="text-accent">[ * ]</span>
            <span className="text-ink">repeet</span>
          </div>

          <p className="text-dim">No account / no server / local data</p>

          <div className="flex items-center gap-5 text-muted">
            <a
              className="inline-flex items-center gap-1.5 transition hover:text-accent"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-3 w-3" />
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition hover:text-accent"
              href={X_URL}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="X profile"
            >
              <XLogo className="h-3 w-3" />
              X
            </a>
            <span className="text-dim">© 2026</span>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}
