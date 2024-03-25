import React from "react";
import { CareerDataType } from "@/types/CareerInfoType";

interface CareerEduProps {
  data: CareerDataType;
}

const CareerEdu: React.FC<CareerEduProps> = ({ data }) => {
  return (
    <>
      <h2>{data.title}</h2>
      <h3>{`${data.major} / ${data.minor}`}</h3>
      <h3>{`${data.score}`}</h3>
    </>
  );
};

export default CareerEdu;
