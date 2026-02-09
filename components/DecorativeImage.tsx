import type { CSSProperties } from "react";

type DecorativeImageProps = {
  src: string;
  position?: string;
  opacity?: number;
  size?: string;
  className?: string;
};

export default function DecorativeImage({
  src,
  position = "",
  opacity = 0.12,
  size = "h-24 w-24",
  className = "",
}: DecorativeImageProps) {
  const style: CSSProperties = {
    opacity,
    backgroundImage: `url('${src}')`,
  };

  return (
    // Decorative asset: absolute, non-interactive, and rendered via background image.
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${position} ${size} bg-contain bg-center bg-no-repeat ${className}`}
      style={style}
    />
  );
}
