import React from "react";
import * as C from "./CareerBox.styled";

interface CareerBoxProps {
  boxTitle: string;
  flexDirection: string;
  children: React.ReactNode;
}

const CareerBox: React.FC<CareerBoxProps> = ({ boxTitle, flexDirection, children }) => {
  return (
    <C.CareerBoxSection $flexDirection={flexDirection}>
      <C.CareerBoxLeft>
        <h2>{boxTitle}</h2>
      </C.CareerBoxLeft>
      {children}
    </C.CareerBoxSection>
  );
};

export default CareerBox;
