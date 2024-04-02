import { useEffect } from "react";

interface useResizeProps {
  maxWidth: number;
  setZoom?: React.Dispatch<React.SetStateAction<number>>;
  setIsResizeScreen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const useResize = ({ maxWidth, setZoom, setIsResizeScreen }: useResizeProps) => {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newZoom = width < maxWidth ? width / maxWidth : 1;
      const isResize = width < maxWidth;

      setZoom && setZoom(newZoom);
      setIsResizeScreen && setIsResizeScreen((prev) => (prev && isResize) || isResize);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth, setZoom, setIsResizeScreen]);
};

export default useResize;
