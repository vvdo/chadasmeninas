import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <div data-reveal="true" className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
