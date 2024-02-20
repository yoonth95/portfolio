import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSidebarStore } from "@/stores";
import * as H from "./Header.styled";

const Header = () => {
  const { toggleSidebar, setToggleSidebar } = useSidebarStore();

  const openSidebar = () => {
    setToggleSidebar();
  };

  return (
    <H.HeaderContainer>
      <H.MenuButton toggle={toggleSidebar} onClick={openSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </H.MenuButton>
    </H.HeaderContainer>
  );
};

export default Header;
