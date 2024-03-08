import React from "react";
import { CareerDataType } from "@/types";
import * as C from "./CareerExp.styled";

interface CareerExpProps {
  data: CareerDataType;
}

const CareerExp: React.FC<CareerExpProps> = ({ data }) => {
  return (
    <>
      <h2>{data.title}</h2>
      <h3>{`${data.subTitle}`}</h3>
      <ul className="techStackList">
        {data.techStack?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {data.description?.map((item, index) => (
        <C.DescriptionList key={index}>
          <div className="quotation">
            <strong>{item.title}</strong>
            <span>{item.duration}</span>
          </div>

          <C.DescriptionLink href={item.link} target="_blank">
            {item.link}
          </C.DescriptionLink>
          <C.DescriptionUl>
            {item.works.map((work, idx) => (
              <li key={idx}>{work}</li>
            ))}
          </C.DescriptionUl>
        </C.DescriptionList>
      ))}
    </>
  );
};

export default CareerExp;
