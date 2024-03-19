import styled from "styled-components";

export const BoxRight = styled.div`
  flex: 1 1 180px;
  aspect-ratio: 5/2;
  border-left: 1px solid rgba(55, 53, 47, 0.16);
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    object-fit: cover;
    transition: 270ms;
  }
`;

export const ProjectLinkBoxContainer = styled.a`
  display: flex;
  background-color: #fff;
  border: 1px solid rgba(55, 53, 47, 0.16);
  border-radius: 4px;
  margin: 5px 0;
  transition: 270ms;
  cursor: pointer;

  &:hover {
    background-color: rgba(55, 53, 47, 0.04);
    ${BoxRight} > img {
      transform: scale(1.1);
    }
  }
`;

export const BoxLeft = styled.div`
  flex: 4 1 180px;
  padding: 12px 14px 14px;
  overflow: hidden;
  text-align: left;
`;

export const BoxTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: rgb(55, 53, 47);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 24px;
  margin-bottom: 2px;
`;

export const BoxInfo = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: rgba(55, 53, 47, 0.65);
  height: 32px;
  overflow: hidden;
`;

export const BoxLink = styled.div`
  display: flex;

  & img {
    width: 16px;
    height: 16px;
    min-width: 16px;
    margin-right: 6px;
  }

  & span {
    font-size: 12px;
    line-height: 16px;
    color: rgb(55, 53, 47);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
