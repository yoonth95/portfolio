import { profile, career, trophy, beta, egg, happymanwon, webBuilder } from "@/assets/images";

const tabList = [
  { icon: profile, title: "프로필", link: "/" },
  { icon: career, title: "이력", link: "/career" },
  { icon: trophy, title: "수상 및 자격증", link: "/award" },
];

const projectTabList = [
  { type: "개인 프로젝트", projects: [{ icon: egg, title: "계란 요리 성격 유형 검사", link: "/project/1" }] },
  {
    type: "팀 프로젝트",
    projects: [
      { icon: happymanwon, title: "만원의 행복", link: "/project/2" },
      { icon: beta, title: "대학생 공연/전시 정보 플랫폼", link: "/project/3" },
      { icon: webBuilder, title: "웅진씽크빅 웹 빌더 시스템", link: "/project/4" },
    ],
  },
];

export { tabList, projectTabList };
