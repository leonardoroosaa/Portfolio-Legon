import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { company } from "@/data/company";
import type { Project } from "@/data/projects";
import { Visual } from "./visual";
export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link href={href} className={`button ${secondary ? "secondary" : ""}`} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}>
      {children}
      <ArrowUpRight size={19} aria-hidden="true" />
    </Link>
  );
}
export function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
export function PageIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p className="intro-text">{text}</p>
    </section>
  );
}
export function ServiceList() {
  return (
    <div className="service-list">
      {services.map((s, i) => (
        <Link href={`/servicos#${s.slug}`} className="service-row" key={s.slug}>
          <span className="index">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className="project-card">
      <Link
        href={`/projetos/${project.slug}`}
        aria-label={`Ver projeto: ${project.title}`}
      >
        <Visual asset={project.heroImage} />
        <div className="project-caption">
          <div>
            <p className="eyebrow">
              {project.category} / {project.location}
            </p>
            <h3>{project.title}</h3>
          </div>
          <span className="circle-arrow">
            <ArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </Link>
      <span className="project-number">0{index + 1}</span>
    </article>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <p className="eyebrow">O PRÓXIMO CAPÍTULO</p>
        <h2>
          Tem um projeto
          <br />
          em preparação<span className="lime">?</span>
        </h2>
        <div className="cta-bottom">
          <p>
            Fale com a nossa equipa e descubra como podemos contribuir para a
            execução dos seus trabalhos.
          </p>
          <ButtonLink href={company.whatsappUrl || "/contactos"}>Pedir orçamento</ButtonLink>
        </div>
      </div>
    </section>
  );
}
