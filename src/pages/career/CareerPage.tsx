import React from "react";
import { CareerTimeline, CareerBox } from "@/components/career";
import * as C from "./CareerPage.styled";

const CareerPage = () => {
  return (
    <C.CareerPageContainer>
      <CareerTimeline />
      <CareerBox title={"test"} duration={"2022~2023"}>
        dasd
      </CareerBox>
    </C.CareerPageContainer>
  );
};

export default CareerPage;
