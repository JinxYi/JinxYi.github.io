import "./index.css";
import "./floating-text.css";
import { Handles, type HandleInterface } from "../handle";
import { useScrollTrigger } from "../animation";

export interface HeroProps {
  title?: string;
  tagline?: string;
  handles?: HandleInterface[];
}

export const Hero = ({ title, tagline, handles }: HeroProps) => {
  const scrollRef = useScrollTrigger("fade-in-left");
  const heroScrollRef = useScrollTrigger("fade-in-right");

  return (
    <>
      <section class="above-the-fold">
        <div class="wrapper-lg">
          <div class="hero-wrapper">
            <div ref={scrollRef} class="hero">
              <p class="hero-title">{title}</p>
              <p class="hero-tagline">{tagline}</p>
              <div class="hero-bottom">
                <a href="#project">
                  <button class="cta">My Projects</button>
                </a>
                <Handles handles={handles ?? []} />
              </div>
            </div>
            <div ref={heroScrollRef} class="hero-image">
              <img
                src="./images/funshot.png"
                alt=""
              />
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
