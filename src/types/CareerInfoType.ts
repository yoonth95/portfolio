export type CareerYearType = number[];

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
  summary?: string;
}
