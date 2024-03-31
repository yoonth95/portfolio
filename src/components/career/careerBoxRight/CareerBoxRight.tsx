import React from "react";
import { CareerDataType } from "@/types/CareerInfoType";
import { diffMonth, formatDuration } from "@/utils/dateUtil";
import * as C from "./CareerBoxRight.styled";

interface CareerBoxActiveProps {
  careerData: CareerDataType[];
  InfoComponent: React.ComponentType<{ data: CareerDataType }>;
}

const CareerBoxActive: React.FC<CareerBoxActiveProps> = ({ careerData, InfoComponent }) => {
  return (
    <C.CareerBoxRightContainer>
      {careerData.map((item, index) => (
        <C.CareerBoxRightArticle key={index}>
          <C.CareerBoxRightPeriod>
            <span>{`${item.start_date} ~ ${item.end_date}`}</span>
            <span>{item.type === "experience" && `(${formatDuration(diffMonth(item.start_date, item.end_date))})`}</span>
          </C.CareerBoxRightPeriod>
          <C.CareerBoxRightInfo>
            <InfoComponent data={item} />
          </C.CareerBoxRightInfo>
        </C.CareerBoxRightArticle>
      ))}
    </C.CareerBoxRightContainer>
  );
};

export default CareerBoxActive;
