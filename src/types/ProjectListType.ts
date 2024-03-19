export interface ProjectListType {
  projectId: number;
  name: string;
  type: string;
  thumbnail: string;
  date: string;
  techStack: string[][];
  icon: string;
  title: string;
  link: string;
  introduction: string;
  team: string;
  projectMainImg: string;
  siteLink: string;
  github: string[];
  figma: string[];
  architecture?: string;
}
