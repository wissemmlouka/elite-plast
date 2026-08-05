import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "./container";
import { Link } from "@/i18n/navigation";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./social-icons";
import type { NavItem, SocialLink } from "@/types";

const socials: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
];

const contact = {
  phone: "+216 00 000 000",
  email: "contact@elineplast.tn",
};

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  const quickLinks = t.raw("quickLinks") as NavItem[];
  const productLinks = t.raw("productLinks") as string[];

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Image
              src="/logoelineplast.svg"
              alt="Eline Plast"
              width={68}
              height={48}
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
            <ul className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label={t("company")} className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">
              {t("company")}
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label={t("products")} className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">
              {t("products")}
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="/products"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground">
              {t("contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{t("address")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} Eline Plast. {t("rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
