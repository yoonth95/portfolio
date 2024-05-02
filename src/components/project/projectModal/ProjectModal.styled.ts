import styled from "styled-components";

export const ModalContainer = styled.article`
  max-width: 970px;
  height: calc(100% - 144px);
  position: fixed;
  top: 72px;
  left: 72px;
  right: 72px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  box-shadow: rgba(15, 15, 15, 0.04) 0px 0px 0px 1px, rgba(15, 15, 15, 0.03) 0px 3px 6px, rgba(15, 15, 15, 0.06) 0px 9px 24px;
  border-radius: 4px;
  z-index: 100;

  @media (max-width: 830px) {
    width: 98%;
    left: 9px;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0px;
  background: var(--modal-bg-color);
  z-index: 99;
`;

export const ModalHeader = styled.div`
  height: 2.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  color: var(--gray5-color);
`;

export const ModalHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const ModalHeaderIcon = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: 270ms;
  cursor: pointer;

  & svg {
    width: 15px;
    height: 15px;
  }
  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
  }
`;

export const ModalHeaderLine = styled.span`
  width: 1px;
  height: 14px;
  margin-left: 6px;
  margin-right: 6px;
  background: rgba(55, 53, 47, 0.16);
`;

export const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden scroll;
`;
