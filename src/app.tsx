import "./app.css";
import { NavigationBar } from "./components/navigation-bar";
import { Hero } from "./components/hero";
export const App = () => {
  const data = {
    nav: {
      title: "TanJingYi",
      items: [
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#project" },
        { name: "Contect Me", href: "#about" },
        { name: "CV", target: "_blank", href: "./pages/cv.html", icon: <i class="fa-solid fa-arrow-up-right-from-square"></i>},
      ],
    },
    hero: {
      title: "Hi, I am Jing Yi",
      tagline:
        "Software Engineer and Computer Science Undergraduate in my penutilmate year based in Singapore looking for internship (Aug to Dec 2025) and full-time opportunities Jan 2026 onward.",
    },
  };
  return (
    <>
      <NavigationBar title={data.nav.title} items={data.nav.items} />
      <Hero title={data.hero.title} tagline={data.hero.tagline} />
      <section class="experience-section" id="experience">
        <h4 class="fade-in-bottom gradual js-scroll">Experience</h4>
        <div class="experience-section-wrapper">
          <div class="experience-timeline-line"></div>
          <div class="experience-timeline-desc">
            <div class="experience js-scroll fade-in-bottom">
              <span class="exp-duration">Jun 2024 - Dec 2024</span>
              <span class="exp-title">
                Software Engineering Intern • Micron Semiconductor Asia
                Operations Pte Ltd
              </span>
              <ul class="exp-description-list">
                <li class="exp-description">
                  Developed a scalable microservice to enable event-driven
                  communication across multiple applications, reducing latency
                  for critical manufacturing operations.
                </li>
                <li class="exp-description">
                  Optimised microservice performance by implementing safe,
                  concurrent task execution, increasing throughput under load.
                </li>
                <li class="exp-description">
                  Refined user interfaces using the company’s Angular-powered UI
                  framework, streamlining user experience and enhancing
                  security.
                </li>
                <li class="exp-description">
                  Implemented automated CI/CD pipelines in Azure DevOps,
                  streamlining build, test, and deployment processes to
                  OpenShift, ensuring faster, more reliable releases.
                </li>
              </ul>
            </div>

            <div class="experience js-scroll fade-in-bottom">
              <span class="exp-duration">Aug 2024 - Oct 2024</span>
              <span class="exp-title">
                AidMi • Full-Stack Software Engineer
              </span>
              <ul class="exp-description-list">
                <li class="exp-description">
                  Spearheaded the end-to-end development of a full-feature
                  prototype within 2 months, attracting investors and securing
                  first place at the NUS Social Impact Catalyst Pitch Day.
                </li>
                <li class="exp-description">
                  Collaborated with an AI Engineer to integrate a chatbot for
                  collecting patient medical anecdotes, ensuring seamless data
                  flow for accurate insights to support psychiatric assessments.
                </li>
                <li class="exp-description">
                  Adopted an iterative development approach, delivering
                  incremental updates and incorporating user feedback, ensuring
                  the product met the evolving business requirements.
                </li>
              </ul>
            </div>

            <div class="experience js-scroll fade-in-bottom">
              <span class="exp-duration">Sep 2021 - Feb 2022</span>
              <span class="exp-title">
                IT Intern • Security and Risk Solutions PTE LTD
              </span>
              <ul class="exp-description-list">
                <li class="exp-description">
                  Maintenance and Development of Security Management System
                </li>
                <li class="exp-description">
                  Led an IoT Project to develop a Surveillance System prototype
                  utilizing Computer Vision to be integrated with the existing
                  Management System
                </li>
                <li class="exp-description">
                  Worked with security personnel to create communications system
                  complying with security protocols
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="experience-section">
        <h4 class="fade-in-bottom gradual js-scroll">Education</h4>
        <div class="experience-section-wrapper">
          <div class="experience-timeline-line"></div>
          <div class="experience-timeline-desc">
            <div class="experience js-scroll fade-in-bottom">
              <span class="exp-duration">Aug 2022 - (Expected) Dec 2025</span>
              <span class="exp-title">
                Undergraduate Student • Nanyang Technological University
              </span>
              <ul class="exp-description-list">
                <li class="exp-description">Computer Science Degree</li>
                <li class="exp-description">IT Sub-Committee Member (2023)</li>
              </ul>
            </div>
            <div class="experience js-scroll fade-in-bottom">
              <span class="exp-duration">Apr 2019 – May 2022</span>
              <span class="exp-title">Student • Singapore Polytechnic</span>
              <ul class="exp-description-list">
                <li class="exp-description">
                  Diploma in Information Technology
                </li>
                <li class="exp-description">
                  Specialise in Software Development
                </li>
                <li class="exp-description">
                  Certificate of Academic Achievement 2021
                </li>
                <li class="exp-description">GPA 3.739</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="skill-section" id="skills">
        <h4 class="fade-in-bottom gradual js-scroll">Skills</h4>
        <section
          class="skills-list js-scroll-wrapper"
          data-scroll-cascade="true"
        >
          <div class="skill fade-in-bottom gradual">
            <div class="skill-icon">
              <i class="fas fa-code"></i>
            </div>
            <p class="skill-description">Programming Languages</p>
            <div class="pill-list">
              <span class="skill-pill">C</span>
              <span class="skill-pill">C#</span>
              <span class="skill-pill">JavaScript</span>
              <span class="skill-pill">TypeScript</span>
              <span class="skill-pill">Python</span>
            </div>
          </div>

          <div class="skill fade-in-bottom gradual">
            <div class="skill-icon">
              <i class="fas fa-desktop"></i>
            </div>
            <p class="skill-description">Frontend Development</p>
            <div class="pill-list">
              <span class="skill-pill">HTML</span>
              <span class="skill-pill">CSS</span>
              <span class="skill-pill">JavaScript</span>
              <span class="skill-pill">TypeScript</span>
              <span class="skill-pill">React</span>
              <span class="skill-pill">Angular</span>
            </div>
          </div>

          <div class="skill fade-in-bottom gradual">
            <div class="skill-icon">
              <i class="fas fa-server"></i>
            </div>
            <p class="skill-description">Backend Development</p>
            <div class="pill-list">
              <span class="skill-pill">ASP.NET Core</span>
              <span class="skill-pill">Express.js</span>
              <span class="skill-pill">Flask</span>
            </div>
          </div>

          <div class="skill fade-in-bottom gradual">
            <div class="skill-icon">
              <i class="fas fa-database"></i>
            </div>
            <p class="skill-description">Database</p>
            <div class="pill-list">
              <span class="skill-pill">MySQL</span>
              <span class="skill-pill">PostgreSQL</span>
              <span class="skill-pill">SQL Server</span>
              <span class="skill-pill">MongoDB</span>
            </div>
          </div>

          <div class="skill fade-in-bottom gradual">
            <div class="skill-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <p class="skill-description">Android App Development</p>
            <div class="pill-list">
              <span class="skill-pill">React-Native</span>
              <span class="skill-pill">Android (Java)</span>
            </div>
          </div>

          <div class="skill fade-in-bottom gradual">
            <div class="skill-icon">
              <i class="fas fa-cloud"></i>
            </div>
            <p class="skill-description">Cloud</p>
            <div class="pill-list">
              <span class="skill-pill">Azure DevOps</span>
              <span class="skill-pill">OpenShift</span>
              <span class="skill-pill">Solace PubSub+</span>
              <span class="skill-pill">Supabase</span>
            </div>
          </div>
        </section>
      </section>

      <section class="project-section" id="project">
        <h4
          class="fade-in-bottom gradual js-scroll scrolled"
          style="opacity: 0;"
        >
          Projects
        </h4>
        <div class="project">
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
                class diagrams, sequence diagrams, and state diagrams. To
                enhance the user experience, we employed Figma to create a
                prototype for the web application.
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
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="custom-shape-divider-top-1684351445">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div class="wrapper">
          <section class="about-section" id="about">
            <div class="about-wrapper">
              <div class="about">
                <div class="about-selfie">
                  <img src="./images/portfolio_picture.png" alt="Me" />
                  <p>
                    <b>Contact Me:</b>
                    <br />
                    jingyi0939@gmail.com
                  </p>
                </div>
                <div class="about-content">
                  <div class="about-title">Need to reach me?</div>
                  <p>
                    Hello, I am Jing Yi, a computer science undergraduate who
                    specializes in software engineering. With almost 4 years of
                    experience programming, I have honed my skills in creating
                    engaging and user-friendly web applications.
                    <br />
                    <br />
                    I am currently seeking job opportunities to further expand
                    my knowledge of industry practices and explore new
                    technologies. I am eager to learn from experienced
                    professionals and refine my existing skills. If given the
                    opportunity, I promise to bring dedication, enthusiasm, and
                    a strong work ethic to the team.
                    <br />
                    <br />
                    If you are looking for a motivated programmer who is eager
                    to learn, grow, and contribute to your organization, I would
                    love to discuss potential opportunities with you.
                  </p>
                </div>
              </div>
              <div class="handles">
                <a href="https://github.com/JinxYi" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/tan-jing-yi-2ab7501bb/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
        <span class="credits">
          This website was made using HTML, CSS and JavaScript together with
          Font Awesome.
        </span>
      </section>
    </>
  );
};
