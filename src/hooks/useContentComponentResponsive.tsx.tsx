import { RefObject, useEffect } from "react";
import { useProjectNavStore } from "@/stores";

const useContentComponentResponsive = (ref: RefObject<HTMLElement>, dependency: string) => {
  const { setIsOpen } = useProjectNavStore();

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const windowWidth = ref.current.offsetWidth;
        windowWidth <= 1300 ? setIsOpen(false) : setIsOpen(true);
      }
    };
    if (dependency.includes("project")) handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen, dependency, ref]);
};

export default useContentComponentResponsive;
