import styled from "styled-components";

interface MenuButtonProps {
  toggle: boolean;
}

export const HeaderContainer = styled.header`
  height: 45px;
  padding: 0.75rem;
`;

export const MenuButton = styled.button<MenuButtonProps>`
  width: 1.5rem;
  height: 1.5rem;
  transition: 270ms;

  & svg {
    color: rgba(55, 53, 47, 0.45);
    opacity: ${({ toggle }) => (toggle ? 0 : 1)};
  }

  &:hover {
    background-color: var(--gray300-color);
  }
`;
