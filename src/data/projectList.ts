import { beta, egg, eggMbti, happymanwon, happymanwonThumbnail, webBuilder, betaTumbnail, webBuilderThumbnail } from "@/assets/images";

const projectList = [
  {
    name: "egg-mbti",
    type: "개인 프로젝트",
    thumbnail: eggMbti,
    date: "2023-09 ~ 2023-10",
    techStack: [
      ["React", "#d3e5ef"],
      ["Styled-Components", "#dbeddb"],
      ["AWS", "#ffe2dd"],
    ],
    icon: egg,
    title: "계란 요리 성격 유형 검사",
    introduction: "",
    link: "/project/egg-mbti",
  },
  {
    name: "happymanwon",
    type: "팀 프로젝트",
    thumbnail: happymanwonThumbnail,
    date: "2023-10 ~ 2023-12",
    techStack: [
      ["React", "#d3e5ef"],
      ["TypeScript", "#c8ecf1"],
      ["Styled-Components", "#dbeddb"],
      ["Tanstack Query", "#eee0da"],
      ["Zustand", "#c7c7c7"],
    ],
    icon: happymanwon,
    title: "만원의 행복",
    introduction: "",
    link: "/project/happymanwon",
  },
  {
    name: "beta-beta",
    type: "팀 프로젝트",
    thumbnail: betaTumbnail,
    date: "2023-12 ~ 2024-01",
    techStack: [
      ["React", "#d3e5ef"],
      ["TypeScript", "#c8ecf1"],
      ["Tanstack Query", "#eee0da"],
      ["Zustand", "#c7c7c7"],
      ["Node.js", "#dbeddb"],
      ["MySQL", "#d3e5ef"],
      ["AWS", "#ffe2dd"],
    ],
    icon: beta,
    title: "대학생 공연/전시 정보 플랫폼",
    introduction: "",
    link: "/project/beta-beta",
  },
  {
    name: "web-builder",
    type: "팀 프로젝트",
    thumbnail: webBuilderThumbnail,
    date: "2023-07 ~ 2023-08",
    techStack: [
      ["React", "#d3e5ef"],
      ["Redux toolkit", "#e8deee"],
      ["Node.js", "#dbeddb"],
      ["MySQL", "#d3e5ef"],
      ["AWS", "#ffe2dd"],
    ],
    icon: webBuilder,
    title: "웅진씽크빅 웹 빌더 시스템",
    introduction: "",
    link: "/project/web-builder",
  },
];

export { projectList };
