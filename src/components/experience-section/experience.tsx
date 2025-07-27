export interface ExperienceInterface {
  duration: string;
  title: string;
  descriptions: string[];
}

interface ExperienceProps {
  data: ExperienceInterface;
}

export const Experience = ({ data }: ExperienceProps) => {
  return (
    <div class="experience js-scroll fade-in-bottom">
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
