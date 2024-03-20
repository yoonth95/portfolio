import styled from "styled-components";

interface NavbarProps {
  $isOpen: boolean;
  $isModal: boolean;
}
export const Navbar = styled.div<NavbarProps>`
  ${({ $isModal, $isOpen }) => (!$isModal ? `display: ${$isOpen ? "block" : "none"};` : `display: none;`)}
  margin-left: calc(45rem + 80px);
  position: sticky;
  top: 5rem;
  height: 0;
`;

export const ProjectNav = styled.ul`
  width: 240px;
  border-left: 2px solid var(--gray5-color);
  padding: 0.25rem 0.75rem;
  color: var(--gray6-color);
  line-height: 1.5;
  font-size: 0.875rem;
  max-height: calc(-128px + 100vh);
  overflow: hidden auto;

  & > li:not(:first-of-type) {
    margin-top: 4px;
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
