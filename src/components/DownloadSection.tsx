 "use client";
 
import { motion } from "framer-motion";

const platforms = [
  {
    name: "macOS (Apple Silicon)",
    chipset: "Optimized for M1/M2 Neural Engine",
    badge: "Universal"
  },
  {
    name: "Linux (CUDA/ROCm)",
    chipset: "Supports NVIDIA + AMD acceleration",
    badge: "GPU"
  },
  {
    name: "Windows (DirectML)",
    chipset: "DirectML + CPU fallback in one build",
    badge: "Hybrid"
  }
];

export function DownloadSection() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-primary-neon/40 bg-gradient-to-br from-primary/15 via-surface-alt to-surface p-10 shadow-glow">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h3 className="text-3xl font-semibold text-white">Ready when you are.</h3>
            <p className="mt-3 text-sm text-white/70">
              Download the desktop app and sync adapters directly from your training workspace. No sign-up, no telemetry, open-source core.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <motion.a
                whileTap={{ scale: 0.98 }}
                href="#"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-surface transition hover:bg-primary-neon"
              >
                Download app
              </motion.a>
              <a href="#changelog" className="text-sm font-semibold text-white/70 transition hover:text-primary-neon">
                View release notes →
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <div className="text-xs uppercase tracking-[0.3em] text-primary-neon/80">Supported Platforms</div>
            <ul className="mt-4 grid gap-4">
              {platforms.map((platform) => (
                <li key={platform.name} className="flex items-start justify-between gap-3 rounded-xl border border-white/5 bg-surface-alt/80 px-4 py-3">
                  <div>
                    <div className="text-sm font-semibold text-white">{platform.name}</div>
                    <div className="text-xs text-white/50">{platform.chipset}</div>
                  </div>
                  <span className="rounded-full border border-primary-neon/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary-neon">
                    {platform.badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
