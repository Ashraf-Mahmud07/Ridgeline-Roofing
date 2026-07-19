import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { roofingContractorSchema, jsonLd } from "@/lib/structured-data";
import { BookingModalHost } from "@/components/booking/BookingModal";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Denver Roofing Contractor`,
    template: `%s | ${siteConfig.name} — Denver Roofing Contractor`,
  },
  description: siteConfig.tagline,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
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
      <body className={`${archivo.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(roofingContractorSchema())}
        />
        {children}
        <BookingModalHost />
      </body>
    </html>
  );
}
