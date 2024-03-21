import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 80px;
`;

export const Hr = styled.hr`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  width: 100%;
  height: 13px;
  flex: 0 0 auto;
  color: var(--gray3-color);
`;

export const ProjectInfo = styled.div`
  & h1 {
    padding: 13px 0;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--gray3-color);
  }

  & h2 {
    padding: 13px 0;
  }
`;

export const ArchitectureImg = styled.img`
  width: 100%;
`;
