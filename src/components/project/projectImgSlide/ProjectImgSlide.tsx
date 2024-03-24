import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as PIS from "./ProjectImgSlide.styled";

interface ProjectImgSlideProps {
  children: React.ReactNode;
}

const ProjectImgSlide: React.FC<ProjectImgSlideProps> = ({ children }) => {
  const settings: Settings = {
    lazyLoad: "anticipated",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <PIS.SlideContainer>
      <Slider {...settings}>{children}</Slider>
    </PIS.SlideContainer>
  );
};

export default ProjectImgSlide;
