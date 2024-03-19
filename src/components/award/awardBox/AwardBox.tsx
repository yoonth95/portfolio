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
}

const AwardBox: React.FC<AwardBoxProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <A.AwardBoxContainer key={index}>
          <A.AwardBoxDate>{item.date}</A.AwardBoxDate>
          <A.AwardBoxText>
            <h3>{item.organization}</h3>
            <p>{item.content}</p>
          </A.AwardBoxText>
          <A.AwardLink className=".iconHover" $isLink={item.link ? true : false}>
            <a href={item.link} target="_blank">
              <LazyImage src={github} alt={"깃허브이미지"} />
            </a>
          </A.AwardLink>
        </A.AwardBoxContainer>
      ))}
    </>
  );
};

export default AwardBox;
