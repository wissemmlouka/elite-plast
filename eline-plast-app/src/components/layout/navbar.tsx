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

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const items: ResolvedNavLink[] = primaryNav.map((item) => ({
    href: item.href,
    label: pick(item.label, locale),
  }));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-20 max-w-page items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="Eline Plast"
          className="flex items-center rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <Image
            src="/logoelineplast.svg"
            alt="Eline Plast"
            width={99}
            height={70}
            priority
            className="h-12 w-auto sm:h-14"
          />
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
                      "text-sm font-medium transition-colors hover:text-primary",
                      active ? "text-primary" : "text-foreground/70",
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
          <LanguageSwitcher />
          <Link href="/quote" className={cn(buttonVariants())}>
            {t("requestQuote")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label={t("openMenu")}
            className="inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
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
