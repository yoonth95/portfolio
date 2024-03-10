import styled from "styled-components";

export const ProjectContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5rem;
  padding: 3rem 14rem;
`;

export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & h2 {
    font-size: 20px;
    margin: 0;
  }
`;

export const ProjectBoxList = styled.div`
  display: grid;
  justify-items: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
  padding-top: 16px;
  padding-bottom: 4px;
`;
