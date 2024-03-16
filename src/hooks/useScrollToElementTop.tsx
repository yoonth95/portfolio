import { useEffect, RefObject } from "react";

const useScrollToElementTop = (ref: RefObject<HTMLElement>, dependency: string | number) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [dependency, ref]);
};

export default useScrollToElementTop;
