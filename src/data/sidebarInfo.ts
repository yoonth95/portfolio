import {
  profile,
  career,
  trophy,
  beta,
  egg,
  eggMbti,
  happymanwon,
  happymanwonThumbnail,
  webBuilder,
  betaTumbnail,
  webBuilderThumbnail,
} from "@/assets/images";

const tabList = [
  { icon: profile, text: "프로필", link: "/" },
  { icon: career, text: "이력", link: "/career" },
  { icon: trophy, text: "수상 및 자격증", link: "/award" },
];

const projectList = [
  {
    title: "개인 프로젝트",
    projects: [
      {
        thumbnail: eggMbti,
        date: "2023-09 ~ 2023-10",
        techStack: [
          ["React", "#d3e5ef"],
          ["Styled-Components", "#dbeddb"],
          ["AWS", "#ffe2dd"],
        ],
        icon: egg,
        text: "계란 요리 성격 유형 검사",
        link: "/project/egg-mbti",
      },
    ],
  },
  {
    title: "팀 프로젝트",
    projects: [
      {
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
        text: "만원의 행복",
        link: "/project/happymanwon",
      },
      {
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
        text: "대학생 공연/전시 정보 플랫폼",
        link: "/project/beta-beta",
      },
      {
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
        text: "웅진씽크빅 웹 빌더 시스템",
        link: "/project/web-builder",
      },
    ],
  },
];

export { tabList, projectList };
