import React from "react";
import { CareerDataType } from "@/types/CareerInfoType";
import * as C from "./CareerEdu.styled";

interface CareerEduProps {
  data: CareerDataType;
}

const CareerEdu: React.FC<CareerEduProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <C.EduTitle>{data.title}</C.EduTitle>
      <C.EduSubTitle>{`${data.major} / ${data.minor}`}</C.EduSubTitle>
      <C.EduSubTitle>{`${data.score}`}</C.EduSubTitle>
    </>
  );
};

export default CareerEdu;
