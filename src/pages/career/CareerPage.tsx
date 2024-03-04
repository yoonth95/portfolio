import React from "react";
import { CareerTimeline, CareerBox, CareerBoxActive } from "@/components/career";
import { careerYear, careerData } from "@/data/careerInfoList";
import * as C from "./CareerPage.styled";

const CareerPage = () => {
  return (
    <C.CareerPageContainer>
      <CareerBox boxTitle="타임라인">
        <CareerTimeline careerYear={careerYear} careerData={careerData} />
      </CareerBox>
      <CareerBox boxTitle="학력">
        <CareerBoxActive careerData={careerData.filter((item) => item.type === "education")} />
      </CareerBox>
      <CareerBox boxTitle="경력">
        <CareerBoxActive careerData={careerData.filter((item) => item.type === "experience")} />
      </CareerBox>
      <CareerBox boxTitle="교육이력">
        <CareerBoxActive careerData={careerData.filter((item) => item.type === "active")} />
      </CareerBox>
    </C.CareerPageContainer>
  );
};

export default CareerPage;
