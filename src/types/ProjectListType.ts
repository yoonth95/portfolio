export interface ProjectType {
  thumbnail: string;
  date: string;
  techStack: string[][];
  icon: string;
  text: string;
  link: string;
}

export interface ProjectListType {
  title: string;
  projects: ProjectType[];
}
