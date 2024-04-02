import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 80px;

  @media (max-width: 900px) {
    max-width: 40rem;
  }

  @media (max-width: 700px) {
    max-width: 35rem;
  }

  @media (max-width: 600px) {
    max-width: 30rem;
  }
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
  & .section {
    margin-bottom: 2rem;
  }

  & h1,
  h2 {
    line-height: 1.5;
    padding: 13px 0;
  }

  & h1 {
    margin-bottom: 8px;
    border-bottom: 1px solid var(--gray3-color);
  }

  & h3 {
    color: inherit;
    margin-bottom: 1rem;
  }

  & p {
    line-height: 1.5;
  }

  & .section > img {
    width: 100%;
  }

  & .quotation {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  & li {
    font-size: 15px;
    line-height: 1.5;
    list-style: outside;
    margin: 0 0 0.625rem 1.5rem;
  }

  & .subLi {
    list-style: circle;
  }

  & .imgDescription {
    margin-top: 40px;
  }
`;

export const ReferenceBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > span,
  strong,
  a {
    font-size: 14px;
    display: block;
    overflow: hidden;
    text-decoration: none;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    word-break: break-all;
  }

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
