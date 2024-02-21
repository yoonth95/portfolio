import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { useSidebarStore } from "@/stores";
import { profile, book, career, trophy } from "@/assets/images";
import * as S from "./Sidebar.styled";

const tabList = [
  { icon: profile, text: "프로필", link: "/" },
  { icon: book, text: "스킬", link: "/skill" },
  { icon: career, text: "이력", link: "/career" },
  { icon: trophy, text: "수상 및 자격증", link: "/award" },
];

const Sidebar = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const { setToggleSidebar } = useSidebarStore();

  const closeSidebar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setToggleSidebar();
  };

  return (
    <S.SidebarContainer>
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
          <S.SidebarLi clicked={location.pathname === item.link} onClick={() => navigator(item.link)}>
            <img src={item.icon} />
            <p>{item.text}</p>
          </S.SidebarLi>
        ))}
      </ul>
    </S.SidebarContainer>
  );
};

export default Sidebar;
