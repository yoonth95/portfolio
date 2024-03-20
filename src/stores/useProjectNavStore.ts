import { create } from "zustand";

interface useProjectNavStoreType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const useProjectNavStore = create<useProjectNavStoreType>((set) => ({
  isOpen: true,
  setIsOpen: (value) => set(() => ({ isOpen: value })),
}));

export default useProjectNavStore;
