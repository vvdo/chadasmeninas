import Reveal from "@/components/Reveal";

type DecorativeDividerProps = {
  className?: string;
};

export default function DecorativeDivider({
  className = "",
}: DecorativeDividerProps) {
  return (
    <Reveal
      className={`relative flex items-center justify-center py-4 ${className}`}
    >
      <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent via-rose/50 to-transparent" />
      <span
        aria-hidden="true"
        className="mx-4 h-10 w-40 bg-[url('/ornaments/arabesco-divider.svg')] bg-contain bg-no-repeat opacity-80 sm:w-56"
      />
      <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent via-aqua/50 to-transparent" />
    </Reveal>
  );
}
