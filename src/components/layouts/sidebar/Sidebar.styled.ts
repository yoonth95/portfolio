import styled from "styled-components";

export const SidebarContainer = styled.aside`
  height: 100%;
  color: rgba(25, 23, 17, 0.6);
  padding: 4px 4px 4px;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  transition: 270ms;
  cursor: pointer;

  &:hover {
    background-color: var(--gray100-color);
  }
`;
export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const NameBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  background-color: var(--gray400-color);
`;

export const NameEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p:first-child {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 3px;
    color: #000;
  }

  & p:last-child {
    font-size: 0.75rem;
    color: var(--gray500-color);
  }
`;

export const AnglesIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  border-radius: 4px;
  cursor: pointer;

  & svg {
    opacity: 0;
    color: rgba(55, 53, 47, 0.45);
    transition: 270ms;
  }

  &:hover {
    background-color: var(--gray300-color);
  }
`;
