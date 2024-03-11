import React, { useRef } from "react";
import { useImgLazyLoading } from "@/hooks";

interface LazyImageProps {
  [key: string]: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  useImgLazyLoading(imgRef); // 이미지에 대한 lazy loading 적용

  return <img ref={imgRef} data-src={src} alt={alt} />;
};

export default LazyImage;
