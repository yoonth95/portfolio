import styled from "styled-components";

export const ProjectListContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5rem;
  padding: 3rem 13rem;
`;

export const ProjectListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & h2 {
    font-size: 20px;
    margin: 0;
  }
`;

export const ProjectListArea = styled.ul`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.25rem;
  width: 100%;
`;
