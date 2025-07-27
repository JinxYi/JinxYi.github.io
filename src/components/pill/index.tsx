export interface PillProps {
  content: string;
}
export const Pill = ({ content }: PillProps) => {
  return <span class="skill-pill">{content}</span>;
};

export interface PillListProps {
  items: string[];
}
export const PillList = ({ items }: PillListProps) => {
  return (
    <div class="pill-list">
      {items.map((content, index) => (
        <Pill content={content} key={index} />
      ))}
    </div>
  );
};
