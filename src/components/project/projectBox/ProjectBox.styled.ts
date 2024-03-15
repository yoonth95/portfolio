import styled from "styled-components";

export const BoxImgDiv = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-bottom: 1px solid rgba(15, 15, 15, 0.1);
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: 270ms;
  }
`;

export const BoxContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  cursor: pointer;
  transition: 270ms;

  &:hover {
    background-color: rgba(55, 53, 47, 0.04);

    ${BoxImgDiv} > img {
      transform: scale(1.1);
    }
  }
`;

export const BoxInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 0 14px;
`;

export const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 10px;

  & img {
    width: 1rem;
    height: 1rem;
    border-radius: 4px;
  }

  & p {
    max-width: 100%;
    width: auto;
    white-space: pre-wrap;
    word-break: break-word;
    font-size: 14px;
    font-weight: 500;
    pointer-events: none;
  }
`;

export const BoxDate = styled.p`
  display: flex;
  align-items: center;
  padding: 0 14px;
  font-size: 12px;
  white-space: nowrap;
  min-width: fit-content;
  width: fit-content;
`;
