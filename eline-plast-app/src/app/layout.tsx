import type { ReactNode } from "react";

// Pass-through root layout. The real <html>/<body> and providers live in
// app/[locale]/layout.tsx; this exists so Next has a layout for the "/" route
// (which the locale middleware redirects to /fr or /en).
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
