import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile in the home
  // directory otherwise makes Next infer the wrong root).
  turbopack: {
    root: __dirname,
  },
  images: {
    // Serve modern formats for raster photos once real assets replace the
    // placeholders (smaller than JPEG/PNG, negotiated per browser).
    formats: ["image/avif", "image/webp"],
    // Add real photo hosts here when available, e.g.:
    // remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default withNextIntl(nextConfig);
