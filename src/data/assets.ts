export type VisualAsset = {
  src: string | null;
  alt: string;
  caption: string;
  variant?: "panels" | "facade" | "detail";
};
// Inserir caminhos relativos a public, por exemplo /images/hero/montagem.webp.
export const assets = {
  logo: "/images/branding/logo-site-transparent.png" as string | null,
  hero: {
    src: "/images/about/sobre-nos.jpeg",
    alt: "Viaturas da LEGON junto a um edifício com elementos de betão em obra",
    caption: "LEGON · presença em obra",
    variant: "panels",
  },
  about: {
    src: "/images/about/sobre-nos.jpeg",
    alt: "Viaturas da LEGON junto a um edifício com elementos de betão em obra",
    caption: "LEGON · presença em obra",
    variant: "detail",
  },
  safety: {
    src: "/images/safety/formacao.jpeg",
    alt: "Preparação da equipa em obra, com capacetes, coletes e arneses junto a uma plataforma elevatória",
    caption: "Preparação das equipas · formação em obra",
    variant: "facade",
  },
  grcBackground: {
    src: "/images/services/grc.jpeg",
    alt: "Fachada em obra com painéis, andaime e plataformas elevatórias",
    caption: "GRC · intervenção em obra",
  },
  lisbon: {
    src: "/images/projects/guarda-corpos-lisboa/betao-1.jpeg",
    alt: "Equipa em obra a trabalhar nas fixações de elementos em betão em Lisboa",
    caption: "Lisboa · execução em obra",
    variant: "detail",
  },
  lisbon2: {
    src: "/images/projects/guarda-corpos-lisboa/betao-2.jpeg",
    alt: "Vista ao longo de elementos vazados em betão, com andaimes e sombras projetadas no corredor",
    caption: "Lisboa · perspetiva dos elementos em betão",
  },
  lisbon3: {
    src: "/images/projects/guarda-corpos-lisboa/betao-3.jpeg",
    alt: "Colaborador a trabalhar junto a elementos vazados em betão numa zona com andaimes",
    caption: "Lisboa · montagem e integração dos elementos",
  },
  winery: {
    src: "/images/projects/adega-oliveira-do-conde/adega-1.jpeg",
    alt: "Vista geral da adega em obra, com elementos de fachada e estrutura de cobertura",
    caption: "Oliveira do Conde · vista geral da intervenção",
    variant: "facade",
  },
  winery2: {
    src: "/images/projects/adega-oliveira-do-conde/adega-2.jpeg",
    alt: "Fachada da adega em montagem, com equipamentos de elevação junto à obra",
    caption: "Oliveira do Conde · montagem da fachada",
  },
  winery3: {
    src: "/images/projects/adega-oliveira-do-conde/adega-3.jpeg",
    alt: "Elementos de fachada da adega, com um colaborador e uma plataforma elevatória em obra",
    caption: "Oliveira do Conde · elementos de fachada em obra",
  },
  stairs: {
    src: "/images/projects/escadas-colombo/escadas.jpeg",
    alt: "Degraus e patamar em betão numa escada em obra",
    caption: "Escadas Colombo · degraus e patamar",
  },
  stairsCover: {
    src: "/images/projects/escadas-colombo/capa-escada.jpeg",
    alt: "Equipamento de elevação a movimentar um elemento em betão junto à estrutura das Escadas Colombo",
    caption: "Escadas Colombo · montagem em obra",
  },
  stairs1: {
    src: "/images/projects/escadas-colombo/escadas-1.jpeg",
    alt: "Equipamento de elevação a movimentar um elemento em betão durante a montagem das escadas",
    caption: "Escadas Colombo · movimentação de elementos em obra",
  },
  stairs2: {
    src: "/images/projects/escadas-colombo/escadas-2.jpeg",
    alt: "Vista superior da estrutura das escadas, com degraus, patamares e um colaborador em obra",
    caption: "Escadas Colombo · vista da montagem",
  },
} satisfies Record<string, VisualAsset | string | null>;

export const serviceAssets: Record<string, VisualAsset> = {
  "pre-fabricados": {
    src: null,
    alt: "Montagem de elementos pré-fabricados em betão",
    caption: "Montagem de pré-fabricados · fotografia original por inserir",
  },
  "paineis-arquitetonicos": {
    src: null,
    alt: "Instalação de painéis arquitetónicos",
    caption: "Painéis arquitetónicos · fotografia original por inserir",
  },
  grc: {
    src: null,
    alt: "Montagem de elementos arquitetónicos em GRC",
    caption: "GRC e fachadas · fotografia original por inserir",
  },
  "guarda-corpos": {
    src: null,
    alt: "Montagem de guarda-corpos em betão armado",
    caption: "Guarda-corpos · fotografia original por inserir",
  },
  reparacoes: {
    src: null,
    alt: "Reparação e acabamento de elementos pré-fabricados",
    caption: "Reparações · fotografia original por inserir",
  },
  mastique: {
    src: null,
    alt: "Trabalhos de mastique e tratamento de juntas",
    caption: "Mastique e juntas · fotografia original por inserir",
  },
};
