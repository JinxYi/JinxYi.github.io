import "./app.css";
import { NavigationBar } from "./components/navigation-bar";
import { Hero } from "./components/hero";
import { ExperienceSection } from "./components/experience-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { AboutSection } from "./components/about-section";
import { data } from "./data";

export const App = () => {
  return (
    <>
      <NavigationBar title={data.nav.title} items={data.nav.items} />
      <Hero title={data.hero.title} tagline={data.hero.tagline} handles={data.about.handles}/>
      <ExperienceSection {...data.workExperience} />
      <ExperienceSection {...data.education} />
      <SkillsSection skills={data.skills} />
      <ProjectsSection projects={data.projects}/>
      <AboutSection about={data.about} />
    </>
  );
};
