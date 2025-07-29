import "./index.css";

interface HandlesProps {
  handles: HandleInterface[];
}

export interface HandleInterface {
    platform: string; // e.g., "GitHub", "LinkedIn"
    url: string;
    icon: preact.VNode;
}

export const Handles = ({ handles }: HandlesProps) => {
  return (
    <div class="handles">
      {handles.map((handle) => (
        <a href={handle.url} target="_blank">
          {handle.icon && handle.icon}
        </a>
      ))}
    </div>
  );
};
