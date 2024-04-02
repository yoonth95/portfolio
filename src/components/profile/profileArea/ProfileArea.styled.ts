import styled from "styled-components";

export const ProfileAreaSection = styled.section`
  width: 14rem;
  display: block;

  @media (max-width: 1020px) {
    display: none;
  }
`;

export const ProfileResizeSection = styled.section`
  display: none;
  grid-template-columns: 40% 60%;
  max-width: 500px;
  width: 450px;
  height: 225px;
  background: linear-gradient(-45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 1020px) {
    display: grid;
  }

  @media (max-width: 500px) {
    zoom: 0.8;
  }

  @media (max-width: 376px) {
    zoom: 0.7;
  }

  @media (max-width: 321px) {
    zoom: 0.6;
  }
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
  background-color: var(--gray7-color);
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
  color: var(--gray6-color);
  font-size: 13px;
  transition: 0.5s;
  transform-origin: bottom;
  transform: translateY(-100%) rotateX(90deg);

  ${Box}:hover & {
    transform: translateY(0) rotateX(0deg);
  }
`;

export const ProfileResizeImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 140px;
    width: 140px;
    box-shadow: 0 0 42px 0 rgba(255, 255, 255, 0.17);
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 3px solid rgba(255, 255, 255, 0.18);
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 10%;
  }
`;

export const ProfileResizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ResizeInfoName = styled.div`
  /* border: 0.5px solid var(--gray4-color); */
  border-bottom: 2px solid var(--gray4-color);
  padding: 0 40px;

  & h2 {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }

  & h3 {
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
`;

export const ResizeInfoContacts = styled.div`
  display: flex;
  flex-direction: row;

  & .link {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 0px 32px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: block;
    font-size: 40px;
    padding: 4px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin: 10px;
    cursor: pointer;
  }

  & .link:hover {
    transform: translateY(-2px);
    transition: all 0.5s;
    background: rgba(255, 255, 255, 0.5);
  }

  & .link > a {
    color: rgba(255, 255, 255, 0.6);
  }

  & .link > a > img {
    width: 100%;
  }
`;
