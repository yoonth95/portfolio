export type CareerYearType = number[];

interface Description {
  title: string;
  link: string;
  duration?: string;
  works: string[];
}

export interface CareerDataType {
  type: string;
  start_date: string;
  end_date: string;
  title: string;
  subTitle: string;
  major?: string;
  minor?: string;
  score?: string;
  techStack?: string[];
  description?: Description[];
  summary: string;
}
