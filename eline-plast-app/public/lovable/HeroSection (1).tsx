import { ArrowRight, ChevronDown, Droplets } from "lucide-react";
import heroVideo from "../../../public/videos/hero-irrigation.mp4.asset.json";

const posterSrc = "/images/hero-irrigation.jpg";

const stats = [
  { value: "19+", label: "Années d'expérience" },
  { value: "478+", label: "Projets réalisés" },
  { value: "955+", label: "Clients satisfaits" },
  { value: "48+", label: "Références produits" },
];

function DripOverlay() {
  const drops = [
    { left: "18%", top: "42%", delay: "0s" },
    { left: "34%", top: "56%", delay: "0.7s" },
    { left: "52%", top: "38%", delay: "1.3s" },
    { left: "68%", top: "60%", delay: "0.35s" },
    { left: "82%", top: "46%", delay: "1.8s" },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-x-0 bottom-[18%] h-40 w-full opacity-50"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="hero-flow"
          d="M-20 120 C 220 60, 420 150, 640 96 S 1040 40, 1220 92"
          stroke="var(--color-primary-foreground)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="hero-flow"
          style={{ animationDuration: "4.6s" }}
          d="M-20 148 C 260 96, 500 176, 720 126 S 1060 82, 1220 132"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {drops.map((d) => (
        <span key={d.left} className="absolute" style={{ left: d.left, top: d.top }}>
          <span
            className="hero-drop block h-3 w-2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-primary-foreground/70 blur-[0.4px]"
            style={{ animationDelay: d.delay }}
          />
          <span
            className="hero-ripple absolute left-1/2 top-[60px] block h-6 w-6 -translate-x-1/2 rounded-full border border-primary-foreground/60"
            style={{ animationDelay: d.delay }}
          />
        </span>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-primary-deep">
      <video
        className="hero-kenburns absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "var(--gradient-hero-veil)",
          animation: "hero-veil 1.2s ease-out both",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-primary-deep/25" />

      <DripOverlay />

      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-center px-6 py-28 lg:px-10">
        <span
          className="hero-rise inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground backdrop-blur-sm"
          style={{ animationDelay: "0.1s" }}
        >
          <Droplets className="h-3.5 w-3.5 text-accent" />
          Solutions d'irrigation
        </span>

        <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
          {["Systèmes d'irrigation", "fiables pour", "l'agriculture moderne"].map((line, i) => (
            <span
              key={line}
              className="hero-rise block"
              style={{ animationDelay: `${0.25 + i * 0.14}s` }}
            >
              {line}
            </span>
          ))}
        </h1>

        <p
          className="hero-rise mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
          style={{ animationDelay: "0.75s" }}
        >
          Eline Plast fabrique des tuyaux PVC et PEHD durables, des lignes de goutte-à-goutte et des
          raccords qui aident les agriculteurs à optimiser l'usage de l'eau et à produire plus avec
          moins.
        </p>

        <div
          className="hero-rise mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="/fr/contact"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform duration-200 hover:scale-[1.03]"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="/fr/products"
            className="inline-flex items-center rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-primary-foreground/20"
          >
            Découvrir nos produits
          </a>
        </div>

        <p
          className="hero-rise mt-8 text-sm text-primary-foreground/70"
          style={{ animationDelay: "1s" }}
        >
          La confiance des exploitations et des distributeurs partout en Tunisie.
        </p>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 backdrop-blur-md lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="hero-rise bg-primary-deep/30 px-6 py-6"
              style={{ animationDelay: `${1.1 + i * 0.1}s` }}
            >
              <dt className="text-2xl font-bold text-primary-foreground sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs text-primary-foreground/75 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <span
        aria-hidden
        className="hero-cue absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground"
      >
        <ChevronDown className="h-6 w-6" />
      </span>
    </section>
  );
}
