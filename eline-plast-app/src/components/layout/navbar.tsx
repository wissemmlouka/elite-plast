"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buttonVariants } from "@/components/ui/button";
import { primaryNav, type ResolvedNavLink } from "@/data/navigation";
import { pick } from "@/data/types";

import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";

/**
 * Fixed over the hero and transparent at the top of the page, then solid once
 * scrolled.
 *
 * The logo is never recoloured. Its wordmark is navy, which would disappear
 * against the photograph, so over the hero it sits on a white holding plate —
 * the artwork itself is untouched, exactly as supplied. The plate fades away
 * as the bar turns solid and the logo can stand on its own.
 */
export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Only the homepage has a dark hero behind the bar. Everywhere else the page
  // starts on a light background, where a transparent bar would put white text
  // on white.
  const overHero = pathname === "/";
  const transparent = overHero && !scrolled;

  const items: ResolvedNavLink[] = primaryNav.map((item) => ({
    href: item.href,
    label: pick(item.label, locale),
  }));

  return (
    <header
      data-transparent={transparent}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        transparent
          ? "border-transparent bg-transparent"
          : "border-border bg-background/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-page items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="Eline Plast"
          className="flex h-14 items-center rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <span
            className={cn(
              "flex items-center rounded-md transition-all duration-300",
              transparent
                ? "bg-white/70 px-2.5 py-1 shadow-sm backdrop-blur-md"
                : "bg-transparent px-0 py-0 shadow-none backdrop-blur-none",
            )}
          >
            <Image
              src="/logo-eline-plast.svg"
              alt="Eline Plast"
              width={573}
              height={371}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      transparent
                        ? active
                          ? "text-white"
                          : "text-white/85 hover:text-white"
                        : active
                          ? "text-primary"
                          : "text-foreground/70 hover:text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher light={transparent} />
          <Link href="/quote" className={cn(buttonVariants())}>
            {t("requestQuote")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher light={transparent} />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label={t("openMenu")}
            className={cn(
              "inline-flex size-11 cursor-pointer items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
              transparent
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-accent",
            )}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <MobileMenu
        open={open}
        onOpenChange={setOpen}
        items={items}
        pathname={pathname}
      />
    </header>
  );
}
