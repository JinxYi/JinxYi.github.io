import { useScrollTrigger } from "../animation";

export interface ExperienceInterface {
  duration: string;
  title: string;
  descriptions: string[];
}

interface ExperienceProps {
  data: ExperienceInterface;
}

export const Experience = ({ data }: ExperienceProps) => {
  const scrollRef = useScrollTrigger("fade-in-bottom");
  return (
    <div ref={scrollRef} class="experience">
      <span class="exp-duration">{data.duration}</span>
      <span class="exp-title">{data.title}</span>
      <ul class="exp-description-list">
        {data.descriptions.map((desc, descIndex) => (
          <li class="exp-description" key={descIndex}>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};
