import { create } from "zustand";

interface useSidebarStoreType {
  toggleSidebar: boolean;
  setToggleSidebar: (isToggle: boolean) => void;
}

const useSidebarStore = create<useSidebarStoreType>((set) => ({
  toggleSidebar: false,
  setToggleSidebar: (isToggle) => set(() => ({ toggleSidebar: isToggle })),
}));

export default useSidebarStore;
