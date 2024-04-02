import styled from "styled-components";

export const AwardBoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  width: 75%;
`;

interface AwardBoxContainerProps {
  $type: string;
}
export const AwardBoxContainer = styled.div<AwardBoxContainerProps>`
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

  @media (max-width: 700px) {
    padding: 25px 0;
  }

  @media (max-width: 425px) {
    flex-direction: ${({ $type }) => ($type === "award" ? "column" : "row")};
    align-items: flex-start;
    gap: 25px;

    ${AwardBoxInfo} {
      width: 100%;
    }
  }
`;

export const AwardBoxDate = styled.div`
  color: #98a8b9;
  width: 25%;
`;

export const AwardInfoText = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    color: black;
  }

  & p {
    margin-top: 1rem;
  }
`;

interface AwardInfoLinkProps {
  $isLink: boolean;
}
export const AwardInfoLink = styled.div<AwardInfoLinkProps>`
  visibility: ${({ $isLink }) => ($isLink ? "visible" : "hidden")};

  display: flex;
  align-items: center;
  height: 100%;

  & img {
    width: 2rem;
    height: 2rem;
    transition: 270ms;
  }
`;
