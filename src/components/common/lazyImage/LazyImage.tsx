import React, { CSSProperties, useRef } from "react";
import { useImgLazyLoading } from "@/hooks";

interface LazyImageProps {
  src: string;
  alt: string;
  classNames?: string;
  style?: CSSProperties;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, classNames, style }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  useImgLazyLoading(imgRef); // 이미지에 대한 lazy loading 적용

  return <img className={classNames} ref={imgRef} data-src={src} alt={alt} style={style} />;
};

export default LazyImage;
