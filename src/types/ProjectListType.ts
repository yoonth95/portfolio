export interface ProjectListType {
  projectName: string;
  type: string;
  thumbnail: string;
  date: string;
  techStack: string[][];
  icon: string;
  title: string;
  team: string;
  introduction: string;
  projectMainImg: string;
  projectIntroImg?: string;
  siteLink?: string;
  github: string[];
  velog?: string;
  intention?: (string | { [key: string]: string[] | undefined })[];
  extraSections?: ProjectDetailSection[];
  beforeAfter?: ProjectBeforeAfterSection[];
  reference?: string[];
  duration?: string;
  architecture?: string;
  figma?: string[] | string;
  api?: string[] | string;
  erd?: string;
  responsibleRole?: string[];
  projectImgAspectRatio: string;
  projectImgList: (string | { [sectionTitle: string]: string[] | string })[];
  pageDescription?: { [sectionTitle: string]: string[] | undefined };
  troubleshooting?: { [key: string]: string[] | undefined };
}

export type ProjectDetailItem = string | { [key: string]: string[] | undefined };

export interface ProjectDetailSection {
  id: string;
  title: string;
  items: ProjectDetailItem[];
  image?: string;
}

export interface ProjectBeforeAfterSection {
  title: string;
  before: string[] | string;
  after: string[] | string;
  notes?: string[];
}
