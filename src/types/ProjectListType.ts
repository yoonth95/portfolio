export interface ProjectListType {
  projectId: number;
  name: string;
  type: string;
  thumbnail: string;
  date: string;
  techStack: string[][];
  icon: string;
  title: string;
  team: string;
  introduction: string;
  projectMainImg: string;
  siteLink: string;
  github: string[];
  velog?: string;
  intention: (string | { [key: string]: string[] | undefined })[];
  reference?: string[];
  duration?: string;
  architecture?: string;
  figma?: string[] | string;
  api?: string;
  erd?: string;
  responsibleRole?: string[];
  projectImgAspectRatio: string;
  projectImgList: (string | { [sectionTitle: string]: string[] | string })[];
  pageDescription?: { [sectionTitle: string]: string[] | undefined };
  troubleshooting?: { [key: string]: string[] | undefined };
}
