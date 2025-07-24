import { create } from "zustand";

export type SLayoutSidebar = "expanded" | "collapsed" | "closed";

interface SLayoutProps {
	sidebar?: SLayoutSidebar;
}

interface SLayoutStoreProps extends SLayoutProps {
	actions: {
		sidebar_expand: () => void;
		sidebar_collapse: () => void;
		sidebar_close: () => void;
	};
}

export const useSLayoutStore = create<SLayoutStoreProps>()((set) => ({
	sidebar: "expanded",
	actions: {
		sidebar_expand: () => set({ sidebar: "expanded" }),
		sidebar_collapse: () => set({ sidebar: "collapsed" }),
		sidebar_close: () => set({ sidebar: "closed" }),
	},
}));

export const useSLayoutActions = () => useSLayoutStore((state) => state.actions);
export const useSSidebar = () => useSLayoutStore((state) => state.sidebar);
