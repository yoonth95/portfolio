import { ClickedType } from "@/types";
import styled from "styled-components";

export const SidebarContainer = styled.aside<ClickedType>`
  display: ${({ $clicked }) => ($clicked ? "block" : "none")};
  flex-direction: column;
  height: 100%;
  color: rgba(25, 23, 17, 0.6);

  &:hover {
    svg {
      opacity: 1;
    }
  }

  & {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  height: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 10px;
  transition: 270ms;
`;
export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const NameBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: white;
  font-size: 0.875rem;
  background-color: var(--gray5-color);
`;

export const NameEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p:first-child {
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 3px;
    color: #000;
  }

  & p:last-child {
    font-size: 0.6875rem;
    color: var(--gray6-color);
  }
`;

interface AnglesIconProps {
  $innerWidth: number;
}

export const AnglesIcon = styled.div<AnglesIconProps>`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  border-radius: 4px;
  cursor: pointer;

  & svg {
    opacity: ${({ $innerWidth }) => ($innerWidth <= 1240 ? "1" : "0")};
    color: rgba(55, 53, 47, 0.45);
    transition: 270ms;
  }

  &:hover {
    background-color: var(--gray2-color);
  }
`;

export const TabLi = styled.li<ClickedType>`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1rem;
  font-size: 0.875rem;
  background-color: ${({ $clicked }) => $clicked && `var(--gray2-color)`};

  transition: 270ms;
  cursor: pointer;

  & img {
    width: 1rem;
    height: 1rem;
  }

  & p {
    font-weight: 500;
    color: var(--gray6-color);
  }

  &:hover {
    background-color: var(--gray2-color);
  }
`;

export const ProjectArea = styled.div`
  font-weight: 500;
  color: var(--gray6-color);
`;

export const ProjectTab = styled.p<ClickedType>`
  padding: 0.8rem 1.8rem;
  font-size: 0.75rem;
  background-color: ${({ $clicked }) => $clicked && `var(--gray2-color)`};
  cursor: pointer;

  &:hover {
    background-color: var(--gray2-color);
  }
`;

export const PostUl = styled.ul<ClickedType>`
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  & > .menu > svg {
    transform: ${({ $clicked }) => ($clicked ? `rotate(90deg)` : `rotate(0deg)`)};
    transition: transform 270ms ease-in-out;
  }

  & > .list {
    max-height: ${({ $clicked }) => ($clicked ? `7rem` : 0)};
    flex-direction: column;
    align-items: start;
    transition: 270ms ease-in-out 0s;
    overflow: hidden;
  }
`;

export const PostMenu = styled.div`
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  transition: 270ms;

  & p {
    font-size: 0.8125rem;
  }

  &:hover {
    background-color: var(--gray2-color);
  }
`;

export const PostLi = styled.li<ClickedType>`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  padding: 0.7rem 1.8rem;
  background-color: ${({ $clicked }) => $clicked && `var(--gray2-color)`};
  transition: 270ms;

  & img {
    width: 1rem;
    height: 1rem;
  }

  & p {
    font-size: 0.75rem;
  }

  &:hover {
    background-color: var(--gray2-color);
  }
`;
