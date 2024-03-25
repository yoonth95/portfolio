import { useSidebarStore } from "@/stores";
import * as F from "./Footer.styled";

const Footer = () => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <F.FooterContainer $clicked={toggleSidebar}>
      Crafted by yoonth95. Icons by&nbsp;
      <F.FooterLink href="https://icons8.com" target="_blank">
        Icons8
      </F.FooterLink>
    </F.FooterContainer>
  );
};

export default Footer;
