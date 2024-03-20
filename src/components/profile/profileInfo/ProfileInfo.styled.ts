import styled from "styled-components";

export const ProfileInfoSection = styled.section`
  max-width: 600px;
  flex: 0.5;
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
    line-height: 0.6;
  }
`;

export const ProfileTechStack = styled.div`
  width: 100%;
`;

export const ProfileTechStackTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  & h2 {
    font-size: 1.2rem;
    color: var(--gray6-color);
  }

  & span {
    line-height: normal;
    background: rgba(135, 131, 120, 0.15);
    color: #5757eb;
    border-radius: 4px;
    font-size: 12px;
    padding: 0.3rem 0.7rem;
  }
`;

export const ProfileSkill = styled.div`
  width: 34rem;
  border: 3px solid rgb(241, 241, 239);
  border-radius: 8px;
  margin: 25px 35px;
`;

export const SlickList = styled.div`
  height: 10rem;
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background: rgb(241, 241, 239);
`;

interface IsHoverd {
  $isHovered: boolean;
}

export const SlickItem = styled.div<IsHoverd>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ $isHovered }) => ($isHovered ? "#fff" : "rgba(255, 255, 255, 0)")};
  box-shadow: ${({ $isHovered }) => ($isHovered ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none")};
  cursor: pointer;

  & p {
    color: var(--gray6-color);
    font-size: 12px;
  }

  & img {
    width: 4.5rem;
  }
`;

export const ProfileSkillDetail = styled.div`
  max-width: 530px;
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
