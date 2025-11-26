const pillars = [
  {
    title: "Private by design",
    description:
      "Air-gapped optional. All conversations, datasets, and adapters live on disk with encryption at rest and audit logs you control.",
    metrics: [
      { label: "0", value: "Cloud Calls" },
      { label: "256-bit", value: "Local Vault" }
    ]
  },
  {
    title: "Adaptive intelligence",
    description:
      "Blend LoRA adapters, retrieval corpora, and tool plugins per workspace. Swap personalities on the fly without restarts.",
    metrics: [
      { label: "45s", value: "Average Adapter Swap" },
      { label: "∞", value: "Workspaces" }
    ]
  },
  {
    title: "Operator friendly",
    description:
      "Structured CLI, YAML presets, and dashboard snapshots keep teams aligned while staying entirely local to your environment.",
    metrics: [
      { label: "8", value: "Prebuilt Pipelines" },
      { label: "CLI", value: "First" }
    ]
  }
];

export function FeatureHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow/10">
            <div className="text-xs uppercase tracking-[0.3em] text-primary-neon/60">{pillar.title}</div>
            <p className="mt-3 text-sm text-white/70">{pillar.description}</p>
            <div className="mt-6 grid gap-4 text-sm text-white/60">
              {pillar.metrics.map((metric) => (
                <div key={metric.value} className="flex items-baseline justify-between rounded-2xl border border-white/5 bg-surface-alt/60 px-4 py-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40">{metric.label}</span>
                  <span className="text-base font-semibold text-white">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
