import type { ReactNode } from "react";

import { X } from "lucide-react";
import { create } from "zustand";

import { Drawer } from "@mui/material";

import { SButtonIcon } from "./SButtonIcon";
import { SDiv } from "./SDiv";
import { SDivider } from "./SDivider";
import { type SStyleProps } from "./STheme";

interface SDrawItem {
	view: ReactNode;
	styles?: SStyleProps;
	anchor?: "left" | "right" | "top" | "bottom";
	strict?: boolean;
	onClose?: () => void;
}

interface SDrawerStoreProps {
	open: boolean;
	item: SDrawItem;
	actions: {
		drawerOpen: (item: SDrawItem) => void;
		drawerClose: () => void;
	};
}

const useSDrawerStore = create<SDrawerStoreProps>((set) => ({
	open: false,
	item: { view: null },
	actions: {
		drawerOpen: (item: SDrawItem) => set({ open: true, item }),
		drawerClose: () => set({ open: false, item: { view: null } }),
	},
}));

export const useSDrawerActions = () => useSDrawerStore((state) => state.actions);
export const useSDrawerOpen = () => useSDrawerStore((state) => state.open);
export const useSDrawerItem = () => useSDrawerStore((state) => state.item);

export const SDrawer = () => {
	const item = useSDrawerItem();
	const { view, styles, anchor = "right", strict, onClose } = item;

	const open = useSDrawerOpen();

	const { drawerClose } = useSDrawerActions();

	const handleClose = () => {
		onClose?.();
		drawerClose();
	};

	return (
		<Drawer
			className="s-drawer-root"
			closeAfterTransition={false}
			anchor={anchor}
			open={open}
			onClose={() => {
				if (strict) {
					return;
				}
				handleClose();
			}}
		>
			<SDiv styles={["min-w-[32rem]", styles]}>
				<SDiv
					className="s-drawer-header"
					styles={["s-height-header", "px-4 flex flex-row items-center"]}
				>
					<SButtonIcon
						Icon={X}
						onClick={handleClose}
					/>
				</SDiv>
				<SDivider />
				<div className="s-drawer-body">{view}</div>
			</SDiv>
		</Drawer>
	);
};
