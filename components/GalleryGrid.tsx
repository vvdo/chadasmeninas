import Image from "next/image";
import Reveal from "@/components/Reveal";

type GalleryGridProps = {
  images: string[];
};

const placeholderFrames = Array.from({ length: 3 }, (_, index) => index);

export default function GalleryGrid({ images }: GalleryGridProps) {
  const hasImages = images.length > 0;
  const items = hasImages ? images : placeholderFrames;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const delay = ((index % 5) + 1) as 1 | 2 | 3 | 4 | 5;

        if (!hasImages) {
          return (
            <Reveal
              key={`placeholder-${index}`}
              delay={delay}
              className="flex h-full flex-col rounded-[28px] border border-line/80 bg-white/80 p-4 shadow-soft"
            >
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed border-rose/40 bg-cream/70 text-sm font-semibold uppercase tracking-[0.3em] text-muted">
                Em breve
              </div>
            </Reveal>
          );
        }

        const src = item as string;
        const isRemote = src.startsWith("http");

        return (
          <Reveal
            key={src}
            delay={delay}
            className="group flex h-full flex-col rounded-[28px] border border-line/80 bg-white/85 p-4 shadow-soft"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream/80">
              {isRemote ? (
                <img
                  src={src}
                  alt={`Memória do Chá ${index + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={src}
                  alt={`Memória do Chá ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
