import { Drawer, type DrawerProps } from "@mui/material";

import { build_class, type SClassProps } from "./SStyles";

interface SDrawerProps extends DrawerProps {
	styles?: SClassProps[];
}

export const SDrawer = (args: SDrawerProps) => {
	const { styles, className, ...misc } = args;

	return (
		<Drawer
			className={build_class("s-drawer-root", className, styles)}
			{...misc}
		/>
	);
};
