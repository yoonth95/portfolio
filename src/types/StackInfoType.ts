interface Description {
  title: string;
  text: string[];
}

export interface StackList {
  stack: string;
  img: string;
  description: Description;
}

export interface StackInfoType {
  name: string;
  stackList: StackList[];
}
