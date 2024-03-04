import styled from "styled-components";

export const CareerBoxSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 1000px;
  border-radius: 0.75rem;
  border: 0.0625rem solid #e9ecf3;
  padding: 0 1.5rem;
`;

export const CareerBoxLeft = styled.div`
  width: 11rem;
  max-height: 2.125rem;

  & h4 {
    font-weight: bold;
    margin: 1.5rem 0;
  }
`;

export const CareerBoxRight = styled.div`
  width: calc(100% - 11rem);
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1.5rem 0;
`;
