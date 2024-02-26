import { ClickedType } from "@/types";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  font-size: 14px;
  background-color: #fff;
  z-index: 8;
`;

export const MenuButton = styled.button<ClickedType>`
  display: ${({ clicked }) => (clicked ? "none" : "block")};
  width: 1.5rem;
  height: 1.5rem;
  transition: 270ms;
  border-radius: 4px;

  & svg {
    color: rgba(55, 53, 47, 0.45);
  }

  &:hover {
    background-color: var(--gray300-color);
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 270ms;
  padding: 2px 5px;
  border-radius: 4px;
  cursor: pointer;

  & p {
    font-weight: 500;
    font-size: 14px;
    color: #000;
  }

  & img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    background-color: var(--gray300-color);
  }
`;
