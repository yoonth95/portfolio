import styled from "styled-components";

export const ProfileContanier = styled.main`
  padding: 3rem 5rem;
  flex: 1;
`;

export const ProfileTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

export const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  & > section {
    display: flex;
    flex-direction: column;
  }
`;
