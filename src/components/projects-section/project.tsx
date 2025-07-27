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
  return (
    <div class={"project" + (reverse ? " reverse" : "")}>
      <div class={"project-detail js-scroll" + (reverse ? " slide-right" : " slide-left")}>
        <p class="project-title">{data.title}</p>
        <p class="project-small">{data.description}</p>
        <p class="project-description">
          <PillList items={data.stack}/>
        </p>
      </div>
      <a
        class={"linked-image js-scroll" + (reverse ? " slide-left" : " slide-right")}
        href={data.thumbnail.externalLink}
        target="_blank"
      >
        <img
          class={"project-pic js-scroll" + (reverse ? " slide-left" : " slide-right")}
          src={data.thumbnail.thumbnailUrl}
          alt={data.title}
        />
      </a>
    </div>
  );
};
