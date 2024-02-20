import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Sidebar.styled";
import { useSidebarStore } from "@/stores";

const Sidebar = () => {
  const navigator = useNavigate();
  const { setToggleSidebar } = useSidebarStore();

  const closeSidebar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setToggleSidebar();
  };

  const moveMain = () => {
    navigator("/");
  };

  return (
    <S.SidebarContainer>
      <S.SidebarHeader onClick={moveMain}>
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
    </S.SidebarContainer>
  );
};

export default Sidebar;
