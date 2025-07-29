import type { ReactNode } from "react";

import { create } from "zustand";

import { Modal } from "@mui/material";

import { SDiv } from "./SDiv";
import { buildStyles, type SStyleProps } from "./STheme";

interface SModalItem {
	view: ReactNode;
	styles?: SStyleProps;
	strict?: boolean;
	onClose?: () => void;
}

interface SModalStoreProps {
	open: boolean;
	item: SModalItem;
	actions: {
		modalOpen: (item: SModalItem) => void;
		modalClose: () => void;
	};
}

const useSModalStore = create<SModalStoreProps>((set) => ({
	open: false,
	item: { view: null },
	actions: {
		modalOpen: (item: SModalItem) => set({ open: true, item }),
		modalClose: () => set({ open: false, item: { view: null } }),
	},
}));

export const useSModalActions = () => useSModalStore((state) => state.actions);
export const useSModalOpen = () => useSModalStore((state) => state.open);
export const useSModalItem = () => useSModalStore((state) => state.item);

export const SModal = () => {
	const open = useSModalOpen();

	const item = useSModalItem();
	const { view, styles, strict, onClose } = item;

	const { modalClose } = useSModalActions();

	const handleClose = () => {
		onClose?.();
		modalClose();
	};

	return (
		<Modal
			className={buildStyles("s-modal-root", styles)}
			closeAfterTransition={false}
			open={open}
			onClose={() => {
				if (strict) {
					return;
				}
				handleClose();
			}}
		>
			<SDiv
				styles={[
					"absolute",
					"top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
					"bg-white",
				]}
			>
				{view}
			</SDiv>
		</Modal>
	);
};
