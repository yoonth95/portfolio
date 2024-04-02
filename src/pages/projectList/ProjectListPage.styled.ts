import styled from "styled-components";

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5rem;
  padding: 3rem 13rem;

  @media (max-width: 1025px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 769px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 376px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 321px) {
    padding: 1rem 0.5rem;
  }
`;

export const ProjectListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & h2 {
    font-size: 20px;
    margin: 0;
  }

  @media (max-width: 321px) {
    & img {
      width: 36px;
      height: 36px;
    }

    & h2 {
      font-size: 15px;
      margin: 0;
    }
  }
`;

export const ProjectListArea = styled.ul`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.25rem;
  width: 100%;

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
