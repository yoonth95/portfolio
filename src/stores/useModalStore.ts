import { create } from "zustand";

interface useModalStoreType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  projectName: string;
  setProject: (projectName: string) => void;
}

const useModalStore = create<useModalStoreType>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
  projectName: "",
  setProject: (projectName) => set(() => ({ projectName: projectName })),
}));

export default useModalStore;
