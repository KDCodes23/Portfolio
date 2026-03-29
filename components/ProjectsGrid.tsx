import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function ProjectsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:gap-6">
      {projects.map((project, idx) => (
        <Reveal key={project.id} delay={idx * 0.05} className="h-full">
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
