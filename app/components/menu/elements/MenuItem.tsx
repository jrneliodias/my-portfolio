type MenuProps = {
  title: string;
  sectionId: string;
};

export default function MenuItem({ title, sectionId }: MenuProps) {
  return <a href={`/#${sectionId}`}>{title}</a>;
}
