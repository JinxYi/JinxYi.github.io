import { useScrollTrigger } from "../animation";
import { PillList } from "../pill";

export interface ProjectInterface {
  title: string;
  description: string;
  stack: string[];
  thumbnail: {
    type: string; // e.g., "image", "video"
    thumbnailUrl: string;
    externalLink: string;
  };
}

interface ProjectProps {
  data: ProjectInterface;
  reverse?: boolean;
}

export const Project = ({ data, reverse }: ProjectProps) => {
  const detailsScrollRef = useScrollTrigger(reverse ? "fade-in-right" : "fade-in-left");
  const thumbnailScrollRef = useScrollTrigger(reverse ? "fade-in-left" : "fade-in-right");
  return (
    <div class={"project" + (reverse ? " reverse" : "")}>
      <div
        ref={detailsScrollRef}
        class="project-detail"
      >
        <span class="project-title">{data.title}</span>
        <span class="project-small">{data.description}</span>
        <span class="project-description">
          <PillList items={data.stack} />
        </span>
      </div>
      <span  ref={thumbnailScrollRef} class="linked-image">
        <a
          href={data.thumbnail.externalLink}
          target="_blank"
        >
          <img
            class={"project-pic"}
            src={data.thumbnail.thumbnailUrl}
            alt={data.title}
          />
        </a>
      </span>
    </div>
  );
};
