import type { Metadata } from "next";
import Script from "next/script";
import "./styles.css";
import "./pages.css";

const siteUrl = "https://bsi-qa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Black Sands Industries | Industrial Logistics",
    template: "%s | Black Sands Industries",
  },
  description:
    "Industrial logistics, freight forwarding, customs coordination, warehousing and project cargo support from Black Sands Industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="cur" aria-hidden="true" />
        <div id="site-nav" />
        {children}
        <div id="site-footer" />
        <Script src="/main.js?v=8" strategy="afterInteractive" />
      </body>
    </html>
  );
}
