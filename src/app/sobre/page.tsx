import {
  PageIntro,
  SectionHeading,
  FinalCTA,
  ButtonLink,
} from "@/components/ui";
import { Visual } from "@/components/visual";
import { assets } from "@/data/assets";
import { pageMetadata } from "@/data/site-config";
export const metadata = pageMetadata(
  "Sobre a LEGON",
  "Conheça a LEGON: montagem de pré-fabricados em betão, reparações e mastique, com atuação em Portugal e Espanha.",
  "/sobre",
);
export default function About() {
  return (
    <>
      <PageIntro
        label="01 / SOBRE A LEGON"
        title="O rigor constrói o nosso legado."
        text="Uma equipa dedicada à montagem e à execução especializada. Uma presença próxima de cada obra."
      />
      <div className="container">
        <Visual asset={assets.about} className="wide-visual" />
      </div>
      <section className="section container editorial-grid">
        <SectionHeading
          label="QUEM SOMOS"
          title="Da visão do projeto à realidade da obra."
        />
        <div>
          <p className="lead">
            Somos uma empresa especializada na montagem de elementos
            pré-fabricados em betão, reparação de estruturas pré-fabricadas e
            execução de trabalhos de mastique.
          </p>
          <p>
            Destacamo-nos pela experiência na montagem de painéis arquitetónicos
            e elementos em GRC, com atenção à qualidade, à segurança e à
            eficiência.
          </p>
          <p>
            Atuamos em todo o território de Portugal e Espanha, com compromisso,
            profissionalismo e dedicação em cada projeto. A nossa especialização
            é a montagem e execução em obra, não o fabrico dos elementos.
          </p>
          <ButtonLink href="/servicos" secondary>
            Conhecer os serviços
          </ButtonLink>
        </div>
      </section>
      <section className="section principles-section">
        <div className="container">
          <SectionHeading
            label="A NOSSA FORMA DE ESTAR"
            title="Precisão nos elementos. Compromisso com as pessoas."
          />
          <div className="principles">
            <article>
              <span>01</span>
              <h3>Execução especializada</h3>
              <p>
                Montagem, reparação e selagem: um foco claro na intervenção em
                obra.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Preparação das equipas</h3>
              <p>
                Valorizamos a formação e a utilização adequada dos equipamentos.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Proximidade ao projeto</h3>
              <p>
                Conhecer a intervenção é o ponto de partida para uma execução
                cuidada.
              </p>
            </article>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
