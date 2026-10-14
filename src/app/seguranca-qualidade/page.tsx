import { PageIntro, SectionHeading, FinalCTA } from "@/components/ui";
import { Visual } from "@/components/visual";
import { assets } from "@/data/assets";
import { pageMetadata } from "@/data/site-config";
export const metadata = pageMetadata(
  "Segurança e qualidade",
  "Preparação das equipas, utilização adequada de equipamentos e rigor na montagem. Conheça o compromisso da LEGON.",
  "/seguranca-qualidade",
);
export default function Safety() {
  return (
    <>
      <PageIntro
        label="04 / COMPROMISSO"
        title="A segurança acompanha cada etapa."
        text="Preparação, atenção e rigor. Princípios que orientam a nossa forma de estar em obra."
      />
      <section className="container safety-grid safety-page">
        <Visual asset={assets.safety} />
        <div>
          <SectionHeading
            label="PREPARAÇÃO DAS EQUIPAS"
            title="Formação com aplicação em obra."
          />
          <p className="lead">
            Existe registo de formação da equipa em plataformas elevatórias.
          </p>
          <p>
            Este registo expressa o compromisso com a preparação das pessoas e a
            utilização adequada dos equipamentos. Não representa uma alegação de
            certificação institucional nem de habilitação de todos os
            colaboradores.
          </p>
        </div>
      </section>
      <section className="section principles-section">
        <div className="container">
          <SectionHeading
            label="PRINCÍPIOS DE ATUAÇÃO"
            title="Cuidar das pessoas. Cuidar da execução."
          />
          <div className="principles">
            <article>
              <span>01</span>
              <h3>Segurança</h3>
              <p>
                Atenção às condições da intervenção e à utilização adequada dos
                equipamentos.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Rigor de montagem</h3>
              <p>
                Cuidado com o posicionamento, a integração e o acabamento dos
                elementos.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Valorização das equipas</h3>
              <p>
                Preparação e formação como parte do compromisso com a execução
                em obra.
              </p>
            </article>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
