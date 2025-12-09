import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Strivehawk | Solutions IT Premium & Cybersécurité",
  description: "Transformez votre infrastructure digitale avec des solutions sur-mesure, sécurisées et évolutives. Développement Web Expert, Montage Vidéo et Solutions IA.",
  keywords: ["développement web", "cybersécurité", "solutions IT", "intelligence artificielle", "montage vidéo", "cloud infrastructure"],
  authors: [{ name: "Strivehawk" }],
  openGraph: {
    title: "Strivehawk | Solutions IT Premium & Cybersécurité",
    description: "Transformez votre infrastructure digitale avec des solutions sur-mesure, sécurisées et évolutives.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strivehawk | Solutions IT Premium & Cybersécurité",
    description: "Transformez votre infrastructure digitale avec des solutions sur-mesure, sécurisées et évolutives.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Strivehawk",
              description: "Solutions IT Premium & Cybersécurité",
              url: "https://strivehawk.com",
              logo: "https://strivehawk.com/logo.webp",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} ${inter.variable}`}>
        <ThemeProvider>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
