import React from "react";
import { useModalStore } from "@/stores";
import { LazyImage } from "@/components/common";
import { ProjectListType } from "@/types";
import { darkenColor } from "@/utils/colorChangeUtil";
import * as P from "./ProjectBox.styled";

interface ProjectBoxProps {
  data: ProjectListType;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ data }) => {
  const { setIsOpen, setProject } = useModalStore();
  const openModal = (projectName: string) => {
    setProject(projectName);
    setIsOpen(true);
  };

  return (
    <P.BoxContainer onClick={() => openModal(data.projectName)}>
      <P.BoxImgDiv>
        <LazyImage src={data.thumbnail} alt={"썸네일 이미지"} />
      </P.BoxImgDiv>
      <P.BoxInfo>
        <P.BoxTitle>
          <img src={data.icon} alt={"아이콘 이미지"} />
          <p>{data.title}</p>
        </P.BoxTitle>
        <ul className="techListUl">
          {data.techStack.map((item, index) => (
            <li key={index} className="techListLi" style={{ backgroundColor: item[1], color: darkenColor(item[1], 130) }}>
              {item[0]}
            </li>
          ))}
        </ul>
        <P.BoxDate>{data.date}</P.BoxDate>
      </P.BoxInfo>
    </P.BoxContainer>
  );
};

export default ProjectBox;
