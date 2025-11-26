 "use client";
 
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "LoRA & QLoRA ready",
    description:
      "Fine-tune adapters on consumer GPUs with mixed-precision pipelines. Schedule jobs across CPU, CUDA, or Metal with one command.",
    highlights: ["PEFT-compatible", "Quant-aware optimizers", "On-device checkpoints"]
  },
  {
    title: "Dataset command center",
    description:
      "Ingest JSONL, CSV, or Markdown corpora. Deduplicate, cluster, redact PII, and version your curated sets in the same workspace.",
    highlights: ["Smart dedupe", "PII confirmation flow", "Semantic tagging"]
  },
  {
    title: "Evaluation without guesswork",
    description:
      "Run eval suites locally using bench templates. Compare adapters, export Markdown summaries, and keep diffable baselines per task.",
    highlights: ["Regression tracking", "Custom metrics", "Markdown reports"]
  }
];

export function TrainingSection() {
  return (
    <section id="training" className="noise-bg relative overflow-hidden border-y border-white/5 py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-slate-950 to-surface" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-neon/80"
          >
            Training Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance text-3xl font-semibold text-white sm:text-4xl"
          >
            Fine-tune faster with a local-first toolkit built for adapters.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-white/70 md:max-w-2xl"
          >
            Launch LoRA or QLoRA runs, queue datasets, and export adapters straight into LocalTrainer. Every pipeline is designed to run offline with optional air-gapped mode.
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-ring relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow/20"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-primary-neon/70">Capability</div>
              <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
              <p className="text-sm text-white/70">{capability.description}</p>
              <ul className="mt-2 space-y-2 text-sm text-white/60">
                {capability.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
