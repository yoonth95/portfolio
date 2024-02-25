import { profile, career, trophy, beta, egg, happymanwon, webBuilder } from "@/assets/images";

const tabList = [
  { icon: profile, text: "프로필", link: "/" },
  { icon: career, text: "이력", link: "/career" },
  { icon: trophy, text: "수상 및 자격증", link: "/award" },
];

const projectList = [
  { title: "개인 프로젝트", projects: [{ icon: egg, text: "계란 요리 성격 유형 검사", link: "/project/egg-mbti" }] },
  {
    title: "팀 프로젝트",
    projects: [
      { icon: happymanwon, text: "만원의 행복", link: "/project/happymanwon" },
      { icon: beta, text: "대학생 공연/전시 정보 플랫폼", link: "/project/beta-beta" },
      { icon: webBuilder, text: "웅진씽크빅 웹 빌더 시스템", link: "/project/web-builder" },
    ],
  },
];

export { tabList, projectList };
