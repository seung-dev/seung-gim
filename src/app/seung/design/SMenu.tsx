import { Menu, MenuItem, type MenuItemProps, type MenuProps } from "@mui/material";

import { build_class, type SClassProps } from "./SStyles";

export interface SMenuProps extends MenuProps {
	styles?: SClassProps[];
}

export const SMenu = (args: SMenuProps) => {
	const { styles = [], className, ...misc } = args;

	return (
		<Menu
			className={build_class("s-menu-root", className, styles)}
			{...misc}
		/>
	);
};

interface SMenuItemProps extends MenuItemProps {
	styles?: SClassProps[];
}

export const SMenuItem = (args: SMenuItemProps) => {
	const { styles = [], className, ...misc } = args;

	return (
		<MenuItem
			className={build_class("s-menu-root", className, styles)}
			{...misc}
		/>
	);
};
