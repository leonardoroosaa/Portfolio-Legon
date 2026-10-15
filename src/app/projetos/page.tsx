import { PageIntro, FinalCTA } from "@/components/ui";
import { ProjectFilters } from "@/components/project-filters";
import { pageMetadata } from "@/data/site-config";
export const metadata = pageMetadata(
  "Projetos",
  "Conheça os projetos da LEGON: guarda-corpos no Algarve, elementos em GRC em Oliveira do Conde e Escadas Colombo.",
  "/projetos",
);
export default function Projects() {
  return (
    <>
      <PageIntro
        label="03 / PORTFÓLIO"
        title="O nosso trabalho, em obra."
        text="Intervenções reais. Materiais diferentes. O mesmo cuidado na execução."
      />
      <section className="container portfolio-section">
        <p className="asset-notice">
          Os trabalhos apresentados estão identificados. Onde ainda faltam
          fotografias originais, as composições ilustrativas estão assinaladas.
        </p>
        <ProjectFilters />
      </section>
      <FinalCTA />
    </>
  );
}
