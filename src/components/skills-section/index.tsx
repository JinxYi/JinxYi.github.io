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
  return (
    <section class="skill-section" id="skills">
      <h4 class="fade-in-bottom gradual js-scroll">Skills</h4>
      <section class="skills-list js-scroll-wrapper" data-scroll-cascade="true">
        {skills.map((item, index) => (
          <div class="skill fade-in-bottom gradual" key={index}>
            <div class="skill-icon">
              {item.icon ? item.icon : <i class="fas fa-cog"></i>}
            </div>
            <p class="skill-description">{item.description}</p>
            <div class="pill-list">
              {item.items.map((skill, skillIndex) => (
                <span class="skill-pill" key={`${skill}-${skillIndex}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
