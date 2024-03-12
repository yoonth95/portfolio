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
  const { setIsOpen, setDataName } = useModalStore();
  const openModal = (name: string) => {
    setDataName(name);
    setIsOpen(true);
  };

  return (
    <P.BoxContainer onClick={() => openModal(data.name)}>
      <P.BoxImgDiv>
        <LazyImage src={data.thumbnail} alt={"썸네일 이미지"} />
      </P.BoxImgDiv>
      <P.BoxInfo>
        <P.BoxTitle>
          <img src={data.icon} alt={"아이콘 이미지"} />
          <p>{data.title}</p>
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
