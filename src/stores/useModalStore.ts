import { create } from "zustand";

interface useModalStoreType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  projectId: number;
  setProjectId: (projectId: number) => void;
}

const useModalStore = create<useModalStoreType>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
  projectId: 0,
  setProjectId: (projectId) => set(() => ({ projectId: projectId })),
}));

export default useModalStore;
