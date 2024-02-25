interface SlickSetting {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
}

export interface SlickProps {
  slickSetting?: SlickSetting;
  children: React.ReactNode;
}
