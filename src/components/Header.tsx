 "use client";
 
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Chat", href: "#chat" },
  { label: "Training", href: "#training" },
  { label: "Developer Mode", href: "#dev-mode" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-surface/70 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-lg font-semibold tracking-tight"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-emerald-400 to-teal-400 text-surface font-bold shadow-glow">
            LT
          </span>
          <div className="leading-tight">
            <div className="text-primary-neon">LocalTrainer</div>
            <div className="text-sm text-white/60">Offline AI Companion</div>
          </div>
        </motion.div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-primary-neon">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#download"
            className="hidden rounded-full border border-primary-neon/50 px-4 py-2 text-sm font-medium text-primary-neon shadow-glow/10 transition hover:border-primary-neon hover:shadow-glow md:inline-flex"
          >
            Download
          </Link>
          <Link
            href="#start-chat"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-surface shadow-glow transition hover:bg-primary-neon"
          >
            Launch
          </Link>
        </div>
      </div>
    </header>
  );
}
