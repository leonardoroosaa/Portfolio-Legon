import { assets, type VisualAsset } from "./assets";
export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  heroImage: VisualAsset;
  gallery: VisualAsset[];
  published: boolean;
  verified: boolean;
};
export const projects: Project[] = [
  {
    slug: "guarda-corpos-algarve",
    title: "Guarda-corpos em betão armado",
    location: "Algarve",
    category: "Guarda-corpos",
    summary:
      "Montagem de guarda-corpos em betão armado numa obra identificada como Faculdade, no Algarve. A apresentação limita-se ao tipo de intervenção e à localização confirmados.",
    heroImage: assets.algarve,
    gallery: [assets.algarve, assets.algarve2, assets.algarve3],
    published: true,
    verified: true,
  },
  {
    slug: "adega-oliveira-do-conde",
    title: "Adega — Oliveira do Conde",
    location: "Oliveira do Conde, Carregal do Sal",
    category: "GRC",
    summary:
      "Montagem de elementos com sistema GRC numa adega em Oliveira do Conde, Carregal do Sal. Uma intervenção ligada à integração de elementos arquitetónicos em obra.",
    heroImage: assets.winery,
    gallery: [assets.winery, assets.winery2, assets.winery3],
    published: true,
    verified: true,
  },
  {
    slug: "escadas-colombo",
    title: "Escadas Colombo",
    location: "Lisboa",
    category: "Escadas",
    summary: "Intervenção em escadas em Lisboa, identificada como Escadas Colombo. Os registos fotográficos mostram degraus e patamares em betão e etapas da montagem em obra.",
    heroImage: assets.stairsCover,
    gallery: [assets.stairs, assets.stairs2, assets.stairsColombo],
    published: true,
    verified: true,
  },
];
export const publicProjects = projects.filter((p) => p.published && p.verified);
