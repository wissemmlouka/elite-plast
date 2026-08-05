"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

import { GalleryCard } from "@/components/shared/gallery-card";
import type { GalleryItem } from "@/types";

// Loaded only after the first tile is opened — keeps the dialog JS off the
// initial page load.
const GalleryDialog = dynamic(
  () => import("./gallery-dialog").then((m) => m.GalleryDialog),
  { ssr: false },
);

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const t = useTranslations("gallery");
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
    setMounted(true);
  };
  const navigate = (next: number) =>
    setIndex((next + items.length) % items.length);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.alt}
            type="button"
            onClick={() => openAt(i)}
            aria-label={t("view", { alt: item.alt })}
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <GalleryCard {...item} />
          </button>
        ))}
      </div>

      {mounted ? (
        <GalleryDialog
          items={items}
          index={index}
          open={open}
          onOpenChange={setOpen}
          onNavigate={navigate}
        />
      ) : null}
    </>
  );
}
