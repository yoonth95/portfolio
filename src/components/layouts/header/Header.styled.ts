import { ClickedType } from "@/types";
import styled from "styled-components";

export const HeaderContainer = styled.header<ClickedType>`
  height: 60px;
  width: ${({ $clicked }) => ($clicked && window.innerWidth > 1240 ? "calc(100vw - 252px)" : "calc(100vw - 12px)")};
  position: fixed;
  left: ${({ $clicked }) => ($clicked && window.innerWidth > 1240 ? "240px" : "0")};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  font-size: 14px;
  background-color: #fff;
  transition: 270ms;
  z-index: 8;

  @media (max-width: 376px) {
    width: 100vw;
  }
`;

export const MenuButton = styled.button<ClickedType>`
  display: ${({ $clicked }) => ($clicked && window.innerWidth > 1240 ? "none" : "block")};
  width: 1.5rem;
  height: 1.5rem;
  transition: 270ms;
  border-radius: 4px;

  & svg {
    color: rgba(55, 53, 47, 0.45);
  }

  &:hover {
    background-color: var(--gray2-color);
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
    background-color: var(--gray2-color);
  }
`;
