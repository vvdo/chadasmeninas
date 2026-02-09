import Image from "next/image";

type LogoBadgeProps = {
  sizeClass?: string;
  className?: string;
  priority?: boolean;
};

export default function LogoBadge({
  sizeClass = "w-16",
  className = "",
  priority = false,
}: LogoBadgeProps) {
  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-full bg-transparent ${sizeClass} ${className}`}
    >
      <Image
        src="/logos/boton.png"
        alt="Logo Chá das Meninas"
        fill
        priority={priority}
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 240px, 160px"
        className="object-cover"
      />
    </div>
  );
}
