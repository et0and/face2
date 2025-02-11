import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dreaming (kindness)",
  description: "Une Semaine de Bonté.",
  openGraph: {
    title: "Dreaming (kindness)",
    description: "Une Semaine de Bonté.",
    url: "https://work.tom.so/kindness",
    siteName: "Dreaming (kindness)",
    locale: "en_NZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Dreaming (kindness)",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta property="og:image" content="/kindness/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/kindness/og.png" />
        <meta
          name="description"
          content="Une Semaine de Bonté."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/kindness/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/kindness/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/kindness/favicon-16x16.png"
        />
        <link rel="manifest" href="/kindness/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
