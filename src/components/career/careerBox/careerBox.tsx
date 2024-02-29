import React from "react";
import * as C from "./careerBox.styled";

interface CareerBoxProps {
  title: string;
  duration: string;
  children: React.ReactNode;
}

const CareerBox: React.FC<CareerBoxProps> = ({ title, duration, children }) => {
  return <div>{children}</div>;
};

export default CareerBox;
