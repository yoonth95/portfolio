import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useSidebarStore } from "@/stores";
import { profile, book, career, trophy, beta, egg, happymanwon, webBuilder } from "@/assets/images";
import * as S from "./Sidebar.styled";

const tabList = [
  { icon: profile, text: "프로필", link: "/" },
  { icon: book, text: "스킬", link: "/skill" },
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

const Sidebar = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const { toggleSidebar, setToggleSidebar } = useSidebarStore();
  const [clickPostMenu, setClickPostMenu] = useState([true, true]);

  const closeSidebar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setToggleSidebar();
  };

  const toggleMenu = (index: number) => () => {
    setClickPostMenu((prevState) => prevState.map((open, i) => (i === index ? !open : open)));
  };

  return (
    <S.SidebarContainer clicked={toggleSidebar}>
      <S.SidebarHeader>
        <S.UserInfoBox>
          <S.NameBox>윤</S.NameBox>
          <S.NameEmail>
            <p>윤태현</p>
            <p>yoonth0919@gmail.com</p>
          </S.NameEmail>
        </S.UserInfoBox>
        <S.AnglesIcon onClick={closeSidebar}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </S.AnglesIcon>
      </S.SidebarHeader>

      <ul>
        {tabList.map((item) => (
          <S.TabLi clicked={location.pathname === item.link} onClick={() => navigator(item.link)}>
            <img src={item.icon} alt="아이콘이미지" />
            <p>{item.text}</p>
          </S.TabLi>
        ))}
      </ul>

      <S.ProjectArea>
        <p>프로젝트</p>
        {projectList.map((project, index) => (
          <S.PostUl clicked={clickPostMenu[index]}>
            <S.PostMenu className="menu" onClick={toggleMenu(index)}>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>{project.title}</p>
            </S.PostMenu>
            <div className="list">
              {project.projects.map((item) => (
                <S.PostLi clicked={location.pathname === item.link} key={item.link} onClick={() => navigator(item.link)}>
                  <img src={item.icon} alt="아이콘이미지" />
                  <p>{item.text}</p>
                </S.PostLi>
              ))}
            </div>
          </S.PostUl>
        ))}
      </S.ProjectArea>
    </S.SidebarContainer>
  );
};

export default Sidebar;
