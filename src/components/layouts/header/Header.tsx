import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSidebarStore } from "@/stores";
import notebook from "@/assets/images/notebook.png";
import * as H from "./Header.styled";

const Header = () => {
  const { toggleSidebar, setToggleSidebar } = useSidebarStore();
  const navigator = useNavigate();

  return (
    <H.HeaderContainer>
      <H.MenuButton toggle={toggleSidebar} onClick={() => setToggleSidebar()}>
        <FontAwesomeIcon icon={faBars} />
      </H.MenuButton>
      <H.Title onClick={() => navigator("/")}>
        <img src={notebook} alt="노트북이미지" />
        <p>yoonth0919</p>
      </H.Title>
    </H.HeaderContainer>
  );
};

export default Header;