"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { GalleryCard } from "@/components/shared/gallery-card";
import type { GalleryItem } from "@/types";

interface GalleryDialogProps {
  items: GalleryItem[];
  index: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (next: number) => void;
}

/**
 * Lightbox dialog. Code-split and mounted only after the first gallery open, so
 * its Base UI Dialog JS is deferred until a user actually interacts.
 */
export function GalleryDialog({
  items,
  index,
  open,
  onOpenChange,
  onNavigate,
}: GalleryDialogProps) {
  const t = useTranslations("gallery");
  const active = items[index];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-brand-navy/70 backdrop-blur-sm transition-opacity duration-300 ease-out data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[min(56rem,92vw)] -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-out data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
          <Dialog.Title className="sr-only">{active.alt}</Dialog.Title>

          <div className="overflow-hidden rounded-xl bg-background shadow-xl">
            <GalleryCard
              {...active}
              priority
              sizes="92vw"
              className="aspect-video rounded-none border-0"
            />
            <p className="px-4 py-3 text-sm text-muted-foreground">
              {active.alt}
            </p>
          </div>

          <Dialog.Close
            aria-label={t("close")}
            className="absolute -top-3 -right-3 inline-flex size-10 items-center justify-center rounded-full bg-background text-foreground shadow-md transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <X className="size-5" />
          </Dialog.Close>

          <button
            type="button"
            onClick={() => onNavigate(index - 1)}
            aria-label={t("previous")}
            className="absolute top-1/2 left-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate(index + 1)}
            aria-label={t("next")}
            className="absolute top-1/2 right-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ChevronRight className="size-5" />
          </button>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
