import { create } from "zustand";

interface useModalStoreType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  dataName: string;
  setDataName: (dataName: string) => void;
}

const useModalStore = create<useModalStoreType>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
  dataName: "",
  setDataName: (dataName) => set(() => ({ dataName: dataName })),
}));

export default useModalStore;
