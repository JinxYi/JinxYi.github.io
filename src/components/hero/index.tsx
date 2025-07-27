import "./index.css";
import "./floating-text.css";

export interface HeroProps {
  title?: string;
  tagline?: string;
}

export const Hero = ({title, tagline}: HeroProps) => {
  return (
    <>
        <section class="above-the-fold">
        <div class="wrapper" style="position: relative;">
          <img
            src="./images/3d-abstract-heart.webp"
            alt=""
            style="position: absolute;width: 42%;height: auto;right: 3%;top: 25%;"
          />
          <div class="hero-wrapper">
            <div class="hero js-scroll slide-left">
              <p class="hero-top floating">{title}</p>
              <p class="hero-small">
                {tagline}
              </p>
              <div class="hero-bottom">
                <a href="#project">
                  <button class="cta">My Projects</button>
                </a>
                <div class="hero-handles">
                  <a href="https://github.com/JinxYi" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/tan-jinx-yi/">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="animate">
            <div class="scroll">
              <span class="scroll-icon"></span>
              <span class="scroll-circle"></span>
              <small>See More</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};