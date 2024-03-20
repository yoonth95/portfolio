import { create } from "zustand";

interface useSidebarStoreType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleSidebar: boolean;
  setToggleSidebar: (isToggle: boolean) => void;
}

const useSidebarStore = create<useSidebarStoreType>((set) => ({
  isOpen: true,
  setIsOpen: (value) => set(() => ({ isOpen: value })),
  toggleSidebar: true,
  setToggleSidebar: (isToggle) => set(() => ({ toggleSidebar: isToggle })),
}));

export default useSidebarStore;
