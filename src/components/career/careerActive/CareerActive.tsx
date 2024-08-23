import React from "react";
import { CareerDataType } from "@/types";
import * as C from "./CareerActive.styled";

interface CareerActiveProps {
  data: CareerDataType;
}

const formatText = (text: string): JSX.Element => {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

const CareerActive: React.FC<CareerActiveProps> = ({ data }) => {
  return (
    <>
      <h2>{data.title}</h2>
      <ul className="techStackList">
        {data.techStack?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <C.ActiveText>{formatText(data.summary)}</C.ActiveText>
    </>
  );
};

export default CareerActive;
