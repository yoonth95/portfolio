import { useEffect } from "react";

const useScrollToElementTop = (dependency: string | number) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependency]);
};

export default useScrollToElementTop;
