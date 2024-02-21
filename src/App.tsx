import { Outlet } from "react-router-dom";
import { Sidebar, Header, Footer } from "@/components/layouts";
import { useSidebarStore } from "./stores";
import styled from "styled-components";

interface SidebarContainerProps {
  toggle: boolean;
}

function App() {
  const { toggleSidebar } = useSidebarStore();

  return (
    <WebContainer>
      <SidebarContainer toggle={toggleSidebar}>
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

const SidebarContainer = styled.div<SidebarContainerProps>`
  width: ${({ toggle }) => (toggle ? "15rem" : "0")};
  background-color: var(--gray100-color);
  overflow-y: auto;
  transition: width 270ms ease 0s;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #fff;
  overflow-y: auto;
`;

export default App;
