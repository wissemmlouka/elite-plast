import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "./container";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { company } from "@/data/company";
import { footerCompanyNav } from "@/data/navigation";
import { products } from "@/data/products";
import { pick } from "@/data/types";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./social-icons";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
} as const;

const socialLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
} as const;

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Image
              src="/logoelineplast.svg"
              alt={company.name}
              width={127}
              height={90}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
            <ul className="mt-6 flex items-center gap-2">
              {company.socials.map(({ id, href }) => {
                const Icon = socialIcons[id as keyof typeof socialIcons];
                const label = socialLabels[id as keyof typeof socialLabels];
                return (
                  <li key={id}>
                    <a
                      href={href}
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <nav aria-label={t("company")} className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-foreground">
              {t("company")}
            </h2>
            <ul className="mt-4 space-y-3">
              {footerCompanyNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {pick(item.label, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label={t("products")} className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-foreground">
              {t("products")}
            </h2>
            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={{
                      pathname: "/products/[slug]",
                      params: { slug: product.slug },
                    }}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {pick(product.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-foreground">
              {t("contact")}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  {company.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{pick(company.contact.address, locale)}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} {company.name}. {t("rights")}
          </p>
          <p className="text-xs text-muted-foreground">{t("demoNote")}</p>
        </div>
      </Container>
    </footer>
  );
}
