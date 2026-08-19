"use client";

import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import type { ResolvedNavLink } from "@/data/navigation";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: ResolvedNavLink[];
  pathname: string;
}

/**
 * Right-side navigation drawer for mobile. Base UI Dialog provides the focus
 * trap, scroll lock, Escape/backdrop dismissal and enter/exit transitions.
 */
export function MobileMenu({
  open,
  onOpenChange,
  items,
  pathname,
}: MobileMenuProps) {
  const t = useTranslations("nav");
  const close = () => onOpenChange(false);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-brand-navy/40 backdrop-blur-sm transition-opacity duration-300 ease-out data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 lg:hidden" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85vw)] flex-col bg-background shadow-xl transition-transform duration-300 ease-out data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full lg:hidden">
          <Dialog.Title className="sr-only">{t("menuTitle")}</Dialog.Title>

          <div className="flex h-20 items-center justify-between px-5">
            <Image
              src="/logo-eline-plast.svg"
              alt="Eline Plast"
              width={573}
              height={371}
              className="h-12 w-auto"
            />
            <Dialog.Close
              aria-label={t("closeMenu")}
              className="inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <X className="size-6" />
            </Dialog.Close>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 pb-6 pt-2"
          >
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={close}
                  className={cn(
                    "flex min-h-11 items-center rounded-md px-3 text-base font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-foreground/80 hover:bg-accent",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/quote"
              onClick={close}
              className={cn(buttonVariants({ size: "lg" }), "mt-4 w-full")}
            >
              {t("requestQuote")}
            </Link>
          </nav>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
