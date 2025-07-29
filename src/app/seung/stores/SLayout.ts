import { create } from "zustand";

export type SLayoutSidebar = "expanded" | "collapsed" | "closed";

interface SLayoutProps {
	sidebar?: SLayoutSidebar;
}

interface SLayoutStoreProps extends SLayoutProps {
	actions: {
		sidebarExpand: () => void;
		sidebarCollapse: () => void;
		sidebarClose: () => void;
	};
}

const useSLayoutStore = create<SLayoutStoreProps>()((set) => ({
	sidebar: "expanded",
	actions: {
		sidebarExpand: () => set({ sidebar: "expanded" }),
		sidebarCollapse: () => set({ sidebar: "collapsed" }),
		sidebarClose: () => set({ sidebar: "closed" }),
	},
}));

export const useSLayoutActions = () => useSLayoutStore((state) => state.actions);
export const useSSidebar = () => useSLayoutStore((state) => state.sidebar);
