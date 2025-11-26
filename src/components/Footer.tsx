export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-alt/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-white/50 md:flex-row md:text-left">
        <div>
          © {new Date().getFullYear()} LocalTrainer. Built for offline-first intelligence.
        </div>
        <div className="flex gap-4 text-white/60">
          <a href="#privacy" className="hover:text-primary-neon">Privacy</a>
          <a href="#changelog" className="hover:text-primary-neon">Changelog</a>
          <a href="#support" className="hover:text-primary-neon">Support</a>
        </div>
      </div>
    </footer>
  );
}
