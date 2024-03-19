import React, { useRef } from "react";
import { useImgLazyLoading } from "@/hooks";

interface LazyImageProps {
  src: string;
  alt: string;
  classNames?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, classNames }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  useImgLazyLoading(imgRef); // 이미지에 대한 lazy loading 적용

  return <img className={classNames} ref={imgRef} data-src={src} alt={alt} />;
};

export default LazyImage;
