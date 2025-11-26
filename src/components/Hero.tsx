 "use client";
 
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-surface-alt via-surface to-slate-950 opacity-90" />
      <div className="absolute inset-x-0 top-24 -z-10 flex justify-center">
        <div className="h-48 w-[60rem] rounded-full bg-gradient-to-r from-primary/30 via-cyan-400/20 to-blue-500/20 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-16 text-center md:pt-24">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-neon"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Private. Offline. Trainable.
        </motion.span>
        <motion.h1
          className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Personal intelligence that never leaves your machine.
        </motion.h1>
        <motion.p
          className="max-w-3xl text-base text-white/70 sm:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          LocalTrainer gives you a self-contained AI assistant that you can adapt to your workflow, fine-tune on your data, and run fully offline. Keep every conversation private while iterating fast on LoRA adapters and curated datasets.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#start-chat"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-surface shadow-glow transition hover:bg-primary-neon"
          >
            Start chatting
          </a>
          <a
            href="#training"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white/80 transition hover:border-primary-neon hover:text-primary-neon"
          >
            Explore training stack
          </a>
        </motion.div>
      </div>
    </section>
  );
}
