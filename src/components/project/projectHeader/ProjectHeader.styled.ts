import styled from "styled-components";

interface IconProps {
  $isModal: boolean;
}
export const Icon = styled.div<IconProps>`
  height: 5rem;
  width: 5rem;
  border-radius: 4px;
  flex-shrink: 0;
  position: relative;
  margin-top: ${({ $isModal }) => ($isModal ? "6rem" : 0)};
  margin-bottom: 1.5rem;

  & img {
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 1;
    width: 5rem;
    height: 5rem;
    border-radius: 4px;
  }
`;

export const Title = styled.h1`
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  padding: 3px 2px;
  font-size: 2.5rem;
`;

export const Info = styled.div`
  width: 100%;
  max-width: 100%;
  padding-top: 2rem;
  margin: 0 auto;
  font-size: 15px;

  .infoEach {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding-bottom: 4px;
  }
`;

export const InfoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  color: rgba(55, 53, 47, 0.65);

  & svg {
    flex: 1;
  }

  & span {
    flex: 6;
  }
`;

export const InfoRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 4px;
  line-height: 1.2;

  & ul {
    flex-wrap: wrap;
    padding: 0;
  }

  & a {
    width: max-content;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
