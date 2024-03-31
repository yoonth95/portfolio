import styled from "styled-components";

export const AwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5rem;
  padding: 3rem 10rem;

  @media (max-width: 1024px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 850px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 570px) {
    zoom: 0.8;
  }

  @media (max-width: 375px) {
    zoom: 0.7;
  }

  @media (max-width: 320px) {
    padding: 3rem 1.5rem;
  }
`;

export const AwardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & h2 {
    font-size: 20px;
    margin: 0;
  }
`;

export const AwardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
