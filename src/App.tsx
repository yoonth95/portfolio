import { Outlet } from "react-router-dom";
import { Sidebar, Header, Footer } from "@/components/layouts";
import { useSidebarStore } from "./stores";
import { ClickedType } from "./types";
import styled from "styled-components";

function App() {
  const { toggleSidebar, setToggleSidebar } = useSidebarStore();

  const dimClick = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <WebContainer>
      {window.innerWidth <= 1240 && toggleSidebar && <Dim onClick={dimClick} />}
      <SidebarContainer $clicked={toggleSidebar} $innerWidth={window.innerWidth}>
        <Sidebar />
      </SidebarContainer>
      <ContentContainer>
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
  background-color: var(--gray100-color);
  overflow-y: auto;
  transition: width 270ms;
  z-index: 10;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #fff;
  overflow-y: auto;
`;

export default App;
