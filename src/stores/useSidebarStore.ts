import { create } from "zustand";

interface useSidebarStoreType {
  toggleSidebar: boolean;
  setToggleSidebar: () => void;
}

const useSidebarStore = create<useSidebarStoreType>((set) => ({
  toggleSidebar: true,
  setToggleSidebar: () => set((state) => ({ toggleSidebar: !state.toggleSidebar })),
}));

export default useSidebarStore;
