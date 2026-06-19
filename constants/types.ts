export type TextBlock = {
  p?: string;
  h2?: string;
  ul?: string[];
};

export type ProjectItem = {
  title: string;
  image: string[];
  link: { repository?: string; production?: string };
  video?: string[];
  resume: string;
  text: TextBlock[];
  tags: string[];
};

export type ProjectData = ProjectItem[];

export type TimelineItem = {
  title: string;
  company: string;
  tasks: string[];
  tags: string[];
  year: string;
};

export type TimelineData = TimelineItem[];
