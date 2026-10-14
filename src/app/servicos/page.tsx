import { PageIntro, FinalCTA, ButtonLink } from "@/components/ui";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { pageMetadata } from "@/data/site-config";
export const metadata = pageMetadata(
  "Serviços",
  "Montagem de pré-fabricados, painéis arquitetónicos, GRC e guarda-corpos. Reparações, acabamentos, mastique e selagem de juntas.",
  "/servicos",
);
export default function Services() {
  return (
    <>
      <PageIntro
        label="02 / ESPECIALIDADES"
        title="Soluções técnicas. Execução especializada."
        text="Seis especialidades, um compromisso comum: rigor na montagem, na integração e no acabamento."
      />
      <nav className="container service-index" aria-label="Índice de serviços">
        {services.map((s, i) => (
          <a key={s.slug} href={`#${s.slug}`}>
            <span>0{i + 1}</span>
            {s.shortTitle}
          </a>
        ))}
      </nav>
      <div className="container service-details">
        {services.map((s, i) => (
          <section id={s.slug} className="service-detail" key={s.slug}>
            <div>
              <p className="eyebrow">ESPECIALIDADE 0{i + 1}</p>
              <h2>{s.title}</h2>
              <p className="lead">{s.description}</p>
              <p>{s.detail}</p>
              <ButtonLink href={company.whatsappUrl || "/contactos"} secondary>
                Pedir orçamento
              </ButtonLink>
            </div>
          </section>
        ))}
      </div>
      <FinalCTA />
    </>
  );
}
