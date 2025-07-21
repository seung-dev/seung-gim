import type { ReactNode } from "react";

import { create } from "zustand";

import {
	Dialog,
	DialogActions,
	DialogContent,
	type DialogProps,
	DialogTitle,
} from "@mui/material";

import { SButton } from "./SButton";
import { SDiv } from "./SDiv";
import { build_class, type SClassProps } from "./SStyles";

export interface SAlertItemProps {
	title?: string;
	contents: ReactNode;
	strict?: boolean;
	actions?: {
		label: string;
		position?: "left" | "right";
		action?: () => void;
	}[];
}

interface SAlertProps {
	open: boolean;
	item: SAlertItemProps;
}

interface SAlertStoreProps extends SAlertProps {
	actions: {
		alert_open: (item: SAlertItemProps) => void;
		alert_close: () => void;
	};
}

const useSAlertStore = create<SAlertStoreProps>()((set) => ({
	open: false,
	item: {
		contents: "",
	},
	actions: {
		alert_open: (item: SAlertItemProps) => set({ open: true, item }),
		alert_close: () => set({ open: false }),
	},
}));

export const useSAlertActions = () => useSAlertStore((state) => state.actions);
export const useSAlertOpen = () => useSAlertStore((state) => state.open);
export const useSAlertItem = () => useSAlertStore((state) => state.item);

interface SDialogProps
	extends Omit<
		DialogProps,
		"open" | "onClose" | "closeAfterTransition" | "title" | "children" | "content"
	> {
	styles?: SClassProps[];
}

export const SDialog = (args: SDialogProps) => {
	const { styles, className, ...misc } = args;

	const open = useSAlertOpen();

	const { title, contents, actions } = useSAlertItem();

	const { alert_close } = useSAlertActions();

	return (
		<Dialog
			className={build_class("s-alert-root", className, styles)}
			closeAfterTransition
			open={open}
			onClose={alert_close}
			{...misc}
		>
			{title && <DialogTitle>{title}</DialogTitle>}
			<DialogContent>{contents}</DialogContent>
			<DialogActions>
				<SDiv styles={["flex", "flex-row", "items-center", "justify-between"]}>
					<SDiv>
						{actions
							?.filter(({ position = "left" }) => position === "left")
							.map(({ label }, i) => (
								<SButton
									key={`alert-action-left-${i}`}
									label={label}
								/>
							))}
					</SDiv>
					<SDiv>
						{actions
							?.filter(({ position = "right" }) => position === "right")
							.map(({ label }, i) => (
								<SButton
									key={`alert-action-right-${i}`}
									label={label}
								/>
							))}
					</SDiv>
				</SDiv>
			</DialogActions>
		</Dialog>
	);
};
