import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logEvent } from "@firebase/analytics";
import { analytics } from "@/firebase/firebaseInit";
import { LazyImage } from "@/components/common";
import { useSidebarStore } from "@/stores";
import { tabList, projectTabList } from "@/data/sidebarInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Sidebar.styled";

const Sidebar: React.FC = React.memo(() => {
  const navigator = useNavigate();
  const location = useLocation();
  const { isOpen, setIsOpen, toggleSidebar, setToggleSidebar } = useSidebarStore();
  const [dropMenu, setDropMenu] = useState([true, true]);

  const closeSidebar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setToggleSidebar(false);
    setIsOpen(false);
  };

  const dropDownMenu = (index: number) => () => {
    setDropMenu((prevState) => prevState.map((open, i) => (i === index ? !open : open)));
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1240) {
        setToggleSidebar(false);
      } else if (isOpen && windowWidth > 1240) {
        setToggleSidebar(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const moveLink = (link: string) => {
    logEvent(analytics, link);
    navigator(link);
  };

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
          <S.TabLi key={item.title} $clicked={location.pathname === item.link} onClick={() => moveLink(item.link)}>
            <LazyImage src={item.icon} alt={"아이콘이미지"} />
            <p>{item.title}</p>
          </S.TabLi>
        ))}
      </ul>

      <S.ProjectArea>
        <S.ProjectTab $clicked={location.pathname === "/project"} onClick={() => moveLink("/project")}>
          프로젝트
        </S.ProjectTab>
        {projectTabList.map((project, index) => (
          <S.PostUl key={project.type} $clicked={dropMenu[index]}>
            <S.PostMenu className="menu" onClick={dropDownMenu(index)}>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>{project.type}</p>
            </S.PostMenu>
            <div className="list">
              {project.projects.map((item) => (
                <S.PostLi key={item.link} $clicked={location.pathname === item.link} onClick={() => moveLink(item.link)}>
                  <LazyImage src={item.icon} alt={"아이콘이미지"} />
                  <p>{item.title}</p>
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
