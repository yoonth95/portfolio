import styled from "styled-components";

export const ProfileAreaSection = styled.section`
  width: 14rem;
`;

export const ProfileImg = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  object-fit: contain;
`;

export const LinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;

  & a {
    width: 15%;
    cursor: pointer;
  }

  & a > img {
    width: 100%;
    transition: 270ms;
  }

  & img:hover {
    transform: scale(1.2);
  }
`;

export const BoxList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 2rem;
`;

export const Box = styled.div`
  position: relative;
  margin: 0 10px;
  height: 3rem;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Icon = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--gray600-color);
  transition: 0.5s;
  transform-origin: top;
  transform: translateY(0px) rotateX(0deg);

  ${Box}:hover & {
    transform: translateY(100%) rotateX(90deg);
  }

  & svg {
    font-size: 1.2rem;
    line-height: 100px;
    color: #fff;
  }
`;

export const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(241, 241, 239);
  color: var(--gray500-color);
  font-size: 13px;
  transition: 0.5s;
  transform-origin: bottom;
  transform: translateY(-100%) rotateX(90deg);

  ${Box}:hover & {
    transform: translateY(0) rotateX(0deg);
  }
`;
