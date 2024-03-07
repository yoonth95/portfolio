import styled from "styled-components";

export const CareerBoxRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CareerBoxRightArticle = styled.article`
  display: flex;
  flex-direction: row;
  height: -webkit-max-content;
  height: max-content;
  justify-content: flex-start;
  width: 100%;

  &:not(:last-of-type) {
    border-bottom: 0.0625rem solid #e9ecf3;
  }
`;

export const CareerBoxRightPeriod = styled.div`
  color: #98a8b9;
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-top: 13px;
  width: 11rem;
`;

export const CareerBoxRightInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
