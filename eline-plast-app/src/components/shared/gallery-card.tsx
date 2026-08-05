import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types";

interface GalleryCardProps extends GalleryItem {
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Optimized image tile with hover zoom. Falls back to a labelled placeholder
 * when `src` is empty (V0 concept). Lightbox-ready. Server component.
 */
export function GalleryCard({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: GalleryCardProps) {
  return (
    <div
      className={cn(
        "group/gallery relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-300 ease-out group-hover/gallery:scale-105"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex size-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/5 to-brand-green/5 p-4 text-center transition-transform duration-300 ease-out group-hover/gallery:scale-105"
        >
          <ImageIcon
            className="size-8 text-muted-foreground/40"
            aria-hidden="true"
          />
          <span className="line-clamp-2 text-xs font-medium text-muted-foreground/70">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
