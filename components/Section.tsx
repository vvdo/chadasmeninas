import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  surface?: boolean;
  reveal?: boolean;
  children?: ReactNode;
};

const alignments = {
  center: "items-center text-center",
  left: "items-start text-left",
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  surface = false,
  reveal = true,
  children,
}: SectionProps) {
  const containerClasses = [
    "mx-auto flex w-full max-w-5xl flex-col gap-8",
    alignments[align],
    surface
      ? "rounded-[32px] border border-line/70 bg-white/75 px-6 py-10 shadow-soft backdrop-blur sm:px-10"
      : "px-6",
  ].join(" ");

  const content = (
    <div className={containerClasses}>
      {(eyebrow || title || description) && (
        <header className={`flex flex-col gap-3 ${alignments[align]}`}>
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rose">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-display text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose via-lavender to-aqua sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </div>
  );

  return (
    <section id={id} className={`relative w-full py-16 sm:py-20 scroll-mt-24 ${className}`}>
      {reveal ? <Reveal>{content}</Reveal> : content}
    </section>
  );
}
