import { useState, useEffect } from "react";

const useResize = (maxWidth: number) => {
  const [zoom, setZoom] = useState(1);
  const [isResizeScreen, setIsResizeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newZoom = width < maxWidth ? width / maxWidth : 1;
      const isResize = width < maxWidth;

      setZoom(newZoom);
      setIsResizeScreen(isResize);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth]);

  return { zoom, isResizeScreen };
};

export default useResize;
