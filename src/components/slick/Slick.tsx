import React from "react";
import Slider from "react-slick";
import { SlickProps } from "@/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Slick.styled";

const Slick: React.FC<SlickProps> = ({ slickSetting, children }) => {
  return (
    <S.SlickContainer>
      <Slider {...slickSetting}>{children}</Slider>
    </S.SlickContainer>
  );
};

export default Slick;
