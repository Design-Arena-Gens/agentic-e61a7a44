 "use client";
 
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cannedMessages = [
  {
    role: "user",
    message: "Plan a 30-minute strength routine using my adjustable dumbbells.",
    timestamp: "12:04"
  },
  {
    role: "assistant",
    message: "Got it. I will use your preferred compound movements and alternate upper/lower focus. Ready to begin?",
    timestamp: "12:04"
  },
  {
    role: "user",
    message: "Yes, prioritize posterior chain activation and add cooldown stretches.",
    timestamp: "12:05"
  },
  {
    role: "assistant",
    message: "Drafting a session with RDLs, single-leg rows, and anti-rotation work. Cooldown includes posterior capsule and hip flexor release.",
    timestamp: "12:05"
  }
];

export function ChatDemo() {
  const [index, setIndex] = useState(3);
  const visibleMessages = useMemo(() => cannedMessages.slice(0, index + 1), [index]);

  return (
    <section id="chat" className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24">
      <div className="flex flex-col gap-4 text-left">
        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-neon/80">Chat Workspace</div>
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">Conversational coaching with local-first privacy.</h2>
        <p className="max-w-2xl text-base text-white/70">
          The LocalTrainer desk app gives you a rich chat experience fully accelerated by your hardware. Automatic context pinning,
          dataset injection, and adapter swapping happen instantly without ever syncing to the cloud.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-alt/80 p-6 shadow-glow">
          <div className="mb-4 flex items-center justify-between text-xs text-white/50">
            <span className="font-semibold text-white/70">LocalTrainer Session</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Offline
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <AnimatePresence>
              {visibleMessages.map((chat, i) => (
                <motion.div
                  key={`${chat.timestamp}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
                    chat.role === "assistant"
                      ? "self-start bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/5"
                      : "self-end bg-primary text-surface"
                  }`}
                >
                  <div className="mb-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                    {chat.role === "assistant" ? "LocalTrainer" : "You"} • {chat.timestamp}
                  </div>
                  {chat.message}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <motion.button
            className="mt-6 w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70 transition hover:border-primary-neon hover:text-primary-neon"
            onClick={() => setIndex((prev) => (prev + 1) % cannedMessages.length)}
            whileTap={{ scale: 0.98 }}
          >
            Replay conversation
          </motion.button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-neon/80">Why offline</div>
            <h3 className="mt-3 text-xl font-semibold text-white">Private models on your silicon.</h3>
            <p className="mt-3 text-sm text-white/70">
              LocalTrainer runs inference on-device, accelerates RAG pipelines via shared memory, and stores every artifact using encrypted local vaults.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                No cloud relays or telemetry.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                Hardware-aware quantization for M-series, CUDA, and ROCm.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                Granular session controls with per-topic recall buffers.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-primary-neon/40 bg-gradient-to-br from-primary/10 via-surface-alt to-surface px-6 py-5 text-sm text-white/80 shadow-glow">
            <div className="text-xs uppercase tracking-[0.25em] text-primary-neon/90">Workflow Boosters</div>
            <ul className="mt-3 space-y-2">
              <li>• Drag + drop dataset bundles straight into the training buffer.</li>
              <li>• Pin reusable tools, prompts, and adapters per workspace.</li>
              <li>• Offline evaluation harness with structured reports in Markdown.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
