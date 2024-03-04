import React from "react";
import * as C from "./CareerBox.styled";

interface CareerBoxProps {
  boxTitle: string;
  children: React.ReactNode;
}

const CareerBox: React.FC<CareerBoxProps> = ({ boxTitle, children }) => {
  return (
    <C.CareerBoxSection>
      <C.CareerBoxLeft>
        <h4>{boxTitle}</h4>
      </C.CareerBoxLeft>
      <C.CareerBoxRight>{children}</C.CareerBoxRight>
    </C.CareerBoxSection>
  );
};

export default CareerBox;
