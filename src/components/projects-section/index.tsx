import { useScrollTrigger } from "../animation";
import "./index.css";
import { Project, type ProjectInterface } from "./project";

interface ProjectsSectionProps {
  projects: ProjectInterface[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const scrollRef = useScrollTrigger("fade-in-bottom");
  return (
    <section class="project-section" id="project">
      <h4 ref={scrollRef} class="gradual" style="opacity: 0;">
        Projects
      </h4>

      {projects.map((project, index) => (
        <Project data={project} key={index} reverse={index%2!=0} />
      ))}
    </section>
  );
};
