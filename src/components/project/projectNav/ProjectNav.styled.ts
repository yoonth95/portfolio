import styled from "styled-components";

interface NavbarProps {
  $isOpen: boolean;
  $isModal: boolean;
}
export const Navbar = styled.nav<NavbarProps>`
  height: 0;
  position: sticky;
  top: 5rem;
  ${({ $isModal, $isOpen }) => (!$isModal ? `display: ${$isOpen ? "block" : "none"};` : `display: none;`)}
  margin-left: calc(45rem + 80px);
`;

export const ProjectNav = styled.ul`
  width: 240px;
  max-height: calc(-128px + 100vh);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0.25rem 0.75rem;
  border-left: 2px solid var(--gray5-color);
  color: var(--gray5-color);
  font-size: 0.875rem;
  line-height: 1.5;

  & a {
    cursor: pointer;
  }

  & a.active {
    color: var(--gray7-color);
    transition: 270ms;
    transform: scale(1.05);
  }
`;

interface ProjectNavTextProps {
  $isLocation: boolean;
}
export const ProjectNavText = styled.div<ProjectNavTextProps>`
  display: block;
  transition: all 0.125s ease-in 0s;

  ${({ $isLocation }) =>
    $isLocation &&
    `
    color: var(--gray6-color);
    transform: scale(1.05);
  `}
`;
