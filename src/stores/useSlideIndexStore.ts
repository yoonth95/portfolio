import { create } from "zustand";

interface useSlideIndexStoreType {
  slideIndex: number;
  setSlideIndex: (index: number) => void;
}
const useSlideIndexStore = create<useSlideIndexStoreType>((set) => ({
  slideIndex: 0,
  setSlideIndex: (index) => set(() => ({ slideIndex: index })),
}));

export default useSlideIndexStore;
