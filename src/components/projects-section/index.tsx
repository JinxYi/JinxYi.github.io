import "./index.css";
import { Project, type ProjectInterface } from "./project";

interface ProjectsSectionProps {
  projects: ProjectInterface[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section class="project-section" id="project">
      <h4 class="fade-in-bottom gradual js-scroll scrolled" style="opacity: 0;">
        Projects
      </h4>

      {projects.map((project, index) => (
        <Project data={project} key={index} reverse={index%2!=0} />
      ))}

      {/* <div class="project">
        <div class="project-detail js-scroll slide-left">
          <p class="project-title">AidMi</p>
          <p class="project-small">
            In collaboration with Team AidMi to design and develop their first
            prototype, an AI-chatbot that can collect medical anecdotes to
            enhance pre-consult information collection for psychiatrists. The
            project secured first place at the{" "}
            <a href="https://www.ntu.edu.sg/i-lab/news-events/news/story-detail/sep-team-aidmi-won-first-place-in-nus-social-impact-catalyst-pitch-day">
              NUS Social Impact Catalyst Pitch Day.
            </a>
          </p>
          <p class="project-description">
            <div class="pill-list">
              <span class="skill-pill">React</span>
              <span class="skill-pill">Supabase</span>
              <span class="skill-pill">Refine.dev</span>
              <span class="skill-pill">Typescript</span>
            </div>
          </p>
        </div>
        <a
          class="linked-image js-scroll slide-right"
          href="https://aidmi.ai/"
          target="_blank"
        >
          <img
            class="project-pic js-scroll slide-right"
            src="./images/aidmi/aidmi.png"
            alt="AidMi Medical Dashboard"
          />
        </a>
      </div>
      <div class="project reverse">
        <div class="project-detail js-scroll slide-right">
          <p class="project-title">APPA</p>
          <p class="project-description">
            <p class="project-small">
              A healthcare application, developed as part of a software
              engineering module during my university studies, underwent a
              comprehensive process spanning ideation, use case specification,
              class diagrams, sequence diagrams, and state diagrams. To enhance
              the user experience, we employed Figma to create a prototype for
              the web application.
            </p>
            <div class="pill-list">
              <span class="skill-pill">Figma</span>
              <span class="skill-pill">React</span>
              <span class="skill-pill">TailwindCSS</span>
              <span class="skill-pill">Next.js</span>
              <span class="skill-pill">Express.js</span>
            </div>
          </p>
        </div>
        <a
          class="linked-image js-scroll slide-left"
          style="height: min-content;align-self: center;"
          href="https://www.figma.com/proto/Z9hyM4A4l6N4vbcJKTQFxQ/APPA-Prototype?type=design&node-id=114-2018&t=N4nkqnPgL67PHFRa-1&scaling=min-zoom&page-id=21%3A3&starting-point-node-id=22%3A9&mode=design"
          target="_blank"
        >
          <img
            class="project-pic"
            src="./images/health-dashboard.png"
            alt="APPA dashboard"
          />
        </a>
      </div> */}
    </section>
  );
};
