import styled from "styled-components";

export const BoxContainer = styled.article`
  width: 20rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  cursor: pointer;
  transition: 270ms;

  &:hover {
    background-color: rgba(55, 53, 47, 0.04);
  }
`;

export const BoxImgDiv = styled.div`
  width: 100%;
  aspect-ratio: 16/9;

  & img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
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

export const BoxTechList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  min-width: fit-content;
  width: fit-content;
  padding: 0 12px;

  & li {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    min-width: 0px;
    max-width: 100%;
    height: 18px;
    border-radius: 3px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 12px;
    line-height: 120%;
    color: rgb(28, 56, 41);
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
