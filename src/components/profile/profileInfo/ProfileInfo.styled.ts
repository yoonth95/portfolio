import styled from "styled-components";

export const ProfileInfoSection = styled.section`
  max-width: 600px;
  flex: 0.5;

  & h2 {
    margin-bottom: 0;
  }

  @media (max-width: 650px) {
    max-width: 95%;
  }

  @media (max-width: 376px) {
    max-width: 100%;
  }
`;

export const ProfileInfoTop = styled.div`
  @media (max-width: 376px) {
    zoom: 0.9;
  }

  @media (max-width: 350px) {
    zoom: 0.8;
  }
`;

export const ProfileInfoTitle = styled.div`
  & h2 {
    font-size: 18px;
  }
`;

export const ProfileIntro = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  background: rgb(241, 241, 239);
  padding: 16px 16px 16px 12px;

  & p {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const ProfileTechStack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 376px) {
    zoom: 0.9;
  }

  @media (max-width: 350px) {
    zoom: 0.8;
  }
`;

export const ProfileTechStackTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  & h2 {
    font-size: 1.2rem;
    color: var(--gray6-color);
  }
`;

export const ProfileSkill = styled.div`
  width: 87%;
  border: 3px solid rgb(241, 241, 239);
  border-radius: 8px;
  margin: 25px 0 0;
`;

export const SlickList = styled.div`
  height: 11rem;
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background: rgb(241, 241, 239);

  @media (max-width: 570px) {
    height: 8rem;
    gap: 1rem;
  }

  @media (max-width: 426px) {
    gap: 0;
  }
`;

interface IsHoverd {
  $isHovered: boolean;
}

export const SlickItem = styled.div<IsHoverd>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 20%;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ $isHovered }) => ($isHovered ? "#fff" : "rgba(255, 255, 255, 0)")};
  box-shadow: ${({ $isHovered }) => ($isHovered ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none")};
  cursor: pointer;

  & p {
    color: var(--gray6-color);
    font-size: 12px;
    margin-top: 10px;
  }

  & img {
    width: 50%;
  }

  @media (max-width: 570px) {
    & img {
      width: 45%;
    }
  }
`;

export const ProfileSkillDetail = styled.div`
  max-width: 530px;
  width: 100%;
  margin: 1rem 35px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  transition: 270ms;
`;

export const DetailLi = styled.li`
  font-size: 13px;
  line-height: 1.5;
  list-style: outside;
  color: #8f8f8f;
  margin: 0 0 0.625rem 1.5rem;
`;
