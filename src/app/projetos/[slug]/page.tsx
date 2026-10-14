import Link from "next/link";
import { notFound } from "next/navigation";
import { publicProjects } from "@/data/projects";
import { pageMetadata } from "@/data/site-config";
import { Visual } from "@/components/visual";
import { FinalCTA, SectionHeading } from "@/components/ui";
import { ProjectGallery } from "@/components/project-gallery";
export function generateStaticParams() {
  return publicProjects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = publicProjects.find((p) => p.slug === slug);
  return p
    ? pageMetadata(
        p.title,
        `${p.summary} Localização: ${p.location}.`,
        `/projetos/${slug}`,
      )
    : {};
}
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = publicProjects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next =
    publicProjects[(publicProjects.indexOf(p) + 1) % publicProjects.length];
  return (
    <>
      <div className="container project-intro">
        <nav className="breadcrumbs" aria-label="Percurso">
          <Link href="/">Início</Link>
          <span>/</span>
          <Link href="/projetos">Projetos</Link>
          <span>/</span>
          <span aria-current="page">{p.title}</span>
        </nav>
        <p className="eyebrow">
          {p.category} / {p.location}
        </p>
        <h1>{p.title}</h1>
      </div>
      <div className="container">
        <Visual asset={p.heroImage} className="wide-visual" priority />
      </div>
      <section className="section container editorial-grid">
        <SectionHeading
          label="A INTERVENÇÃO"
          title="Montagem que dá forma ao projeto."
        />
        <div>
          <p className="lead">{p.summary}</p>
          <dl className="project-facts">
            <div>
              <dt>Localização</dt>
              <dd>{p.location}</dd>
            </div>
            <div>
              <dt>Tipo de trabalho</dt>
              <dd>{p.category}</dd>
            </div>
          </dl>
          {!p.heroImage.src && <p className="asset-notice">
            Registo fotográfico original pendente de inserção. Não são
            apresentados dados de cliente, data, área ou quantidades não
            confirmados.
          </p>}
        </div>
      </section>
      <section className="container gallery-section">
        <SectionHeading
          label="REGISTO VISUAL"
          title="Perspetivas da intervenção."
        />
        <ProjectGallery images={p.gallery} />
      </section>
      <div className="container next-project">
        <p className="eyebrow">CONTINUAR A EXPLORAR</p>
        <Link href={`/projetos/${next.slug}`}>{next.title} ↗</Link>
      </div>
      <FinalCTA />
    </>
  );
}
