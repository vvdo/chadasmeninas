import Reveal from "@/components/Reveal";
import LogoBadge from "@/components/LogoBadge";
import DecorativeImage from "@/components/DecorativeImage";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_65%)]" />
      <DecorativeImage
        src="/logos/arabesco1.png"
        position="-left-12 top-16"
        size="h-36 w-36 sm:h-52 sm:w-52"
        opacity={0.12}
        className="hidden md:block"
      />
      <DecorativeImage
        src="/logos/arabesco2.png"
        position="-right-16 bottom-6"
        size="h-40 w-40 sm:h-56 sm:w-56"
        opacity={0.1}
        className="hidden md:block [transform:scaleX(-1)]"
      />
      <DecorativeImage
        src="/logos/borboleta1.png"
        position="right-10 top-40"
        size="h-10 w-10 sm:h-14 sm:w-14"
        opacity={0.18}
        className="hidden sm:block animate-float-slow"
      />
      <Reveal className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-24">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-white/70 blur-3xl" />
            <DecorativeImage
              src="/logos/escrita.png"
              position="-right-10 -top-10"
              size="h-14 w-32 sm:h-20 sm:w-44"
              opacity={0.3}
              className="hidden sm:block"
            />
            <LogoBadge
              sizeClass="w-56 sm:w-72 lg:w-80"
              className="relative drop-soft"
              priority
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <h1 className="font-display text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose via-lavender to-aqua sm:text-6xl">
              Chá das Meninas
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Uma celebração especial em clima Flash Back
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <div className="rounded-full border border-lilac/70 bg-white/85 px-6 py-2 text-sm font-semibold text-ink shadow-soft">
              15 de fevereiro de 2026
            </div>
            <div className="rounded-full border border-aqua/70 bg-white/85 px-6 py-2 text-sm font-semibold text-ink shadow-soft">
              16:00
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-rose">
            <span className="rounded-full border border-rose/70 bg-white/85 px-4 py-2">
              Flash Back
            </span>
            <span className="rounded-full border border-sun/70 bg-white/85 px-4 py-2">
              Retrô
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
