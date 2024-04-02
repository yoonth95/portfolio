import styled from "styled-components";

interface CareerPageContainerProps {
  $zoom: number;
}

export const CareerPageContainer = styled.div<CareerPageContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 1.4rem;
  padding: 3rem 0;
  zoom: ${({ $zoom }) => $zoom};

  @media (max-width: 426px) {
    position: relative;
    left: 6px;
  }
`;
