import React from "react";
import { LazyImage } from "@/components/common";
import { github } from "@/assets/images";
import * as A from "./AwardBox.styled";

interface AwardBoxProps {
  data: {
    content: string;
    organization: string;
    date: string;
    link?: string;
  }[];
  type: string;
}

const AwardBox: React.FC<AwardBoxProps> = ({ data, type }) => {
  return (
    <>
      {data.map((item, index) => (
        <A.AwardBoxContainer key={index} $type={type}>
          <A.AwardBoxDate>{item.date}</A.AwardBoxDate>
          <A.AwardBoxInfo>
            <A.AwardInfoText>
              <h3>{item.organization}</h3>
              <p>{item.content}</p>
            </A.AwardInfoText>
            <A.AwardInfoLink className=".iconHover" $isLink={item.link ? true : false}>
              <a href={item.link} target="_blank">
                <LazyImage classNames="iconHover" src={github} alt={"깃허브이미지"} />
              </a>
            </A.AwardInfoLink>
          </A.AwardBoxInfo>
        </A.AwardBoxContainer>
      ))}
    </>
  );
};

export default AwardBox;
