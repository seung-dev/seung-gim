import { Menu, MenuItem, type MenuItemProps, type MenuProps } from "@mui/material";

import { buildStyles, type SStyleProps } from "./STheme";

export interface SMenuProps extends MenuProps {
	styles?: SStyleProps;
}

export const SMenu = (args: SMenuProps) => {
	const { styles, className, ...misc } = args;

	return (
		<Menu
			className={buildStyles("s-menu-root", styles, className)}
			{...misc}
		/>
	);
};

interface SMenuItemProps extends MenuItemProps {
	styles?: SStyleProps;
}

export const SMenuItem = (args: SMenuItemProps) => {
	const { styles, className, ...misc } = args;

	return (
		<MenuItem
			className={buildStyles("s-menu-root", styles, className)}
			{...misc}
		/>
	);
};
