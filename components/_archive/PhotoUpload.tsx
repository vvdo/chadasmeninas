/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

type Preview = {
  name: string;
  url: string;
};

export default function PhotoUpload() {
  const [previews, setPreviews] = useState<Preview[]>([]);

  useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, [previews]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    const nextPreviews = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setPreviews((current) => {
      current.forEach((preview) => URL.revokeObjectURL(preview.url));
      return nextPreviews;
    });
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <label className="flex w-full cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-lilac bg-white/70 px-6 py-10 text-center shadow-soft">
        <span className="font-display text-xl text-ink">
          Envie suas fotos do evento
        </span>
        <span className="mt-2 text-sm text-muted">
          As imagens ficam apenas neste dispositivo e não são enviadas para a
          internet.
        </span>
        <span className="mt-4 inline-flex items-center rounded-full border border-rose bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink">
          Selecionar fotos
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="sr-only"
        />
      </label>

      {previews.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previews.map((preview) => (
            <div
              key={preview.url}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft"
            >
              <img
                src={preview.url}
                alt={preview.name}
                className="h-56 w-full object-cover"
              />
              <div className="px-4 py-3 text-xs text-muted">{preview.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-line bg-white px-6 py-4 text-center text-sm text-muted">
          Após o evento, podemos publicar uma galeria oficial aqui.
        </div>
      )}
    </div>
  );
}
