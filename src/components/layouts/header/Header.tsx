import { useNavigate } from "react-router-dom";
import { LazyImage } from "@/components/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSidebarStore } from "@/stores";
import { notebook } from "@/assets/images";
import * as H from "./Header.styled";

const Header = () => {
  const { setIsOpen, toggleSidebar, setToggleSidebar } = useSidebarStore();
  const navigator = useNavigate();

  const sidebarOpen = () => {
    setToggleSidebar(true);
    setIsOpen(true);
  };

  return (
    <H.HeaderContainer>
      <H.MenuButton $clicked={toggleSidebar} onClick={sidebarOpen}>
        <FontAwesomeIcon icon={faBars} />
      </H.MenuButton>
      <H.Title onClick={() => navigator("/")}>
        <LazyImage src={notebook} alt={"노트북이미지"} />
        <p>yoonth0919</p>
      </H.Title>
    </H.HeaderContainer>
  );
};

export default Header;
