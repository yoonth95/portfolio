import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LazyImage } from "@/components/common";
import { useSidebarStore } from "@/stores";
import { tabList, projectList } from "@/data/sidebarInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Sidebar.styled";

const Sidebar: React.FC = React.memo(() => {
  const navigator = useNavigate();
  const location = useLocation();
  const { toggleSidebar, setToggleSidebar } = useSidebarStore();
  const [clickPostMenu, setClickPostMenu] = useState([true, true]);

  const closeSidebar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setToggleSidebar(false);
  };

  const toggleMenu = (index: number) => () => {
    setClickPostMenu((prevState) => prevState.map((open, i) => (i === index ? !open : open)));
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1240) {
        setToggleSidebar(false);
      } else {
        setToggleSidebar(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.SidebarContainer $clicked={toggleSidebar}>
      <S.SidebarHeader>
        <S.UserInfoBox>
          <S.NameBox>윤</S.NameBox>
          <S.NameEmail>
            <p>윤태현</p>
            <p>yoonth0919@gmail.com</p>
          </S.NameEmail>
        </S.UserInfoBox>
        <S.AnglesIcon $innerWidth={window.innerWidth} onClick={closeSidebar}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </S.AnglesIcon>
      </S.SidebarHeader>

      <ul style={{ marginBottom: "2rem" }}>
        {tabList.map((item) => (
          <S.TabLi key={item.text} $clicked={location.pathname === item.link} onClick={() => navigator(item.link)}>
            <LazyImage src={item.icon} alt={"아이콘이미지"} />
            <p>{item.text}</p>
          </S.TabLi>
        ))}
      </ul>

      <S.ProjectArea>
        <S.ProjectTab $clicked={location.pathname === "/project"} onClick={() => navigator("/project")}>
          프로젝트
        </S.ProjectTab>
        {projectList.map((project, index) => (
          <S.PostUl key={project.title} $clicked={clickPostMenu[index]}>
            <S.PostMenu className="menu" onClick={toggleMenu(index)}>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>{project.title}</p>
            </S.PostMenu>
            <div className="list">
              {project.projects.map((item) => (
                <S.PostLi key={item.link} $clicked={location.pathname === item.link} onClick={() => navigator(item.link)}>
                  <LazyImage src={item.icon} alt={"아이콘이미지"} />
                  <p>{item.text}</p>
                </S.PostLi>
              ))}
            </div>
          </S.PostUl>
        ))}
      </S.ProjectArea>
    </S.SidebarContainer>
  );
});

export default Sidebar;
