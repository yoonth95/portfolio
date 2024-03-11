import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectType } from "@/types";
import { darkenColor } from "@/utils/colorChangeUtil";
import * as P from "./ProjectBox.styled";

interface ProjectBoxProps {
  data: ProjectType;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ data }) => {
  const navigator = useNavigate();

  return (
    <P.BoxContainer onClick={() => navigator(data.link)}>
      <P.BoxImgDiv>
        <img src={data.thumbnail} alt="썸네일 이미지" />
      </P.BoxImgDiv>
      <P.BoxInfo>
        <P.BoxTitle>
          <img src={data.icon} alt="아이콘 이미지" />
          <p>{data.text}</p>
        </P.BoxTitle>
        <P.BoxTechList>
          {data.techStack.map((item, index) => (
            <li key={index} style={{ backgroundColor: item[1], color: darkenColor(item[1], 130) }}>
              {item[0]}
            </li>
          ))}
        </P.BoxTechList>
        <P.BoxDate>{data.date}</P.BoxDate>
      </P.BoxInfo>
    </P.BoxContainer>
  );
};

export default ProjectBox;
