import type { Metadata } from "next";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export const navigation = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/seguranca-qualidade", label: "Segurança e Qualidade" },
  { href: "/contactos", label: "Contactos" },
];
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: `${siteUrl}${path}` } : undefined,
    openGraph: {
      title: `${title} | LEGON`,
      description,
      locale: "pt_PT",
      type: "website",
      ...(siteUrl ? { url: `${siteUrl}${path}` } : {}),
    },
  };
}
