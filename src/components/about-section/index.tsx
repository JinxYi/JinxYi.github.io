import { Handles, type HandleInterface } from "../handle";
import "./index.css";

export interface AboutInterface {
  title: string;
  content: string;
  email: string;
  profileUrl: string;
  handles: HandleInterface[];
}

export interface AboutSectionProps {
  about: AboutInterface;
}
export const AboutSection = ({ about }: AboutSectionProps) => {
  return (
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
                <img src={about.profileUrl} alt="Me" />
                <p>
                  <b>Contact Me:</b>
                  <br />
                  {about.email}
                </p>
              </div>
              <div class="about-content">
                <div class="about-title">{about.title}</div>
                <p style={{ whiteSpace: "pre-line" }}>{about.content}</p>
              </div>
            </div>
            <Handles handles={about.handles} />
          </div>
        </section>
      </div>
      <span class="credits">
        This website was made Preact with Font Awesome.
      </span>
    </section>
  );
};
