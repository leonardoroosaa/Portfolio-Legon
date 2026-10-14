import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";
import { company } from "@/data/company";
import { siteUrl } from "@/data/site-config";
import "./globals.css";
const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "LEGON — Montagem especializada de pré-fabricados",
    template: "%s | LEGON",
  },
  description: company.description,
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  robots: siteUrl
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    siteName: "LEGON",
    locale: "pt_PT",
    type: "website",
    title: "LEGON — O nosso legado é construir o seu",
    description: company.description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.description,
    telephone: company.phone,
    areaServed: ["Portugal", "Espanha"],
    sameAs: [company.instagram],
    ...(siteUrl ? { url: siteUrl } : {}),
  };
  return (
    <html lang="pt-PT">
      <body className={`${body.variable} ${heading.variable}`}>
        <a className="skip-link" href="#conteudo">
          Saltar para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <WhatsAppFloatingButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
