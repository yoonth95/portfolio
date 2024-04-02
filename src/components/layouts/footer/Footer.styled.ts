import styled from "styled-components";
import { ClickedType } from "@/types";

export const FooterContainer = styled.footer<ClickedType>`
  width: ${({ $clicked }) => ($clicked && window.innerWidth > 1240 ? "calc(100vw - 252px)" : "calc(100vw - 12px)")};
  position: relative;
  left: ${({ $clicked }) => ($clicked && window.innerWidth > 1240 ? "240px" : "0")};

  display: flex;
  justify-content: center;
  padding: 2rem;
  font-size: 0.75rem;
  color: var(--gray5-color);
  transition: 270ms;

  @media (max-width: 376px) {
    width: 100vw;
  }
`;

export const FooterLink = styled.a`
  border-bottom: 1px solid rgba(26, 26, 26, 0.26);
`;
