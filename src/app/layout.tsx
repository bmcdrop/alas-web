import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://alascoffee.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ALAS Coffee — Un café hecho con alas.",
    template: "%s · ALAS Coffee",
  },
  description:
    "Más que café. ALAS es un lugar donde cada conversación importa: café de especialidad, luz natural y comunidad en el corazón de la ciudad.",
  keywords: [
    "ALAS Coffee",
    "café de especialidad",
    "cafetería",
    "coffee shop",
    "latte art",
    "specialty coffee",
  ],
  openGraph: {
    title: "ALAS Coffee — Un café hecho con alas.",
    description:
      "Más que café. Un lugar donde cada conversación importa.",
    url: siteUrl,
    siteName: "ALAS Coffee",
    locale: "es_LA",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "ALAS Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALAS Coffee — Un café hecho con alas.",
    description: "Más que café. Un lugar donde cada conversación importa.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-warmwhite text-ink">
        {children}
      </body>
    </html>
  );
}
