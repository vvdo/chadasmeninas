export default function TopNav() {
  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-rose/30 bg-cream/80 backdrop-blur shadow-nav"
      aria-label="Menu"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-center gap-4 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:gap-6 sm:text-[11px] sm:tracking-[0.28em]">
        <a className="transition-colors hover:text-ink" href="#inicio">
          Início
        </a>
        <a className="transition-colors hover:text-ink" href="#playlist">
          Playlist
        </a>
        <a className="transition-colors hover:text-ink" href="#galeria">
          Galeria
        </a>
      </div>
    </nav>
  );
}
