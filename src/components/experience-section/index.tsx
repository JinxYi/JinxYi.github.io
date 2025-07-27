import { Experience, type ExperienceInterface } from "./experience";
import "./index.css";

interface ExperienceSectionProps {
  title: string;
  experiences: ExperienceInterface[];
}

export const ExperienceSection = ({
  title,
  experiences,
}: ExperienceSectionProps) => {
  return (
    <section class="experience-section" id="experience">
      <h4 class="fade-in-bottom gradual js-scroll">{title}</h4>
      <div class="experience-section-wrapper">
        <div class="experience-timeline-line"></div>
        <div class="experience-timeline-desc">
          {experiences.map((exp) => (
            <Experience data={exp}/>
          ))}
        </div>
      </div>
    </section>
  );
};
