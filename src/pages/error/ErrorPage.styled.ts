import styled from "styled-components";

export const ErrorContanier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 1.5rem 5rem;

  @media (max-width: 650px) {
    padding: 1.5rem 1rem;
  }
`;
