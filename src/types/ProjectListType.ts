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
  architecture?: string;
  figma?: string[] | string;
  api?: string;
  erd?: string;
  responsibleRole?: string[];
  projectImgAspectRatio: string;
  projectImgList: (string | { [key: string]: string[] })[];
  pageDescription?: { [sectionTitle: string]: string[] };
  troubleshooting?: {
    [key: string]: string[];
  };
}
