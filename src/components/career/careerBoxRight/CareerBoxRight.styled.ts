import styled from "styled-components";

export const CareerBoxRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CareerBoxRightArticle = styled.article`
  width: 100%;
  height: -webkit-max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin-top: 20px;

  &:not(:last-of-type) {
    border-bottom: 0.0625rem solid #e9ecf3;
  }
`;

export const CareerBoxRightPeriod = styled.div`
  color: #98a8b9;
  font-size: 0.9rem;
  width: 11rem;
  line-height: 1.5;
`;

export const CareerBoxRightInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 11rem);

  & .techStackList {
    margin: 0.5rem 0;
  }

  & .techStackList li {
    background-color: #e9ecf3;
    border: 0;
    border-radius: 0.25rem;
    color: #263747;
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0 0.25rem 0.25rem 0;
    padding: 0.125rem 0.375rem;
    vertical-align: top;
  }
`;
