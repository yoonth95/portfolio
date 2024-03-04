import React from "react";
import { CareerDataType } from "@/types/CareerInfoType";
import * as C from "./CareerBoxActive.styled";

interface CareerBoxActiveType {
  careerData: CareerDataType[];
}

const CareerBoxActive: React.FC<CareerBoxActiveType> = ({ careerData }) => {
  console.log(careerData);
  return <div></div>;
};

export default CareerBoxActive;
