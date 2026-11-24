import type { NextConfig } from "next";

// Fully static export: every page is pre-rendered to plain HTML at build time,
// so it can be served from any CDN edge with zero server work per request.
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true }, // images are already hand-compressed WebP
  experimental: {
    inlineCss: true, // ship critical CSS inside the HTML: no render-blocking stylesheet request
  },
};

export default nextConfig;
