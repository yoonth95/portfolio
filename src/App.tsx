import { Outlet, useLocation } from "react-router-dom";
import { Sidebar, Header, Footer } from "@/components/layouts";
import { useScrollToElementTop } from "./hooks";
import { useSidebarStore } from "./stores";
import { ClickedType } from "./types";
import styled from "styled-components";

function App() {
  const { toggleSidebar, setToggleSidebar } = useSidebarStore();
  const { pathname } = useLocation();

  const dimClick = () => {
    setToggleSidebar(!toggleSidebar);
  };

  console.log("자동배포 테스트");

  useScrollToElementTop(pathname);

  return (
    <WebContainer>
      {window.innerWidth <= 1240 && toggleSidebar && <Dim onClick={dimClick} />}
      <SidebarContainer $clicked={toggleSidebar} $innerWidth={window.innerWidth}>
        <Sidebar />
      </SidebarContainer>
      <ContentContainer>
        <Header />
        <Main $clicked={toggleSidebar}>
          <Outlet />
        </Main>
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
  position: fixed;
  width: ${({ $clicked }) => ($clicked ? "15rem" : "0")};
  height: 100%;
  background-color: var(--gray1-color);
  overflow-y: auto;
  transition: width 270ms;
  z-index: 10;
`;

const ContentContainer = styled.div`
  width: calc(100% - 16rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  background-color: #fff;
  min-height: 100vh;
`;

const Main = styled.main<ClickedType>`
  width: ${({ $clicked }) => ($clicked && window.innerWidth > 1240 ? "calc(100vw - 240px)" : "calc(100vw - 12px)")};
  position: relative;
  top: 60px;
  left: ${({ $clicked }) => ($clicked && window.innerWidth > 1240 ? "240px" : "0")};
  padding-bottom: 60px;
  transition: 270ms;

  @media (max-width: 376px) {
    width: 100vw;
  }
`;

export default App;
