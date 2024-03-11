import React from "react";
import Slider, { Settings } from "react-slick";
import { SlickProps } from "@/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Slick.styled";

const Slick: React.FC<SlickProps> = ({ slickSetting, children }) => {
  const settings: Settings = {
    lazyLoad: "anticipated",
    ...slickSetting,
  };

  return (
    <S.SlickContainer>
      <Slider {...settings}>{children}</Slider>
    </S.SlickContainer>
  );
};

export default Slick;
