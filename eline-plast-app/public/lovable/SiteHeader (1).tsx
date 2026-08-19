import { useEffect, useState } from "react";

const links = [
  { label: "Accueil", href: "/fr" },
  { label: "Produits", href: "/fr/products" },
  { label: "Solutions", href: "/fr/solutions" },
  { label: "Projets", href: "/fr/projects" },
  { label: "À propos", href: "/fr/about" },
  { label: "Contact", href: "/fr/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="/fr"
          className={`text-lg font-bold tracking-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          Eline<span className="text-accent">Plast</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-primary-foreground/85 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/fr/contact"
          className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] sm:inline-flex"
        >
          Demander un devis
        </a>
      </div>
    </header>
  );
}
