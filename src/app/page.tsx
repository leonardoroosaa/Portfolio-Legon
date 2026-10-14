import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Visual } from "@/components/visual";
import {
  ButtonLink,
  FinalCTA,
  ProjectCard,
  SectionHeading,
  ServiceList,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { assets } from "@/data/assets";
import { publicProjects } from "@/data/projects";
import { pageMetadata } from "@/data/site-config";
export const metadata = pageMetadata(
  "Montagem especializada de pré-fabricados",
  "Montagem de pré-fabricados em betão, painéis arquitetónicos e GRC em Portugal e Espanha. Conheça a LEGON e os seus projetos.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <Visual asset={assets.hero} className="hero-visual" priority />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">
            <span className="status-dot" /> MONTAGEM ESPECIALIZADA · PORTUGAL E
            ESPANHA
          </p>
          <h1>
            O nosso legado
            <br />é construir
            <br />
            <span className="hero-last">
              o seu<span className="lime">.</span>
              <ArrowUpRight
                className="hero-arrow"
                strokeWidth={1}
                aria-hidden="true"
              />
            </span>
          </h1>
          <div className="hero-bottom">
            <p>
              Montagem de pré-fabricados em betão, painéis arquitetónicos e
              elementos em GRC, com rigor em cada intervenção.
            </p>
            <div className="button-group">
              <ButtonLink href="/projetos">Explorar projetos</ButtonLink>
              <ButtonLink href="/servicos" secondary>
                Conhecer serviços
              </ButtonLink>
            </div>
          </div>
          <a className="scroll-cue" href="#quem-somos">
            <ArrowDown size={16} aria-hidden="true" /> EXPLORAR O NOSSO UNIVERSO
          </a>
        </div>
        <span className="hero-side" aria-hidden="true">
          PRECISÃO EM CADA ELEMENTO
        </span>
      </section>
      <div className="statement-strip">
        <div className="container">
          <span>MONTAGEM</span>
          <span className="lime">+</span>
          <span>RIGOR</span>
          <span className="lime">+</span>
          <span>LEGADO</span>
          <span className="strip-caption">Arquitetura em movimento.</span>
        </div>
      </div>
      <section className="section container about-section" id="quem-somos">
        <Reveal>
          <SectionHeading
            label="01 / QUEM SOMOS"
            title="Construímos confiança em cada montagem."
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-image">
            <Visual asset={assets.about} />
          </Reveal>
          <div className="about-copy">
            <span className="technical-cross" aria-hidden="true">
              +
            </span>
            <p className="lead">
              A precisão não está apenas no resultado. Está em cada etapa.
            </p>
            <p>
              Na LEGON, especializamo-nos na montagem de elementos
              pré-fabricados em betão, painéis arquitetónicos e elementos em
              GRC. Complementamos a nossa atividade com reparações e trabalhos
              de mastique, com atenção à segurança, à qualidade e à eficiência.
            </p>
            <p>
              Atuamos em Portugal e Espanha, com profissionalismo e dedicação em
              cada projeto.
            </p>
            <ButtonLink href="/sobre" secondary>
              Conhecer a LEGON
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              label="02 / O QUE FAZEMOS"
              title="Soluções técnicas. Execução especializada."
            />
          </Reveal>
          <ServiceList />
          <div className="section-end">
            <span>Do posicionamento ao acabamento.</span>
            <Link href="/servicos" className="text-link">
              Todos os serviços <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="heading-with-link">
          <SectionHeading
            label="03 / PROJETOS"
            title="O nosso trabalho, em obra."
          />
          <Link className="text-link" href="/projetos">
            Ver todos os projetos <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="project-grid">
          {publicProjects.map((p, i) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="grc-section">
        <Image src={assets.grcBackground.src} alt="" fill sizes="100vw" className="grc-background" />
        <div className="container grc-grid">
          <div>
            <p className="eyebrow">MATERIALIDADE / ESPECIALIZAÇÃO</p>
            <h2>
              GRC<span className="lime">.</span>
            </h2>
            <p className="grc-subtitle">
              Liberdade arquitetónica.
              <br />
              Montagem especializada.
            </p>
            <p>
              O GRC — Betão Reforçado com Fibra de Vidro — permite desenvolver
              elementos com diferentes formas e texturas. A LEGON atua na
              montagem destes elementos, com atenção ao posicionamento, à
              integração e ao acabamento em obra.
            </p>
            <ButtonLink href="/servicos#grc">
              Explorar a especialidade
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section container safety-grid">
        <Visual asset={assets.safety} />
        <div>
          <SectionHeading
            label="04 / COMPROMISSO"
            title="A segurança acompanha cada etapa."
          />
          <p>
            Valorizamos a preparação das equipas, a utilização adequada dos
            equipamentos e o rigor na execução dos trabalhos.
          </p>
          <ButtonLink href="/seguranca-qualidade" secondary>
            Segurança e qualidade
          </ButtonLink>
        </div>
      </section>
      <section className="territory-section container">
        <p className="eyebrow">SEM FRONTEIRAS PARA O RIGOR</p>
        <div>
          <h2>
            De Portugal a Espanha,
            <br />
            <span>presentes onde os projetos precisam de nós.</span>
          </h2>
          <span className="territory-stamp" aria-hidden="true">
            PT <ArrowUpRight strokeWidth={1} /> ES
          </span>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
