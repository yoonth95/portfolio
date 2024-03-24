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
  intention: string[];
  reference?: string[];
  architecture?: string;
  figma?: string[];
  api?: string;
  erp?: string;
  responsibleRole?: string[];
  projectImgList: string[];
  troubleshooting?: string[];
}
