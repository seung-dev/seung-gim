import { create } from "zustand";

interface SUserProfileProps {
	nickname: string;
	roles: string[];
}

interface SUserProfileStoreProps {
	profile: SUserProfileProps;
	actions: {
		set_profile: (profile: SUserProfileProps) => void;
	};
}

export const SUserProfileStore = create<SUserProfileStoreProps>((set) => ({
	profile: {
		nickname: "anonymous",
		roles: [],
	},
	actions: {
		set_profile: (profile) => set({ profile }),
	},
}));

export const useSUserProfile = () => SUserProfileStore((state) => state.profile);
export const useSUserProfileActions = () => SUserProfileStore((state) => state.actions);
