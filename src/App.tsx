import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar, Header, Footer } from "@/components/layouts";
import { useSidebarStore } from "./stores";
import { ClickedType } from "./types";
import styled from "styled-components";
import { useScrollToElementTop, useContentComponentResponsive } from "./hooks";

function App() {
  const { toggleSidebar, setToggleSidebar } = useSidebarStore();
  const ref = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  const dimClick = () => {
    setToggleSidebar(!toggleSidebar);
  };

  useScrollToElementTop(ref, pathname);
  useContentComponentResponsive(ref, pathname);

  return (
    <WebContainer>
      {window.innerWidth <= 1240 && toggleSidebar && <Dim onClick={dimClick} />}
      <SidebarContainer $clicked={toggleSidebar} $innerWidth={window.innerWidth}>
        <Sidebar />
      </SidebarContainer>
      <ContentContainer ref={ref}>
        <Header />
        <Outlet />
        <Footer />
      </ContentContainer>
    </WebContainer>
  );
}

const WebContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Dim = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--modal-bg-color);
  height: 100vh;
  z-index: 9;
`;

interface SidebarContainerProps extends ClickedType {
  $innerWidth: number;
}

const SidebarContainer = styled.div<SidebarContainerProps>`
  position: ${({ $innerWidth }) => ($innerWidth <= 1240 ? "fixed" : "relative")};
  width: ${({ $clicked }) => ($clicked ? "15rem" : "0")};
  height: 100vh;
  background-color: var(--gray1-color);
  overflow-y: auto;
  transition: width 270ms;
  z-index: 10;
`;

const ContentContainer = styled.div`
  width: calc(100% - 16rem);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #fff;
  overflow-y: auto;
`;

export default App;
