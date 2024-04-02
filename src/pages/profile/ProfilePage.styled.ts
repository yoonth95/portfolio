import styled from "styled-components";

export const ProfileContanier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 1.5rem 5rem;

  @media (max-width: 650px) {
    padding: 1.5rem 1rem;
  }
`;

export const ProfileSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 4rem;
  height: 600px;
  margin-top: 50px;

  @media (max-width: 1020px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }

  @media (max-width: 426px) {
    gap: 2rem;
  }
`;

export const ProfileAwardSection = styled.section`
  display: flex;
  align-items: flex-start;
`;
