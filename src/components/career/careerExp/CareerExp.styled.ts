import styled from "styled-components";

export const DescriptionList = styled.div`
  padding: 1rem 0;
`;

export const DescriptionLink = styled.a`
  display: block;
  overflow: hidden;
  text-decoration: none;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  word-break: break-all;
  font-style: italic;
  color: #525252bf;

  &:hover {
    text-decoration: underline;
  }
`;

export const DescriptionUl = styled.ul`
  margin-top: 15px;
  & li {
    font-size: 15px;
    line-height: 1.5;
    list-style: outside;
    margin: 0 0 0.625rem 1.5rem;
  }
`;
