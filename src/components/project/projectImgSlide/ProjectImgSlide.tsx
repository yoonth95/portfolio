import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as PIS from "./ProjectImgSlide.styled";

interface ProjectImgSlideProps {
  aspectRatio: string;
  children: React.ReactNode;
}

const ProjectImgSlide: React.FC<ProjectImgSlideProps> = ({ aspectRatio, children }) => {
  const settings: Settings = {
    dots: true,
    lazyLoad: "anticipated",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <PIS.SlideContainer $aspectRatio={aspectRatio}>
      <Slider {...settings}>{children}</Slider>
    </PIS.SlideContainer>
  );
};

export default ProjectImgSlide;
