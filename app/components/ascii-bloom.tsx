"use client";

import { motion } from "framer-motion";

const WIDTH = 74;
const CENTER = 37;
const EASE: [number, number, number, number] = [0.22, 0.8, 0.2, 1];

function noise(x: number, y: number) {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

function ellipseDistance(
  x: number,
  y: number,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rotation = 0,
) {
  const dx = x - cx;
  const dy = y - cy;
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  const u = dx * cos + dy * sin;
  const v = -dx * sin + dy * cos;
  return Math.sqrt((u * u) / (rx * rx) + (v * v) / (ry * ry));
}

function shapeDistance(x: number, y: number) {
  let distance = Infinity;

  if (y >= 24) {
    const cx = CENTER + Math.sin(y * 0.16) * 1.6;
    const halfWidth = 0.85 + Math.max(0, y - 72) * 0.09;
    distance = Math.min(distance, Math.abs(x - cx) / halfWidth);
  }

  const petals: Array<[number, number, number, number, number?]> = [
    [37, 13, 6, 3],
    [43, 16, 7, 3.2, 0.55],
    [47, 22, 7, 3.2, 1.05],
    [45, 28, 7, 3.2, 1.55],
    [38, 31, 6, 3],
    [31, 28, 7, 3.2, -1.55],
    [27, 22, 7, 3.2, -1.05],
    [29, 16, 7, 3.2, -0.55],
    [37, 22, 4, 2],
  ];

  for (const [cx, cy, rx, ry, rotation] of petals) {
    distance = Math.min(
      distance,
      ellipseDistance(x, y, cx, cy, rx, ry, rotation ?? 0),
    );
  }

  distance = Math.min(
    distance,
    ellipseDistance(x, y, 28, 48, 10, 3.2, -0.38),
    ellipseDistance(x, y, 46, 60, 10, 3.2, 0.38),
  );

  if (y > 78) {
    const spread = (y - 78) * 0.8;
    if (Math.abs(x - CENTER) < spread) {
      distance = Math.min(distance, 0.85);
    }
  }

  return distance;
}

function characterFor(x: number, y: number) {
  const distance =
    shapeDistance(x, y) + (noise(x * 4.3, y * 3.7) - 0.5) * 0.22;

  if (distance > 1 || noise(x * 2.1, y * 2.9) < 0.035) {
    return " ";
  }

  const n = noise(x * 1.7, y * 1.3);
  const density = 1 - Math.min(1, distance);

  if (density > 0.72) return n < 0.55 ? "@" : n < 0.85 ? "#" : "*";
  if (density > 0.5) return n < 0.3 ? "#" : n < 0.7 ? "*" : "+";
  if (density > 0.28) return n < 0.25 ? "*" : n < 0.65 ? "+" : "=";
  if (density > 0.12) return n < 0.3 ? "=" : n < 0.65 ? "-" : "x";
  return n < 0.45 ? "-" : n < 0.75 ? "x" : ".";
}

function buildLines() {
  const lines: string[] = [];

  for (let y = 4; y < 82; y += 1) {
    let line = "";
    for (let x = 0; x < WIDTH; x += 1) {
      line += characterFor(x, y);
    }
    lines.push(line.replace(/\s+$/, ""));
  }

  return lines;
}

export function AsciiBloom({ className = "" }: { className?: string }) {
  const lines = buildLines();

  return (
    <pre
      aria-hidden="true"
      style={{ textShadow: "0 0 28px rgba(204, 90, 59, 0.24)" }}
      className={`select-none overflow-hidden whitespace-pre font-mono text-[7px] font-medium leading-none text-accent sm:text-[8.5px] lg:text-[9.5px] ${className}`}
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          className="block"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.42,
            ease: EASE,
            delay: 0.35 + (lines.length - 1 - index) * 0.009,
          }}
        >
          {line || " "}
        </motion.span>
      ))}
    </pre>
  );
}
