import { publicProjects } from "@/data/projects";
import { ProjectCard } from "./ui";
export function ProjectFilters() {
  return (
    <>
      <div className="filters">
        <span className="filter-all">TODOS</span>
      </div>
      <p className="filter-status" role="status">
        {publicProjects.length}{" "}
        {publicProjects.length === 1 ? "projeto disponível" : "projetos disponíveis"}
      </p>
      <div className="project-grid">
        {publicProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
      {publicProjects.length === 0 && (
        <div className="empty-state">
          <h2>Novos registos, em breve.</h2>
          <p>
            Ainda não existem projetos publicados. Conheça o
            serviço ou fale com a nossa equipa.
          </p>
        </div>
      )}
    </>
  );
}
