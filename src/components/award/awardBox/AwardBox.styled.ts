import styled from "styled-components";

export const AwardBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 50px;
  border-bottom: 0.0625rem solid #e9ecf3;

  &:is(:first-of-type) {
    padding-top: 0;
  }

  &:is(:last-of-type) {
    border-bottom: none;
  }
`;

export const AwardBoxDate = styled.div`
  align-items: flex-start;
  color: #98a8b9;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 15%;
`;

export const AwardBoxText = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;

  & h3 {
    color: black;
  }

  & p {
    margin-top: 1rem;
  }
`;

interface AwardLinkProps {
  $isLink: boolean;
}
export const AwardLink = styled.div<AwardLinkProps>`
  visibility: ${({ $isLink }) => ($isLink ? "visible" : "hidden")};

  display: flex;
  align-items: center;
  height: 100%;

  transition: 270ms;

  & img {
    width: 2rem;
    height: 2rem;
  }
`;
