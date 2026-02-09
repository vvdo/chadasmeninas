export default function OrnamentalFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-6 rounded-[42px] border-2 border-lilac/50" />
      <div className="absolute inset-3 rounded-[46px] border border-rose/40" />

      <span className="absolute -left-6 -top-6 h-44 w-44 bg-[url('/ornaments/arabesco-corner.svg')] bg-contain bg-no-repeat opacity-80" />
      <span className="absolute -right-6 -top-6 h-44 w-44 bg-[url('/ornaments/arabesco-corner.svg')] bg-contain bg-no-repeat opacity-80 [transform:rotate(90deg)]" />
      <span className="absolute -right-6 -bottom-6 h-44 w-44 bg-[url('/ornaments/arabesco-corner.svg')] bg-contain bg-no-repeat opacity-80 [transform:rotate(180deg)]" />
      <span className="absolute -left-6 -bottom-6 h-44 w-44 bg-[url('/ornaments/arabesco-corner.svg')] bg-contain bg-no-repeat opacity-80 [transform:rotate(-90deg)]" />

      <span className="absolute left-2 top-24 bottom-24 w-12 bg-[url('/ornaments/arabesco-side.svg')] bg-contain bg-repeat-y opacity-70 sm:w-14 md:w-16" />
      <span className="absolute right-2 top-24 bottom-24 w-12 bg-[url('/ornaments/arabesco-side.svg')] bg-contain bg-repeat-y opacity-70 sm:w-14 md:w-16 [transform:scaleX(-1)]" />

      <span className="absolute left-1/2 top-2 h-10 w-64 -translate-x-1/2 bg-[url('/ornaments/arabesco-divider.svg')] bg-contain bg-no-repeat opacity-80" />
      <span className="absolute left-1/2 bottom-2 h-10 w-64 -translate-x-1/2 bg-[url('/ornaments/arabesco-divider.svg')] bg-contain bg-no-repeat opacity-80 [transform:rotate(180deg)]" />

      <div className="absolute left-12 right-12 top-4 h-px bg-gradient-to-r from-transparent via-rose/50 to-transparent" />
      <div className="absolute left-12 right-12 bottom-4 h-px bg-gradient-to-r from-transparent via-aqua/50 to-transparent" />
      <div className="absolute bottom-12 top-12 left-4 w-px bg-gradient-to-b from-transparent via-lilac/50 to-transparent" />
      <div className="absolute bottom-12 top-12 right-4 w-px bg-gradient-to-b from-transparent via-peach/50 to-transparent" />
    </div>
  );
}
