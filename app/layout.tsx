import type { Metadata, Viewport } from "next";
import { Allison, Anton, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// next/font downloads these at build time and serves them from our own domain:
// no request to Google, preloaded, and size-adjusted fallbacks so nothing jumps.
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--f-anton", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "600"], variable: "--f-dm", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "700"], variable: "--f-mono", display: "swap" });
const allison = Allison({ weight: "400", subsets: ["latin"], variable: "--f-allison", display: "swap" });

const title = "CollabAdda — We Make Ads People Talk About";
const description =
  "CollabAdda makes 20-second ads and creator collabs people actually talk about. Influencer marketing, ad films, shoots and content.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: { title, description: "20-second ads. Funny, sharp, made to be shared.", images: ["/assets/img/hl/jbl.webp"], type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#120d1f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${dm.variable} ${mono.variable} ${allison.variable}`}>
      <head>
        {/* the hero phone's first frame is the LCP image: fetch it first */}
        <link rel="preload" as="image" href="/assets/img/r5.webp" fetchPriority="high" />
      </head>
      <body>{children}</body>
    </html>
  );
}
