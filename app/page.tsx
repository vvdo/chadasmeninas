import { readdirSync } from "fs";
import path from "path";
import DecorativeDivider from "@/components/DecorativeDivider";
import DecorativeImage from "@/components/DecorativeImage";
import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import LogoBadge from "@/components/LogoBadge";
import OrnamentalFrame from "@/components/OrnamentalFrame";
import Reveal from "@/components/Reveal";
import ScrollReveal from "@/components/ScrollReveal";
import Section from "@/components/Section";
import TopNav from "@/components/TopNav";
import { fetchImageUrls } from "google-photos-album-image-url-fetch";

export const runtime = "nodejs";

const googleAlbumUrl = "https://photos.app.goo.gl/9GUDonGwBm9t7bMK8";

const experienceItems = [
  {
    icon: "☕",
    title: "Chá da tarde especial",
    detail: "Seleção de chás e aromas para aquecer o coração.",
  },
  {
    icon: "🍰",
    title: "Comidas e doces",
    detail: "Sabores caseiros e delicados para compartilhar.",
  },
  {
    icon: "🎁",
    title: "Lembrancinhas",
    detail: "Um carinho preparado com atenção em cada detalhe.",
  },
  {
    icon: "💃",
    title: "Dança e diversão",
    detail: "Leveza e alegria para celebrar juntas.",
  },
  {
    icon: "🎶",
    title: "Músicas Flash Back",
    detail: "Clássicos que marcaram gerações e histórias.",
  },
];

const galleryImages = getGalleryImages();

async function getGoogleAlbumImages(limit = 6) {
  try {
    const images = await fetchImageUrls(googleAlbumUrl);
    if (!images) {
      return [];
    }

    return images.map((image) => `${image.url}=w1200`).slice(0, limit);
  } catch {
    return [];
  }
}

function getGalleryImages() {
  const galleryPath = path.join(process.cwd(), "public", "galeria");

  try {
    return readdirSync(galleryPath)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => `/galeria/${file}`);
  } catch {
    return [];
  }
}

export default async function Home() {
  const googleAlbumImages = await getGoogleAlbumImages(6);
  const galleryPreviewImages = (
    googleAlbumImages.length > 0 ? googleAlbumImages : galleryImages
  ).slice(0, 6);

  return (
    <main className="relative flex min-h-screen flex-col pt-20 text-ink sm:pt-24">
      <ScrollReveal />
      <OrnamentalFrame />
      <TopNav />

      <div className="relative z-10">
        {/* Hero */}
        <Hero />
        <DecorativeDivider />

        {/* Sobre o evento */}
        <Section
          id="sobre"
          eyebrow="Sobre o Evento"
          title="Um encontro para celebrar"
          description="O Chá das Meninas foi pensado com carinho para reunir mulheres especiais em uma noite de amizade, alegria e boas lembranças. Um momento para celebrar gerações, histórias e o privilégio de estarmos juntas."
          surface
          className="overflow-hidden"
        >
          <DecorativeImage
            src="/logos/arabesco1.png"
            position="-left-10 bottom-2"
            size="h-24 w-24 sm:h-32 sm:w-32"
            opacity={0.12}
            className="hidden md:block -z-10 [transform:scaleX(-1)]"
          />
          <DecorativeImage
            src="/logos/arabesco2.png"
            position="left-1/2 -top-6 -translate-x-1/2"
            size="h-12 w-44 sm:h-16 sm:w-64"
            opacity={0.12}
            className="hidden sm:block -z-10"
          />
          <DecorativeImage
            src="/logos/borboleta1.png"
            position="left-6 top-12"
            size="h-7 w-7 sm:h-9 sm:w-9"
            opacity={0.2}
            className="hidden md:block z-20 animate-float-slow"
          />
          <DecorativeImage
            src="/logos/borboleta2.png"
            position="right-6 top-16"
            size="h-8 w-8 sm:h-10 sm:w-10"
            opacity={0.2}
            className="hidden md:block z-20 animate-float-slow"
          />
          <div className="flex items-center justify-center">
            <LogoBadge sizeClass="w-16" className="drop-soft" />
          </div>
        </Section>
        <DecorativeDivider />

        {/* A experiência */}
        <Section
          id="experiencia"
          eyebrow="A Experiência"
          title="Detalhes preparados com carinho"
          description="Uma noite simples, bonita e acolhedora, com tudo pensado para você se sentir em casa."
          className="overflow-hidden"
        >
          <DecorativeImage
            src="/logos/borboleta2.png"
            position="left-10 top-8"
            size="h-8 w-8 sm:h-10 sm:w-10"
            opacity={0.18}
            className="hidden lg:block z-20 animate-float-slow"
          />
          <DecorativeImage
            src="/logos/arabesco1.png"
            position="-left-20 -top-12"
            size="h-[320px] w-[320px] sm:h-[380px] sm:w-[380px]"
            opacity={0.06}
            className="hidden lg:block -z-10 blur-[1px]"
          />
          <DecorativeImage
            src="/logos/arabesco2.png"
            position="-right-16 -bottom-10"
            size="h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]"
            opacity={0.05}
            className="hidden lg:block -z-10 blur-[1px] [transform:scaleX(-1)]"
          />
          <DecorativeImage
            src="/logos/borboleta1.png"
            position="right-8 bottom-8"
            size="h-7 w-7 sm:h-9 sm:w-9"
            opacity={0.16}
            className="hidden lg:block z-20 animate-float-slow"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {experienceItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={((index % 5) + 1) as 1 | 2 | 3 | 4 | 5}
                className="flex h-full flex-col items-center rounded-3xl border border-line/80 bg-white/85 px-6 py-6 text-center shadow-soft"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>
        <DecorativeDivider />

        {/* Playlist */}
        <Section
          id="playlist"
          eyebrow="Playlist"
          title="Músicas do Chá"
          description="Aperte o play e entre no clima Flash Back com a seleção preparada para a noite."
          surface
          className="overflow-hidden"
        >
          <DecorativeImage
            src="/logos/xicara.png"
            position="-left-6 top-12"
            size="h-16 w-16 sm:h-20 sm:w-20"
            opacity={0.18}
            className="hidden md:block animate-float-slow"
          />
          <DecorativeImage
            src="/logos/chaleira.png"
            position="right-6 bottom-12"
            size="h-14 w-14 sm:h-20 sm:w-20"
            opacity={0.18}
            className="hidden md:block animate-float-slow"
          />
          <DecorativeImage
            src="/logos/borboleta1.png"
            position="right-12 top-12"
            size="h-7 w-7 sm:h-9 sm:w-9"
            opacity={0.18}
            className="hidden lg:block z-20 animate-float-slow"
          />
          <Reveal className="w-full overflow-hidden rounded-3xl border border-line/80 bg-white/90 shadow-soft">
            <iframe
              title="Playlist Chá das Meninas"
              src="https://open.spotify.com/embed/playlist/6ogmiKFsaG5BRvoiWog73s"
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Reveal>
        </Section>
        <DecorativeDivider />

        {/* Tema */}
        <Section
          id="tema"
          eyebrow="Tema Flash Back"
          title="Anos 70 & 80"
          description="Uma viagem no tempo com músicas, cores e alegria que marcaram gerações."
          align="left"
          className="overflow-hidden"
        >
          <DecorativeImage
            src="/logos/arabesco1.png"
            position="-left-8 top-1/2 -translate-y-1/2"
            size="h-24 w-24 sm:h-32 sm:w-32"
            opacity={0.1}
            className="hidden lg:block -z-10"
          />
          <DecorativeImage
            src="/logos/chaleira.png"
            position="right-6 top-10"
            size="h-14 w-14 sm:h-20 sm:w-20"
            opacity={0.18}
            className="hidden md:block animate-float-slow"
          />
          <DecorativeImage
            src="/logos/borboleta2.png"
            position="right-16 bottom-8"
            size="h-7 w-7 sm:h-9 sm:w-9"
            opacity={0.18}
            className="hidden lg:block z-20 animate-float-slow"
          />
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-5 text-muted">
              <p className="text-base leading-relaxed sm:text-lg">
                Vamos reviver lembranças queridas com uma trilha sonora especial,
                cores suaves e detalhes que nos levam de volta ao clima nostálgico
                das décadas passadas.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-rose/70 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink">
                  Anos 70
                </span>
                <span className="rounded-full border border-aqua/70 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink">
                  Anos 80
                </span>
                <span className="rounded-full border border-lilac/70 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink">
                  Flash Back
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <LogoBadge sizeClass="w-32 sm:w-40" className="drop-soft" />
            </div>
          </div>
        </Section>
        <DecorativeDivider />

        {/* Dress code */}
        <Section
          id="dress-code"
          eyebrow="Dress Code"
          title="Entre no clima, se quiser"
          description="Se quiser entrar no clima Flash Back, fique à vontade para usar cores, estampas e acessórios retrô. O mais importante é sua presença."
          surface
          className="overflow-hidden"
        >
          <DecorativeImage
            src="/logos/arabesco2.png"
            position="left-1/2 -top-6 -translate-x-1/2"
            size="h-10 w-40 sm:h-12 sm:w-56"
            opacity={0.12}
            className="hidden sm:block -z-10"
          />
          <DecorativeImage
            src="/logos/borboleta1.png"
            position="left-8 bottom-6"
            size="h-7 w-7 sm:h-9 sm:w-9"
            opacity={0.18}
            className="hidden md:block z-20 animate-float-slow"
          />
          <Reveal className="rounded-3xl border border-line/80 bg-white/85 px-6 py-5 text-sm leading-relaxed text-muted shadow-soft">
            Sinta-se livre para criar um visual divertido e confortável, do seu
            jeito.
          </Reveal>
        </Section>
        <DecorativeDivider />

        {/* Galeria */}
        <Section
          id="galeria"
          eyebrow="Memórias do Chá"
          title="Um porta-retrato de momentos felizes"
          description="Momentos especiais guardados com carinho para relembrar."
          className="overflow-hidden"
        >
          <DecorativeImage
            src="/logos/arabesco1.png"
            position="-left-6 -top-6"
            size="h-24 w-24 sm:h-32 sm:w-32"
            opacity={0.1}
            className="hidden sm:block -z-10"
          />
          <DecorativeImage
            src="/logos/arabesco1.png"
            position="left-10 bottom-8"
            size="h-16 w-16 sm:h-20 sm:w-20"
            opacity={0.1}
            className="hidden md:block -z-10 [transform:scaleX(-1)]"
          />
          <DecorativeImage
            src="/logos/arabesco2.png"
            position="-right-6 -bottom-6"
            size="h-24 w-24 sm:h-32 sm:w-32"
            opacity={0.1}
            className="hidden sm:block -z-10 [transform:scaleX(-1)]"
          />
          <DecorativeImage
            src="/logos/arabesco2.png"
            position="right-10 top-10"
            size="h-16 w-16 sm:h-20 sm:w-20"
            opacity={0.1}
            className="hidden md:block -z-10"
          />
          <DecorativeImage
            src="/logos/borboleta1.png"
            position="right-10 top-20"
            size="h-8 w-8 sm:h-10 sm:w-10"
            opacity={0.2}
            className="hidden md:block z-20 animate-float-slow"
          />
          <DecorativeImage
            src="/logos/borboleta2.png"
            position="left-12 top-16"
            size="h-7 w-7 sm:h-9 sm:w-9"
            opacity={0.18}
            className="hidden lg:block z-20 animate-float-slow"
          />
          <GalleryGrid images={galleryPreviewImages} />
          <div className="mt-8 flex justify-center">
            <a
              className="rounded-full border border-lilac/70 bg-white/85 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              href={googleAlbumUrl}
              target="_blank"
              rel="noreferrer"
            >
              Veja mais fotos do chá
            </a>
          </div>
        </Section>
        <DecorativeDivider />

        {/* Mensagem final */}
        <Section
          id="mensagem-final"
          eyebrow="Mensagem Final"
          title="Obrigada por fazer parte"
          description="Cada mulher aqui carrega uma história única. Obrigada por fazer parte desse momento especial."
          surface
          className="overflow-hidden"
        >
          <DecorativeImage
            src="/logos/escrita.png"
            position="left-6 top-6"
            size="h-10 w-24 sm:h-12 sm:w-32"
            opacity={0.25}
            className="hidden md:block"
          />
          <DecorativeImage
            src="/logos/arabesco1.png"
            position="left-1/2 -bottom-6 -translate-x-1/2"
            size="h-12 w-44 sm:h-16 sm:w-64"
            opacity={0.12}
            className="hidden sm:block -z-10"
          />
          <DecorativeImage
            src="/logos/borboleta2.png"
            position="right-8 bottom-10"
            size="h-8 w-8 sm:h-10 sm:w-10"
            opacity={0.2}
            className="hidden md:block z-20 animate-float-slow"
          />
          <div className="flex items-center justify-center gap-4">
            <LogoBadge sizeClass="w-14" className="drop-soft" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
              Chá das Meninas
            </span>
          </div>
        </Section>

        {/* Rodapé */}
        <footer className="border-t border-line/60 bg-transparent py-6 text-center text-sm text-muted">
          Chá das Meninas – 15/02/2026
        </footer>
      </div>
    </main>
  );
}
