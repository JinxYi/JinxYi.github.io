import { useScrollTrigger } from "../animation";
import { PillList } from "../pill";
import "./index.css";

interface SkillsSectionProps {
  skills: Skill[];
}

interface Skill {
  description: string;
  items: string[];
  icon?: preact.VNode;
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const titleScrollRef = useScrollTrigger("fade-in-bottom");
  return (
    <section class="skill-section" id="skills">
      <h4 ref={titleScrollRef}>Skills</h4>
      <section class="skills-list" data-scroll-cascade="true">
        {skills.map((item, index) => {
          const cardScrollRef = useScrollTrigger("fade-in-bottom");
          return (
          <div ref={cardScrollRef} class="skill" key={index}>
            <div class="skill-icon">
              {item.icon ? item.icon : <i class="fas fa-cog"></i>}
            </div>
            <p class="skill-description">{item.description}</p>
            <PillList items={item.items} />
          </div>
        )})}
      </section>
    </section>
  );
};
