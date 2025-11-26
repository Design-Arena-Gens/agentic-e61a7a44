const commands = [
  {
    name: "TRAIN:ADD",
    description: "Stage raw datasets or prompt batches into the active training buffer. Supports dataset labels and sharding hints.",
    args: ["--path <dataset_dir>", "--tag <label>", "--weight <ratio>"]
  },
  {
    name: "TRAIN:PREPARE",
    description: "Launch preprocessing, tokenization, and quantization planning. Reports token coverage and sequence stats in real time.",
    args: ["--strategy <lora|qlora>", "--max-seq <tokens>", "--bf16"]
  },
  {
    name: "TRAIN:EVAL",
    description: "Run offline evaluation suites against the current adapter stack. Exports comparison dashboards for regression tracking.",
    args: ["--suite <benchmark>", "--baseline <adapter_id>", "--report markdown"]
  },
  {
    name: "TRAIN:EXPORT_ADAPTER",
    description: "Write adapter weights as safetensors and register them for hot swapping inside LocalTrainer.",
    args: ["--id <adapter_id>", "--format <safetensors|gguf>", "--quant <4bit|8bit>"]
  },
  {
    name: "TRAIN:LOAD_ADAPTER",
    description: "Load adapters into the runtime without restarting inference. Supports stacking and priority ordering.",
    args: ["--id <adapter_id>", "--slot <runtime_slot>", "--priority <int>"]
  },
  {
    name: "TRAIN:RESET_BUFFER",
    description: "Wipe active training buffers while keeping archived datasets. Useful when testing rapid iterations.",
    args: ["--confirm"]
  },
  {
    name: "TRAIN:CONFIRM_PII",
    description: "Acknowledge detected PII fields and approve on-device redaction before continuing the training pipeline.",
    args: ["--batch <hash>", "--approve", "--notes <text>"]
  }
];

export function DeveloperMode() {
  return (
    <section id="dev-mode" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-4 text-left">
        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-neon/80">Developer Mode</div>
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
          Command surface for power users and automation pipelines.
        </h2>
        <p className="max-w-3xl text-base text-white/70">
          LocalTrainer ships with a CLI-first mindset. Script training flows, integrate with build systems, or trigger adapters from notebooks. Commands execute fully offline and stream structured logs to your terminal.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {commands.map((command) => (
          <div key={command.name} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow/20">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-neon/70">Command</div>
            <div className="mt-2 text-lg font-semibold text-white">{command.name}</div>
            <p className="mt-3 text-sm text-white/70">{command.description}</p>
            <div className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">Flags</div>
            <ul className="mt-2 space-y-1 text-sm text-white/60">
              {command.args.map((arg) => (
                <li key={arg} className="font-mono">{arg}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
