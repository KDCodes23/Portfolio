import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function ProjectsGrid() {
  return (
    <>
      {/* Mobile horizontal slider */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden">
        {projects.map((project, idx) => (
          <Reveal
            key={project.id}
            delay={idx * 0.05}
            className="min-w-[82%] snap-start"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {/* Tablet/Desktop grid */}
      <div className="hidden gap-5 md:grid md:grid-cols-2 xl:gap-6">
        {projects.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.05} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}