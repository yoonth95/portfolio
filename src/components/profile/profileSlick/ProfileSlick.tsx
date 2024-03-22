import { forwardRef } from "react";
import Slider, { Settings } from "react-slick";
import { SlickProps } from "@/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./ProfileSlick.styled";

const ProfileSlick = forwardRef<Slider, SlickProps>(({ slickSetting, children }, ref) => {
  const settings: Settings = {
    lazyLoad: "anticipated",
    ...slickSetting,
  };

  return (
    <S.SlickContainer>
      <Slider ref={ref} {...settings}>
        {children}
      </Slider>
    </S.SlickContainer>
  );
});

export default ProfileSlick;
